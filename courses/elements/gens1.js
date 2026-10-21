"use strict";
/* ---------- Problem generators ---------- */
const GEN={
place:[
()=>{const L=ri(4,5),ds=shuffle([1,2,3,4,5,6,7,8,9]).slice(0,L),n=+ds.join(""),i=ri(0,L-2),d=ds[i],p=L-1-i,w=d*10**p;
 return {q:`In ${fmt(n)}, what is the digit ${d} worth?`,a:w,t:"num",hint:"Count places from the right: ones, tens, hundreds, thousands.",why:`The ${d} is in the ${places[p]} place, so it means ${d} × ${fmt(10**p)} = ${fmt(w)}.`}},
()=>{const a=ri(2,9),b=ri(1,9),c=ri(1,9),n=a*1000+b*10+c;
 return {q:`Write as a numeral: ${a} thousands + ${b} tens + ${c} ones`,a:n,t:"num",hint:"Which place has nothing in it? It still needs a digit.",why:`There are no hundreds, so the hundreds place holds 0: ${fmt(n)}.`}},
()=>{const n=ri(12,999),k=pick([10,100,1000]),z=String(k).length-1;
 return {q:`${fmt(n)} × ${fmt(k)}`,a:n*k,t:"num",hint:`Each digit moves ${z} place${z>1?"s":""} left.`,why:`Multiplying by ${fmt(k)} shifts every digit ${z} place${z>1?"s":""} left, filling with zeros: ${fmt(n*k)}.`}},
()=>{const n=ri(12,999)*10;
 return {q:`How many tens make ${fmt(n)}?`,a:n/10,t:"num",hint:"How many tens are in 3,460? Drop a zero.",why:`${fmt(n)} = ${fmt(n/10)} × 10, so ${fmt(n/10)} tens.`}},
()=>{let n;do{n=ri(1001,9999)}while(n%100===50||n%100===0);const lo=Math.floor(n/100)*100,a=Math.round(n/100)*100,t=Math.floor(n/10)%10;
 return {q:`Round ${fmt(n)} to the nearest hundred.`,a,t:"num",hint:"Which two hundreds does it sit between? Look at the tens digit.",why:`${fmt(n)} lies between ${fmt(lo)} and ${fmt(lo+100)}. The tens digit is ${t}, so it is ${t<5?"less than":"at least"} halfway: ${fmt(a)}.`}}
],
addsub:[
()=>{let a,b;do{a=ri(23,89);b=ri(23,89)}while(a%10+b%10<10);const s1=a+b-b%10;
 return {q:`${a} + ${b}`,a:a+b,t:"num",hint:`Add the tens of ${b} first, then the ones. Or round ${b} up and repay.`,why:`${a} + ${b-b%10} = ${s1}, then + ${b%10} = ${a+b}.`}},
()=>{const a=ri(120,780),k=ri(1,3),r=ri(1,6)*100,b=r-k;
 return {q:`${a} + ${b}`,a:a+b,t:"num",hint:`${b} is ${r} − ${k}.`,why:`${a} + ${r} = ${a+r}, then subtract the extra ${k}: ${a+b}.`}},
()=>{const big=pick([500,600,700,800,900,1000,1200]),k=ri(1,2),b=ri(1,big/100-1)*100-k;
 return {q:`${fmt(big)} − ${b}`,a:big-b,t:"num",hint:`Shift both numbers up by ${k}.`,why:`Adding ${k} to both keeps the distance: ${fmt(big+k)} − ${b+k} = ${fmt(big-b)}.`}},
()=>{const b=ri(101,899);if(b%10===0)return GEN.addsub[3]();const t1=Math.ceil(b/10)*10,t2=Math.ceil(t1/100)*100;const steps=[[b,t1],[t1,t2],[t2,1000]].filter(s=>s[1]>s[0]);
 return {q:`1,000 − ${b}`,a:1000-b,t:"num",hint:`Count up from ${b} to 1,000 in friendly jumps.`,why:`${steps.map(s=>`${fmt(s[0])} → ${fmt(s[1])} is ${s[1]-s[0]}`).join("; ")}. Total ${1000-b}.`}},
()=>{const a=ri(203,899),b=ri(14,89);if(a%10>=b%10)return GEN.addsub[4]();
 return {q:`${a} − ${b}`,a:a-b,t:"num",hint:`Subtract ${b+(10-b%10)} instead, then give back ${10-b%10}.`,why:`${a} − ${b+(10-b%10)} = ${a-b-(10-b%10)}, plus ${10-b%10} back: ${a-b}.`}},
()=>{const m=()=>{const x=ri(11,39);let o=x%10;if(o===0){return m()}return [x,(10-o)+ri(1,4)*10]};const [a,b]=m(),[c,d]=m();
 return {q:`${a} + ${c} + ${b} + ${d}`,a:a+b+c+d,t:"num",hint:"Look for pairs whose ones digits make 10.",why:`Pair them: (${a} + ${b}) + (${c} + ${d}) = ${a+b} + ${c+d} = ${a+b+c+d}.`}}
],
mult:[
()=>{let a;do{a=ri(13,89)}while(a%10===0);const b=ri(3,9),t=a-a%10;
 return {q:`${a} × ${b}`,a:a*b,t:"num",hint:`Split ${a} into ${t} + ${a%10}.`,why:`${t} × ${b} = ${t*b} and ${a%10} × ${b} = ${(a%10)*b}; together ${a*b}.`}},
()=>{const n=ri(6,99)*2;
 return {q:`${n} × 5`,a:n*5,t:"num",hint:"×5 is ×10, then halve.",why:`${n} × 10 = ${fmt(n*10)}, half of that is ${fmt(n*5)}.`}},
()=>{if(Math.random()<.5){const n=ri(12,99);return {q:`${n} × 9`,a:n*9,t:"num",hint:"×9 is ×10 minus one copy.",why:`${n} × 10 = ${n*10}, minus ${n} = ${n*9}.`}}
 const n=ri(12,48);return {q:`${n} × 99`,a:n*99,t:"num",hint:"×99 is ×100 minus one copy.",why:`${n} × 100 = ${fmt(n*100)}, minus ${n} = ${fmt(n*99)}.`}},
()=>{const n=ri(3,40)*4;
 return {q:`${n} × 25`,a:n*25,t:"num",hint:"×25 is ×100, then divide by 4.",why:`${n} ÷ 4 = ${n/4}, and ${n/4} × 100 = ${fmt(n*25)}.`}},
()=>{const a=pick([14,16,18,22,24,28,32]),b=pick([5,15,25,35,45]);
 return {q:`${a} × ${b}`,a:a*b,t:"num",hint:`Halve ${a} and double ${b}.`,why:`${a} × ${b} = ${a/2} × ${b*2} = ${fmt(a*b)}.`}},
()=>{let n;do{n=ri(12,98)}while(n%10===0);
 return {q:`${n} × 11`,a:n*11,t:"num",hint:"×11 is ×10 plus one copy.",why:`${n} × 10 = ${n*10}, plus ${n} = ${fmt(n*11)}.`}},
()=>{const a=ri(11,19),b=ri(11,19);
 return {q:`${a} × ${b}`,a:a*b,t:"num",hint:`Split ${b} into 10 + ${b-10}.`,why:`${a} × 10 = ${a*10} and ${a} × ${b-10} = ${a*(b-10)}; together ${a*b}.`}}
],
div:[
()=>{const d=ri(3,9),q=ri(12,99),n=d*q,big=d*(q-q%10),rest=d*(q%10);
 return {q:`${fmt(n)} ÷ ${d}`,a:q,t:"num",hint:`Split ${n} into a multiple of ${d*10} plus what’s left.`,why:rest?`${n} = ${big} + ${rest}. ${big} ÷ ${d} = ${q-q%10} and ${rest} ÷ ${d} = ${q%10}, so ${q}.`:`${d} × ${q} = ${n}, so ${q}.`}},
()=>{const yes=Math.random()<.5;let n;do{n=ri(1000,9999)}while((n%9===0)!==yes);const s=digitSum(n);
 return {q:`Is ${fmt(n)} divisible by 9?`,a:yes,t:"yn",hint:"Add the digits.",why:`Digit sum ${String(n).split("").join("+")} = ${s}, which ${s%9===0?"is":"is not"} a multiple of 9. So ${yes?"yes":"no"}.`}},
()=>{const yes=Math.random()<.5;let n;do{n=ri(100,9999)}while((n%3===0)!==yes);const s=digitSum(n);
 return {q:`Is ${fmt(n)} divisible by 3?`,a:yes,t:"yn",hint:"Add the digits.",why:`Digit sum ${s}, which ${s%3===0?"is":"is not"} a multiple of 3. So ${yes?"yes":"no"}.`}},
()=>{const yes=Math.random()<.5;let n;do{n=ri(1000,9999)}while((n%4===0)!==yes);const l=n%100;
 return {q:`Is ${fmt(n)} divisible by 4?`,a:yes,t:"yn",hint:"Only the last two digits matter. Why?",why:`100 is divisible by 4, so check ${l}: ${l%4===0?`${l} = 4 × ${l/4}, so yes`:`${l} is not a multiple of 4, so no`}.`}},
()=>{const n=ri(100,9999);let s=digitSum(n),chain=[s];while(s>=10){s=digitSum(s);chain.push(s)}const r=n%9;
 return {q:`What is the remainder when ${fmt(n)} is divided by 9?`,a:r,t:"num",hint:"The number and its digit sum leave the same remainder.",why:`Digit sum: ${chain.join(" → ")}. ${s===9?"9 leaves remainder 0":`${s} leaves remainder ${s}`}, so the remainder is ${r}.`}},
()=>{const n=ri(11,199)*5;
 return {q:`${fmt(n)} ÷ 5`,a:n/5,t:"num",hint:"÷5 is ×2, then ÷10.",why:`${fmt(n)} × 2 = ${fmt(n*2)}, ÷ 10 = ${n/5}.`}}
],
neg:[
()=>{let a,b;do{a=ri(2,20);b=ri(2,20)}while(a===b);
 return {q:`−${a} + ${b}`,a:b-a,t:"num",hint:`Start at −${a}, move ${b} to the right.`,why:`Moving ${b} right from −${a} lands on ${fmt(b-a)}.`}},
()=>{const a=ri(2,15),b=a+ri(2,15);
 return {q:`${a} − ${b}`,a:a-b,t:"num",hint:`${b} is bigger, so you’ll pass zero.`,why:`${a} − ${a} reaches 0, then ${b-a} more: ${fmt(a-b)}.`}},
()=>{const a=ri(2,15),b=ri(2,15);
 return {q:`${a} − (−${b})`,a:a+b,t:"num",hint:"Subtracting is adding the opposite.",why:`${a} − (−${b}) = ${a} + ${b} = ${a+b}.`}},
()=>{const a=ri(2,15),b=ri(2,15);
 return {q:`−${a} − ${b}`,a:-a-b,t:"num",hint:"Both moves go left.",why:`Start at −${a}, move ${b} further left: ${fmt(-a-b)}.`}},
()=>{const a=ri(2,12),b=ri(2,12),both=Math.random()<.5;
 return both?{q:`(−${a}) × (−${b})`,a:a*b,t:"num",hint:"Two negatives: what sign?",why:`Size ${a} × ${b} = ${a*b}; an even number of negatives gives a positive: ${a*b}.`}
 :{q:`(−${a}) × ${b}`,a:-a*b,t:"num",hint:"One negative: what sign?",why:`Size ${a} × ${b} = ${a*b}; one negative makes it negative: ${fmt(-a*b)}.`}},
()=>{const a=ri(2,12),b=ri(2,9);
 return {q:`(−${a*b}) ÷ ${b}`,a:-a,t:"num",hint:"What times " + b + " gives −" + (a*b) + "?",why:`${b} × (−${a}) = −${a*b}, so the answer is −${a}.`}}
],
frac:[
()=>{const [n,d]=pick([[1,2],[2,3],[3,4],[2,5],[3,5],[5,6],[3,8],[4,7]]),k=ri(2,6);
 return {q:`${F(n,d)} = ${F("?",d*k)}`,a:n*k,t:"num",hint:`What turned ${d} into ${d*k}? Do the same to the top.`,why:`${d} × ${k} = ${d*k}, so the top is ${n} × ${k} = ${n*k}.`}},
()=>{const [n,d]=pick([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6],[3,7],[5,8],[7,9]]),k=ri(2,9);
 return {q:`Write ${F(n*k,d*k)} in lowest terms.`,a:[n,d],t:"frac",simplest:true,hint:"Find the largest number dividing top and bottom.",why:`Both are divisible by ${k}: ${F(n*k,d*k)} = ${F(n,d)}.`}},
()=>{const d=ri(5,12),a=ri(1,d-2),b=ri(1,d-a-1),[rn,rd]=red(a+b,d);
 return {q:`${F(a,d)} + ${F(b,d)}`,a:[rn,rd],t:"frac",hint:"Same-size parts: just count them.",why:`${a} + ${b} = ${a+b} parts of size ${F(1,d)}: ${F(a+b,d)}${rd!==d?` = ${F(rn,rd)}`:""}.`}},
()=>{let d1,d2;do{d1=pick([2,3,4,5,6,8]);d2=pick([2,3,4,5,6,8])}while(d1===d2);const n1=ri(1,d1-1),n2=ri(1,d2-1),L=lcm(d1,d2),m1=n1*L/d1,m2=n2*L/d2,[rn,rd]=red(m1+m2,L);
 return {q:`${F(n1,d1)} + ${F(n2,d2)}`,a:[rn,rd],t:"frac",hint:`Rewrite both with denominator ${L}.`,why:`${F(n1,d1)} = ${F(m1,L)} and ${F(n2,d2)} = ${F(m2,L)}. Sum: ${F(m1+m2,L)}${rd!==L||rn!==m1+m2?` = ${F(rn,rd)}`:""}.`}},
()=>{const n1=ri(1,5),d1=ri(n1+1,9),n2=ri(1,5),d2=ri(n2+1,9),[rn,rd]=red(n1*n2,d1*d2);
 return {q:`${F(n1,d1)} × ${F(n2,d2)}`,a:[rn,rd],t:"frac",hint:"Tops times tops, bottoms times bottoms.",why:`${F(n1*n2,d1*d2)}${rd!==d1*d2?` = ${F(rn,rd)}`:""}.`}},
()=>{const n1=ri(1,5),d1=ri(n1+1,9),n2=ri(1,5),d2=ri(n2+1,9),[rn,rd]=red(n1*d2,d1*n2);
 return {q:`${F(n1,d1)} ÷ ${F(n2,d2)}`,a:[rn,rd],t:"frac",hint:`Multiply by ${F(d2,n2)} instead.`,why:`${F(n1,d1)} × ${F(d2,n2)} = ${F(n1*d2,d1*n2)}${(rd!==d1*n2||rn!==n1*d2)?` = ${F(rn,rd)}`:""}.`}},
()=>{const [n,d]=pick([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6],[3,8],[5,8],[7,10]]),N=d*ri(2,12);
 return {q:`${F(n,d)} of ${N}`,a:n*N/d,t:"num",hint:`Find ${F(1,d)} of ${N} first.`,why:`${N} ÷ ${d} = ${N/d}, times ${n} = ${n*N/d}.`}},
()=>{let a,b;do{a=pick([[1,2],[2,3],[3,4],[3,5],[5,8],[4,7],[5,9],[7,10],[2,5],[5,6]]);b=pick([[1,2],[2,3],[3,4],[3,5],[5,8],[4,7],[5,9],[7,10],[2,5],[5,6]])}while(a[0]*b[1]===b[0]*a[1]);const L=a[0]*b[1]>b[0]*a[1]?a:b;
 return {q:`Which is larger: ${F(a[0],a[1])} or ${F(b[0],b[1])}? Type it.`,a:L,t:"frac",hint:"Cross-multiply and compare.",why:`${a[0]} × ${b[1]} = ${a[0]*b[1]} and ${b[0]} × ${a[1]} = ${b[0]*a[1]}, so ${F(L[0],L[1])} is larger.`}}
],
pct:[
()=>{const n=ri(12,99)*10;
 return {q:`10% of ${fmt(n)}`,a:n/10,t:"num",hint:"Move the decimal point one place left.",why:`${fmt(n)} ÷ 10 = ${fmt(n/10)}.`}},
()=>{const n=ri(2,30)*20;
 return {q:`15% of ${n}`,a:n*15/100,t:"num",hint:"10%, then add half of that.",why:`10% is ${n/10}, 5% is ${n/20}; together ${n*15/100}.`}},
()=>{const n=ri(2,40)*4,p=pick([25,50,75,20]);
 const why={25:`25% is a quarter: ${n} ÷ 4 = ${n/4}.`,50:`50% is half: ${n/2}.`,75:`75% is three quarters: ${n} ÷ 4 = ${n/4}, × 3 = ${n*3/4}.`,20:`20% is a fifth, or 10% doubled: ${fmt(n/10)} × 2 = ${fmt(n/5)}.`}[p];
 return {q:`${p}% of ${n}`,a:n*p/100,t:"num",hint:`What fraction is ${p}%?`,why}},
()=>{const [x,y]=pick([[8,50],[4,75],[12,25],[16,25],[18,50],[6,50],[24,25],[3,200],[36,25],[14,50]]);
 return {q:`${x}% of ${y}`,a:x*y/100,t:"num",hint:`Swap it: ${y}% of ${x}.`,why:`${x}% of ${y} = ${y}% of ${x} = ${fmt(x*y/100)}.`}},
()=>{const c=pick([["0.5",n=>n/2,()=>ri(6,60)*2,"half"],["0.25",n=>n/4,()=>ri(3,30)*4,"a quarter"],["1.5",n=>n*1.5,()=>ri(4,40)*2,"one and a half times"],["0.1",n=>n/10,()=>ri(11,99)*10,"a tenth"]]);const n=c[2]();
 return {q:`${c[0]} × ${n}`,a:c[1](n),t:"num",hint:`${c[0]} is ${c[3]}.`,why:`${c[0]} × ${n} is ${c[3]} of ${n}: ${fmt(c[1](n))}.`}},
()=>{const [n,d]=pick([[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,20],[7,20],[3,25],[9,10],[1,8],[3,8]]),p=n/d*100;
 return {q:`Write ${F(n,d)} as a percent. (Just the number.)`,a:p,t:"num",hint:`What is it out of 100?`,why:100%d===0?`${F(n,d)} = ${F(n*100/d,100)} = ${fmt(p)}%.`:`${n} ÷ ${d} = ${fmt(n/d)}, which is ${fmt(p)}%.`}},
()=>{const a=ri(100,999)/100,b=ri(10,99)/10,s=Math.round((a+b)*100)/100;
 return {q:`${a.toFixed(2)} + ${b.toFixed(1)}`,a:s,t:"num",hint:"Line up the decimal points; write the missing hundredth as 0.",why:`${a.toFixed(2)} + ${b.toFixed(2)} = ${s.toFixed(2)}.`}}
],
order:[
()=>{const a=ri(2,20),b=ri(2,9),c=ri(2,9);
 return {q:`${a} + ${b} × ${c}`,a:a+b*c,t:"num",hint:"Which operation goes first?",why:`× before +: ${b} × ${c} = ${b*c}, then ${a} + ${b*c} = ${a+b*c}.`}},
()=>{const a=ri(2,9),b=ri(2,9),c=ri(2,6),d=ri(1,9);
 return {q:`(${a} + ${b}) × ${c} − ${d}`,a:(a+b)*c-d,t:"num",hint:"Brackets first.",why:`${a+b} × ${c} = ${(a+b)*c}, minus ${d} = ${(a+b)*c-d}.`}},
()=>{const a=ri(8,20),b=ri(2,a-2),c=ri(2,9);
 return {q:`${a} − ${b} + ${c}`,a:a-b+c,t:"num",hint:"Same level: left to right.",why:`Left to right: ${a} − ${b} = ${a-b}, then + ${c} = ${a-b+c}. Not ${a} − ${b+c}.`}},
()=>{const b=ri(2,6),q=ri(2,9),a=b*q,c=ri(2,5);
 return {q:`${a} ÷ ${b} × ${c}`,a:q*c,t:"num",hint:"Same level: left to right.",why:`${a} ÷ ${b} = ${q}, then × ${c} = ${q*c}.`}},
()=>{const a=ri(2,5),b=ri(2,6);
 return {q:`${a} × ${b}²`,a:a*b*b,t:"num",hint:"Powers come before multiplication.",why:`${b}² = ${b*b}, then × ${a} = ${a*b*b}.`}},
()=>{const p=ri(2,9),q=ri(1,15),x=ri(2,12);
 return {q:`If x = ${x}, what is ${p}x + ${q}?`,a:p*x+q,t:"num",hint:`${p}x means ${p} × x.`,why:`${p} × ${x} = ${p*x}, plus ${q} = ${p*x+q}.`}},
()=>{const n=ri(2,12),p=ri(2,9),q=ri(1,20),r=p*n+q;
 return {q:`What number n makes ${p}n + ${q} = ${r}?`,a:n,t:"num",hint:`Undo the + ${q} first, then the × ${p}.`,why:`${r} − ${q} = ${r-q}, and ${r-q} ÷ ${p} = ${n}.`}}
]
};
