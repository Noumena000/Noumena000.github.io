window.COURSE.modules.push({
  n: 11, phase: 5,
  title: 'Reasoning about values',
  short: 'Reasoning about values',
  summary: 'Moral questions can be reasoned about, not merely felt. The same tools apply: clear terms, tested premises, strongest objections.',

  question: `A runaway trolley will kill five people unless you divert it onto a side track, where it will kill one. Most people say diverting is acceptable.

Now suppose the only way to stop it is to push a large stranger onto the track. Most people say no.

The numbers are the same. What is different, and what should we make of our own reactions?`,

  lesson: `The difference with moral reasoning is that the central premises are about what matters, not only about what is the case.

### Is and ought

Facts alone do not logically entail values. “Many people lie” does not by itself entail “lying is acceptable.” Moral arguments need at least one moral premise, and that premise is where the real disagreement lives. David Hume drew attention to this gap, and philosophers still argue about how to bridge it.

### Three families of moral theory

Each captures something important, and each faces serious objections.

| Approach | Core idea | Strength | Standard objection |
| --- | --- | --- | --- |
| Consequentialism | Right action produces the best overall outcomes | Takes everyone’s welfare seriously | Seems to permit terrible acts for good totals |
| Deontology | Some acts are required or forbidden regardless of outcomes | Respects rights and duties | Rigid; what if rules conflict or stakes are huge? |
| Virtue ethics | Ask what a person of good character would do | Attends to character and practical wisdom | Gives limited guidance on hard cases |

### Thought experiments

A thought experiment isolates one factor in a made-up case so that you can see what you think about it. Trolley cases, introduced by Philippa Foot and developed by Judith Jarvis Thomson, test whether doing and allowing, or using a person as a means, matter morally. Critics note that bizarre cases may not guide real life; defenders say they clarify principles.

### Reflective equilibrium

This is a method of moving back and forth between general principles and judgments about particular cases, adjusting each until they fit together. If a principle yields a verdict you cannot accept, either revise the principle or doubt the judgment.

### Consistency

If you treat two cases differently, you owe an account of the relevant difference. Much moral argument is about whether a proposed difference really is relevant.

### Moral disagreement

Disagreement does not by itself show there is no right answer: people have disagreed about slavery and about the shape of the Earth. Nor does it show that one side is foolish. Ask whether the disagreement is about facts, about the weight of shared values, or about basic principles.

### Emotion and reason

Disgust and sympathy are data, not verdicts. They can alert us to something we have overlooked, and they can reflect prejudice. Examine them without ignoring them.

### Humility under uncertainty

On hard moral questions, a reasonable person can hold a view with moderate confidence while taking seriously the possibility that they are mistaken.`,

  example: `Principle: “It is wrong to break a promise.”

Case: you promised to meet a friend, but on the way you encounter someone who needs urgent help. Most people say you should help.

So the principle needs refining: perhaps promises can be outweighed, perhaps only by serious needs, perhaps you owe your friend an explanation. Each revision is a move toward reflective equilibrium.`,

  reading: `Choose one:

- Peter Singer, “Famine, Affluence, and Morality” (1972), widely available online, or
- Philippa Foot, “The Problem of Abortion and the Doctrine of the Double Effect” (1967), for the origin of trolley cases.

State the central argument of your chosen reading in standard form (module 2).`,

  practice: [
    {
      prompt: 'Consider the trolley and footbridge cases. Write what distinguishes them for you, then test whether that difference holds in a third variation of your own design.',
      model: `Common candidates for the difference: in the footbridge case you use the person as a means, you cause the harm directly with your hands, or you must act on someone who is not already in danger.

Then test it: design a variation that keeps the proposed difference but changes your intuition, or removes the difference but keeps your intuition. If either happens, your explanation is incomplete. That is not a failure. It is how the method makes progress.`
    },
    {
      prompt: 'Pick a moral principle you hold. Write two cases where it gives an uncomfortable answer. Decide whether to revise the principle or accept the verdict.',
      model: `For example, “Never lie.” Uncomfortable cases: lying to a violent person about where their intended victim is hiding; telling a gentle white lie about a gift. You may revise the principle (“Never lie, except to prevent serious harm”) or accept the verdict.

Notice what each revision commits you to. A rule with exceptions needs an account of when the exceptions apply, or it becomes a license for convenience.`
    },
    {
      prompt: 'Take a contested public issue. Separate the factual disagreements from the value disagreements, and say what evidence could bear on each.',
      model: `Many public debates mix the two. Factual disagreements (what a policy actually does, how large an effect is) can in principle be settled by evidence. Value disagreements (how to weigh liberty against safety, present against future people) cannot be settled that way, though they can be clarified.

If you find that most of the disagreement is factual, the best next step is investigation. If it is mostly about values, the best next step is understanding the other side’s weights.`
    },
    {
      prompt: 'Write a one-page argument for a moral conclusion you hold, in standard form. Mark the moral premises.',
      model: `Number your premises and put the conclusion last. Mark which premises are factual and which are moral. At least one must be moral.

Then look at the moral premises: those are the ones a thoughtful opponent will challenge. Ask whether you could defend each, and what you would say to someone who rejects it.`
    }
  ],

  pushback: `Write the strongest case that moral questions have no objective answers.

Then write the strongest reply.`,

  notebook: `Which of your moral convictions did you simply inherit? Do you endorse it on reflection?`,

  selfcheck: [
    {
      q: 'Why do moral arguments need at least one moral premise?',
      options: [
        'Because facts alone do not logically entail values.',
        'Because moral arguments are always invalid.',
        'Because philosophers prefer it.',
        'Because moral premises are always true.'
      ],
      a: 0,
      why: 'Hume’s point is that you cannot derive an “ought” from an “is” alone. Somewhere a value premise must come in.'
    },
    {
      q: 'Which pairing of a moral approach with its standard objection is correct?',
      options: [
        'Consequentialism: seems to permit terrible acts for good totals.',
        'Deontology: ignores rights.',
        'Virtue ethics: ignores character.',
        'Consequentialism: ignores welfare.'
      ],
      a: 0,
      why: 'Each approach captures something. Consequentialism takes welfare seriously but can seem to justify terrible acts for good totals.'
    },
    {
      q: 'What does a thought experiment aim to do?',
      options: [
        'Predict what will happen in real life.',
        'Isolate one factor in a made-up case so you can see what you think about it.',
        'Prove a theory.',
        'Entertain.'
      ],
      a: 1,
      why: 'By controlling the details, you learn which features of a case actually drive your judgment.'
    },
    {
      q: 'What is reflective equilibrium?',
      options: [
        'Staying calm during an argument.',
        'Adjusting principles and judgments about cases back and forth until they fit together.',
        'Agreeing with the majority.',
        'Avoiding moral questions.'
      ],
      a: 1,
      why: 'Neither principles nor case judgments are treated as fixed. Each can be revised in light of the other.'
    },
    {
      q: 'Why does moral disagreement not settle whether there is a right answer?',
      options: [
        'Because disagreement is always insincere.',
        'Because people have disagreed about matters with right answers, such as the shape of the Earth.',
        'Because moral questions have no answers.',
        'Because disagreement shows that both sides are right.'
      ],
      a: 1,
      why: 'Disagreement alone does not show there is no fact of the matter. The question needs to be argued on its merits.'
    }
  ],

  extension: `Read Thomson’s “The Trolley Problem” (1985) and write 300 words on whether her proposed solution changes your view.`
});
