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
      q: '“Did the tree make a sound if no one heard it?” What kind of disagreement is this, mostly?',
      options: [
        'Substantive: it depends on physics that nobody has ever been able to measure properly.',
        'Verbal: it depends on whether “sound” means air vibrations or an experience of hearing.',
        'Both equally: the physics of the tree and the meaning of “sound” are both in dispute.',
        'Neither: it is simply a question that no one could ever hope to answer for certain.'
      ],
      a: 1,
      why: 'Everyone can agree about what the tree does physically. Once you say which sense of “sound” you mean, little is left to dispute. Compare “Is this policy good for workers?”, which usually has a verbal part (good by what measure?) and a substantive part (what the policy actually does).'
    },
    {
      q: 'A friend defines “friend” as “someone whose company you enjoy.” Which case shows the definition is too broad?',
      options: [
        'Someone you love and trust, but have not enjoyed spending time with lately.',
        'A stranger you have never met and know nothing at all about.',
        'A charming coworker you enjoy, but would never call in a crisis.',
        'A relative who would drop everything to help you, but whose company you find tiring.'
      ],
      a: 2,
      why: 'Too broad means the definition lets in something that should not count. The coworker fits the words but is not a friend. Cases that should count but do not fit the definition show it is too narrow. Refining it, perhaps by adding “and who would help you in trouble,” is how you find out what you are committed to.'
    },
    {
      q: 'A rule requires factories to cut sulfur emissions by 30 percent. Opponents call it a “job-killing regulation,” supporters a “common-sense safeguard.” Which rewrite is most neutral?',
      options: [
        '“A rule requiring factories to cut sulfur emissions by 30 percent, meant to reduce smog.”',
        '“A heavy-handed rule requiring factories to cut sulfur emissions by 30 percent.”',
        '“A sensible rule asking factories to cut sulfur emissions by 30 percent for cleaner air.”',
        '“A rule on factory emissions that business groups and environmental groups disagree about.”'
      ],
      a: 0,
      why: 'A neutral version says what the rule requires and what it is meant to do, and lets the reader judge. “Heavy-handed” and “sensible” carry attitudes. The last option sounds balanced but never says what the rule requires, so you could not judge it.'
    },
    {
      q: '“Meditation reduces stress.” Which version could actually be tested?',
      options: [
        '“Meditation noticeably lowers stress in most people who try it regularly, compared with how they felt before they started.”',
        '“Regular meditation helps people feel calmer and more focused in their daily lives, at work and at home.”',
        '“Scientists generally agree that meditation is good for mental health, stress included, and for well-being.”',
        '“Adults who meditate daily for eight weeks score lower on a stress questionnaire than similar adults who do not.”'
      ],
      a: 3,
      why: 'Testing requires saying what counts as stress, who is measured, compared with whom, and over what period. Each choice changes the claim, and a different choice could change the answer. The other versions use words (“noticeably,” “calmer,” “generally”) that no measurement could clearly confirm or reject.'
    }
  ],

  pushback: `Write the best case that fights over definitions are usually a waste of time.

Then write the best case that they are usually where the real issue lies.`,

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
