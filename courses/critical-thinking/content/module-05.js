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
      q: 'A smoker says, “My doctor smokes, so why should I quit?” Which pattern is closest?',
      options: [
        'Straw man: it misstates the doctor’s advice so that it is easier to dismiss.',
        'Tu quoque: it rejects advice because the adviser is inconsistent.',
        'False dilemma: it treats quitting and not quitting as the only choices.',
        'Appeal to popularity: it treats other smokers as evidence that smoking is fine.'
      ],
      a: 1,
      why: 'The doctor’s own habits do not change the medical facts about smoking, so they are irrelevant to whether the advice is sound. Naming the pattern is only the start. The real point is that advice should be judged on the evidence, whoever gives it.'
    },
    {
      q: 'Two claims: (1) “A cardiologist says this diet is risky for people with heart disease.” (2) “A famous actor says this supplement cures arthritis.” Which is a fallacious appeal to authority?',
      options: [
        'Only the actor’s: acting is not expertise in treating arthritis.',
        'Only the cardiologist’s claim, because doctors often have financial interests.',
        'Both, because citing any authority at all is always a fallacy.',
        'Neither, because both speakers are well known in their fields.'
      ],
      a: 0,
      why: 'Relying on a genuine expert speaking within their field is reasonable and unavoidable. The fallacy is relying on someone with no relevant expertise. A possible financial interest is a reason to check further, not a fallacy. Context decides whether a pattern is a fallacy.'
    },
    {
      q: '“If we let students retake one test, soon no test will count for anything.” What would a good version of this argument need to show?',
      options: [
        'A stronger warning, stated more forcefully, so that people take the risk seriously.',
        'One school where allowing retakes led to a visible collapse in its standards.',
        'Evidence for each step from one allowed retake to tests that no longer count.',
        'A long list of other policies that were once loosened and later regretted.'
      ],
      a: 2,
      why: 'A slippery slope is only as strong as its weakest step, so a good version supplies evidence for each link. One school is a hasty generalization, and a list of regretted policies shows that loosening sometimes goes wrong, not that it will here. If you cannot imagine what a good version would need, the original may be an assertion dressed as an argument.'
    },
    {
      q: 'You told a friend, “Everyone I know agrees with me, so I’m right,” and it landed badly. Which rewrite is stronger, not just softer?',
      options: [
        '“Everyone should agree with me. The people who don’t simply haven’t thought it through.”',
        '“I think this is probably true, for three reasons, and I would like to hear the best objection.”',
        '“Most of the people I know agree with me, and in the end that is what really counts as evidence.”',
        '“It is only my opinion, so there is no point arguing about it, and nobody can be wrong.”'
      ],
      a: 1,
      why: 'The stronger version gives reasons and invites testing. The first swaps one fallacy for another and assumes motives, the third still appeals to popularity, and the last retreats instead of reasoning. Often the stronger version is simply more modest.'
    }
  ],

  pushback: `Write the best case that fallacy-labeling does more harm than good in public debate.`,

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
