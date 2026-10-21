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
      q: 'Everyone already knows the meeting moved to Friday. Someone adds: “The meeting moved because the director was away.” What is this?',
      options: [
        'An argument, because “because” always introduces a reason for believing something.',
        'An explanation, because it accounts for something already accepted.',
        'A command, because it implies the meeting should have been rescheduled.',
        'A question, because it invites a reply about why the director was away.'
      ],
      a: 1,
      why: 'The speaker is not trying to convince you that the meeting moved. That is already agreed. They are accounting for it. “Because” can introduce either a premise or an explanation, so ask what the speaker is trying to do.'
    },
    {
      q: '“This restaurant has a long line, so the food must be good.” Which unstated premise does this argument need?',
      options: [
        'Restaurants with good food are usually crowded at dinner time.',
        'People only wait in line when they are hungry.',
        'Long lines mostly form for good food.',
        'The speaker has eaten here before and liked it.'
      ],
      a: 2,
      why: 'The argument moves from the line to the food, so it needs “long lines mostly form for good food.” The first option runs the other way (good food leads to crowds), which would not support the conclusion. Writing the premise out makes it easy to question: lines also form for cheap food, slow service, or novelty.'
    },
    {
      q: 'A friend argues: “The city should build a new stadium. Stadiums bring in tourists, and tourists spend money.” Which premise carries the argument but is never defended?',
      options: [
        'Stadiums bring in tourists from outside the city who would not otherwise visit.',
        'Tourists spend money on hotels, meals, and tickets while they are in town.',
        'The city has enough empty land for a large new building near the center.',
        'Tourist spending will outweigh what the stadium costs to build and run.'
      ],
      a: 3,
      why: 'The stated premises are plausible, and they only support the conclusion if an unstated one holds: that the benefit outweighs the cost. Look for the premise that fails to support the conclusion, not the one that merely makes you uneasy about it.'
    },
    {
      q: 'Someone says: “Free school lunches are pointless. Kids who need food will just eat at home.” Which response best follows the principle of charity?',
      options: [
        'Restate it at its strongest, as a claim about food at home, and test that.',
        'Answer the exact words, pointing out that some kids do not have enough at home.',
        'Assume the speaker does not care about children, and answer that attitude.',
        'Set the argument aside and argue for your own position on school lunches.'
      ],
      a: 0,
      why: 'Charity means reconstructing the argument as strongly as is reasonable before you evaluate it. Here that shows what the argument really depends on: a factual premise about food at home. Answering only the careless wording teaches you little, and the last two do not engage with the argument at all.'
    }
  ],

  pushback: `Write the best objection to the principle of charity.

When might being generous to an argument mislead you about what someone actually meant?`,

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
