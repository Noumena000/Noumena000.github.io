window.COURSE.modules.push({
  n: 5, phase: 2,
  title: 'Informal fallacies',
  short: 'Informal fallacies',
  summary: 'A fallacy is a pattern of reasoning that looks persuasive but fails to support its conclusion. Knowing the names helps only if you can tell, in a real case, whether the pattern applies.',

  question: `A speaker says, “My opponent wants to cut the defense budget, so he clearly wants the country defenseless.”

Another says, “You can’t trust her argument about taxes; she’s rich.”

Both are doing something suspect. Is it the same thing, and does it make their conclusions false?`,

  lesson: `Accusing people of fallacies you cannot explain is itself a common mistake. This module gives you a small working set and, more importantly, the habit of saying why a pattern fails in a particular case.

### What a fallacy is, and is not

A fallacy is a flaw in the link between reasons and conclusion. A conclusion reached by a fallacious argument may still be true; the argument just fails to show it. “Fallacy” does not mean “false.”

### Context matters

Many patterns are fallacious in one setting and reasonable in another. Citing an authority is fine when the person is a genuine expert in the relevant field and the claim is within it. Calling something a fallacy requires showing why it fails here.

### A working set

Learn these well rather than memorizing fifty.

| Pattern | What goes wrong | Example |
| --- | --- | --- |
| Ad hominem | Attacks the person instead of the argument | “You can’t trust her tax argument; she’s rich.” |
| Straw man | Misrepresents a view to refute a weaker version | “He wants to cut defense, so he wants us defenseless.” |
| False dilemma | Presents two options as the only ones | “Either we ban it or we accept chaos.” |
| Slippery slope | Claims a small step will inevitably lead to disaster, without showing the steps | “Allow one exception and soon there will be no rules.” |
| Appeal to authority | Treats an unqualified or unrepresentative authority as proof | “A famous actor says this supplement works.” |
| Appeal to popularity | Treats widespread belief as evidence of truth | “Everyone knows it’s true.” |
| Post hoc | Assumes that because B followed A, A caused B | “I wore my lucky socks and we won.” |
| Begging the question | Assumes the conclusion in a premise | “It’s true because it says so in the book, which is always true.” |
| Equivocation | Uses one word with two meanings | “A feather is light; what is light cannot be dark; so a feather cannot be dark.” |
| Hasty generalization | Draws a broad claim from too few cases | “I met two rude tourists, so tourists are rude.” |
| Tu quoque | Rejects advice because the adviser is inconsistent | “You smoke, so your warning about smoking is wrong.” |

### Ad hominem, carefully

Attacking character is a fallacy when used to dismiss an argument. It is not a fallacy to doubt testimony from someone with a clear reason to lie. The question is whether the personal fact is relevant to the claim.

### Fallacies in yourself

The most important use of this module is catching these patterns in your own thinking, especially the ones that flatter your side.

### Beyond naming

Better than saying “that’s a slippery slope” is asking: what is the evidence for each step in the chain?`,

  example: `“Violent video games cause violence, because every violent offender I read about played them.”

Possible problems:

- Hasty generalization: the sample comes from news stories, which select for the dramatic.
- Post hoc: playing came before offending, but most people who play never offend.
- A missing comparison: what fraction of non-offenders also played?

Naming the flaws is the start. The real work is saying what evidence would settle it.`,

  reading: `The Internet Encyclopedia of Philosophy entry “Fallacies.” If you want a deeper treatment of how philosophers debate what even counts as a fallacy, also read the Stanford Encyclopedia of Philosophy entry on fallacies. Both are free online.`,

  practice: [
    {
      prompt: 'Match each to a pattern in the table: (a) “My doctor smokes, so why should I quit?” (b) “Every great leader was ruthless, so to lead you must be ruthless.” (c) “You’re either with us or against us.” (d) “All banks are safe, since they are insured, and insured things are safe.”',
      model: `(a) Tu quoque: the doctor’s inconsistency does not change the medical facts about smoking.

(b) Hasty generalization, and also a possible post hoc or confound problem: ruthlessness may not be what made leaders great, and ruthless people who failed are missing from the sample.

(c) False dilemma: there are many positions between “with us” and “against us.”

(d) Begging the question, and a hint of equivocation on “safe”: the argument leans on “insured things are safe” without showing it.`
    },
    {
      prompt: 'Collect three examples of questionable reasoning from advertising, politics, or comments sections. Name the pattern and explain why it fails in that case.',
      model: `For each, avoid stopping at the label. A strong explanation says what the argument claims, what it would need to show, and what is actually offered.

“Eight out of ten users prefer our brand” may be fine or misleading depending on who was asked and compared with what. “Nine out of ten dentists recommend it” raises questions about which dentists and which alternatives. Context decides whether a pattern is actually a fallacy.`
    },
    {
      prompt: 'For each example, write what a good version of the argument would need to show.',
      model: `A good version supplies the missing link. For an appeal to authority: evidence that the person is an expert in this specific field and that experts there broadly agree. For a slippery slope: evidence for each step in the chain. For a generalization: a larger, more representative sample.

If you cannot imagine what a good version would need, the original may be an assertion dressed as an argument.`
    },
    {
      prompt: 'Write one argument you have made recently that was weaker than you wanted. Which pattern was it closest to?',
      model: `Most people find this one humbling and useful. Common answers: a straw man when angry, an appeal to popularity when unsure, a false dilemma when tired.

Do not stop at the label. Write what you would say instead. Often the stronger version is simply more modest: “I think this is probably true, for these reasons,” in place of “Everyone knows this.”`
    }
  ],

  pushback: `Write the best case that fallacy-labeling does more harm than good in public debate.`,

  notebook: `Which fallacy are you most tempted to use when you are angry, tired, or sure you are right?`,

  selfcheck: [
    {
      q: 'Does a fallacious argument always have a false conclusion?',
      options: [
        'Yes, because the reasoning is bad.',
        'No. The conclusion might be true; the argument just fails to show it.',
        'Only if the fallacy is an ad hominem.',
        'Yes, if the speaker is dishonest.'
      ],
      a: 1,
      why: 'A fallacy is a flaw in the support, not proof of falsity. A conclusion can be true for reasons the argument never gave.'
    },
    {
      q: 'When is an appeal to authority legitimate?',
      options: [
        'When the person is famous.',
        'When the person is a genuine expert in the relevant field and the claim is within it.',
        'When many people trust the person.',
        'Never.'
      ],
      a: 1,
      why: 'Relying on real experts is reasonable and unavoidable. The fallacy is relying on an unqualified or unrepresentative authority.'
    },
    {
      q: 'What is a straw man?',
      options: [
        'A weak argument that someone else has made.',
        'Misrepresenting a view so that a weaker version can be refuted.',
        'Refusing to listen to an opponent.',
        'Citing an irrelevant statistic.'
      ],
      a: 1,
      why: 'It feels convincing because the refutation works, but it refutes something the opponent never said.'
    },
    {
      q: 'How do you distinguish post hoc reasoning from a real causal argument?',
      options: [
        'A real causal argument involves a longer time gap.',
        'A real causal argument rules out other explanations and shows more than that B followed A.',
        'Post hoc reasoning always involves superstition.',
        'You cannot distinguish them.'
      ],
      a: 1,
      why: 'Sequence alone is weak evidence. Good causal arguments show a mechanism, a comparison, or controlled evidence.'
    },
    {
      q: 'Why is naming a fallacy not enough?',
      options: [
        'Because the names are often wrong.',
        'Because the point is to show why the reasoning fails in this case and what would fix it.',
        'Because fallacies are not real.',
        'Because naming is considered rude.'
      ],
      a: 1,
      why: 'A label is a starting point. The real work is explaining the gap between the reasons and the conclusion.'
    }
  ],

  extension: `Take a debate you have seen and rewrite both sides’ arguments so that neither contains a fallacy. Does the disagreement survive?`
});
