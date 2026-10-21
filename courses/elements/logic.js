"use strict";
/* ---------- Logic data ---------- */
const TV=b=>b?"true":"false";
const cap=s=>/^[a-z] /.test(s)?s:s.charAt(0).toUpperCase()+s.slice(1);
const mc=(correct,wrongs)=>{const options=shuffle([correct,...wrongs]);return {options,a:options.indexOf(correct)}};
const R_AND="An “and” is true only when both sides are true.",R_OR="An “or” is true when at least one side is true.",R_IF="A conditional is false only when its left side is true and its right side is false.",R_NOT="“Not” flips the value.";
const TFT=[
 [["P","Q"],"P ∧ Q",v=>v.P&&v.Q,[],R_AND],
 [["P","Q"],"P ∨ Q",v=>v.P||v.Q,[],R_OR],
 [["P","Q"],"P → Q",v=>!v.P||v.Q,[],R_IF],
 [["P","Q"],"Q → P",v=>!v.Q||v.P,[],R_IF],
 [["P","Q"],"P ↔ Q",v=>v.P===v.Q,[],"A biconditional is true when both sides have the same value."],
 [["P","Q"],"¬P ∨ Q",v=>!v.P||v.Q,[["¬P",v=>!v.P]],R_OR],
 [["P","Q"],"¬(P ∧ Q)",v=>!(v.P&&v.Q),[["P ∧ Q",v=>v.P&&v.Q]],R_NOT],
 [["P","Q"],"¬(P ∨ Q)",v=>!(v.P||v.Q),[["P ∨ Q",v=>v.P||v.Q]],R_NOT],
 [["P","Q"],"¬P ∧ ¬Q",v=>!v.P&&!v.Q,[["¬P",v=>!v.P],["¬Q",v=>!v.Q]],R_AND],
 [["P","Q","R"],"(P ∧ Q) → R",v=>!(v.P&&v.Q)||v.R,[["P ∧ Q",v=>v.P&&v.Q]],R_IF],
 [["P","Q","R"],"P ∨ (Q ∧ R)",v=>v.P||(v.Q&&v.R),[["Q ∧ R",v=>v.Q&&v.R]],R_OR],
 [["P","Q","R"],"(P → Q) ∧ R",v=>(!v.P||v.Q)&&v.R,[["P → Q",v=>!v.P||v.Q]],R_AND],
 [["P","Q","R"],"¬P → (Q ∨ R)",v=>v.P||v.Q||v.R,[["¬P",v=>!v.P],["Q ∨ R",v=>v.Q||v.R]],R_IF]
];
const TAUT=[
 ["P ∨ ¬P",(P,Q)=>P||!P,"This is the law of excluded middle."],
 ["P → P",(P,Q)=>!P||P,""],
 ["(P ∧ Q) → P",(P,Q)=>!(P&&Q)||P,"If both hold, the first certainly does."],
 ["P → (P ∧ Q)",(P,Q)=>!P||(P&&Q),""],
 ["¬(P ∧ ¬P)",(P,Q)=>!(P&&!P),"This is the law of non-contradiction."],
 ["(P → Q) ∨ (Q → P)",(P,Q)=>(!P||Q)||(!Q||P),"Surprising but true: one of the two conditionals always holds, which shows how weak the material conditional is."],
 ["P ∨ Q",(P,Q)=>P||Q,""],
 ["(P → Q) → (¬Q → ¬P)",(P,Q)=>!(!P||Q)||(Q||!P),"A conditional always implies its contrapositive."],
 ["(P → Q) → (Q → P)",(P,Q)=>!(!P||Q)||(!Q||P),""],
 ["P → (Q → P)",(P,Q)=>!P||(!Q||P),"If P is true, anything implies it."]
];
const EQUIV=[
 ["¬(P ∧ Q)","¬P ∨ ¬Q",["¬P ∧ ¬Q","P ∨ Q","¬P ∧ Q"],"De Morgan: “not both” means at least one fails, so ¬P ∨ ¬Q."],
 ["¬(P ∨ Q)","¬P ∧ ¬Q",["¬P ∨ ¬Q","P ∧ Q","¬P ∨ Q"],"De Morgan: “neither” means both fail, so ¬P ∧ ¬Q."],
 ["P → Q","¬Q → ¬P",["Q → P","¬P → ¬Q","P ∧ Q"],"The contrapositive ¬Q → ¬P is equivalent. The converse and inverse are not."],
 ["P → Q","¬P ∨ Q",["P ∨ ¬Q","¬P ∧ Q","Q → P"],"P → Q fails only when P is true and Q false, which is exactly when ¬P ∨ Q fails."],
 ["¬(P → Q)","P ∧ ¬Q",["¬P → ¬Q","¬P ∧ Q","¬P ∨ ¬Q"],"A conditional is false only when P is true and Q is false: P ∧ ¬Q."],
 ["¬¬P","P",["¬P","P ∧ ¬P","P ∨ ¬P"],"Two negations cancel."]
];
const CONDS=[
 {p:"Ana is in Paris",q:"Ana is in France",np:"Ana is not in Paris",nq:"Ana is not in France"},
 {p:"the shape is a square",q:"the shape has four sides",np:"the shape is not a square",nq:"the shape does not have four sides"},
 {p:"n is divisible by 4",q:"n is even",np:"n is not divisible by 4",nq:"n is odd"},
 {p:"it is raining",q:"the street is wet",np:"it is not raining",nq:"the street is not wet"},
 {p:"the battery is dead",q:"the car won’t start",np:"the battery isn’t dead",nq:"the car starts"}
];
const FORMS=[
 c=>({prem:[`If ${c.p}, then ${c.q}.`,`${cap(c.p)}.`],concl:`${c.q}.`,valid:true,why:"Valid: this is modus ponens. Whenever both premises are true, the conclusion must be."}),
 c=>({prem:[`If ${c.p}, then ${c.q}.`,`${cap(c.nq)}.`],concl:`${c.np}.`,valid:true,why:"Valid: this is modus tollens. If P were true, Q would be true, and it isn’t."}),
 c=>({prem:[`If ${c.p}, then ${c.q}.`,`${cap(c.q)}.`],concl:`${c.p}.`,valid:false,why:"Invalid: this is affirming the consequent. Q could be true for some other reason while P is false."}),
 c=>({prem:[`If ${c.p}, then ${c.q}.`,`${cap(c.np)}.`],concl:`${c.nq}.`,valid:false,why:"Invalid: this is denying the antecedent. The conditional says nothing about what happens when P is false."}),
 c=>({prem:[`${cap(c.p)} or ${c.q}.`,`${cap(c.np)}.`],concl:`${c.q}.`,valid:true,why:"Valid: this is disjunctive syllogism. At least one holds, and it isn’t the first."}),
 c=>({prem:[`${cap(c.p)} or ${c.q}.`,`${cap(c.p)}.`],concl:`${c.nq}.`,valid:false,why:"Invalid: logical “or” is inclusive. Both can be true, so learning one tells you nothing about the other."})
];
const NUMCLAIMS=[
 ["If n is divisible by 6, then n is divisible by 3.",true,"Yes: 6 = 2 × 3, so every multiple of 6 is a multiple of 3."],
 ["If n is divisible by 3, then n is divisible by 6.",false,"No: 9 is divisible by 3 but not by 6. This is the converse of a true statement."],
 ["If n is prime, then n is odd.",false,"No: 2 is prime and even."],
 ["If n is odd, then n is prime.",false,"No: 9 = 3 × 3 is odd and not prime."],
 ["If n² is even, then n is even.",true,"Yes. By contrapositive: if n is odd, n² = odd × odd is odd."],
 ["If n is divisible by 4, then n is divisible by 8.",false,"No: 4 itself is a counterexample."],
 ["If n is divisible by 8, then n is divisible by 4.",true,"Yes: 8 = 2 × 4."],
 ["If n is divisible by 5, then n ends in 5.",false,"No: 10 is divisible by 5 and ends in 0."],
 ["If n ends in 5, then n is divisible by 5.",true,"Yes: n is a multiple of 10 plus 5, and both parts are multiples of 5."],
 ["If n > 3, then n² > 9.",true,"Yes: for whole numbers, n ≥ 4 gives n² ≥ 16."]
];
const NEGS=[
 ["All swans are white.","Some swan is not white.",["No swans are white.","Some swans are white.","All swans are black."]],
 ["Some prime number is even.","No prime number is even.",["Some prime number is odd.","All prime numbers are even.","Some prime number is not even."]],
 ["Every student passed the exam.","At least one student did not pass the exam.",["No student passed the exam.","Some students passed the exam.","Every student failed the exam."]],
 ["There is a number larger than 1,000,000.","Every number is at most 1,000,000.",["There is a number smaller than 1,000,000.","No number is smaller than 1,000,000.","Every number is larger than 1,000,000."]],
 ["Nobody finished the race.","Somebody finished the race.",["Everybody finished the race.","Somebody did not finish the race.","Nobody started the race."]]
];
const CONJ=[
 ["Every odd number greater than 1 is prime.",9,"3, 5 and 7 are prime, but 9 = 3 × 3."],
 ["Every number ending in 7 is prime.",27,"7 and 17 are prime, but 27 = 3 × 9."],
 ["n² + n + 41 is prime for every whole number n ≥ 0.",40,"It holds for n = 0 through 39. At n = 40 the value is 1,681 = 41². Forty confirming cases proved nothing."],
 ["2ⁿ − 1 is prime whenever n is prime.",11,"It holds for 2, 3, 5 and 7, but 2¹¹ − 1 = 2,047 = 23 × 89."],
 ["n² > n for every positive whole number n.",1,"1² = 1, which is not greater than 1. Check the edges first."],
 ["Every positive multiple of 3 is odd.",6,"3 is odd, but 6 = 2 × 3 is even."]
];
const QORDER=[
 ["Which of these is true about the whole numbers 0, 1, 2, …?","For every number, there is a larger number.",["There is a number larger than every number.","For every number, there is a smaller whole number.","Every number is larger than some other number."],"“For every number there is a larger one” lets the larger number depend on the first. Reversing the order demands one number that beats them all, which doesn’t exist. 0 sinks the other two."],
 ["Which says the same as “everyone has a mother”?","For every person x, there is a person y who is x’s mother.",["There is a person y who is the mother of every person x.","For every person y, there is someone whose mother y is.","There is someone whose mother is every person."],"The mother is chosen after the person, so she can differ for each one. Putting “there is” first claims one universal mother."]
];
const METHODS=[
 ["Assume √2 = a/b in lowest terms, and derive that a and b are both even.","Contradiction","Assume the opposite of what you want and derive an impossibility."],
 ["Show the claim for n = 1, then show that if it holds for n it holds for n + 1.","Induction","A base case plus a step from each case to the next covers every whole number."],
 ["To refute “every odd number is prime,” point to 9.","Counterexample","One case where the claim fails refutes a universal claim."],
 ["Assume n is even, write n = 2k, and show n² = 4k² is even.","Direct proof","Start from the hypothesis and reason straight to the conclusion."],
 ["To show “if n² is even then n is even,” prove “if n is odd then n² is odd.”","Contrapositive","Proving ¬Q → ¬P establishes P → Q, because the two are equivalent."],
 ["Suppose there are finitely many primes; multiply them all and add 1.","Contradiction","The supposition produces a number with no prime factor on the list, which is impossible."]
];
const PARITY=[
 ["The sum of two odd numbers is even.",true,"(2a + 1) + (2b + 1) = 2(a + b + 1), which is even."],
 ["The product of two odd numbers is odd.",true,"(2a + 1)(2b + 1) = 2(2ab + a + b) + 1, which is odd."],
 ["The sum of an odd and an even number is even.",false,"(2a + 1) + 2b = 2(a + b) + 1, which is odd. E.g. 3 + 4 = 7."],
 ["The product of two consecutive whole numbers is even.",true,"One of any two consecutive numbers is even, so the product is."],
 ["The sum of three consecutive whole numbers is divisible by 3.",true,"(n − 1) + n + (n + 1) = 3n."],
 ["The sum of four consecutive whole numbers is divisible by 4.",false,"1 + 2 + 3 + 4 = 10. Starting from n, the sum is 4n + 6, which always leaves remainder 2."],
 ["n² − n is even for every whole number n.",true,"n² − n = n(n − 1), a product of consecutive numbers."]
];
const CORR=[
 ["In summer, ice-cream sales and drownings both rise.","Hot weather increases both swimming and ice-cream eating.",["Eating ice cream causes drowning.","Drownings drive ice-cream sales.","It must be a coincidence."]],
 ["Among schoolchildren, shoe size correlates with reading ability.","Older children have bigger feet and read better.",["Bigger feet improve reading.","Reading makes feet grow.","The measurements must be wrong."]],
 ["Fires attended by more firefighters cause more damage.","Bigger fires bring more firefighters and also do more damage.",["Firefighters cause the damage.","Damage attracts firefighters after the fire.","It must be a coincidence."]],
 ["Towns with more hospitals record more deaths.","Larger towns have both more hospitals and more deaths.",["Hospitals make people die.","Deaths cause hospitals to be built.","It must be a coincidence."]]
];

