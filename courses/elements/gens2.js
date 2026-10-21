"use strict";
/* ---------- Problem generators, continued ---------- */
Object.assign(GEN,{
ratio:[
()=>{let a,b;do{a=ri(2,7);b=ri(2,9)}while(a===b);const k=ri(2,8);
 return {q:`Flour and water are mixed in the ratio ${a} : ${b}. With ${a*k} cups of flour, how many cups of water?`,a:b*k,t:"num",hint:`How many times bigger is ${a*k} than ${a}?`,why:`${a*k} is ${k} × ${a}, so scale the water by ${k} too: ${b} × ${k} = ${b*k}.`}},
()=>{const [n,d]=pick([[2,3],[3,4],[3,5],[4,7],[5,6],[5,8],[7,9]]),k=ri(2,9);
 return {q:`Solve: ${F(n,d)} = ${F("x",d*k)}`,a:n*k,t:"num",hint:`Find the scale factor from ${d} to ${d*k}.`,why:`${d} × ${k} = ${d*k}, so x = ${n} × ${k} = ${n*k}.`}},
()=>{const k=pick([3,4,5,6,8]),u=ri(2,9);let m;do{m=ri(2,12)}while(m===k);
 return {q:`${k} notebooks cost $${k*u}. At the same price, what do ${m} cost? (In dollars.)`,a:m*u,t:"num",hint:"Find the price of one first.",why:`One costs $${k*u} ÷ ${k} = $${u}, so ${m} cost $${m*u}.`}},
()=>{let a,b;do{a=ri(1,5);b=ri(2,7)}while(a===b);const m=ri(3,15),T=(a+b)*m,L=Math.max(a,b);
 return {q:`Split $${T} in the ratio ${a} : ${b}. How much is the larger share?`,a:L*m,t:"num",hint:`There are ${a+b} equal parts in total.`,why:`${a} + ${b} = ${a+b} parts, each worth $${T} ÷ ${a+b} = $${m}. The larger share is ${L} × $${m} = $${L*m}.`}},
()=>{let A,p,B;do{A=pick([20,40,50,80,200,250,400]);p=pick([10,20,25,50,30,75,100,-10,-20,-25,-50,-30]);B=A*(100+p)/100}while(!Number.isInteger(B));
 return {q:`A price changes from $${A} to $${B}. What is the percent change? (Use a minus sign for a decrease.)`,a:p,t:"num",hint:"Divide the change by the original amount.",why:`The change is ${fmt(B-A)} on an original ${A}: ${fmt(B-A)} ÷ ${A} = ${fmt(p/100)}, which is ${fmt(p)}%.`}},
()=>{const v=ri(4,15)*5,h=ri(2,5);let t;do{t=ri(2,9)}while(t===h);
 return {q:`A train covers ${v*h} km in ${h} hours. At the same speed, how far does it go in ${t} hours?`,a:v*t,t:"num",hint:"Find the distance per hour first.",why:`${v*h} ÷ ${h} = ${v} km per hour, and ${v} × ${t} = ${v*t} km.`}}
],
equations:[
()=>{const x=ri(-9,12),a=ri(2,9);let b=ri(-15,20);if(!b)b=4;const c=a*x+b;
 return {q:`Solve for x: ${a}x ${term(b)} = ${fmt(c)}`,a:x,t:"num",hint:`Undo the ${term(b)} first.`,why:`${b>0?"Subtract":"Add"} ${Math.abs(b)} on both sides: ${a}x = ${fmt(c-b)}. Divide by ${a}: x = ${fmt(x)}.`}},
()=>{const x=ri(-6,10),a=ri(3,9),c=ri(1,a-1);let b=ri(-10,10);if(!b)b=2;const d=(a-c)*x+b;
 return {q:`Solve for x: ${a}x ${term(b)} = ${coef(c,"x")}${d?" "+term(d):""}`,a:x,t:"num",hint:`Subtract ${coef(c,"x")} from both sides first.`,why:`Subtract ${coef(c,"x")}: ${coef(a-c,"x")} ${term(b)} = ${fmt(d)}. Then ${coef(a-c,"x")} = ${fmt(d-b)}, so x = ${fmt(x)}.`}},
()=>{const a=ri(2,6),x=ri(-5,10),b=ri(1,9),c=a*(x+b);
 return {q:`Solve for x: ${a}(x + ${b}) = ${fmt(c)}`,a:x,t:"num",hint:`Divide both sides by ${a} first.`,why:`Divide by ${a}: x + ${b} = ${fmt(c/a)}. Subtract ${b}: x = ${fmt(x)}.`}},
()=>{const a=ri(2,6),x=a*ri(-4,9),b=ri(1,12),c=x/a+b;
 return {q:`Solve for x: ${F("x",a)} + ${b} = ${fmt(c)}`,a:x,t:"num",hint:`Subtract ${b}, then multiply by ${a}.`,why:`Subtract ${b}: ${F("x",a)} = ${fmt(c-b)}. Multiply by ${a}: x = ${fmt(x)}.`}},
()=>{const n=ri(2,15),m=ri(2,5),s=ri(1,12),r=n*m-s;
 return {q:`I think of a number, multiply it by ${m}, subtract ${s}, and get ${fmt(r)}. What was my number?`,a:n,t:"num",hint:"Undo the steps in reverse order.",why:`Add ${s} back: ${fmt(r+s)}. Divide by ${m}: ${n}. That is solving ${m}n − ${s} = ${fmt(r)}.`}},
()=>{const a=ri(2,7),b=ri(1,15),c=ri(b+5,60),[fn,fd]=red(c-b,a),ans=Math.floor((c-b)/a)+1;
 return {q:`What is the smallest whole number x with ${a}x + ${b} > ${c}?`,a:ans,t:"num",hint:"Solve it like an equation, then think about the strict >.",why:`Subtract ${b}: ${a}x > ${c-b}. Divide by ${a}: x > ${F(fn,fd)}. The smallest whole number above that is ${ans}.`}},
()=>{const x=ri(1,12),y=ri(1,12);
 return {q:`If x + y = ${x+y} and x − y = ${fmt(x-y)}, what is x?`,a:x,t:"num",hint:"Add the two equations together.",why:`Adding them cancels y: 2x = ${x+y+(x-y)}, so x = ${x}. (And y = ${y}.)`}}
],
algebra:[
()=>{const a=ri(1,9),b=ri(1,9),askP=Math.random()<.5;
 return {q:`If (x + ${a})(x + ${b}) = x² + px + q, what is ${askP?"p":"q"}?`,a:askP?a+b:a*b,t:"num",hint:"Multiply each term in the first bracket by each in the second.",why:`x · x = x², then ${b}x + ${a}x = ${a+b}x, and ${a} × ${b} = ${a*b}. So p = ${a+b} and q = ${a*b}.`}},
()=>{const a=ri(1,9),b=ri(1,9);
 return {q:`x² + ${a+b}x + ${a*b} = (x + ${a})(x + ?)`,a:b,t:"num",hint:`Which number multiplies with ${a} to make ${a*b}?`,why:`You need two numbers with product ${a*b} and sum ${a+b}: ${a} and ${b}.`}},
()=>{let r,s;do{r=ri(1,9);s=ri(-9,9)}while(s===0||s===r);const B=-(r+s),C=r*s,L=Math.max(r,s);
 return {q:`What is the larger solution of x² ${B?termx(B,"x")+" ":""}${term(C)} = 0?`,a:L,t:"num",hint:`Find two numbers that multiply to ${fmt(C)} and add to ${fmt(-B)}.`,why:`It factors as (x ${term(-r)})(x ${term(-s)}) = 0. A product is zero only when a factor is, so x = ${fmt(r)} or x = ${fmt(s)}. The larger is ${fmt(L)}.`}},
()=>{const n=pick([20,30,40,50,60,70,80,90]),k=ri(1,4);
 return {q:`${n+k} × ${n-k}`,a:n*n-k*k,t:"num",hint:`Both are ${k} away from ${n}.`,why:`(${n} + ${k})(${n} − ${k}) = ${n}² − ${k}² = ${fmt(n*n)} − ${k*k} = ${fmt(n*n-k*k)}.`}},
()=>{const n=pick([20,30,40,50,60,70,80,90]),k=pick([1,2,-1,-2]);
 return {q:`${n+k}²`,a:(n+k)**2,t:"num",hint:"(a + b)² = a² + 2ab + b²",why:`(${n} ${term(k)})² = ${fmt(n*n)} ${term(2*n*k)} + ${k*k} = ${fmt((n+k)**2)}.`}},
()=>{const a=ri(2,9),b=ri(2,9),mul=Math.random()<.5;
 return mul?{q:`x<sup>${a}</sup> · x<sup>${b}</sup> = x<sup>?</sup>`,a:a+b,t:"num",hint:"Count the x’s being multiplied.",why:`${a} x’s times ${b} more x’s is ${a+b} x’s: exponents add.`}
 :{q:`(x<sup>${a}</sup>)<sup>${b}</sup> = x<sup>?</sup>`,a:a*b,t:"num",hint:`That is ${b} copies of x<sup>${a}</sup> multiplied together.`,why:`${b} groups of ${a} x’s is ${a*b} x’s: exponents multiply.`}},
()=>{let x,p,q;do{x=ri(-4,5);p=ri(-6,6);q=ri(-9,9)}while(!p||!q||!x);const v=x*x+p*x+q;
 return {q:`If x = ${fmt(x)}, what is x² ${termx(p,"x")} ${term(q)}?`,a:v,t:"num",hint:`Square first: ${par(x)}² is positive.`,why:`${par(x)}² = ${x*x}, and ${p} × ${par(x)} = ${fmt(p*x)}. So ${x*x} ${term(p*x)} ${term(q)} = ${fmt(v)}.`}}
],
geometry:[
()=>{const A=ri(20,100),B=ri(20,160-A),C=180-A-B;
 return {q:`A triangle has angles of ${A}° and ${B}°. What is the third angle, in degrees?`,a:C,t:"num",hint:"The three angles of a triangle sum to 180°.",why:`180 − ${A} − ${B} = ${C}.`}},
()=>{const a=ri(20,160);
 return {q:`Two angles sit side by side on a straight line. One is ${a}°. What is the other?`,a:180-a,t:"num",hint:"A straight line is a half turn.",why:`Angles on a straight line sum to 180°: 180 − ${a} = ${180-a}.`}},
()=>{const n=ri(5,12);
 return {q:`What do the interior angles of a ${n}-sided polygon add up to, in degrees?`,a:(n-2)*180,t:"num",hint:"From one corner, how many triangles can you cut it into?",why:`From one corner it splits into ${n} − 2 = ${n-2} triangles, so ${n-2} × 180 = ${fmt((n-2)*180)}.`}},
()=>{const [n,nm]=pick([[3,"equilateral triangle"],[4,"square"],[5,"regular pentagon"],[6,"regular hexagon"],[8,"regular octagon"],[9,"regular nonagon"],[10,"regular decagon"],[12,"regular dodecagon"]]),s=(n-2)*180;
 return {q:`How large is each interior angle of a ${nm}, in degrees?`,a:s/n,t:"num",hint:`Total the angles, then share equally among ${n}.`,why:`The total is (${n} − 2) × 180 = ${fmt(s)}, and ${fmt(s)} ÷ ${n} = ${s/n}.`}},
()=>{const t=pick([[3,4,5],[3,4,5],[5,12,13],[8,15,17],[7,24,25]]),k=t[0]===3?ri(1,4):ri(1,2),[a,b,c]=t.map(v=>v*k);
 return {q:`A right triangle has legs ${a} and ${b}. How long is the hypotenuse?`,a:c,t:"num",hint:"a² + b² = c²",why:`${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}, and √${c*c} = ${c}.`}},
()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]),k=t[0]===3?ri(1,4):ri(1,2),[a,b,c]=shuffle(t.slice(0,2)).concat([t[2]]).map(v=>v*k);
 return {q:`A right triangle has hypotenuse ${c} and one leg ${a}. How long is the other leg?`,a:b,t:"num",hint:"b² = c² − a²",why:`${c}² − ${a}² = ${c*c} − ${a*a} = ${b*b}, and √${b*b} = ${b}.`}},
()=>{let b,h;do{b=ri(3,20);h=ri(2,16)}while((b*h)%2);
 return {q:`A triangle has base ${b} and height ${h}. What is its area?`,a:b*h/2,t:"num",hint:"Two copies make a parallelogram.",why:`½ × ${b} × ${h} = ${b*h/2}.`}},
()=>{const r=ri(2,12),area=Math.random()<.5;
 return area?{q:`The area of a circle with radius ${r} is ? × π. What number goes in front of π?`,a:r*r,t:"num",hint:"A = πr²",why:`A = π × ${r}² = ${r*r}π.`}
 :{q:`The circumference of a circle with radius ${r} is ? × π. What number goes in front of π?`,a:2*r,t:"num",hint:"C = 2πr. π is defined as circumference ÷ diameter.",why:`C = 2 × π × ${r} = ${2*r}π.`}}
],
functions:[
()=>{let a=ri(1,5),b=ri(-9,9),x=ri(-5,6);if(!b)b=3;const v=a*x*x+b;
 return {q:`If f(x) = ${coef(a,"x²")} ${term(b)}, what is f(${fmt(x)})?`,a:v,t:"num",hint:"Substitute, and square before multiplying.",why:`${par(x)}² = ${x*x}, × ${a} = ${a*x*x}, ${term(b)} gives ${fmt(v)}.`}},
()=>{const x1=ri(-5,5),x2=x1+ri(1,6),y1=ri(-8,8),y2=ri(-8,8),[n,d]=red(y2-y1,x2-x1);
 return {q:`What is the slope of the line through (${fmt(x1)}, ${fmt(y1)}) and (${fmt(x2)}, ${fmt(y2)})?`,a:[n,d],t:"frac",hint:"Rise over run: change in y divided by change in x.",why:`(${fmt(y2)} − ${par(y1)}) ÷ (${fmt(x2)} − ${par(x1)}) = ${fmt(y2-y1)} ÷ ${x2-x1} = ${F(n,d)}.`}},
()=>{let m=ri(-4,5);if(!m)m=2;const b=ri(-9,9),x1=ri(1,5),x2=x1+ri(1,4),y1=m*x1+b,y2=m*x2+b;
 return {q:`A line passes through (${x1}, ${fmt(y1)}) and (${x2}, ${fmt(y2)}). Where does it cross the y-axis? (Give the y-value.)`,a:b,t:"num",hint:"Find the slope, then walk back to x = 0.",why:`Slope = ${fmt(y2-y1)} ÷ ${x2-x1} = ${fmt(m)}. Going back ${x1} step${x1>1?"s":""} from x = ${x1}: ${fmt(y1)} − ${par(m)} × ${x1} = ${fmt(b)}.`}},
()=>{const a=ri(2,5);let b=ri(-6,6);if(!b)b=1;const c=ri(-4,4),fg=Math.random()<.5;
 return fg?{q:`f(x) = ${a}x ${term(b)} and g(x) = x². What is f(g(${fmt(c)}))?`,a:a*c*c+b,t:"num",hint:"Inside first: find g first.",why:`g(${fmt(c)}) = ${c*c}, then f(${c*c}) = ${a} × ${c*c} ${term(b)} = ${fmt(a*c*c+b)}.`}
 :{q:`f(x) = ${a}x ${term(b)} and g(x) = x². What is g(f(${fmt(c)}))?`,a:(a*c+b)**2,t:"num",hint:"Inside first: find f first.",why:`f(${fmt(c)}) = ${fmt(a*c+b)}, then g(${fmt(a*c+b)}) = ${fmt((a*c+b)**2)}.`}},
()=>{const a=ri(2,9);let b=ri(-10,10);if(!b)b=5;const n=ri(-6,9),c=a*n+b;
 return {q:`If f(x) = ${a}x ${term(b)}, what input gives an output of ${fmt(c)}?`,a:n,t:"num",hint:"Reverse the steps.",why:`${fmt(c)} ${term(-b)} = ${fmt(c-b)}, then ÷ ${a} = ${fmt(n)}.`}},
()=>{const a=ri(1,6);let b=ri(-12,12);if(!b)b=-6;const [n,d]=red(-b,a);
 return {q:`Where does y = ${coef(a,"x")} ${term(b)} cross the x-axis? (Give x.)`,a:[n,d],t:"frac",hint:"On the x-axis, y = 0.",why:`Set y = 0: ${coef(a,"x")} = ${fmt(-b)}, so x = ${F(n,d)}.`}}
],
exponents:[
()=>{const n=ri(3,12),seq=Array.from({length:n},(_,i)=>fmt(2**(i+1)));
 return {q:`2<sup>${n}</sup>`,a:2**n,t:"num",hint:"Keep doubling. 2¹⁰ = 1,024 is a landmark.",why:`Doubling ${n} times: ${seq.join(", ")}.`}},
()=>{const b=pick([2,3,5,7]),m=ri(2,9),n=ri(2,9),k=ri(0,2);
 if(k===0)return {q:`${b}<sup>${m}</sup> × ${b}<sup>${n}</sup> = ${b}<sup>?</sup>`,a:m+n,t:"num",hint:"Multiplying powers of the same base adds exponents.",why:`${m} factors of ${b} times ${n} more is ${m+n}.`};
 if(k===1)return {q:`${b}<sup>${m}</sup> ÷ ${b}<sup>${n}</sup> = ${b}<sup>?</sup>`,a:m-n,t:"num",hint:"Dividing subtracts exponents.",why:`${m} − ${n} = ${fmt(m-n)}.${m<n?" A negative exponent means a reciprocal.":""}`};
 return {q:`(${b}<sup>${m}</sup>)<sup>${n}</sup> = ${b}<sup>?</sup>`,a:m*n,t:"num",hint:"A power of a power multiplies exponents.",why:`${n} copies of ${m} factors is ${m*n} factors.`}},
()=>{const b=pick([2,3,5,10]),n=ri(1,3);
 return {q:`Write ${b}<sup>−${n}</sup> as a fraction.`,a:[1,b**n],t:"frac",hint:"A negative exponent is a reciprocal.",why:`${b}<sup>−${n}</sup> = ${F(1,`${b}<sup>${n}</sup>`)} = ${F(1,b**n)}.`}},
()=>{const b=pick([2,3,5,10]),n=b===2?ri(2,10):b===3?ri(2,6):b===5?ri(2,5):ri(1,6);
 return {q:`log<sub>${b}</sub> ${fmt(b**n)}`,a:n,t:"num",hint:`What power of ${b} gives ${fmt(b**n)}?`,why:`${b}<sup>${n}</sup> = ${fmt(b**n)}, so the log is ${n}.`}},
()=>{const b=pick([2,3,10]),n=b===10?ri(1,3):ri(1,4);
 return {q:`log<sub>${b}</sub> ${F(1,b**n)}`,a:-n,t:"num",hint:"Which negative power gives a reciprocal?",why:`${F(1,b**n)} = ${b}<sup>−${n}</sup>, so the log is −${n}.`}},
()=>{const a=ri(1,4),b=ri(1,4);
 return {q:`log<sub>10</sub>(${fmt(10**a)} × ${fmt(10**b)})`,a:a+b,t:"num",hint:"Logs turn multiplication into addition.",why:`log ${fmt(10**a)} + log ${fmt(10**b)} = ${a} + ${b} = ${a+b}.`}},
()=>{const r=pick([2,3,4,6,8,9,12]);
 return {q:`Using the rule of 72, roughly how many years does money take to double at ${r}% growth per year?`,a:72/r,t:"num",hint:"72 ÷ rate.",why:`72 ÷ ${r} = ${72/r}. (The exact figure is close; the rule is an approximation.)`}},
()=>{const a=ri(2,9),n=ri(3,6);
 return {q:`${a} × 10<sup>${n}</sup>`,a:a*10**n,t:"num",hint:`10<sup>${n}</sup> is 1 followed by ${n} zeros.`,why:`${a} followed by ${n} zeros: ${fmt(a*10**n)}.`}}
]
});
