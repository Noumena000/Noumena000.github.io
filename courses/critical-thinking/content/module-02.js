window.COURSE.modules.push({
  n: 2, phase: 1,
  title: 'Claims and arguments',
  short: 'Claims and arguments',
  summary: 'An argument is a set of reasons offered in support of a conclusion. Finding the conclusion and the reasons in ordinary prose is the most useful single skill in the course.',

  question: `Two people say:

“You should vote, because it is your civic duty.”

“You should vote. It is your civic duty. Everyone says so.”

Is the second one a better argument, or just a louder one?`,

  lesson: `Most of what people call arguing is not arguing in this sense. Learning to see the difference is where critical thinking begins.

### Claims

A claim is a statement that is either true or false. “Water boils at 100 degrees Celsius at sea level” is a claim. “Close the door” and “Is it raining?” are not.

Claims come in kinds. Factual claims say what is the case. Evaluative claims say what is good or bad. Prescriptive claims say what should be done. Each kind is supported differently, and mixing them up is a common source of confusion.

### Arguments

An argument has one or more premises (reasons) and a conclusion (what the reasons are meant to support). Indicator words help: “because,” “since,” and “given that” often mark premises; “therefore,” “so,” and “it follows that” often mark conclusions. They are clues, not proof.

### Not every passage is an argument

Explanations account for something already accepted: “The bridge collapsed because the bolts corroded.” Arguments try to establish something not yet accepted. Descriptions, reports, and rhetoric can all contain claims without arguing.

### Standard form

To evaluate an argument, write it as numbered premises followed by a conclusion. This forces you to see what is actually being said.

### Implicit premises

Most real arguments leave something unstated. Supplying the missing premise, in its most reasonable form, is part of understanding the argument, and it often shows where the weakness is.

### The principle of charity

Reconstruct an argument so that it is as strong as it can reasonably be, then evaluate it. If you only attack weak versions, you learn nothing.`,

  example: `Passage: “Cities should invest in public transit. Cars cause congestion and pollution, and people will use transit if it is fast and cheap.”

1. Cars cause congestion and pollution.
2. People will use transit if it is fast and cheap.
3. (Implicit) Investment can make transit fast and cheap.
4. (Implicit) Reducing congestion and pollution is worth the cost of investment.
5. Therefore, cities should invest in public transit.

Writing it out shows that premises 3 and 4 carry the argument, and neither is defended. That is where a serious reader would push.`,

  reading: `The Internet Encyclopedia of Philosophy entry “Deductive and Inductive Arguments” (free online). Read the first two sections only.

Then read one letter to the editor or opinion column and reconstruct its argument in standard form.`,

  practice: [
    {
      prompt: 'Label each as a claim, a question, a command, or an explanation: (a) “The meeting moved to Friday.” (b) “Why did the meeting move?” (c) “The meeting moved because the director was away.” (d) “Please attend.”',
      model: `(a) is a claim: it is true or false. (b) is a question. (c) is an explanation: it accounts for something already accepted, namely that the meeting moved. (d) is a command.

If you hesitated over (c), notice the test: is the speaker trying to convince you that the meeting moved, or to account for why it did? Only the second is going on.`
    },
    {
      prompt: 'Reconstruct three short arguments from the news or social media in standard form. Mark implicit premises with a different label.',
      model: `A reconstruction has numbered premises and a final “Therefore” line. For each argument, ask “What would have to be true for these reasons to support this conclusion?” The answer is usually an implicit premise.

For example, “This restaurant has a long line, so the food must be good” has the implicit premise “Long lines mostly form for good food.” Writing it out makes it easy to question (long lines can also come from slow service or novelty).`
    },
    {
      prompt: 'For each of those arguments, write the one premise you think is weakest and why.',
      model: `The weakest premise is usually an implicit one, or a general claim that sounds obvious. Say why in a sentence, and say what would strengthen it: “The premise that long lines mean good food is weak, because lines also form for cheap food and slow service. It would be stronger if the argument cited reviews.”

Avoid choosing the premise merely because you dislike the conclusion. Pick the one that fails to support it.`
    },
    {
      prompt: 'Take an argument you disagree with. Rewrite it in the strongest form you can, then explain what is still wrong with it, if anything.',
      model: `This is the principle of charity at work. Fix the unclear wording, supply the best version of the implicit premises, and add support the author could have given. Then evaluate.

Often one of three things happens: the strengthened argument is much better than you thought, and you must take it more seriously; it still fails, and now you can say precisely where; or it turns out to depend on a value you reject, which clarifies the disagreement.`
    }
  ],

  pushback: `Write the best objection to the principle of charity.

When might being generous to an argument mislead you about what someone actually meant?`,

  notebook: `Which of your own opinions turned out, once written in standard form, to rest on an unstated premise?`,

  selfcheck: [
    {
      q: 'What is the difference between a premise and a conclusion?',
      options: [
        'A premise is a reason offered; a conclusion is what the reasons are meant to support.',
        'A premise is always true; a conclusion is always false.',
        'A premise comes first in the text; a conclusion comes last.',
        'There is no difference; both are claims.'
      ],
      a: 0,
      why: 'The difference is the role each claim plays in the argument, not its position in the text. A conclusion can appear first.'
    },
    {
      q: '“The bridge collapsed because the bolts corroded.” Is this best described as an argument, an explanation, or a command?',
      options: [
        'An argument, because it contains “because.”',
        'An explanation, because it accounts for something already accepted.',
        'A command, because it tells us what to do.',
        'None of these; it is a question.'
      ],
      a: 1,
      why: 'The collapse is not in doubt. The sentence accounts for it. “Because” can introduce either a premise or an explanation.'
    },
    {
      q: 'Why is “because” not always a reliable indicator of a premise?',
      options: [
        'It sometimes introduces an explanation rather than a reason for believing something.',
        'It is only used in formal logic.',
        'It always marks a conclusion.',
        'It never appears in real arguments.'
      ],
      a: 0,
      why: 'Indicator words are clues. You still need to ask whether the speaker is trying to establish something or merely account for it.'
    },
    {
      q: 'What does the principle of charity ask of you?',
      options: [
        'To agree with the other person.',
        'To donate time to hard arguments.',
        'To reconstruct an argument in its strongest reasonable form before evaluating it.',
        'To ignore flaws in arguments from friends.'
      ],
      a: 2,
      why: 'Charity is about fair reconstruction, not agreement. It guards against defeating a weak version of a view while the real view survives.'
    },
    {
      q: 'Why write an argument in standard form?',
      options: [
        'It makes arguments sound more scientific.',
        'It makes the premises and the conclusion explicit, so you can see what is actually being claimed.',
        'It makes the argument shorter.',
        'It guarantees the argument is valid.'
      ],
      a: 1,
      why: 'Standard form does not make an argument good. It makes the structure visible, which is what you need to evaluate it.'
    }
  ],

  extension: `Draw a map of a longer argument: each premise as a box, arrows to the conclusion, and a dotted arrow for every implicit premise.`
});
