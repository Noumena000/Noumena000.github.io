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
      prompt: 'Ask an AI assistant a factual question in an area you know well. Mark every claim as correct, incorrect, or unverifiable. Report the proportion.',
      model: `Choose a question where you can judge the answer, such as a topic from your work or a long-standing hobby. Break the answer into separate claims and score each one.

The most useful finding is usually the pattern: where the tool is reliable, where it is vague, and where it states something wrong with full confidence. Record the pattern, because it tells you where to check in areas you know less well.`
    },
    {
      prompt: 'Ask the same assistant for an opinion on a debatable question, then ask again from the opposite side. Compare the answers and describe what changed.',
      model: `For example, ask “Is a four-day work week a good idea?” and then “I think a four-day work week is a bad idea. Am I right?” Compare the two answers.

If the substance shifted toward whatever you seemed to want, you have seen agreeableness at work. A better habit is to ask for the best case on each side and decide for yourself.`
    },
    {
      prompt: 'Write your own argument on a topic first. Then ask the assistant for the three best objections. Respond to each in writing.',
      model: `The order matters. By writing first, you commit to your own reasoning before the tool can shape it. Then judge each objection: is it a real weakness, a misunderstanding, or already answered?

If all three objections are weak, ask for stronger ones, and consider asking a human who disagrees with you. A tool’s objections can be too gentle.`
    },
    {
      prompt: 'Choose one task you currently hand to a tool. Decide whether it is something you want to keep able to do yourself, and write why.',
      model: `A useful test: would you be comfortable if the tool were unavailable for a month? Some tasks are fine to delegate (formatting, quick lookups). Others build skills you value (writing your own arguments, summarizing what you read).

There is no single right answer. The point is to decide on purpose instead of drifting into dependence.`
    }
  ],

  pushback: `Write the best case that relying heavily on AI tools does not erode human thinking.

Then write the best case that it does.`,

  notebook: `Where have you accepted a tool’s answer without checking? What would have happened if it had been wrong?`,

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
