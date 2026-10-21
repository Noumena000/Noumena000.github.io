window.COURSE.modules.push({
  n: 7, phase: 3,
  title: 'Language and definitions',
  short: 'Language and definitions',
  summary: 'Many disagreements that look like clashes of belief are really clashes of meaning, and many arguments succeed only because a word quietly changes sense midway.',

  question: `Two friends argue about whether a hot dog is a sandwich. They agree on every fact about hot dogs and sandwiches.

What are they actually disagreeing about, and is there a fact of the matter?`,

  lesson: `Careful reasoners check what the words mean before they check what the claims say.

### Verbal and substantive disagreement

A disagreement is verbal when the parties use a key term differently. It is substantive when they disagree about the world even after agreeing on terms. The first test to run in any dispute: “What do you mean by that word?”

### Ambiguity

A term is ambiguous when it has several distinct meanings. “Bank” can be a riverside or a financial institution. Equivocation, from module 5, exploits this.

### Vagueness

A term is vague when it has borderline cases. How many hairs make someone bald? Vagueness is not always a defect; it is built into most useful words. It becomes a problem when someone relies on a sharp line the word cannot provide.

### Definitions

A good definition is neither too broad nor too narrow. Test by counterexample: if you can find something that fits the definition but should not count, or something that should count but does not, revise it. Socrates did this constantly with terms like piety, courage, and justice.

### Stipulation and persuasion

A stipulative definition declares how a term will be used in this discussion, and that is legitimate. A persuasive definition tries to settle a disputed question by building the answer into the word: “A real friend would never disagree with you.” Watch for it.

### Loaded language

Words carry attitudes as well as content. “Tax relief,” “estate tax,” and “death tax” may refer to the same policy while recruiting different feelings. Translate loaded wording into neutral terms before judging a claim.

### Operationalizing

To test a claim, turn vague terms into something observable. “The program improves well-being” is testable only once you say what you will measure.`,

  example: `“Art is whatever moves us emotionally.”

Too broad: a car crash, a funeral, or a good meal may move us and not be art. Too narrow? Some art may leave us cold.

A revised definition must handle both. The exercise shows that the definition you start with encodes an unexamined theory of the thing.`,

  reading: `George Orwell, “Politics and the English Language” (1946), widely available online.

Note where he claims that vague and inflated language helps conceal weak thinking, then consider whether you agree.`,

  practice: [
    {
      prompt: 'Decide whether each dispute is verbal, substantive, or both: (a) “Is a tomato a fruit?” (b) “Is this policy good for workers?” (c) “Did the tree make a sound if no one heard it?”',
      model: `(a) Mostly verbal. In botany a tomato is a fruit; in cooking it is treated as a vegetable. Once you say which sense you mean, little is left to dispute.

(b) Usually both. There is a verbal part (“good for workers” by what measure: wages, jobs, safety?) and a substantive part (what the policy actually does).

(c) Verbal. If “sound” means vibrations in the air, yes; if it means an experience of hearing, no. The physics is not in dispute.`
    },
    {
      prompt: 'Write a definition of “friend” or “success.” Test it with at least two counterexamples and revise it twice.',
      model: `Start with something like “A friend is someone you enjoy spending time with.” Counterexample: you may enjoy time with a charming coworker whom you would never call on in trouble, so it is too broad. Revise: “...and who would help you in trouble.” Counterexample: a relative who would help you but whom you dislike is not a friend, so it still needs refining.

The aim is not a perfect definition but seeing what you are actually committed to. Notice which cases you refuse to give up.`
    },
    {
      prompt: 'Find a political or advertising phrase that is loaded. Rewrite it in neutral terms.',
      model: `For example, “job-killing regulation” and “common-sense safeguard” can describe the same rule. A neutral version names the rule and its stated purpose and lets the reader judge: “A rule requiring X, intended to reduce Y.”

If your neutral version still reads as slanted, you have probably left in a word that carries an attitude. Read it as someone on the other side would.`
    },
    {
      prompt: 'Take the vague claim “social media harms teenagers” and make it testable: say what would count as harm, who would be measured, and over what period.',
      model: `A testable version: “Teenagers aged 13 to 17 who spend more than three hours a day on social media report higher rates of persistent low mood, measured by a standard questionnaire, than comparable teenagers who spend less than one hour, over a twelve-month period.”

Notice the choices: what counts as harm, which group, what comparison, and what time frame. Each choice changes the claim, and a different choice could change the answer.`
    }
  ],

  pushback: `Write the best case that fights over definitions are usually a waste of time.

Then write the best case that they are usually where the real issue lies.`,

  notebook: `Which word do you use often that you could not define if someone asked?`,

  selfcheck: [
    {
      q: 'What is the difference between a verbal and a substantive disagreement?',
      options: [
        'Verbal disagreements are louder.',
        'A verbal disagreement turns on how a term is used; a substantive one persists after the terms are agreed.',
        'Substantive disagreements are about facts that cannot be known.',
        'There is no meaningful difference.'
      ],
      a: 1,
      why: 'Resolving the meaning of a key term often dissolves a verbal dispute and leaves the real one, if any, in plain view.'
    },
    {
      q: 'What is the difference between ambiguity and vagueness?',
      options: [
        'Ambiguity means several distinct meanings; vagueness means borderline cases.',
        'They mean the same thing.',
        'Ambiguity is deliberate; vagueness is accidental.',
        'Vagueness only occurs in science.'
      ],
      a: 0,
      why: '“Bank” is ambiguous (riverside or institution). “Bald” is vague (there is no sharp line).'
    },
    {
      q: 'How do you test a definition?',
      options: [
        'Check whether most people use it.',
        'Look for counterexamples: things that fit but should not count, or should count but do not.',
        'Ask an expert.',
        'Check that it is short.'
      ],
      a: 1,
      why: 'Counterexamples reveal where a definition is too broad or too narrow, which is how Socrates tested definitions.'
    },
    {
      q: 'What is a persuasive definition?',
      options: [
        'A definition that is easy to remember.',
        'A definition that tries to settle a disputed question by building the answer into the word.',
        'A definition that uses a lot of examples.',
        'A definition agreed on by both sides.'
      ],
      a: 1,
      why: '“A real friend would never disagree with you” defines the debate away instead of arguing for a conclusion.'
    },
    {
      q: 'Why operationalize a claim?',
      options: [
        'To make it sound scientific.',
        'To turn vague terms into something observable so the claim can be tested.',
        'To make it longer.',
        'To avoid disagreement.'
      ],
      a: 1,
      why: 'A claim you cannot test cannot be supported or refuted. Operationalizing says what would count as evidence.'
    }
  ],

  extension: `Read one of Plato’s short dialogues on a definition (*Euthyphro* on piety, or *Laches* on courage) and map each definition offered and the objection that defeats it.`
});
