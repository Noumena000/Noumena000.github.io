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
      q: 'A viral post says “Scientists prove food additive causes cancer.” The paper behind it reports that compounds in the additive were linked to tumors in mice, at doses far above anything people eat. What did the post lose?',
      options: [
        'The authors’ names, the journal it appeared in, and the date of publication.',
        'The hedge (“linked to”), the species (mice, not people), and the dose.',
        'The paper’s length, its technical vocabulary, and its overall tone of voice.',
        'Nothing important; the post simply shortened the finding to make it fit.'
      ],
      a: 1,
      why: 'Typical losses are hedges, the sample and population, the numbers, and the limitations the authors stated. Each retelling tends to drop caution and add drama. Compare the claim as it first appeared with the claim as it reached you.'
    },
    {
      q: 'A Nobel Prize-winning physicist says in an interview which diet is best for protecting memory. How should you weigh that?',
      options: [
        'As strong evidence, since a physicist is a very careful and rigorous thinker.',
        'As strong evidence, since Nobel winners are rarely wrong about anything they say.',
        'As worthless, since famous people simply cannot be trusted about anything at all.',
        'As weak evidence on nutrition, since expertise is specific to a field.'
      ],
      a: 3,
      why: 'A great physicist is not automatically an authority on nutrition. Ask about training and a track record in this specific area, and whether experts in that field agree. “Worthless” goes too far: the point is to look to the people with the relevant expertise.'
    },
    {
      q: 'Two outlets report the same protest. One says “thousands marched peacefully”; the other says “mobs clashed with police.” What is the best way to read them?',
      options: [
        'Trust the outlet whose tone you like more, and set the other aside entirely.',
        'Assume that the truth lies exactly halfway between the two accounts of events.',
        'List the facts both report, then note what each adds or leaves out.',
        'Prefer the more dramatic report, since vivid detail suggests it saw more.'
      ],
      a: 2,
      why: 'The facts both outlets share are the most reliable core. The differences show framing: which facts were included or left out, and which words were used for the same event. The goal is not to find the one unbiased outlet but to read through the framing to the facts.'
    },
    {
      q: 'Which reason for trusting a news source is best grounded?',
      options: [
        'It corrects its errors, explains its methods, and reports inconvenient facts.',
        'It usually agrees with what I already think, which makes it feel trustworthy to me.',
        'Many people share its articles every day, so it must be doing something right.',
        'It sounds completely certain and never hedges, which suggests it knows its subject.'
      ],
      a: 0,
      why: 'Good reasons are specific and checkable: correction practices, transparency about methods, a record of being right when it was inconvenient. Agreement, popularity, and confident tone are not evidence of reliability. The follow-up question matters just as much: what would make you stop trusting it?'
    }
  ],

  pushback: `Write the best argument that deferring to experts is a failure of intellectual independence, and the best reply.`,

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
