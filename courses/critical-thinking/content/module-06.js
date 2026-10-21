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
      prompt: 'Run the 2-4-6 task on a friend. Tell them the sequence 2, 4, 6 follows a rule and ask them to guess it by proposing other sequences. Record how many of their tests could have shown their guess was wrong.',
      model: `The hidden rule in Wason’s task is simply “any increasing sequence.” Most people guess “add two” and then test only sequences that fit it (8, 10, 12), which can never show the guess is wrong.

Count how many of your friend’s tests were attempts to break their own guess (for example 1, 2, 3 or 10, 5, 1). Few people try. That gap is confirmation bias, in a small and measurable form.`
    },
    {
      prompt: 'Make five predictions about the coming week, each with a confidence percentage. Check them next week and compare confidence with outcomes.',
      model: `Examples: “It will rain on Saturday, 60 percent.” “My package arrives by Wednesday, 80 percent.” Be specific enough that each prediction clearly comes true or does not.

Next week, look at the pattern. If the things you called 80 percent likely happened about four times in five, you are well calibrated. Most people find that their high-confidence predictions fail more often than they expected.`
    },
    {
      prompt: 'Describe one decision you are considering. List the evidence for and against, then write what you would advise a friend to do.',
      model: `The friend version is a debiasing trick. People are often more balanced when advising someone else, because their own wishes weigh less.

If your advice to a friend differs from what you plan to do, ask why. Sometimes you have private information. Sometimes you are favoring what you want.`
    },
    {
      prompt: 'Pick a belief tied to your identity (political, religious, or professional). Write the best case for the opposite side as its defenders would put it.',
      model: `A strong answer would satisfy a thoughtful holder of the opposing view. Use the best arguments and evidence they would cite, not the weakest examples from their side. Avoid sarcastic or reluctant phrasing.

If you could not do this, or found it unpleasant, that tells you about the role the belief plays in your sense of who you are. You do not have to change your view, but you should know what you are protecting.`
    }
  ],

  pushback: `If biases are built into human cognition, is it realistic to expect anyone to overcome them?

What can reasonably be expected?`,

  notebook: `Which bias do you most recognize in yourself, and what small habit could counter it?`,

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
