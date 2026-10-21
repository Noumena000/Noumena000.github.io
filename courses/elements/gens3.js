"use strict";
/* ---------- Problem generators, part three ---------- */
Object.assign(GEN,{
trig:[
()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]),[a,b]=shuffle([t[0],t[1]]),c=t[2],k=pick(["sin","cos","tan"]),ans={sin:[a,c],cos:[b,c],tan:[a,b]}[k],nm={sin:"opposite ÷ hypotenuse",cos:"adjacent ÷ hypotenuse",tan:"opposite ÷ adjacent"}[k];
 return {q:`In a right triangle, the side opposite angle θ is ${a}, the side adjacent is ${b}, and the hypotenuse is ${c}. What is ${k} θ?`,a:ans,t:"frac",hint:`${k} = ${nm}`,why:`${k} θ = ${nm} = ${F(ans[0],ans[1])}.`}},
()=>{const it=pick([["sin 30°",[1,2],"Half an equilateral triangle: opposite 1, hypotenuse 2."],["cos 60°",[1,2],"In the 30°-60°-90° triangle, the side adjacent to 60° is 1 and the hypotenuse 2."],["tan 45°",[1,1],"A 45° right triangle has equal legs, so opposite ÷ adjacent = 1."],["sin 90°",[1,1],"On the unit circle, 90° is the point (0, 1); sin is the y-value."],["cos 0°",[1,1],"0° is the point (1, 0); cos is the x-value."],["cos 180°",[-1,1],"180° is the point (−1, 0); cos is the x-value."],["sin 270°",[-1,1],"270° is the point (0, −1); sin is the y-value."],["sin 150°",[1,2],"150° mirrors 30° across the y-axis, so the y-value is the same: ½."],["cos 120°",[-1,2],"120° mirrors 60° across the y-axis, so the x-value flips sign: −½."],["sin 0°",[0,1],"0° is the point (1, 0); its y-value is 0."],["cos 90°",[0,1],"90° is the point (0, 1); its x-value is 0."]]);
 return {q:`${it[0]} = ? (A fraction or whole number.)`,a:it[1],t:"frac",hint:"Picture the special triangles or the unit circle.",why:`${it[2]} So ${it[0]} = ${F(it[1][0],it[1][1])}.`}},
()=>{const d=pick([30,45,60,90,120,135,150,180,210,240,270,300,315,360]),[n,m]=red(d,180);
 return {q:`Convert ${d}° to radians. It equals ? × π; type the number in front of π (e.g. 1/3).`,a:[n,m],t:"frac",hint:"180° = π",why:`${d}° = ${F(d,180)}π = ${m===1?(n===1?"":fmt(n)):F(n,m)}π.`}},
()=>{const [p,q]=pick([[1,6],[1,4],[1,3],[1,2],[2,3],[3,4],[5,6],[1,1],[3,2],[2,1],[5,4]]),d=180*p/q;
 return {q:`Convert ${q===1?(p===1?"":p):F(p,q)}π radians to degrees.`,a:d,t:"num",hint:"π = 180°",why:`${q===1?(p===1?"":p):F(p,q)} × 180° = ${d}°.`}},
()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]),[a,b]=shuffle([t[0],t[1]]),c=t[2];
 return {q:`θ is acute and sin θ = ${F(a,c)}. What is cos θ?`,a:[b,c],t:"frac",hint:"sin²θ + cos²θ = 1",why:`cos²θ = 1 − ${F(a*a,c*c)} = ${F(b*b,c*c)}, so cos θ = ${F(b,c)} (positive, since θ is acute).`}},
()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17]]),[a]=shuffle([t[0],t[1]]),c=t[2],k=ri(2,4);
 return {q:`sin θ = ${F(a,c)}, and the side opposite θ is ${a*k}. How long is the hypotenuse?`,a:c*k,t:"num",hint:"The triangle is a scaled copy.",why:`Opposite ${a*k} is ${k} × ${a}, so the hypotenuse is ${k} × ${c} = ${c*k}.`}}
],
probability:[
()=>{const k=ri(1,5),[n,d]=red(6-k,6);
 return {q:`You roll a fair die. What is the probability of rolling higher than ${k}?`,a:[n,d],t:"frac",hint:"Count the favourable faces.",why:`Faces ${Array.from({length:6-k},(_,i)=>k+1+i).join(", ")}: ${6-k} of 6, which is ${F(n,d)}.`}},
()=>{const s=ri(2,12),c=6-Math.abs(s-7),[n,d]=red(c,36),pairs=[];for(let i=1;i<=6;i++){const j=s-i;if(j>=1&&j<=6)pairs.push(`(${i}, ${j})`)}
 return {q:`You roll two fair dice. What is the probability their sum is ${s}?`,a:[n,d],t:"frac",hint:"There are 36 equally likely ordered pairs.",why:`The pairs ${pairs.join(", ")} make ${c} of 36: ${F(c,36)}${d!==36?` = ${F(n,d)}`:""}.`}},
()=>{const n=ri(2,6);
 return {q:`You flip a fair coin ${n} times. What is the probability every flip is heads?`,a:[1,2**n],t:"frac",hint:"Independent events multiply.",why:`${F(1,2)} multiplied ${n} times is ${F(1,2**n)}.`}},
()=>{const n=ri(2,5);
 return {q:`You flip a fair coin ${n} times. What is the probability of at least one head?`,a:[2**n-1,2**n],t:"frac",hint:"What is the only way to get no heads?",why:`P(no heads) = ${F(1,2**n)}, so P(at least one) = 1 − ${F(1,2**n)} = ${F(2**n-1,2**n)}.`}},
()=>{const r=ri(1,9),b=ri(1,9),[n,d]=red(r,r+b);
 return {q:`A bag holds ${r} red and ${b} blue marbles. You draw one at random. What is the probability it is red?`,a:[n,d],t:"frac",hint:"Favourable over total.",why:`${r} red out of ${r+b} marbles: ${F(r,r+b)}${d!==r+b?` = ${F(n,d)}`:""}.`}},
()=>{let xs,m,last;do{xs=Array.from({length:4},()=>ri(1,20));m=ri(5,15);last=5*m-xs.reduce((a,b)=>a+b,0)}while(last<0||last>30);xs=shuffle(xs.concat([last]));
 return {q:`What is the mean of ${xs.join(", ")}?`,a:m,t:"num",hint:"Total, then divide by how many.",why:`The total is ${5*m}, and ${5*m} ÷ 5 = ${m}.`}},
()=>{const xs=Array.from({length:7},()=>ri(1,40)),s=xs.slice().sort((a,b)=>a-b);
 return {q:`What is the median of ${xs.join(", ")}?`,a:s[3],t:"num",hint:"Sort them, then take the middle one.",why:`Sorted: ${s.join(", ")}. The 4th of 7 is ${s[3]}.`}},
()=>{const n=ri(4,12);
 return {q:`${n} people each shake hands once with everyone else. How many handshakes?`,a:n*(n-1)/2,t:"num",hint:"Each person shakes how many hands? Then fix the double count.",why:`${n} × ${n-1} = ${n*(n-1)} counts each handshake twice, so ${n*(n-1)/2}.`}},
()=>{const a=ri(2,6),b=ri(2,6),c=ri(2,4);
 return {q:`You have ${a} shirts, ${b} pairs of trousers and ${c} pairs of shoes. How many different outfits?`,a:a*b*c,t:"num",hint:"Each choice multiplies the options.",why:`${a} × ${b} × ${c} = ${a*b*c}.`}}
],
calculus:[
()=>{const a=ri(1,6),n=ri(2,4),c=ri(-3,3),v=a*n*c**(n-1);
 return {q:`If f(x) = ${coef(a,`x<sup>${n}</sup>`)}, what is f′(${fmt(c)})?`,a:v,t:"num",hint:"Power rule: bring the exponent down, reduce it by one.",why:`f′(x) = ${a*n}x${n-1>1?`<sup>${n-1}</sup>`:""}, so f′(${fmt(c)}) = ${a*n} × ${n-1>1?`${par(c)}<sup>${n-1}</sup>`:par(c)} = ${fmt(v)}.`}},
()=>{const a=ri(1,5),b=ri(-8,8),c=ri(-9,9),x=ri(-4,4),v=2*a*x+b;
 return {q:`If f(x) = ${coef(a,"x²")}${b?" "+termx(b,"x"):""}${c?" "+term(c):""}, what is f′(${fmt(x)})?`,a:v,t:"num",hint:"Differentiate each term; constants vanish.",why:`f′(x) = ${coef(2*a,"x")}${b?" "+term(b):""}, so f′(${fmt(x)}) = ${2*a} × ${par(x)}${b?" "+term(b):""} = ${fmt(v)}.`}},
()=>{const a=ri(1,9);
 return {q:`What does ${F(`x² − ${a*a}`,`x − ${a}`)} approach as x approaches ${a}?`,a:2*a,t:"num",hint:"Factor the top.",why:`For x ≠ ${a}, ${F(`(x − ${a})(x + ${a})`,`x − ${a}`)} = x + ${a}. As x approaches ${a}, that approaches ${2*a}. The expression is undefined at ${a} itself, which is why we need a limit.`}},
()=>{let a,b;do{a=ri(0,6);b=ri(0,6)}while(a===b);
 return {q:`On the curve y = x², what is the slope of the straight line joining the points at x = ${a} and x = ${b}?`,a:a+b,t:"num",hint:"Rise over run, then factor.",why:`(${b}² − ${a}²) ÷ (${b} − ${a}) = ${b*b-a*a} ÷ ${b-a} = ${a+b}. In general it is a + b, which approaches 2a as b approaches a: the derivative.`}},
()=>{const b=ri(1,6),k=ri(0,3),c=ri(1,9);
 const it=[[`2x`,b*b,`x²`,`${b}² − 0 = ${b*b}`],[`3x²`,b**3,`x³`,`${b}³ − 0 = ${b**3}`],[`${c}`,c*b,`${c}x`,`${c} × ${b} = ${c*b}`],[`2x + ${c}`,b*b+c*b,`x² + ${c}x`,`${b*b} + ${c*b} = ${b*b+c*b}`]][k];
 return {q:`∫<sub>0</sub><sup>${b}</sup> ${it[0]} dx`,a:it[1],t:"num",hint:"Find a function whose derivative is the integrand.",why:`${it[2]} has derivative ${it[0]}, so evaluate it at ${b} minus at 0: ${it[3]}.`}},
()=>{let k=ri(-6,6);if(!k)k=3;const m=ri(-9,9);
 return {q:`At what x does f(x) = x² ${termx(-2*k,"x")}${m?" "+term(m):""} reach its lowest point?`,a:k,t:"num",hint:"At the lowest point the slope is zero.",why:`f′(x) = 2x ${term(-2*k)}. Setting it to 0 gives x = ${fmt(k)}.`}},
()=>{const a=ri(1,5),b=ri(1,10),t=ri(1,6);
 return {q:`A ball’s position is s(t) = ${coef(a,"t²")} + ${b}t metres. What is its velocity at t = ${t}, in metres per second?`,a:2*a*t+b,t:"num",hint:"Velocity is the derivative of position.",why:`s′(t) = ${2*a}t + ${b}, so at t = ${t}: ${2*a*t} + ${b} = ${2*a*t+b}.`}}
],
linear:[
()=>{const three=Math.random()<.5,n=three?3:2,u=Array.from({length:n},()=>ri(-5,6)),v=Array.from({length:n},()=>ri(-5,6)),d=u.reduce((s,x,i)=>s+x*v[i],0);
 return {q:`(${u.map(fmt).join(", ")}) · (${v.map(fmt).join(", ")})`,a:d,t:"num",hint:"Multiply matching components, then add.",why:`${u.map((x,i)=>`${par(x)}×${par(v[i])}`).join(" + ")} = ${fmt(d)}.`}},
()=>{const m=Array.from({length:4},()=>ri(-5,9)),d=m[0]*m[3]-m[1]*m[2];
 return {q:`What is the determinant of ${M(m)}?`,a:d,t:"num",hint:"ad − bc",why:`${par(m[0])} × ${par(m[3])} − ${par(m[1])} × ${par(m[2])} = ${fmt(m[0]*m[3])} − ${par(m[1]*m[2])} = ${fmt(d)}.`}},
()=>{const m=Array.from({length:4},()=>ri(-4,6)),v=[ri(-4,6),ri(-4,6)],row=ri(0,1),r=[m[2*row],m[2*row+1]],ans=r[0]*v[0]+r[1]*v[1];
 return {q:`${M(m)} ${M(v,true)}: what is the ${row?"second":"first"} component of the result?`,a:ans,t:"num",hint:`Take row ${row+1} of the matrix, dot it with the vector.`,why:`${par(r[0])}×${par(v[0])} + ${par(r[1])}×${par(v[1])} = ${fmt(ans)}.`}},
()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10]]),a=t[0]*pick([1,-1]),b=t[1]*pick([1,-1]),[x,y]=Math.random()<.5?[a,b]:[b,a];
 return {q:`How long is the vector (${fmt(x)}, ${fmt(y)})?`,a:t[2],t:"num",hint:"√(a² + b²)",why:`√(${x*x} + ${y*y}) = √${t[2]**2} = ${t[2]}.`}},
()=>{const a=ri(1,6),c=ri(1,6);let s=ri(-3,3);if(!s)s=1;const b=-a*s,k=c*s;
 return {q:`For what k are (${a}, ${fmt(b)}) and (k, ${c}) perpendicular?`,a:k,t:"num",hint:"Perpendicular means the dot product is 0.",why:`${a}k + ${par(b)} × ${c} = 0, so ${a}k = ${fmt(-b*c)} and k = ${fmt(k)}.`}},
()=>{let a1,b1,a2,b2,D;do{a1=ri(1,6);b1=ri(1,6);a2=ri(1,6);b2=ri(-6,6);D=a1*b2-b1*a2}while(!D||!b2);const x=ri(-5,8),y=ri(-5,8),c1=a1*x+b1*y,c2=a2*x+b2*y;
 return {q:`Solve: ${coef(a1,"x")} + ${coef(b1,"y")} = ${fmt(c1)} and ${coef(a2,"x")} ${termx(b2,"y")} = ${fmt(c2)}. What is x?`,a:x,t:"num",hint:"Eliminate y, or use determinants.",why:`By determinants: x = (${fmt(c1)}×${par(b2)} − ${b1}×${par(c2)}) ÷ (${a1}×${par(b2)} − ${b1}×${a2}) = ${fmt(c1*b2-b1*c2)} ÷ ${par(D)} = ${fmt(x)}.`}},
()=>{let m,d;do{m=Array.from({length:4},()=>ri(-4,6));d=m[0]*m[3]-m[1]*m[2]}while(!d);
 return {q:`The matrix ${M(m)} transforms the unit square. What is the area of the resulting shape?`,a:Math.abs(d),t:"num",hint:"The determinant is the area scale factor.",why:`det = ${fmt(d)}, and the unit square has area 1, so the area is |${fmt(d)}| = ${Math.abs(d)}.`}}
],
connectives:[
()=>{const t=pick(TFT),v={};t[0].forEach(x=>v[x]=Math.random()<.5);const val=t[2](v),steps=t[3].map(s=>`${s[0]} is ${TV(s[1](v))}`);
 return {q:`If ${t[0].map(x=>`${x} is ${TV(v[x])}`).join(", ")}, is ${t[1]} true or false?`,a:val,t:"yn",labels:["True","False"],hint:t[4],why:`${steps.length?steps.join(", ")+", so ":""}${t[1]} is ${TV(val)}. ${t[4]}`}},
()=>{const n=ri(1,6);
 return {q:`How many rows does a truth table with ${n} letter${n>1?"s":""} need?`,a:2**n,t:"num",hint:"Each letter can be true or false.",why:`Each letter doubles the cases: 2${n>1?`<sup>${n}</sup>`:""} = ${2**n}.`}},
()=>{const t=pick(TFT.filter(x=>x[0].length===2)),rows=[[true,true],[true,false],[false,true],[false,false]].filter(([P,Q])=>t[2]({P,Q}));
 return {q:`In the truth table for ${t[1]}, in how many of the four rows is it true?`,a:rows.length,t:"num",hint:"List the four rows: TT, TF, FT, FF.",why:rows.length?`True when ${rows.map(([P,Q])=>`P ${P?"T":"F"}, Q ${Q?"T":"F"}`).join("; ")}: ${rows.length} row${rows.length>1?"s":""}.`:"It is false in every row."}},
()=>{const t=pick(TAUT),fails=[[true,true],[true,false],[false,true],[false,false]].filter(([P,Q])=>!t[1](P,Q)),yes=!fails.length;
 return {q:`Is ${t[0]} true in every row of its truth table?`,a:yes,t:"yn",hint:"Look for a row that makes it false.",why:yes?`Yes: it is true in all four rows. ${t[2]||""}`:`No: with P ${fails[0][0]?"true":"false"} and Q ${fails[0][1]?"true":"false"} it is false. One falsifying row settles it.`}},
()=>{const e=pick(EQUIV),m=mc(e[1],e[2]);
 return {q:`Which is equivalent to ${e[0]}?`,options:m.options,a:m.a,t:"mc",hint:"Check the row where each could be false.",why:e[3]}}
],
arguments:[
()=>{const c=pick(CONDS),kind=pick(["equivalent to it","its converse","its contrapositive","its inverse"]),
 conv=`If ${c.q}, then ${c.p}.`,inv=`If ${c.np}, then ${c.nq}.`,contra=`If ${c.nq}, then ${c.np}.`,both=`${cap(c.p)}, and ${c.q}.`,
 right={"equivalent to it":contra,"its converse":conv,"its contrapositive":contra,"its inverse":inv}[kind],
 m=mc(right,[conv,inv,contra,both].filter(x=>x!==right));
 return {q:`“If ${c.p}, then ${c.q}.” Which statement is ${kind}?`,options:m.options,a:m.a,t:"mc",hint:"Converse swaps; inverse negates; contrapositive swaps and negates.",why:`The converse swaps the parts, the inverse negates both, and the contrapositive does both. Only the contrapositive is equivalent to the original.${kind==="equivalent to it"?" So the answer is the contrapositive.":""}`}},
()=>{const c=pick(CONDS),f=pick(FORMS)(c);
 return {q:`<span class="argument">${f.prem.map(x=>`<span>${x}</span>`).join("")}<span>Therefore, ${f.concl}</span></span>Is this argument valid?`,a:f.valid,t:"yn",labels:["Valid","Invalid"],hint:"Can the premises be true while the conclusion is false?",why:f.why}},
()=>{const c=pick(NUMCLAIMS);
 return {q:`For whole numbers n: “${c[0]}” Is this always true?`,a:c[1],t:"yn",hint:"Try small cases, including 2.",why:c[2]}}
],
quantifiers:[
()=>{const n=pick(NEGS),m=mc(n[1],n[2]);
 return {q:`What is the negation of “${n[0]}”?`,options:m.options,a:m.a,t:"mc",hint:"The negation is true exactly when the original is false.",why:`The original is false exactly when ${n[1].charAt(0).toLowerCase()+n[1].slice(1,-1)}. To deny “all” you need one exception; to deny “some” you must deny every case.`}},
()=>{const xs=Array.from({length:6},()=>ri(1,60)),k=ri(30,55),kind=ri(0,3);let q,a,why;
 if(kind===0){a=xs.every(x=>x%2===0);q="every number in the list is even";const c=xs.find(x=>x%2);why=a?"All six are even.":`${c} is odd, which refutes it.`}
 else if(kind===1){a=xs.some(x=>x>k);q=`some number in the list is greater than ${k}`;const w=xs.find(x=>x>k);why=a?`${w} is a witness.`:`None of them exceeds ${k}.`}
 else if(kind===2){a=!xs.some(x=>x%5===0);q="no number in the list is divisible by 5";const w=xs.find(x=>x%5===0);why=a?"None of them is a multiple of 5.":`${w} is divisible by 5, so the claim fails.`}
 else{a=xs.every(x=>x<k);q=`every number in the list is less than ${k}`;const c=xs.find(x=>x>=k);why=a?`All are below ${k}.`:`${c} is not less than ${k}.`}
 return {q:`List: ${xs.join(", ")}. True or false: ${q}?`,a,t:"yn",labels:["True","False"],hint:"A universal claim needs every case; an existential claim needs one.",why}},
()=>{const kind=ri(0,2);let xs,cs,claim,prop;
 if(kind===0){claim="every number in this list is odd";cs=[ri(1,24)*2];xs=Array.from({length:6},()=>ri(0,24)*2+1)}
 else if(kind===1){const k=pick([40,50,60]);claim=`every number in this list is less than ${k}`;cs=[ri(k,k+30)];xs=Array.from({length:6},()=>ri(1,k-1))}
 else{claim="no number in this list is divisible by 3";cs=[ri(2,30)*3];xs=Array.from({length:6},()=>{let x;do{x=ri(2,90)}while(x%3===0);return x})}
 xs=shuffle(xs.concat(cs));
 return {q:`Claim: ${claim}: ${xs.join(", ")}. Type a counterexample.`,a:cs[0],anyOf:cs,t:"num",hint:"Find one member that breaks the claim.",why:`${cs[0]} breaks it. One counterexample is enough to refute a universal claim.`}},
()=>{const c=pick(CONJ);
 return {q:`Conjecture: “${c[0]}” What is the smallest counterexample?`,a:c[1],t:"num",hint:"Test the cases in order.",why:c[2]}},
()=>{const o=pick(QORDER),m=mc(o[1],o[2]);
 return {q:o[0],options:m.options,a:m.a,t:"mc",hint:"Read the quantifiers in order: who gets chosen first?",why:o[3]}}
],
sets:[
()=>{const [x,y]=pick([["French","Spanish"],["piano","guitar"],["chess","Go"],["coffee","tea"]]),a=ri(8,25),b=ri(6,20),c=ri(2,Math.min(a,b)-1);
 return {q:`${a} people play ${x}, ${b} play ${y}, and ${c} play both. How many play at least one?`,a:a+b-c,t:"num",hint:"Adding counts the overlap twice.",why:`${a} + ${b} − ${c} = ${a+b-c}.`}},
()=>{const a=ri(8,25),b=ri(6,20),c=ri(2,Math.min(a,b)-1),N=a+b-c+ri(2,12);
 return {q:`Of ${N} students, ${a} take art, ${b} take music, and ${c} take both. How many take neither?`,a:N-(a+b-c),t:"num",hint:"Find how many take at least one first.",why:`At least one: ${a} + ${b} − ${c} = ${a+b-c}. Neither: ${N} − ${a+b-c} = ${N-(a+b-c)}.`}},
()=>{const A=shuffle([1,2,3,4,5,6,7,8,9,10,11,12]).slice(0,ri(4,6)).sort((x,y)=>x-y),B=shuffle([1,2,3,4,5,6,7,8,9,10,11,12]).slice(0,ri(4,6)).sort((x,y)=>x-y),k=ri(0,2),
 I=A.filter(x=>B.includes(x)),U=[...new Set(A.concat(B))].sort((x,y)=>x-y),D=A.filter(x=>!B.includes(x)),S=s=>s.length?`{${s.join(", ")}}`:"the empty set",
 it=[["A ∩ B",I],["A ∪ B",U],["A − B (in A but not B)",D]][k];
 return {q:`A = {${A.join(", ")}} and B = {${B.join(", ")}}. How many elements are in ${it[0]}?`,a:it[1].length,t:"num",hint:"∩ is both, ∪ is either.",why:`${it[0].split(" (")[0]} = ${S(it[1])}, which has ${it[1].length}.`}},
()=>{const n=ri(2,8);
 return {q:`How many subsets does a set with ${n} elements have? (Count the empty set and the whole set.)`,a:2**n,t:"num",hint:"Each element is either in or out.",why:`Two choices for each of ${n} elements: 2<sup>${n}</sup> = ${2**n}.`}},
()=>{const n=ri(3,7);let f=1;for(let i=2;i<=n;i++)f*=i;
 return {q:`In how many different orders can ${n} books be arranged on a shelf?`,a:f,t:"num",hint:`${n} choices for the first spot, then ${n-1}…`,why:`${Array.from({length:n},(_,i)=>n-i).join(" × ")} = ${fmt(f)}.`}},
()=>{const n=ri(5,10),k=pick([2,3]),ord=k===2?n*(n-1):n*(n-1)*(n-2),c=ord/(k===2?2:6);
 return {q:`How many ways are there to choose a ${k}-person committee from ${n} people?`,a:c,t:"num",hint:"Count ordered picks, then divide by the orders of the same group.",why:`Ordered: ${k===2?`${n} × ${n-1}`:`${n} × ${n-1} × ${n-2}`} = ${ord}. Each committee was counted ${k===2?2:6} times, so ${ord} ÷ ${k===2?2:6} = ${c}.`}},
()=>{const B=shuffle([1,2,3,4,5,6,7,8,9]).slice(0,5).sort((x,y)=>x-y),yes=Math.random()<.5;let A=shuffle(B).slice(0,ri(2,3));
 if(!yes){const out=[1,2,3,4,5,6,7,8,9].filter(x=>!B.includes(x));A[0]=pick(out)}A.sort((x,y)=>x-y);const miss=A.filter(x=>!B.includes(x));
 return {q:`Is {${A.join(", ")}} ⊆ {${B.join(", ")}}?`,a:!miss.length,t:"yn",hint:"Is every member of the first set in the second?",why:miss.length?`No: ${miss[0]} is not in the second set.`:"Yes: every member of the first set appears in the second."}}
],
proof:[
()=>{const n=pick([10,20,25,30,40,50,100]);
 return {q:`1 + 2 + 3 + … + ${n}`,a:n*(n+1)/2,t:"num",hint:`Pair 1 with ${n}, 2 with ${n-1}, …`,why:`Each pair sums to ${n+1}, and there are ${n} ÷ 2 pairs: ${n} × ${n+1} ÷ 2 = ${fmt(n*(n+1)/2)}.`}},
()=>{const n=ri(4,20);
 return {q:`1 + 3 + 5 + … + ${2*n-1}`,a:n*n,t:"num",hint:"How many terms? Picture each odd number as an L-shaped layer of a square.",why:`There are ${n} odd numbers, and the first n odd numbers always sum to n²: each adds an L-shaped layer to a square. ${n}² = ${n*n}.`}},
()=>{const m=pick(METHODS),c=mc(m[1],["Direct proof","Contradiction","Contrapositive","Induction","Counterexample"].filter(x=>x!==m[1]).slice(0,3));
 return {q:`Which method is this? “${m[0]}”`,options:c.options,a:c.a,t:"mc",hint:"What is assumed at the start?",why:m[2]}},
()=>{const c=pick(PARITY);
 return {q:`Is this always true? “${c[0]}”`,a:c[1],t:"yn",hint:"Write odd numbers as 2k + 1 and even numbers as 2k.",why:c[2]}},
()=>{const k=ri(0,2);
 if(k===0){const n=ri(5,49)*2+1;return {q:`Without squaring it, what remainder does ${n}² leave when divided by 8?`,a:1,t:"num",hint:"n² − 1 = (n − 1)(n + 1)",why:`${n}² − 1 = ${n-1} × ${n+1}: two consecutive even numbers, one of them a multiple of 4, so the product is a multiple of 8. The remainder is 1, and the same holds for every odd number.`}}
 if(k===1){const n=ri(6,49)*2;return {q:`Without squaring it, what remainder does ${n}² leave when divided by 4?`,a:0,t:"num",hint:"Write the even number as 2k.",why:`${n} = 2 × ${n/2}, so ${n}² = 4 × ${(n/2)**2}. Every even square is a multiple of 4.`}}
 const n=ri(4,30);return {q:`What remainder does ${n}³ − ${n} leave when divided by 6?`,a:0,t:"num",hint:"Factor it.",why:`${n}³ − ${n} = ${n-1} × ${n} × ${n+1}: three consecutive numbers, so one is even and one is a multiple of 3. The product is always divisible by 6.`}}
],
numeracy:[
()=>{const k=pick([1,2,5,10]),sens=pick([80,90]),fp=pick([1,2,5,10]),sick=100*k,tp=sick*sens/100,healthy=100000-sick,fpos=healthy*fp/100,[n,d]=red(tp,tp+fpos),askFrac=Math.random()<.6;
 const setup=`A condition affects ${k} in 1,000 people. A test catches ${sens}% of real cases, and wrongly flags ${fp}% of healthy people.`;
 const why=`Out of 100,000 people: ${fmt(sick)} have it and ${fmt(tp)} of them test positive. ${fmt(healthy)} don’t, and ${fp}% of them, ${fmt(fpos)}, also test positive. That is ${fmt(tp+fpos)} positives, of which ${fmt(tp)} are real: ${F(n,d)}${askFrac?"":""}.`;
 return askFrac?{q:`${setup} If someone tests positive, what is the chance they have it? (A fraction.)`,a:[n,d],t:"frac",hint:"Imagine 100,000 people and count each group.",why}
 :{q:`${setup} Out of 100,000 people tested, how many test positive?`,a:tp+fpos,t:"num",hint:"Real cases caught plus healthy people flagged.",why}},
()=>{const [a,b]=pick([[2,3],[4,6],[1,2],[5,10],[2,5],[4,5],[10,15]]),rel=Math.random()<.5;
 return rel?{q:`A risk rises from ${a} in 10,000 to ${b} in 10,000. What is the relative increase, in percent?`,a:(b-a)/a*100,t:"num",hint:"Change divided by the original.",why:`${b-a} ÷ ${a} = ${fmt((b-a)/a)}, which is ${fmt((b-a)/a*100)}%. In absolute terms it is only ${b-a} extra case${b-a>1?"s":""} per 10,000.`}
 :{q:`A risk rises from ${a} in 10,000 to ${b} in 10,000, reported as a ${fmt((b-a)/a*100)}% increase. How many extra cases is that per 10,000 people?`,a:b-a,t:"num",hint:"Absolute, not relative.",why:`${b} − ${a} = ${b-a}. A large relative change can be a small absolute one.`}},
()=>{const p=pick([10,20,25,50]),net=-(p*p)/100;
 return {q:`A price rises ${p}% and then falls ${p}%. What is the overall percent change? (Minus sign for a decrease.)`,a:net,t:"num",hint:"Start from 100 and follow it.",why:`100 → ${100+p} → ${fmt((100+p)*(100-p)/100)}. The fall is ${p}% of a larger number, so the net change is ${fmt(net)}%.`}},
()=>{let n1,n2,m1,m2,tot;do{n1=ri(2,9)*5;n2=ri(2,9)*5;m1=ri(50,90);m2=ri(50,90);tot=n1*m1+n2*m2}while(m1===m2||tot%(n1+n2));
 return {q:`Group A: ${n1} people with a mean score of ${m1}. Group B: ${n2} people with a mean of ${m2}. What is the mean score of everyone together?`,a:tot/(n1+n2),t:"num",hint:"Not the average of the two means: weight by group size.",why:`Totals: ${n1} × ${m1} = ${fmt(n1*m1)} and ${n2} × ${m2} = ${fmt(n2*m2)}. Together ${fmt(tot)} ÷ ${n1+n2} = ${tot/(n1+n2)}. The plain average of the means, ${fmt((m1+m2)/2)}, ignores that the groups differ in size.`}},
()=>{let xs,s;do{xs=Array.from({length:4},()=>ri(30,60));xs.push(ri(300,900));s=xs.reduce((a,b)=>a+b,0)}while(s%5);const med=xs.slice().sort((a,b)=>a-b)[2],askMean=Math.random()<.5,sh=shuffle(xs);
 return {q:`Five salaries, in thousands of dollars: ${sh.join(", ")}. What is the ${askMean?"mean":"median"}?`,a:askMean?s/5:med,t:"num",hint:askMean?"Total, then divide by 5.":"Sort, then take the middle.",why:`Mean: ${s} ÷ 5 = ${s/5}. Median: ${med}. One very large salary pulls the mean far above what is typical; the median barely notices it.`}},
()=>{const c=pick(CORR),m=mc(c[1],c[2]);
 return {q:`${c[0]} What is the most plausible explanation?`,options:m.options,a:m.a,t:"mc",hint:"Is there something that could drive both?",why:`${c[1]} A third factor driving both is called a confounder. Correlation alone doesn’t tell you which way, if any, causation runs.`}}
]
});

function makeProblem(uid){const p=pick(GEN[uid])();p.unit=uid;return p}

/* ---------- Answer checking ---------- */
function normalize(s){return String(s).trim().replace(/[−–—]/g,"-").replace(/,/g,"").replace(/\s+/g,"").replace(/%$/,"")}
function parseNum(s){s=normalize(s);if(!/^-?(\d+\.?\d*|\.\d+)$/.test(s))return null;return parseFloat(s)}
function parseFrac(s){s=normalize(s);const m=s.match(/^(-?\d+)\/(-?\d+)$/);if(m){if(+m[2]===0)return null;return [+m[1],+m[2]]}const n=parseNum(s);if(n!==null&&Number.isInteger(n))return [n,1];return null}
function check(p,raw){
  if(p.t==="mc"){const i=parseInt(raw,10);if(isNaN(i))return {invalid:"Choose an option."};return {ok:i===p.a}}
  if(p.t==="yn"){const s=String(raw).trim().toLowerCase();if(!s)return {invalid:"Choose yes or no."};const v=s[0]==="y";if(s[0]!=="y"&&s[0]!=="n")return {invalid:"Choose yes or no."};return {ok:v===p.a}}
  if(p.t==="frac"){const f=parseFrac(raw);if(!f)return {invalid:"Enter a fraction like 3/4, or a whole number."};
    const same=f[0]*p.a[1]===p.a[0]*f[1];if(!same)return {ok:false};
    const [rn,rd]=red(f[0],f[1]);const simplest=Math.abs(f[0])===Math.abs(rn)&&Math.abs(f[1])===Math.abs(rd);
    if(p.simplest&&!simplest)return {ok:false,note:"That’s equal, but not yet in lowest terms."};
    if(!simplest)return {ok:true,note:`Right. In lowest terms that’s ${F(p.a[0],p.a[1])}.`};return {ok:true}}
  const v=parseNum(raw);if(v===null)return {invalid:"Enter a number, like 42 or −7."};return {ok:(p.anyOf||[p.a]).some(x=>Math.abs(v-x)<1e-9)}
}
const showAnswer=p=>p.t==="mc"?`“${p.options[p.a].replace(/\.$/,"")}”`:p.t==="yn"?(p.labels||["Yes","No"])[p.a?0:1]:p.anyOf&&p.anyOf.length>1?`any of ${p.anyOf.map(fmt).join(", ")}`:p.t==="frac"?F(p.a[0],p.a[1]):fmt(p.a);

