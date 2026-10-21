window.COURSE.modules.push({
  n: 10, phase: 4,
  title: 'Disagreement and intellectual virtue',
  short: 'Disagreement and virtue',
  summary: 'The hardest test of critical thinking is not spotting someone else’s mistake but responding well when someone thoughtful disagrees with you.',

  question: `You and a friend, both smart and well-informed, look at the same evidence and reach opposite conclusions.

What should that do to your confidence? What should it do to how you treat them?`,

  lesson: `This module is about the character traits and conversational habits that make good reasoning possible with other people.

### Intellectual virtues

Some traits help us get at the truth: curiosity, open-mindedness, intellectual humility, honesty about evidence, and the courage to hold an unpopular view. Their opposites are closed-mindedness, arrogance, laziness, and cowardice. These are habits you can practice, not talents you either have or lack.

### Intellectual humility

This is not self-doubt or vagueness. It means holding beliefs with the confidence the evidence supports, acknowledging your limits, and being willing to be corrected. A humble thinker can still be firm when the evidence is firm.

### Peer disagreement

When an equally informed and careful person disagrees with you, that is evidence you may be wrong. Philosophers debate how much to adjust, from “a lot” to “hardly at all if you have special reasons to trust your own judgment.” There is no settled answer, but ignoring the question is not an option.

### Rapoport’s rules

A method often associated with the social psychologist Anatol Rapoport and popularized by Daniel Dennett:

1. Restate your opponent’s position so well that they say, “I wish I had put it that way.”
2. List points of agreement.
3. Mention anything you learned from them.
4. Only then offer your criticism.

The aim is to understand before attacking.

### Steelmanning

The opposite of a straw man: build the strongest version of a view you reject. If you cannot, you may not yet understand it.

### Mill’s argument

In *On Liberty*, chapter 2, John Stuart Mill argues that someone who knows only their own side of a case knows little even of that. Hearing the best opposing arguments is how a true belief stays alive rather than hardening into dogma.

### Changing your mind

A good reasoner updates when evidence warrants, and says so. Updating gracefully is a skill. Publicly conceding a point is a sign of strength, not weakness.

### Productive and unproductive disagreement

Productive disagreement asks what evidence would settle the matter. Unproductive disagreement is about status, loyalty, or the need to win. Notice which one you are in.

### Tone and trust

People change their minds more readily when they do not feel attacked. Asking a real question often does more than offering a rebuttal.`,

  example: `A colleague argues for a four-day work week; you doubt it. Before replying, you state their case: fewer hours can raise focus and retention, trial results in some organizations have been encouraging, and the savings in turnover can offset reduced hours.

You then ask: “What would you say to a company where work cannot be paused, like a hospital?”

That question respects their position and lets the disagreement go somewhere useful.`,

  reading: `John Stuart Mill, *On Liberty*, chapter 2, “Of the Liberty of Thought and Discussion” (public domain, freely available at Project Gutenberg).

Read the opening half, then summarize his central argument in 200 words.`,

  practice: [
    {
      prompt: 'Choose a view you disagree with. Write a steelman of it in a single page. Then, if you can, show it to someone who holds the view and ask what you missed.',
      model: `A steelman uses the best reasons and evidence defenders of the view would cite, in their strongest form, and frames the view the way they would. It should not contain any hints of “but of course this is wrong.”

The test is whether a believer would say, “Yes, that is what I think, and you stated it well.” If they point out something you missed, the exercise worked, even if you still disagree.`
    },
    {
      prompt: 'Rewrite an angry message you sent or received, in the order of Rapoport’s rules.',
      model: `Start by restating the other person’s point so well they would agree with it. Then name what you agree with. Then say what you learned, even if it is small. Only then give your criticism, and make it about the claim, not the person.

Compare the result with the original. The new version is usually longer and less satisfying to write, and much more likely to be heard.`
    },
    {
      prompt: 'Name a belief you have changed in the past five years. What changed your mind, and how long did it take?',
      model: `A useful answer names the cause: a book, a person, an experience, a piece of evidence. Notice how long it took. Most changes of mind are slow, built from many small updates rather than one conversion.

Also notice what it felt like at the time. If it felt like losing, that is worth knowing: it is part of why people resist.`
    },
    {
      prompt: 'For the belief you are most certain about, write what you would need to see or hear to give it up.',
      model: `Be specific: name the kind of evidence, who would have to produce it, and how strong it would have to be. “Nothing” is an answer, but a revealing one: it suggests the belief functions as an identity commitment.

A belief you hold with good reason can usually tell you what would count against it.`
    }
  ],

  pushback: `Write the best objection to “always steelman the other side.”

Are there views that do not deserve it?`,

  notebook: `When did you last say “I was wrong” and mean it? What made that possible?`,

  selfcheck: [
    {
      q: 'What is intellectual humility, and what is it not?',
      options: [
        'It is holding beliefs with the confidence the evidence supports; it is not self-doubt or vagueness.',
        'It is doubting everything you believe.',
        'It is avoiding disagreement.',
        'It is agreeing with whoever speaks last.'
      ],
      a: 0,
      why: 'A humble thinker can still be firm where the evidence is firm. Humility is about calibration and willingness to be corrected.'
    },
    {
      q: 'What does peer disagreement do to your rational confidence?',
      options: [
        'Nothing; the other person is simply wrong.',
        'It is evidence you may be wrong, though philosophers debate how much to adjust.',
        'It should make you adopt their view immediately.',
        'It should make you stop talking to them.'
      ],
      a: 1,
      why: 'An equally informed and careful person reaching a different conclusion is a reason to reconsider. How much is a live debate.'
    },
    {
      q: 'Which is the first of Rapoport’s rules?',
      options: [
        'Criticize the weakest point.',
        'Restate your opponent’s position so well they would say they wish they had put it that way.',
        'Concede everything.',
        'Change the subject.'
      ],
      a: 1,
      why: 'Understanding comes first. Criticism is offered only afterward.'
    },
    {
      q: 'What is the difference between a steelman and a straw man?',
      options: [
        'A steelman is the strongest version of a view; a straw man is a weak version made to be knocked down.',
        'They are the same.',
        'A steelman is written; a straw man is spoken.',
        'A straw man is more accurate.'
      ],
      a: 0,
      why: 'Steelmanning aims for the best version of the opposing view, which is the version that deserves a response.'
    },
    {
      q: 'According to Mill, why does it matter to understand arguments against your own view?',
      options: [
        'Because you will probably lose your view.',
        'Because someone who knows only their own side knows little even of that, and the view hardens into dogma.',
        'Because it makes you popular.',
        'Because it is required by law.'
      ],
      a: 1,
      why: 'Mill argues that a belief held without knowing the objections is held as a prejudice, not as understanding.'
    }
  ],

  extension: `Arrange a disagreement-for-understanding conversation with a friend or family member on a topic where you differ. Spend 20 minutes each stating the other’s view, and note what you learned.`
});
