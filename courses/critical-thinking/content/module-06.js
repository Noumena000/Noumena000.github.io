window.COURSE.modules.push({
  n: 6, phase: 3,
  title: 'The fallible mind',
  short: 'The fallible mind',
  summary: 'Your own mind makes predictable errors that feel, from the inside, exactly like good judgment. Knowing about biases does not remove them, but it lets you build habits that catch them.',

  question: `Think of a decision you made that turned out badly.

At the time, did it feel like a mistake? Probably not. What does that suggest about how reliable the feeling of being right is?`,

  lesson: `### Fast and slow thinking

Psychologists distinguish quick, automatic judgments from slower, deliberate reasoning. The quick kind is often excellent and sometimes badly wrong. Critical thinking is not about distrusting all intuition. It is about knowing when to slow down.

### Common patterns

- **Confirmation bias.** We look for, notice, and remember evidence that supports what we already think. Peter Wason’s 2-4-6 task (1960) showed that people test a rule by trying examples that fit their guess, rarely ones that could refute it.
- **Anchoring.** A number or idea presented first pulls later estimates toward it, even when it is obviously irrelevant.
- **Availability.** We judge how common or likely something is by how easily examples come to mind. Plane crashes feel likelier than car crashes because they are vivid, not because they are more frequent.
- **Motivated reasoning.** When a conclusion matters to our identity, we apply stricter standards to evidence against it than to evidence for it. Intelligence does not protect against this; it often supplies better excuses.
- **Overconfidence.** People are typically more certain than their track record justifies. Calibration, meaning that things you call 90 percent likely happen about 90 percent of the time, can be practiced and measured.
- **Survivorship bias.** We study the winners and forget the missing losers. A widely told story involves analysts at first wanting to armor the parts of returning WWII bombers that showed the most bullet holes, until Abraham Wald pointed out that planes hit elsewhere never came back.

### A caution about the science

Some famous results in this area have failed to replicate, and effect sizes are often smaller than headlines suggested. Treat bias research as you would any evidence: with interest and with scrutiny.

### Safeguards

- Write down your prediction and your reasons before you see the result.
- Seek the strongest evidence against your view.
- Ask someone who disagrees to find the flaw.
- Sleep on important decisions.
- Imagine advising a friend in your position.`,

  example: `You are sure a coworker dislikes you. You notice every curt email and forget the friendly ones. That is confirmation bias at work.

A test: list what you would expect to see if the belief were false, and look for those things for a week. If you still find none, the belief gains weight. If you find many, it loses.`,

  reading: `Choose one:

- Tversky and Kahneman, “Judgment under Uncertainty: Heuristics and Biases” (1974), available through many libraries and open archives, or
- a general introduction to cognitive biases from the Stanford Encyclopedia of Philosophy or the Internet Encyclopedia of Philosophy where available.

Read for the experiments, not only the labels.`,

  practice: [
    {
      q: 'You are told the sequence 2, 4, 6 follows a hidden rule, and you guess it is “add two each time.” Which test could best show your guess is wrong?',
      options: [
        '8, 10, 12',
        '20, 22, 24',
        '1, 2, 3',
        '100, 102, 104'
      ],
      a: 2,
      why: 'The first, second, and last all fit your guess, so each can only get a “yes” and cannot show you are wrong. 1, 2, 3 is something your guess says should be rejected. If it is accepted, your guess is wrong (the hidden rule is just “any increasing sequence”). Most people test only what fits their guess, which is confirmation bias in miniature.'
    },
    {
      q: 'Over a month you call ten predictions “90 percent likely.” Five of them come true. What does this show?',
      options: [
        'You are well calibrated, because getting half of your predictions right is a good record.',
        'You were overconfident: 90 percent predictions should come true about nine times in ten.',
        'The predictions were too easy, so your confidence was fair and no adjustment is needed.',
        'Nothing at all, because no number of predictions could ever reveal anything about calibration.'
      ],
      a: 1,
      why: 'Calibration means your confidence matches how often you are right. Ten is a small sample, so you would want more before drawing firm conclusions, but five against an expected nine is a clear gap. Most people find that their high-confidence predictions fail more often than they expected.'
    },
    {
      q: 'You would tell a friend in your position to turn down a job, but you plan to accept it yourself. What is the most useful next step?',
      options: [
        'Ask what explains the gap: private information, or favoring what you want?',
        'Follow the advice you would give your friend, since advice for others is always more accurate.',
        'Ignore the gap, since advice for others and choices for yourself are separate matters.',
        'Go with whichever choice feels more certain to you right now, since certainty is a good guide.'
      ],
      a: 0,
      why: 'Imagining what you would advise a friend is a debiasing trick, because your own wishes weigh less. A gap between the two is a prompt to ask why, not a verdict. Sometimes you do have private information. Sometimes you are favoring what you want. The feeling of certainty is not reliable evidence either way.'
    },
    {
      q: 'You are asked to write the best case for a view opposite to your own. Which draft would a thoughtful holder of that view be most likely to accept?',
      options: [
        'One built from the most extreme examples on their side, so that the contrast is clear.',
        'One that states their view fairly and adds “of course, this ignores…” to stay honest.',
        'One that summarizes their position in a sentence and moves quickly on to the rebuttal.',
        'One using their strongest arguments and evidence, in the terms they would use.'
      ],
      a: 3,
      why: 'The test is whether a believer would say, “Yes, that is what I think.” Extreme examples, hints that it is wrong, or a quick summary all slant the result. If writing it was unpleasant, that tells you something about the role the belief plays in your sense of who you are.'
    }
  ],

  pushback: `If biases are built into human cognition, is it realistic to expect anyone to overcome them?

What can reasonably be expected?`,

  selfcheck: [
    {
      q: 'What is confirmation bias, and how does the 2-4-6 task show it?',
      options: [
        'Seeking evidence that supports what we already think; people test guesses with examples that fit them, rarely ones that could refute them.',
        'Believing whatever an authority confirms.',
        'Changing our beliefs to match the group; people copy each other’s guesses.',
        'Forgetting information that is inconvenient; people forget the rule.'
      ],
      a: 0,
      why: 'The task shows that people rarely test by trying to break their own guess, which is the way you would discover it is wrong.'
    },
    {
      q: 'How does availability distort judgments about risk?',
      options: [
        'We overrate risks that are vivid and easy to recall, such as plane crashes.',
        'We underrate every risk.',
        'We only consider risks that have happened to us.',
        'It does not; it only affects shopping decisions.'
      ],
      a: 0,
      why: 'Vividness makes examples come to mind easily, and we mistake ease of recall for frequency.'
    },
    {
      q: 'What is survivorship bias?',
      options: [
        'Overvaluing the opinion of older people.',
        'Studying only the cases that survived and forgetting those that did not, which skews conclusions.',
        'Believing that everything will turn out fine.',
        'Remembering past successes better than past failures.'
      ],
      a: 1,
      why: 'The missing cases carry information. In the bomber story, the planes that were hit in the critical places never returned to be counted.'
    },
    {
      q: 'Why does intelligence not protect against motivated reasoning?',
      options: [
        'Intelligent people care less about the truth.',
        'Intelligence can supply better-sounding reasons for a conclusion already chosen.',
        'Intelligent people reason less often.',
        'It does protect against it completely.'
      ],
      a: 1,
      why: 'Skill with arguments can be turned toward defending what you already believe, which is why dispositions like humility matter.'
    },
    {
      q: 'Which pair of safeguards is described in the lesson?',
      options: [
        'Write predictions before seeing results; ask someone who disagrees to find the flaw.',
        'Trust your first instinct; avoid feedback.',
        'Make decisions quickly; avoid reflection.',
        'Seek out people who agree with you; ignore contrary evidence.'
      ],
      a: 0,
      why: 'Both safeguards create a check from outside your own head: a record you cannot rewrite, and a critic who can see what you cannot.'
    }
  ],

  extension: `Keep a decision journal for a month. Record the decision, your reasons, and your confidence. Review it at the end and look for patterns.`
});
