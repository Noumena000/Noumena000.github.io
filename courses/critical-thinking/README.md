# Thinking Well

A self-paced course in critical thinking, taught philosophically. It is a static site: plain HTML, CSS, and JavaScript, with no build step, no dependencies, and no server. The course text is stored in readable files you can edit in any text editor.

## Try it locally

Open `index.html` in a browser. It works directly from your computer, with no web server needed.

## What is in the folder

| Path | What it holds |
| --- | --- |
| `index.html` | The page shell. It loads every script. |
| `css/style.css` | All styling, matched to the pilot course at `courses/thinking-well/`. The colors are variables at the top of the file, with dark-mode values. |
| `js/app.js` | The course runner: the path list, one-question-at-a-time practice and self-check, push-back box, capstone, backup. |
| `content/course.js` | Course-level text: intro, phases, capstone steps and rubric, resources, teacher notes. |
| `content/module-01.js` to `module-12.js` | One file per module: question, lesson, worked example, reading, four practice questions, push-back prompt, five self-check questions, optional extension. |

## Editing the course

Open any file in `content/` and change the text between the backticks. Text uses a small Markdown subset: paragraphs, `###` headings, `- ` bullets (one line each), `1. ` lists, pipe tables, `**bold**`, and `*italic*`. Do not put a backtick character inside the text.

Practice and self-check questions share one shape: `q` (the question), `options` (four choices), `a` (the position, starting at 0, of the correct option), and `why` (the explanation shown after any answer). The order shown to learners is shuffled by the app, so you can list the options in any order. When you write a distractor, keep it about as long and as specific as the correct option. Learners notice when the right answer is always the longest.

To add a module, copy an existing module file, change `n` and the content, and add a `<script>` line for it in `index.html`.

## How learner data is handled

Answers, push-back replies, and capstone writing are saved in each learner's own browser using localStorage (key `thinking-well:v2`; the first version's `thinking-well:v1` is read once so earlier progress carries over). The color-theme choice is stored under `thinking-well-theme`, which the pilot course shares. Nothing is sent anywhere, and there are no accounts or analytics. Learners can download their writing as Markdown and their full progress as a JSON backup, and restore the backup on another device, from the "Your work and backup" page. Clearing browser data erases saved work unless they have downloaded a backup.

## Before you treat it as finished

- Open each reading listed in `content/course.js` and the modules, and confirm it is still available. Titles are listed instead of web addresses on purpose.
- Decide what "free" means for the course text (read, reuse, adapt) and add a license notice. This is your choice to make, and different licenses allow different uses.
- If you publish through or alongside an employer, check any outside-work or intellectual-property policy first.
- The footer says the course is a draft awaiting expert review. Remove or change that line in `js/app.js` (the `footer()` function) once it is true.
- Module 12 will date fastest. Plan to revisit it.
