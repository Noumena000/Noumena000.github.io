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
      prompt: 'Rate each as strong or weak and explain: (a) Every restaurant I tried on this street was bad, so the street has bad restaurants. (b) Five of my seven coworkers like the new schedule, so most employees do. (c) My neighbor’s dog is friendly, so all dogs are friendly.',
      model: `(a) Depends on the sample: if “every restaurant I tried” means two, the argument is weak for “the street has bad restaurants” in general, but fine for the modest claim that you have had bad luck there. The conclusion is as bold as the evidence allows.

(b) Weak. Seven coworkers is a tiny and possibly unrepresentative sample of all employees, perhaps all from one team.

(c) Very weak. One dog cannot support a claim about all dogs. The conclusion is far bolder than the evidence.`
    },
    {
      prompt: 'Write an argument by analogy for something you believe. Then list two relevant differences between the cases.',
      model: `A model: “Learning to write is like learning to play an instrument: both need regular practice with feedback. Musicians improve through scales and coaching, so writers will improve through regular drafting and critique.”

Relevant differences: a wrong note is obvious to a musician, while weak writing often is not obvious to its author; and progress in music has clearer benchmarks than progress in writing. These differences weaken the analogy where it matters, which is how easily a learner can tell when they are improving.`
    },
    {
      prompt: 'Think of a puzzling event from your own week. Write three possible explanations, then say which is best and why. Include what would change your mind.',
      model: `A good answer has three genuinely different explanations, not variations on one. Compare them on how much each explains, how simple each is, and whether each could be shown wrong. Then name the evidence that would shift your ranking.

Watch for a common trap: choosing the explanation you prefer and judging the others by how much they embarrass you. The best explanation is the one that fits the facts best, even if it is dull.`
    },
    {
      prompt: 'Find a claim that cannot be shown wrong by any observation (a horoscope, a conspiracy theory, a vague promise). Explain what makes it unfalsifiable.',
      model: `Take the horoscope line “You will face a challenge, but it will lead to growth.” Nearly anything that happens can be described as a challenge, and almost any challenge can be described as leading to growth. No event could count against it.

A claim that risks being wrong tells you more. “You will receive a letter from a friend on Thursday” could easily fail, so it says something. Claims that explain everything explain nothing.`
    }
  ],

  pushback: `If induction cannot be justified by deduction, is it irrational to rely on it?

Write the strongest answer you can, from either side.`,

  notebook: `Which of your firm beliefs rests on a small or unrepresentative sample of experience?`,

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
