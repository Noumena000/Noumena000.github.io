window.COURSE.modules.push({
  n: 9, phase: 4,
  title: 'Sources, experts, and media',
  short: 'Sources and media',
  summary: 'Nearly everything you know, you know because someone told you. The real skill is deciding whom to trust, about what, and how much.',

  question: `You cannot personally verify that the Earth orbits the Sun, that vaccines work, or that a distant country held an election. Yet you reasonably believe all three.

What separates reasonable trust from gullibility?`,

  lesson: `This module treats trust as something to be calibrated, not something to be refused.

### Testimony as a source of knowledge

Philosophers call learning from others testimony. Rejecting it entirely would leave you knowing almost nothing. The question is never “trust or not,” but “trust whom, for what, and on what grounds.”

### Judging an expert

Ask whether the person has relevant training and a track record in this specific area, whether other experts in the field broadly agree, whether they have a conflict of interest, and whether they are speaking within their field. A great physicist is not automatically an authority on nutrition.

### Consensus

When most qualified experts agree after open scrutiny, that agreement is strong evidence. When experts split, the disagreement is itself information. Where one dissenter holds a minority view, ask what the majority says in reply.

### Lateral reading

Fact-checkers do not stay on a page and judge its look. They leave it and search for what others say about the source. Before trusting an unfamiliar site, open new tabs and look for independent descriptions of who runs it and how it is regarded.

### Primary, secondary, and tertiary sources

A news article about a study is a step removed from the study. Whenever a claim matters, find the original and check that the report matches it.

### Incentives

Everyone who communicates has some interest: advertisers, politicians, journalists, scientists, and you. Interests do not make claims false, but they tell you where to look harder.

### Headlines and framing

The same facts can be framed to suggest different conclusions. Compare how several outlets with different leanings describe the same event, and separate the reported facts from the commentary.

### Misinformation and your habits

False claims spread because they are novel, emotional, and flattering to a group. A useful habit is to pause before sharing anything that makes you angry or pleased, and ask whether you would want to be the one who spread it if it turned out to be false.

### Epistemic dependence

Because we depend so heavily on others, knowledge is partly a social achievement. That gives communities, institutions, and norms of honesty a moral weight beyond individual thinking.`,

  example: `A viral post claims a food additive causes cancer and cites “a Harvard study.”

Steps: search for the title independently; find the actual paper and check whether it was in humans or animals, the dose, and the sample; read what independent experts say about it; look at who is promoting the claim and whether they sell something.

Often the real study says something smaller and more cautious than the post.`,

  reading: `Choose one:

- a free guide to lateral reading from the Civic Online Reasoning materials of the Digital Inquiry Group (formerly the Stanford History Education Group), or
- the Stanford Encyclopedia of Philosophy entries on disagreement or on the epistemology of testimony.

Pair the reading with an actual attempt at lateral reading on a source you see often.`,

  practice: [
    {
      prompt: 'Pick a claim you saw this week. Trace it back to its original source and write down what was lost or changed in the telling.',
      model: `Typical losses: hedges (“may be linked” became “causes”), sample size and population (“mice” became “people”), absolute numbers, and the limitations the authors stated.

Write the claim as it first appeared and as it reached you, and compare the two. The chain is often three or four steps long, and each step tends to drop caution and add drama.`
    },
    {
      prompt: 'Evaluate one expert you often rely on, using the questions above. What would make you trust them less?',
      model: `Check relevant training, track record, agreement with other experts, conflicts of interest, and whether they speak within their field.

A thoughtful answer also names what would reduce your trust: a pattern of confident predictions that fail, undisclosed financial ties, or speaking far outside their expertise. If you cannot name anything, you may be trusting out of loyalty rather than judgment.`
    },
    {
      prompt: 'Choose a news event covered by two or three outlets. Compare the facts each reports and the framing each adds.',
      model: `List the facts all outlets share first. That is the most reliable core. Then list what differs: which facts were included or left out, which words described the same event, who was quoted first and who last.

The point is not to find the one unbiased outlet. It is to learn to read through framing to the facts, and to notice which omissions change the picture.`
    },
    {
      prompt: 'List three sources you trust most. For each, say why, and what would make you stop trusting it.',
      model: `A good answer gives specific reasons: correction practices, transparency about methods, a record of being right when it was inconvenient. Avoid “it agrees with me.”

The second part is the real test. If nothing would make you stop trusting a source, your trust may be unconditional, which is exactly what we want to avoid.`
    }
  ],

  pushback: `Write the best argument that deferring to experts is a failure of intellectual independence, and the best reply.`,

  notebook: `How often do you share something before checking it, and what is the pattern?`,

  selfcheck: [
    {
      q: 'Why is it reasonable to believe things you cannot personally verify?',
      options: [
        'It is not; you should only believe what you check yourself.',
        'Because most knowledge comes through trusted sources, and trust can be well grounded.',
        'Because experts are never wrong.',
        'Because the majority is usually right.'
      ],
      a: 1,
      why: 'Refusing all testimony would leave you knowing almost nothing. The task is to ground your trust well.'
    },
    {
      q: 'Which question helps you judge whether someone is a real authority?',
      options: [
        'How many followers do they have?',
        'Do they have relevant training and a track record in this specific area?',
        'Are they confident?',
        'Do they agree with me?'
      ],
      a: 1,
      why: 'Expertise is specific. Confidence and popularity are not evidence of it.'
    },
    {
      q: 'What is lateral reading?',
      options: [
        'Reading a page very quickly.',
        'Leaving a page to find out what other sources say about it, instead of judging it by its look.',
        'Reading only the middle of an article.',
        'Reading articles from the same author.'
      ],
      a: 1,
      why: 'Professional fact-checkers do this: they open new tabs to see what independent sources say about the site and its claims.'
    },
    {
      q: 'Why do incentives matter even when they do not make a claim false?',
      options: [
        'They prove the claim is false.',
        'They tell you where to look harder.',
        'They are irrelevant.',
        'They make the claim true.'
      ],
      a: 1,
      why: 'A financial or political interest is a reason for extra checking, not a refutation.'
    },
    {
      q: 'What is wrong with the idea that you should only believe what you have checked yourself?',
      options: [
        'It is too expensive.',
        'It would leave you believing almost nothing, since nearly all knowledge depends on others.',
        'It is illegal.',
        'It only applies to scientists.'
      ],
      a: 1,
      why: 'The better ideal is to rely on others carefully, with good reasons for trusting them, and to check what matters most.'
    }
  ],

  extension: `Build a short personal “source map”: the 10 sources you rely on most, with notes on what each is good for and what it tends to leave out.`
});
