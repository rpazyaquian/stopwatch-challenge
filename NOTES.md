# Questions to Answer

- What technologies will you use?
- What domain knowledge do you need?
- What are the specs and acceptability requirements?

# Technologies

The stopwatch challenge will be a simple JavaScript web app, backed by the **ReactJS** framework. The ReactJS framework is extremely good at reactive, data-driven UI concerns, and I expect it to be a good fit for a real-time stopwatch.

# Domain Knowledge

I'll need to figure out how to model a stopwatch in JavaScript. I know that I can work with time data, but the harder question is making it run regularly. How often will the stopwatch update per second? (This is similar to concerns in creating an update-render loop for a video game.)

# Specs and Acceptability Requirements

Per the stopwatch prompt, this is the acceptance criteria for the challenge:

```markdown
Acceptance criteria:

The user must be able to perform the following actions:
- A button to start the timer
- A button to stop the timer
- A button to reset the timer
- A display for the timer in the following format: `00:00:00`
```

So, the app needs to:

- Display the current stopwatch time
- Start the stopwatch timer
- Stop the stopwatch timer
- Reset the stopwatch timer
