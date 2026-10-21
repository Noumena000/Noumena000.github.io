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
      q: '“If you study, you pass. You passed. So you studied.” Why is this argument invalid?',
      options: [
        'Because the premises are false, so the conclusion cannot follow from them at all.',
        'Because someone could pass without studying, even if both premises are true.',
        'Because conditional statements cannot appear in any valid argument at all.',
        'Because the conclusion, that you studied, happens to be false in this case.'
      ],
      a: 1,
      why: 'Validity asks whether the premises, if true, would guarantee the conclusion. Here they would not: a person who already knew the material could pass without studying. This form is called affirming the consequent. Invalid does not mean the conclusion is false.'
    },
    {
      q: 'Which of these arguments is valid but not sound?',
      options: [
        'All fish can fly. A salmon is a fish. So a salmon can fly.',
        'Paris is in France. France is in Europe. So grass is green.',
        'Some doctors are kind. Some kind people are rich. So some doctors are rich.',
        'All mammals are warm-blooded. Whales are mammals. So whales are warm-blooded.'
      ],
      a: 0,
      why: 'The first has a flawless form, but its first premise is false, so it is unsound. The second has a true conclusion that does not follow from its premises. The third is invalid, since the rich, kind people need not be doctors. The last is both valid and sound.'
    },
    {
      q: 'The form “If P then Q. Q. Therefore P” is invalid. Which argument is a counterexample that shows it?',
      options: [
        'If it is a dog, it is a mammal. It is a dog. So it is a mammal.',
        'If it rained, the street is wet. The street is dry. So it did not rain.',
        'If it is a dog, it is a mammal. It is a mammal. So it is a dog.',
        'If it is a dog, it is a mammal. It is not a dog. So it is not a mammal.'
      ],
      a: 2,
      why: 'The third has the same form as the target, and a cat makes both premises true and the conclusion false. One counterexample is enough to show the form cannot be trusted. The first two are valid forms (modus ponens and modus tollens), and the last is a different invalid form (denying the antecedent).'
    },
    {
      q: 'Suppose it is true that “If interest rates rise, house prices will fall.” Prices did not fall. What follows?',
      options: [
        'Nothing follows, because many things affect house prices.',
        'Interest rates must have fallen.',
        'The original statement must have been false.',
        'Interest rates did not rise.'
      ],
      a: 3,
      why: 'This is modus tollens: if P then Q, not Q, therefore not P. In real life you may doubt the conditional itself, since other things do move prices, but that challenges a premise, not the form. And “did not rise” does not mean “fell.” From “prices fell” you could not conclude that rates rose.'
    }
  ],

  pushback: `Valid arguments cannot tell you anything the premises did not already contain.

Write the best response to the objection that deduction is therefore useless for learning new things.`,

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
