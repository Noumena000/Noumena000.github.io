window.COURSE.modules.push({
  n: 12, phase: 5,
  title: 'Thinking with intelligent tools',
  short: 'Thinking with tools',
  summary: 'Everything in this course applies to AI chatbots and search tools, with one added difficulty: they produce fluent, confident prose whether or not it is true.',

  question: `You ask a chatbot a question and receive a polished, confident answer with specific names and numbers.

What does the polish tell you about whether it is correct?`,

  lesson: `Using these tools well means keeping your own judgment in charge.

### What these tools are

Large language models generate text that is likely to follow a prompt, based on patterns in training data. They can be remarkably useful for drafting, explaining, summarizing, and brainstorming. They are not databases of verified facts, and fluency is not evidence of accuracy.

### Fabrication

Such tools sometimes state things that are false, including invented quotations, references, and statistics, in the same tone they use for true statements. Treat any specific claim, citation, or figure as a lead to check, not as a finding.

### Agreeableness

Many assistants tend to agree with the person asking, to praise their ideas, and to adjust answers to what the user seems to want. This is sometimes called sycophancy. Ask for the strongest objection, ask the same question from the opposite side, and notice whether the answer shifts to match you.

### Applying the earlier modules

- Reconstruct the argument in an answer (module 2).
- Check whether it is valid and whether the evidence is strong (modules 3 and 4).
- Notice fallacies (module 5), including your own tendency to accept whatever confirms your view (module 6).
- Check terms (module 7), numbers (module 8), and sources (module 9).

### Verification habits

Check surprising claims against an independent source. Find the original of any quoted study. Ask the tool what it is unsure about, and treat the answer as a hint, not a guarantee. Where it matters, ask it to show its reasoning step by step, then check each step.

### Cognitive offloading

Handing thinking to a tool saves effort, and unpracticed skills fade. Decide in advance what you want to keep doing yourself. Draft your own view first, then ask the tool to critique it, rather than the other way round.

### Tools as sparring partners

A good use of an assistant is to attack your argument: ask for objections, counterexamples, and the best opposing view. A poor use is asking it to decide for you.

### Responsibility

If you pass along something a tool told you, you are the one asserting it. The accountability for claims does not transfer to the software.

### Privacy and trust

Be careful what you share. Information typed into a tool may be stored or used in ways you cannot see. Check the terms of any service before sharing anything sensitive.

### Looking ahead

These tools will change quickly. The habits you practiced in this course, asking for reasons, checking sources, and staying open to objection, will not.`,

  example: `You ask an assistant for evidence that a certain diet improves memory. It cites three studies, with authors and years.

Steps: search for each title; confirm that each exists; read the summaries; check whether the results were in humans, how many people, and for how long; ask a second time with the opposite framing (“What evidence is there that this diet does not help?”).

If two of the three studies do not exist, treat the rest of the answer with suspicion.`,

  reading: `Choose one reputable, current, plain-language introduction to how language models work and where they fail, from a university or a research organization.

Because this area changes fast, look for something published recently, and note its date.`,

  practice: [
    {
      q: 'You ask a chatbot about a field you know well, and sort its twelve claims: nine correct, one wrong but stated with full confidence, and two you cannot verify. What is the most useful takeaway?',
      options: [
        'It is 75 percent reliable, so you can trust it to that degree on every other topic too.',
        'Note where it was solid, vague, or confidently wrong, so you know where to check elsewhere.',
        'One confident error means the tool is useless, and you should stop using it for anything.',
        'Only the one wrong claim really matters, so you can ignore the rest of that answer.'
      ],
      a: 1,
      why: 'The pattern is the finding. A single percentage hides where the tool can be trusted and where it states something false with full confidence. Use what you learn about its failure points to decide what to check when you cannot judge the answer yourself.'
    },
    {
      q: 'You ask a chatbot whether a four-day work week is a good idea and get a favorable answer. You then write, “I think it is a bad idea. Am I right?” and it now agrees with you. What does this suggest, and what is the better habit?',
      options: [
        'The tool weighed new evidence and honestly changed its view, so you should trust the second answer.',
        'The tool answers at random, so ask a third time and keep whichever answer appears most often.',
        'Both answers are correct, because the question was ambiguous and had two reasonable readings.',
        'It may be tracking what you seem to want; ask for the best case on each side instead.'
      ],
      a: 3,
      why: 'If the substance shifted toward whatever you seemed to want, you have seen agreeableness at work. You had given the tool no new evidence, only a new preference. A better habit is to ask for the best case on each side and make the call yourself.'
    },
    {
      q: 'You have drafted your own argument on a debatable topic. What is the best way to use an assistant?',
      options: [
        'Ask it to rewrite your argument so that it reads more strongly, then use its version instead.',
        'Ask whether the argument is good, and simply keep it as it stands if the answer is yes.',
        'Ask for the three best objections, then judge each one yourself and ask for stronger ones.',
        'Ask it to write its own argument first, then edit yours so that the two roughly match.'
      ],
      a: 2,
      why: 'The order matters. Writing first commits you to your own reasoning before the tool can shape it. Using the tool to attack your argument keeps you in charge, while asking it to approve or replace your argument hands the judgment away. A tool’s objections can be too gentle, so consider a human who disagrees with you as well.'
    },
    {
      q: 'Suppose you want to keep your own reasoning skills sharp. Which task is most worth continuing to do yourself?',
      options: [
        'Summarizing what you read in your own words, to work out what you think.',
        'Reformatting a long bibliography into a different citation style for a new journal.',
        'Looking up a unit conversion that you only need once for a recipe.',
        'Checking the spelling and punctuation in a short email before you send it.'
      ],
      a: 0,
      why: 'A useful test: would you be comfortable if the tool were unavailable for a month? Some tasks are fine to delegate, such as formatting and quick lookups. Others build skills you value, such as writing your own arguments and summarizing what you read. There is no single right answer. The point is to decide on purpose instead of drifting into dependence.'
    }
  ],

  pushback: `Write the best case that relying heavily on AI tools does not erode human thinking.

Then write the best case that it does.`,

  selfcheck: [
    {
      q: 'Why is fluency not evidence of accuracy?',
      options: [
        'Fluent text is always wrong.',
        'These tools can produce confident, polished text whether or not it is true.',
        'Fluent writers are usually careless.',
        'Accuracy cannot be measured.'
      ],
      a: 1,
      why: 'The tool generates likely-sounding text. It sounds the same when it is right and when it is wrong.'
    },
    {
      q: 'What is sycophancy in an assistant, and how can you test for it?',
      options: [
        'Excessive detail; ask for a summary.',
        'A tendency to agree with and flatter the user; ask the question from the opposite side and see if the answer shifts.',
        'Slow responses; time the replies.',
        'Refusing to answer; rephrase the question.'
      ],
      a: 1,
      why: 'If the answer changes to match whichever side you seem to favor, the tool is tracking you, not the evidence.'
    },
    {
      q: 'How would you verify a citation a chatbot gives you?',
      options: [
        'Ask the chatbot if it is sure.',
        'Search for the title independently, confirm it exists, and read what it actually says.',
        'Assume it is correct if it has an author and a year.',
        'Ignore it.'
      ],
      a: 1,
      why: 'Invented references can look entirely plausible. Check them against an independent source.'
    },
    {
      q: 'What is a good use of an assistant as a sparring partner?',
      options: [
        'Asking it to decide for you.',
        'Writing your own argument first and asking it for the strongest objections.',
        'Asking it to agree with you.',
        'Copying its answer without reading it.'
      ],
      a: 1,
      why: 'Using it to test your reasoning keeps you in charge, while still giving you the benefit of an outside critic.'
    },
    {
      q: 'Who is responsible for a claim you repeat from a tool?',
      options: [
        'The tool’s maker.',
        'The tool.',
        'You.',
        'Nobody.'
      ],
      a: 2,
      why: 'If you pass it along, you are the one asserting it. Accountability does not transfer to the software.'
    }
  ],

  extension: `Compare how three different assistants answer the same hard question. Note where they agree, where they differ, and which differences you can resolve by checking sources.`
});
