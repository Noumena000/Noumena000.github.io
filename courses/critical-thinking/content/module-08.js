window.COURSE.modules.push({
  n: 8, phase: 3,
  title: 'Statistics, probability, and causation',
  short: 'Statistics and causation',
  summary: 'You do not need to calculate to reason well about numbers, but you do need to ask a handful of questions every time a number is offered as evidence.',

  question: `A test for a rare disease is 95 percent accurate. You test positive.

Is it 95 percent likely that you have the disease?

Most people say yes. The answer depends on how rare the disease is, and it is often far lower.`,

  lesson: `### Ask of every statistic

Who was counted, and who was left out? Compared with what? How was it measured? How large is the effect, not just whether it exists? Who gains from this number being believed?

### Base rates

Always ask how common something is to begin with. Suppose 1 in 1,000 people has a condition, and a test catches 95 percent of cases and falsely flags 5 percent of healthy people. Of 1,000 people tested, about 1 true case tests positive and about 50 healthy people do too. A positive result then means roughly a 2 percent chance, not 95. Picturing counts of people, rather than percentages, makes this easy to see.

### Relative versus absolute risk

“Doubles your risk” sounds alarming. If the risk goes from 1 in 10,000 to 2 in 10,000, the absolute change is one extra case in 10,000. Always ask for both numbers.

### Averages hide shape

A mean can be dragged by a few extreme values. The median, and the spread of the data, often say more.

### Correlation and causation

Two things that rise and fall together may be linked because A causes B, B causes A, a third factor causes both, or by coincidence. Ice cream sales and drownings rise together in summer; heat explains both.

### Confounders and controlled comparison

Good evidence for causation usually comes from comparing otherwise similar groups, ideally by randomly assigning people to a treatment or not. Random assignment spreads unknown differences evenly across groups.

### Simpson’s paradox

A trend in each of several groups can reverse when the groups are combined. A well-known case concerns 1973 graduate admissions at Berkeley, where women appeared to be admitted at a lower overall rate even though few departments showed bias against them; the pattern came from which departments women applied to. The lesson is that aggregation can mislead.

### Significance is not importance

A result can be unlikely to be chance and still tiny. A result can also be large but based on too few people to trust.

### Cherry-picking and p-hacking

If someone tests many possible effects and reports only those that appear to work, the findings overstate what is there. Ask whether the analysis was planned or found after the fact.

### Regression to the mean

Extreme results tend to be followed by less extreme ones, by chance alone. A treatment given when someone is at their worst will often look effective even if it does nothing.`,

  example: `A headline says, “People who drink coffee live longer.”

Questions: Who was studied, and how were coffee habits measured? Could the people who drink moderate coffee also be healthier, richer, or less stressed to begin with? Was this a controlled experiment or an observational study? How much longer, and out of how many people?

The honest reading is usually: an association exists; causation is uncertain; the size is modest.`,

  reading: `Choose one:

- a short article from a reputable source on base rates and medical testing, or
- the Stanford Encyclopedia of Philosophy entry on causal models or on probabilistic causation (free online), for a more philosophical treatment.

Whichever you pick, write a one-paragraph summary in your own words.`,

  practice: [
    {
      q: 'A test catches 95 percent of people who have a condition and falsely flags 5 percent of healthy people. The condition affects 1 in 100 people. Someone tests positive. Roughly how likely are they to have it?',
      options: [
        'About 95 percent',
        'About 50 percent',
        'About 16 percent',
        'About 5 percent'
      ],
      a: 2,
      why: 'Picture 10,000 people. 100 have the condition and the test catches 95 of them. Of the 9,900 healthy people, 5 percent, or 495, are falsely flagged. So about 95 of the 590 positives are real. At 1 in 1,000 the figure falls to about 2 percent. Same test, different meaning, because the base rate changed.'
    },
    {
      q: 'A headline says a drug “cuts your risk by 50 percent.” Without the drug, the risk is 2 in 100,000. What does the drug change in absolute terms?',
      options: [
        'It spares about one person in every 100,000.',
        'It spares about one person in every 100.',
        'It spares half of everyone who takes it.',
        'It spares about two people in every 100,000.'
      ],
      a: 0,
      why: 'Half of 2 in 100,000 is 1 in 100,000, so the drug helps one person in 100,000. If the baseline were 2 in 100, the same 50 percent would mean one in 100, a very different public-health story. Always ask for the baseline as well as the relative change.'
    },
    {
      q: 'Among school children, shoe size and reading ability are strongly correlated. What is the most likely explanation?',
      options: [
        'Larger feet improve balance and concentration, which helps reading.',
        'Reading a lot over the years makes children’s feet grow faster.',
        'The correlation is a coincidence in a small sample and means nothing.',
        'Older children have bigger feet and read better; age explains both.'
      ],
      a: 3,
      why: 'Age is a third factor that causes both. Comparing children of the same age would likely make the correlation vanish. Not every correlation has this shape: sometimes A causes B, B causes A, or it is chance. But when a plausible common cause exists, check it first.'
    },
    {
      q: 'A news story says: “Study: people who eat breakfast earn more.” Which is the most important thing to find out before believing that breakfast raises pay?',
      options: [
        'How many people read the story, and how widely it was shared once it first appeared.',
        'Whether breakfast eaters differ in other ways (age, job, health), and if it was an experiment.',
        'Whether the researcher who ran the study eats a healthy breakfast every single day herself.',
        'Whether the headline says “linked to” or “leads to,” since the wording shows the finding.'
      ],
      a: 1,
      why: 'Only a controlled comparison can separate breakfast from everything else that differs between the groups. The headline’s wording can hint at how careful a story is, but it does not tell you what the study did. Other useful questions: how many people, how outcomes were measured, whether it has been replicated, and how big the effect is in absolute terms.'
    }
  ],

  pushback: `“Statistics can prove anything.”

Write the best case for this claim, then say where it goes wrong.`,

  selfcheck: [
    {
      q: 'What is a base rate, and why does it matter for test results?',
      options: [
        'How often something occurs in the first place; a positive result means little if the condition is very rare.',
        'The price of a test.',
        'The accuracy of a test in perfect conditions.',
        'The number of people who took the test.'
      ],
      a: 0,
      why: 'If a condition is rare, most positives can be false even with an accurate test, because healthy people vastly outnumber sick ones.'
    },
    {
      q: 'Why is relative risk not enough?',
      options: [
        'It is always misleading.',
        'A large relative change can be a tiny absolute change, so you also need the baseline.',
        'It cannot be calculated.',
        'Absolute risk is always smaller.'
      ],
      a: 1,
      why: 'Doubling a very small risk still leaves a very small risk. Ask for both numbers.'
    },
    {
      q: 'Which is NOT a way two correlated things may be related?',
      options: [
        'A causes B.',
        'B causes A.',
        'A third factor causes both.',
        'Correlation always proves A causes B.'
      ],
      a: 3,
      why: 'Correlation alone does not establish causation. The other three possibilities, and coincidence, must be considered.'
    },
    {
      q: 'How does random assignment help establish causation?',
      options: [
        'It makes the results more exciting.',
        'It spreads unknown differences between people evenly across the groups.',
        'It makes the sample bigger.',
        'It guarantees the result is true.'
      ],
      a: 1,
      why: 'If groups differ only by chance apart from the treatment, a consistent difference in outcomes is more likely due to the treatment.'
    },
    {
      q: 'What is regression to the mean?',
      options: [
        'The tendency for extreme results to be followed by less extreme ones by chance alone.',
        'A statistical test.',
        'The average of a data set.',
        'The tendency of people to agree with the average opinion.'
      ],
      a: 0,
      why: 'Someone at their worst will usually improve a little regardless, which can make an ineffective treatment look effective.'
    }
  ],

  extension: `Use a simple tally on paper to simulate Simpson’s paradox with two groups and two options. Show that the combined result reverses the group-by-group result.`
});
