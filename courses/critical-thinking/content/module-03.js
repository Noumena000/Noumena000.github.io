window.COURSE.modules.push({
  n: 3, phase: 2,
  title: 'Deductive reasoning',
  short: 'Deductive reasoning',
  summary: 'A deductive argument is valid when its conclusion cannot be false if its premises are true. Validity is about structure, not about whether the premises are actually true.',

  question: `“All politicians are liars. Maria is a politician. Therefore Maria is a liar.”

Is this a good argument?

Now consider: “All birds can fly. Penguins are birds. Therefore penguins can fly.” What exactly is wrong with it, and is it the same thing that might be wrong with the first?`,

  lesson: `Separating two questions is the central lesson of logic: does the conclusion follow from the premises, and are the premises true?

### Validity

An argument is valid if, assuming all the premises are true, the conclusion must be true. Both arguments above are valid. Their form guarantees the conclusion if the premises hold.

### Soundness

A sound argument is valid and has true premises. The penguin argument is valid but unsound, because its first premise is false. Always ask two questions: does the conclusion follow, and are the premises true?

### Common valid forms

- **Modus ponens:** If P then Q. P. Therefore Q. (If it rains, the street is wet. It rains. So the street is wet.)
- **Modus tollens:** If P then Q. Not Q. Therefore not P. (If it rained, the street would be wet. It is not wet. So it did not rain.)
- **Hypothetical syllogism:** If P then Q. If Q then R. Therefore, if P then R.
- **Disjunctive syllogism:** Either P or Q. Not P. Therefore Q.

### Common invalid forms

- **Affirming the consequent:** If P then Q. Q. Therefore P. (If it rained, the street is wet. The street is wet. So it rained. But a street cleaner may have passed.)
- **Denying the antecedent:** If P then Q. Not P. Therefore not Q. (If it rained, the street is wet. It did not rain. So the street is dry. Again, other causes are possible.)

### The counterexample method

To show that a form is invalid, find an argument of the same form with true premises and a false conclusion. One counterexample is enough.

### Why it matters in daily life

People often treat “if P then Q” as if it meant “if Q then P.” Noticing the difference prevents many bad inferences about health, politics, and relationships.`,

  example: `“If the company were failing, it would be laying people off. It is laying people off. So the company is failing.”

This affirms the consequent. Counterexample: a healthy company may also lay people off while restructuring. The argument fails, though its conclusion might still be true.

Invalid does not mean false.`,

  reading: `Choose one of two free texts:

- *forall x: Calgary Remix* by P.D. Magnus and others (a free open-access logic textbook), or
- the first chapter of *The Logic Manual* by Volker Halbach (a free PDF from Oxford).

Read only the opening material on validity and soundness. You do not need the symbolic parts.`,

  practice: [
    {
      prompt: 'Decide whether each argument is valid and whether it is sound: (a) All mammals are warm-blooded. Whales are mammals. So whales are warm-blooded. (b) Some doctors are kind. Some kind people are rich. So some doctors are rich. (c) If you study, you pass. You passed. So you studied.',
      model: `(a) Valid and sound: the form guarantees the conclusion, and the premises are true.

(b) Invalid. The kind people who are rich need not be doctors. Picture a world where every kind doctor is poor and every rich kind person is a lawyer: both premises true, conclusion false. So it cannot be sound.

(c) Invalid: it affirms the consequent. Someone could pass without studying (for example, by already knowing the material).`
    },
    {
      prompt: 'Write one valid argument with a false premise, and one invalid argument with all true premises and a true conclusion.',
      model: `Valid with a false premise: “All fish can fly. A salmon is a fish. So a salmon can fly.” The form is flawless, but the first premise is false, so the argument is unsound.

Invalid with true premises and a true conclusion: “Paris is in France. France is in Europe. So grass is green.” The conclusion is true, but it does not follow from the premises. This shows that a true conclusion does not make an argument valid.`
    },
    {
      prompt: 'For the form in (c) above, write a counterexample that shows the form is invalid.',
      model: `You need an argument of the same form with true premises and a false conclusion. For example: “If it is a dog, it is a mammal. It is a mammal. So it is a dog.”

Both premises are true of a cat, and the conclusion is false of a cat. Because a single argument of this form can go from true premises to a false conclusion, the form itself is invalid.`
    },
    {
      prompt: 'Find an everyday statement of the form “if P then Q” in the news. Write what follows from it and what does not.',
      model: `Take “If interest rates rise, house prices will fall.” From it, together with “rates rose,” you may conclude that prices will fall (modus ponens). Together with “prices did not fall,” you may conclude that rates did not rise (modus tollens).

You may not conclude, from “prices fell,” that rates rose (affirming the consequent), nor from “rates did not rise,” that prices will not fall (denying the antecedent). Many other things can move prices.`
    }
  ],

  pushback: `Valid arguments cannot tell you anything the premises did not already contain.

Write the best response to the objection that deduction is therefore useless for learning new things.`,

  notebook: `Where in your own reasoning do you move from “if P then Q” to “Q, so P”?`,

  selfcheck: [
    {
      q: 'What does it mean for an argument to be valid?',
      options: [
        'Its premises are all true.',
        'If its premises were true, its conclusion could not be false.',
        'Its conclusion is true.',
        'It is persuasive to most people.'
      ],
      a: 1,
      why: 'Validity is a relation between premises and conclusion. It says nothing about whether the premises are actually true.'
    },
    {
      q: 'Can a valid argument have a false conclusion?',
      options: [
        'No, never.',
        'Yes, if at least one premise is false.',
        'Yes, but only if the argument is also unsound for no reason.',
        'Only in formal logic.'
      ],
      a: 1,
      why: 'Validity guarantees truth only when the premises are true. A valid argument with a false premise can reach a false conclusion.'
    },
    {
      q: 'What is the difference between valid and sound?',
      options: [
        'Sound arguments are valid and have true premises.',
        'They mean the same thing.',
        'Valid arguments have true conclusions; sound arguments have false ones.',
        'Sound arguments are shorter.'
      ],
      a: 0,
      why: 'Soundness adds the requirement that the premises are actually true. A sound argument must therefore have a true conclusion.'
    },
    {
      q: 'Which is an example of affirming the consequent?',
      options: [
        'If it rains, the street is wet. It rains. So the street is wet.',
        'If it rains, the street is wet. The street is wet. So it rained.',
        'If it rains, the street is wet. The street is dry. So it did not rain.',
        'Either it rained or it snowed. It did not snow. So it rained.'
      ],
      a: 1,
      why: 'It starts from the “then” part (the consequent) and infers the “if” part. The street could be wet for other reasons.'
    },
    {
      q: 'How does a counterexample show that a form is invalid?',
      options: [
        'It shows that the conclusion is false in the original argument.',
        'It is an argument of the same form with true premises and a false conclusion.',
        'It shows that the premises are false.',
        'It proves the argument is unsound.'
      ],
      a: 1,
      why: 'If any argument of the same form can have true premises and a false conclusion, then the form does not guarantee anything.'
    }
  ],

  extension: `Try the Wason selection task (search for it online). Commit to your answer in writing before reading an explanation, and note why most people get it wrong.`
});
