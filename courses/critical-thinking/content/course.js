/* Course-level content. Edit the text here; modules live in module-01.js to module-12.js.
   Text uses a small Markdown subset: paragraphs, ### headings, "- " bullets, "1. " lists,
   pipe tables, **bold** and *italic*. Keep each bullet on a single line. */
window.COURSE = {
  title: 'Thinking Well',
  subtitle: 'A self-paced course in critical thinking, taught the way philosophy is taught.',

  modules: [],

  phases: [
    { id: 1, name: 'Foundations', theme: 'What critical thinking is, and how to find the argument inside a passage.' },
    { id: 2, name: 'Logic and evidence', theme: 'Deduction, induction, and the patterns that make bad reasoning look good.' },
    { id: 3, name: 'The fallible mind', theme: 'Bias, language, and numbers: the ways careful people still go wrong.' },
    { id: 4, name: 'Thinking with others', theme: 'Trust, sources, and disagreement.' },
    { id: 5, name: 'Values and tools', theme: 'Moral reasoning, and thinking alongside intelligent tools.' }
  ],

  intro: `This course teaches you to reason well by treating your own beliefs as something to examine, not something to defend.

Most critical-thinking courses hand you a list of fallacies and biases to memorize. This one is built the way a philosophy course is built. You work with real arguments, ask what they assume, look for the strongest objection, and revise your view when the objection lands. Vocabulary matters, but only as a tool for seeing more clearly.

You need no background in philosophy, logic, or mathematics. Every technical term is explained when it first appears.`,

  outcomes: `After the course you should be able to:

- Separate claims, arguments, explanations, and mere assertions, and reconstruct an argument in standard form.
- Distinguish valid from invalid reasoning, and strong from weak evidence.
- Recognize common fallacies in context, without using their names as a substitute for thought.
- Identify the cognitive biases most likely to distort your own judgment, and use simple safeguards against them.
- Read statistics and causal claims with appropriate suspicion and appropriate trust.
- Judge sources, experts, and media, including the tools you use to search and write.
- Disagree productively: represent opposing views fairly, concede good points, and change your mind for good reasons.
- Reason carefully about values, using thought experiments and moral arguments.`,

  howItWorks: `Every module has the same seven parts, so you always know where you are. Self-paced study fails when nobody pushes back, so the course builds the push into every module.

| Part | What you do | Time |
| --- | --- | --- |
| The question | Think about a puzzle or case that motivates the topic | 10 min |
| Lesson | Read the core ideas and a worked example | 30 min |
| Reading | Work through one short primary or open-access text | 30–45 min |
| Practice | Write answers, then compare them with a model approach | 40 min |
| Push back | Write the strongest objection to your own view | 15 min |
| Notebook | Reflect briefly on what changed in your thinking | 10 min |
| Self-check | Answer five questions and read the explanations | 10 min |

Write your answers instead of only thinking them. Written reasoning exposes gaps that private thought hides.`,

  pace: `**Pace.** Twelve weeks at two to three hours a week is a suggestion. Spend two weeks on a module that gives you trouble. If you finish early, try the optional extension at the end of each module.

**Cost.** The course is free. There is no account and no sign-in.

**Privacy.** What you write is saved in your own browser and goes nowhere else. Download a backup from the Your work page now and then, especially before clearing your browser data or changing devices.`,

  capstone: {
    lead: 'Analyze a real argument fairly, then defend a position of your own against its best objections.',
    intro: `The capstone produces one written piece of about 2,000 words and takes two to three weeks. Do it after module 12, or start the question step earlier if you like. Write in the boxes below, or write elsewhere and paste your text in. Your work is saved in this browser, and you can download it at any time.`,
    steps: [
      {
        id: 's1', title: 'Choose a question', target: 100, rows: 5,
        body: `Pick a question you care about where thoughtful people disagree: a policy, an ethical dilemma, a scientific or social claim, a question about how to live. Avoid questions that are only matters of fact, and avoid questions whose answer you already feel certain about.

Write the question, and a few sentences on why it matters to you.`
      },
      {
        id: 's2', title: 'Analyze one argument', target: 600, rows: 14,
        body: `Find a strong published argument for one side: an essay, a book chapter, or a long-form article. Then work through each of these in your writing:`,
        checklist: [
          'State its conclusion and reconstruct its argument in standard form, with implicit premises marked.',
          'Say whether the reasoning is valid or strong, and where it is weakest.',
          'Check its key facts and sources. Note anything you could not verify.',
          'Identify any loaded terms, framings, or statistics that need scrutiny.'
        ]
      },
      {
        id: 's3', title: 'Build the best opposing case', target: 500, rows: 12,
        body: `State the strongest version of the other side, as its defenders would put it. If you cannot find a good statement of it, say so, and write one. A good test: would someone who holds this view say, “Yes, that is what I think”?`
      },
      {
        id: 's4', title: 'State and defend your own view', target: 700, rows: 14,
        body: `Say what you now think and why. Address the strongest objection to your view directly. Say what evidence or argument would change your mind. Say honestly how confident you are, and why.`
      },
      {
        id: 's5', title: 'Reflect', target: 200, rows: 8,
        body: `Return to your notebook entries, and to the two lines you wrote before module 1. Which beliefs changed over the course? Which habits are you still working on? What do you want to practice next?`
      }
    ],
    rubricIntro: `Rate yourself on each criterion, or ask a friend or teacher to rate you. Choose the description that fits your work best. Be honest: the point is to find out what to practice next.`,
    rubric: [
      { id: 'reconstruction', name: 'Reconstruction', review: 'modules 2 and 3', levels: [
        'Summarizes without separating premises from the conclusion.',
        'Identifies the conclusion but misses premises.',
        'Reconstructs the argument accurately.',
        'Also surfaces implicit premises and tests them.'] },
      { id: 'evaluation', name: 'Evaluation', review: 'modules 3, 4 and 5', levels: [
        'Judges the argument by whether it agrees with it.',
        'Notes some flaws.',
        'Assesses validity or strength, and the evidence.',
        'Distinguishes what is shown, what is assumed, and what is unknown.'] },
      { id: 'fairness', name: 'Fairness', review: 'modules 2 and 10', levels: [
        'Presents a straw man of the other side.',
        'Gives a partial or grudging account.',
        'Gives an accurate account of the opposing case.',
        'Gives an account its defenders would endorse.'] },
      { id: 'ownargument', name: 'Own argument', review: 'modules 2, 4 and 10', levels: [
        'Asserts a view.',
        'Gives reasons but ignores objections.',
        'Answers the main objection.',
        'Anticipates objections and says what would change its mind.'] },
      { id: 'evidence', name: 'Evidence and sources', review: 'modules 8 and 9', levels: [
        'Relies on unchecked claims.',
        'Checks some claims.',
        'Verifies the key claims.',
        'Uses primary sources and notes their limits.'] },
      { id: 'clarity', name: 'Clarity and honesty', review: 'modules 6 and 7', levels: [
        'Vague or overconfident.',
        'Mostly clear.',
        'Clear, with calibrated confidence.',
        'Precise, humble where warranted, firm where earned.'] }
    ],
    passScore: 18,
    reviewBelow: 12,
    metText: 'That suggests you have met the goals of the course.',
    partialText: 'You are close. Revisit the areas below, revise the weakest part of your capstone, and score it again.',
    reviewText: 'Go back to the modules named below, then revise your capstone.'
  },

  resources: {
    lead: 'Every reading in this course is either in the public domain or openly available, but links change, so titles are given instead of web addresses. Search for the title, and prefer the host you trust.',
    groups: [
      {
        title: 'Primary philosophical texts',
        body: `| Text | Author | Used in |
| --- | --- | --- |
| *Apology*, and the allegory of the cave in the *Republic*, Book VII | Plato | Module 1 |
| *An Enquiry Concerning Human Understanding*, Section IV | David Hume | Module 4 |
| *On Liberty*, chapter 2 | John Stuart Mill | Module 10 |
| *Euthyphro* and *Laches* | Plato | Module 7, extension |

All of these are in the public domain and appear at Project Gutenberg and the MIT Internet Classics Archive, among other places.`
      },
      {
        title: 'Free reference works',
        body: `- The Stanford Encyclopedia of Philosophy: in-depth, peer-reviewed entries on logic, fallacies, induction, causation, testimony, disagreement, and moral theory.
- The Internet Encyclopedia of Philosophy: shorter and more accessible entries, including those on arguments and fallacies.`
      },
      {
        title: 'Open textbooks',
        body: `- *forall x: Calgary Remix*, by P.D. Magnus and others, a free introduction to formal logic. Use only the early chapters for this course.
- *The Logic Manual*, by Volker Halbach, a free short text from Oxford.
- The Open Textbook Library lists open-access critical-thinking and informal-logic textbooks. Review any candidate for quality and tone before relying on it.`
      },
      {
        title: 'Widely available essays and articles',
        body: `- George Orwell, “Politics and the English Language” (module 7).
- Peter Singer, “Famine, Affluence, and Morality” (module 11).
- Philippa Foot, “The Problem of Abortion and the Doctrine of the Double Effect” (module 11).
- Amos Tversky and Daniel Kahneman, “Judgment under Uncertainty: Heuristics and Biases” (module 6).
- Judith Jarvis Thomson, “The Trolley Problem” (module 11, extension).

Copyright varies by country for these twentieth-century items. Read them at the host’s copy.`
      },
      {
        title: 'For evaluating sources',
        body: `- The Civic Online Reasoning materials from the Digital Inquiry Group, formerly the Stanford History Education Group, teach lateral reading (module 9).`
      },
      {
        title: 'Books for further reading',
        body: `These are not free, but they are worth a library visit.

- Daniel Kahneman, *Thinking, Fast and Slow*.
- Daniel Dennett, *Intuition Pumps and Other Tools for Thinking*.
- Julia Galef, *The Scout Mindset*.
- Nigel Warburton, *Thinking from A to Z*.

Findings in psychology and nutrition research are revised often. When you cite a study from this course, check whether it has been replicated or revised since.`
      }
    ]
  },

  teachers: {
    lead: 'The course works as a solo study path, a study group, or the backbone of a classroom course.',
    body: `### Using it with a class

- Run one module per week. Use the lesson and reading as preparation, and spend class time on the practice items and the push-back prompt.
- Make the push-back discussion the center of the session. Have students swap their written objections and answer each other’s.
- Rotate roles: one student states the argument, one raises the strongest objection, one restates the exchange fairly.
- For graded settings, grade the process (reconstructions, objections, revisions) more than the conclusions. Students should never lose marks for holding an unpopular but well-argued view.
- Use the capstone scoring guide as a rubric, and share it at the start so students know what is being asked.
- Students can download their notebook as a Markdown file from the Your work page and submit it.

### Studying in a group

A study group makes the push-back prompts far more effective. Take turns presenting a reconstruction and let the others attack it. Rotate the role of the person who must state the opposing view.

### Keeping the course current

- Module 12 will date fastest. Revisit it every six months, update the examples, and retire any claims about particular tools.
- Check every reading’s availability on a schedule.
- Model answers show one good approach, not the only one. Students whose answers differ should be asked to defend them, not to match the model.`
  }
};
