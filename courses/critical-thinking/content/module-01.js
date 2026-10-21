window.COURSE.modules.push({
  n: 1, phase: 1,
  title: 'What critical thinking is',
  short: 'What critical thinking is',
  summary: 'Critical thinking is the practice of asking what you have reason to believe, and how good those reasons are.',

  question: `You read a headline claiming that a common food doubles your risk of a disease. A friend says it is obviously true. Another friend says all studies are junk.

Which of them is thinking critically?

Neither, yet. Both have reached a verdict without examining anything.`,

  lesson: `Critical thinking is the disciplined practice of asking what you have reason to believe, and how good those reasons are. It is not cynicism, contrarianism, or winning arguments. A cynic rejects everything cheaply; a critical thinker accepts and rejects for reasons.

### Belief is not a choice we make once

We hold thousands of beliefs we never examined, absorbed from family, culture, and habit. Critical thinking starts by noticing that you hold them.

### Socrates as a model

In Plato’s *Apology*, Socrates tests the confident by asking them to explain what they claim to know. The method is simple: ask for the reasons, then ask what those reasons assume. The aim is not to embarrass anyone but to find out whether the belief survives scrutiny.

### Skills and dispositions

Good thinking needs both skills (analyzing arguments, weighing evidence) and dispositions (curiosity, fairness, willingness to be wrong). People with skills but no dispositions use their cleverness to defend what they already believed.

### Examining versus doubting

You cannot doubt everything at once, and you do not need to. The practice is to match your confidence to your evidence, and to know which of your beliefs are load-bearing.

### Why philosophy

Philosophy is the discipline that takes the questions other fields assume away: what counts as evidence, what a good reason is, what we owe to the truth. A philosophical approach to critical thinking keeps those questions open.`,

  example: `Claim: “Schools should ban phones, because phones destroy attention.”

The stated reason is that phones harm attention. Hidden assumptions include: that the harm is caused by phones rather than by something correlated with them; that a ban would remove the harm; and that the benefits of phones in school are smaller than the harm.

None of these is obviously false. Each is something the argument needs and has not shown.`,

  reading: `Plato, *Apology*. It is in the public domain and freely available at the MIT Internet Classics Archive and Project Gutenberg.

Read the section where Socrates questions the politician, and the section on the poets. As you read, ask what Socrates assumes about knowledge.`,

  practice: [
    {
      q: 'Someone writes down the belief “Cold weather gives you a cold.” Which of these gives a *reason* for the belief, rather than restating it or leaning on habit?',
      options: [
        '“Everyone knows winter is when people get sick, and it is what I have always believed.”',
        '“It is plainly true. I cannot see why anyone would question something so obvious.”',
        '“I mostly catch colds just after the weather turns cold, so I think cold is one cause.”',
        '“Cold weather and colds clearly go together, so I do not see how the two could be unrelated.”'
      ],
      a: 2,
      why: 'Only the third points to something that could support the belief, even if it is only one person’s experience, which makes it a weak reason. The others restate the belief, appeal to what everyone knows, or lean on habit. If many of your own reasons look like those, you hold those beliefs on trust.'
    },
    {
      q: 'Take the belief “Exercise improves my mood,” with the reason “I feel better after I go running.” Which of these is an assumption the reason depends on?',
      options: [
        'That running is the most effective form of exercise for improving mood and energy.',
        'That the lift comes from running itself, not from fresh air or time alone.',
        'That most other people also enjoy running once they have got past the first few weeks.',
        'That mood can be rated precisely on a numbered scale, the way height can be measured.'
      ],
      a: 1,
      why: 'A good test for an assumption: if it were false, would the reason still support the belief? If the lift came from fresh air instead, running would no longer explain it. The other three might be interesting, but the reason works without them.'
    },
    {
      q: 'You believe exercise improves mood. Which answer to “What evidence would change my mind?” is specific enough that someone could go and check whether it has happened?',
      options: [
        '“Very strong arguments from the many experts who disagree with me about exercise and health.”',
        '“Hearing from a good number of people I know who say that exercise does nothing for their mood.”',
        '“Nothing would change it. I have felt the effect myself, so I know for certain that it is real.”',
        '“Large, well-run studies of similar people that find no mood difference after months of exercise.”'
      ],
      a: 3,
      why: 'The last answer names the kind of evidence, the comparison, and the time frame. “Nothing” is an honest answer and a useful one to notice: it means the belief is held more like a commitment than a conclusion. The first two are too vague to check.'
    },
    {
      q: 'An opinion column says: “Schools should ban phones in class. Phones wreck students’ attention, and attention is what learning runs on.” Which summary correctly separates the main claim from the main reason?',
      options: [
        'Claim: schools should ban phones in class. Reason: phones damage attention, which learning needs.',
        'Claim: the column is about phones in classrooms. Reason: teachers and parents are worried about them.',
        'Claim: phones wreck students’ attention. Reason: schools should therefore ban them in class.',
        'Claim and reason: schools should ban phones in class because phones wreck attention and learning depends on it.'
      ],
      a: 0,
      why: 'A good summary gives the claim and the reason as two separate statements, in the right direction. Naming the topic is not stating the claim, the third answer reverses the argument, and the last merges claim and reason into one sentence. If you cannot find a clear reason in a piece, that is a finding too: some opinion pieces assert more than they argue.'
    }
  ],

  pushback: `Write the best objection to this sentence: “Examining every belief carefully is the right way to live.”

Consider the cost of time, the risks of paralysis, and the role of trust.`,

  selfcheck: [
    {
      q: 'How does critical thinking differ from skepticism about everything?',
      options: [
        'It rejects every claim until it is proven beyond doubt.',
        'It accepts and rejects claims for reasons, and matches confidence to evidence.',
        'It is the same thing under a different name.',
        'It means disagreeing with whatever the majority believes.'
      ],
      a: 1,
      why: 'Blanket doubt is as unexamined as blanket belief. Critical thinking asks for reasons in both directions.'
    },
    {
      q: 'Which pair is a skill and a disposition of a good thinker?',
      options: [
        'Analyzing an argument; willingness to be wrong',
        'Winning debates; confidence',
        'Memorizing fallacies; speed',
        'Having a large vocabulary; stubbornness'
      ],
      a: 0,
      why: 'Skills are things you can do (analyze arguments, weigh evidence). Dispositions are habits of character (curiosity, fairness, openness to being wrong). You need both.'
    },
    {
      q: 'What is a hidden assumption?',
      options: [
        'A claim the speaker is lying about.',
        'A premise the argument needs but does not state or defend.',
        'A conclusion the speaker is afraid to say.',
        'A fact that nobody could possibly check.'
      ],
      a: 1,
      why: 'An assumption is something the argument depends on without stating it. In the phone-ban example, the assumption that a ban would remove the harm is never defended.'
    },
    {
      q: 'Why might a very intelligent person reason badly?',
      options: [
        'Intelligence makes people overconfident in every case.',
        'They may use their cleverness to defend what they already believed.',
        'Intelligent people cannot understand simple arguments.',
        'They tend to doubt everything.'
      ],
      a: 1,
      why: 'Skill without the right dispositions can be turned toward justifying a conclusion already chosen. This is why dispositions matter as much as skills.'
    },
    {
      q: 'What question did Socrates keep asking?',
      options: [
        'Who disagrees with you?',
        'What do you gain from believing this?',
        'What are your reasons, and what do those reasons assume?',
        'Is this popular?'
      ],
      a: 2,
      why: 'His method was to ask for the reasons and then press on what they assume, to see whether the belief survived scrutiny.'
    }
  ],

  extension: `Read Plato’s allegory of the cave (*Republic*, Book VII) and write 200 words on which “shadows” in your own life you might be mistaking for the real thing.`
});
