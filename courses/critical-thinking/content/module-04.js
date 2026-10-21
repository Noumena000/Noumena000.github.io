window.COURSE.modules.push({
  n: 4, phase: 2,
  title: 'Induction and explanation',
  short: 'Induction and explanation',
  summary: 'Most reasoning that guides real life is not deductive. Its conclusions are made probable by the evidence, never guaranteed. The skill is to judge how probable.',

  question: `Every swan you have ever seen is white.

How confident should you be that all swans are white? Why did Europeans believe this for centuries, and what does it tell you about how far past experience can carry us?`,

  lesson: `### Inductive arguments

An inductive argument supports its conclusion without guaranteeing it. Strength comes in degrees: strong, weak, and everything between. Unlike validity, strength depends on the evidence.

### Generalization

We reason from a sample to a population. Three things matter: how large the sample is, whether it is representative, and how bold the conclusion is. A poll of 1,000 randomly chosen voters can say something about a country; 1,000 people who answered a website survey cannot.

### The problem of induction

David Hume pointed out that nothing in logic guarantees that the future will resemble the past. We rely on induction constantly, and we cannot prove by deduction that it works. Philosophers still disagree about how to respond, and the disagreement is worth sitting with.

### Analogy

Arguments by analogy say that because two things are alike in some respects, they are probably alike in another. They are only as strong as the relevant similarities, and only as weak as the relevant differences. Always ask: alike in the ways that matter here?

### Abduction, or inference to the best explanation

We often reason from observations to the explanation that best accounts for them. A good explanation is consistent with the facts, is simpler than its rivals when the rivals do equally well, explains more than its rivals, and could in principle be shown wrong.

### Falsifiability

An explanation that no possible observation could count against is not strong; it is empty. Be wary of any view that absorbs every result as confirmation.

### Defeaters

New evidence can weaken a strong inductive argument without making it “wrong.” Reasoning well includes asking what you have not yet considered.`,

  example: `You come home and the kitchen window is open, a plate is broken, and the cat is hiding. Candidate explanations: a burglar, the wind, the cat.

- The burglar explains the window but not the hiding cat or the single plate, and nothing is missing.
- The wind explains the window but not the plate.
- The cat, jumping from the sill, explains all three.

The cat is the best explanation, not a certainty. A missing laptop would change the answer.`,

  reading: `Choose one of two:

- The Internet Encyclopedia of Philosophy entry on induction, or
- Hume’s *Enquiry Concerning Human Understanding*, Section IV (public domain, freely available online).

Focus on why Hume thinks reasoning about cause and effect rests on habit rather than proof.`,

  practice: [
    {
      q: '“Five of my seven coworkers like the new schedule.” Which conclusion does this evidence best support?',
      options: [
        'Most employees across the whole company like the new schedule.',
        'Most of these seven coworkers like the new schedule.',
        'Roughly 70 percent of all employees will keep liking it as time goes on.',
        'People generally welcome changes to their schedule.'
      ],
      a: 1,
      why: 'Seven people is a tiny sample, perhaps all from one team, so it supports only a modest claim about those people. Every other conclusion is bolder than the evidence allows. The strength of a generalization depends on the size of the sample, whether it is representative, and how bold the conclusion is.'
    },
    {
      q: '“Learning to write is like learning an instrument: both need regular practice with feedback, so writers will improve through regular drafting and critique.” Which difference most weakens this analogy?',
      options: [
        'Musicians usually begin young, while most people take up serious writing as adults with far less time and patience to practice.',
        'Wrong notes are obvious to the player, but weak writing is often invisible to its author, so progress is hard to see.',
        'Instruments cost far more than paper, so musicians take their lessons more seriously and tend to practice a good deal harder.',
        'Music ends in a performance, while writing is usually read in private, so there is less outside pressure on writers to keep improving.'
      ],
      a: 2,
      why: 'An analogy is only as strong as the relevant similarities and only as weak as the relevant differences. This argument rests on practice with feedback working, so a difference in how visible one’s mistakes are goes to the heart of it. The other differences do not bear on whether feedback helps.'
    },
    {
      q: 'You find your lettuce eaten overnight: ragged holes in the leaves and shiny trails across the soil. Candidates: deer, slugs and snails, or a neighbor taking lettuce. Which is the best explanation?',
      options: [
        'Slugs or snails, since they account for the holes, the trails, and the timing.',
        'Deer, since deer eat lettuce and live near a great many gardens and farms.',
        'A neighbor, since a person could have taken lettuce and left a mess behind.',
        'None can be called best until someone is caught in the act of eating it.'
      ],
      a: 0,
      why: 'The best explanation fits the most of the evidence, not the one you happen to prefer. Deer or a thief would not explain the trails. It is a best explanation, not a certainty: hoofprints, or a row cut cleanly with scissors, would change the answer. Refusing to rank explanations until you have certainty is not how careful everyday reasoning works.'
    },
    {
      q: 'Which of these claims could be shown wrong by some observation?',
      options: [
        '“Whatever challenges you face this year will turn out to be a hidden blessing.”',
        '“Your lucky number will bring you good fortune in one form or another.”',
        '“People who believe in themselves usually find that things work out.”',
        '“You will receive a handwritten letter from a friend this Thursday.”'
      ],
      a: 3,
      why: 'Only the last risks being wrong: Thursday could pass with no letter. The others fit almost anything that happens, because “a hidden blessing,” “one form or another,” and “usually” absorb every result. A claim that cannot be wrong tells you nothing about how the world is.'
    }
  ],

  pushback: `If induction cannot be justified by deduction, is it irrational to rely on it?

Write the strongest answer you can, from either side.`,

  selfcheck: [
    {
      q: 'How does an inductive argument differ from a deductive one?',
      options: [
        'Inductive arguments are always weaker than deductive ones.',
        'Inductive arguments make the conclusion probable, not certain.',
        'Inductive arguments have no premises.',
        'Inductive arguments cannot be about the real world.'
      ],
      a: 1,
      why: 'Deductive arguments aim to guarantee the conclusion if the premises are true. Inductive arguments support it to some degree.'
    },
    {
      q: 'Which of these does NOT affect the strength of a generalization?',
      options: [
        'The size of the sample.',
        'Whether the sample is representative.',
        'How bold the conclusion is.',
        'How confidently the speaker states it.'
      ],
      a: 3,
      why: 'Confidence of delivery is not evidence. Sample size, representativeness, and the boldness of the conclusion all matter.'
    },
    {
      q: 'What is the problem of induction?',
      options: [
        'Induction always gives false conclusions.',
        'We cannot logically prove that the future will resemble the past, yet we rely on it constantly.',
        'Inductive arguments are too hard to write.',
        'Scientists disagree about statistics.'
      ],
      a: 1,
      why: 'Hume’s point is that induction cannot be justified by deduction without circularity. It remains an open and interesting philosophical question.'
    },
    {
      q: 'What makes one explanation better than another?',
      options: [
        'It is more dramatic.',
        'It fits the facts, explains more, is simpler when rivals do equally well, and could in principle be shown wrong.',
        'It is the one most people believe.',
        'It is the one that was proposed first.'
      ],
      a: 1,
      why: 'These are the standard virtues of an explanation. Popularity and order of proposal are not among them.'
    },
    {
      q: 'Why is an unfalsifiable claim a problem?',
      options: [
        'It is always false.',
        'No possible observation could count against it, so it tells us nothing about the world.',
        'It is hard to say out loud.',
        'It requires special training to understand.'
      ],
      a: 1,
      why: 'A claim compatible with every possible result does not distinguish between ways the world could be.'
    }
  ],

  extension: `Read about the discovery of black swans in Australia and write 150 words on what a careful reasoner should have said about swans beforehand.`
});
