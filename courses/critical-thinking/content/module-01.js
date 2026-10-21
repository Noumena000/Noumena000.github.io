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
      prompt: 'Write down five things you believe strongly about politics, health, money, or people. For each, write one sentence saying why you believe it.',
      model: `Aim for reasons, not restatements. “I believe exercise improves mood because I feel better after running” is a reason (a weak one, based on one person’s experience). “I believe exercise improves mood because exercise is good” only repeats the belief.

If several of your reasons turn out to be “everyone knows” or “I’ve always thought so,” that is useful to see. It shows which beliefs you hold on trust or habit.`
    },
    {
      prompt: 'For two of those beliefs, list at least two assumptions your reason depends on.',
      model: `Take “exercise improves mood because I feel better after running.” Assumptions: that the improvement comes from the running and not from fresh air or time alone; that your experience generalizes to other people; that “feeling better” right afterward means a lasting effect on mood.

A good test for an assumption: if it were false, would your reason still support the belief? If not, you have found something the belief rests on.`
    },
    {
      prompt: 'For one belief, write what evidence would change your mind. If you cannot think of any, record that.',
      model: `A strong answer is specific: “Large, well-run studies that compare similar people who do and do not exercise and find no difference in mood after several months.”

“Nothing would change my mind” is also a useful answer. It does not mean the belief is false. It means the belief is held more like a commitment than a conclusion, and it is worth knowing which of your beliefs are like that.`
    },
    {
      prompt: 'Find a short opinion piece (an editorial or column). In two sentences, state its main claim. In two more, state the main reason it gives.',
      model: `A good summary separates the claim from the reason: “The author argues that [claim]. She gives one main reason: [reason].”

Common mistakes are to state the topic instead of the claim (“The article is about school phones”) or to merge the claim and the reason into one sentence. If you cannot find a clear reason, that is a finding too: some opinion pieces assert more than they argue.`
    }
  ],

  pushback: `Write the best objection to this sentence: “Examining every belief carefully is the right way to live.”

Consider the cost of time, the risks of paralysis, and the role of trust.`,

  notebook: `Which belief on your list surprised you by how little you could say in its defense?`,

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
