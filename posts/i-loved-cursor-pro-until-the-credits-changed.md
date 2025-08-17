---
title: "I Loved Cursor Pro Until the Credits Changed"
date: "2025-08-17"
readingTime: "7 min read"
---

# I Loved Cursor Pro Until the Credits Changed  

When AI coding assistants started getting useful, I was one of those people who jumped in fast. I’m a software engineer who works on web tech by day and spins up side projects and freelance work on nights and weekends. There’s always more to do than hours in the day, and anything that speeds up development, testing, or just getting a proof-of-concept out the door is immediately interesting to me.  

My journey started with ChatGPT: great ideas, but I hit context limits and half-finished pages all the time. I’d get a chunk of code, it would cut off in the middle of a bracket, and the “continue” dance would sometimes lose the thread. I tried GitHub Copilot but felt like I wasn’t getting the most out of it. It behaved like a completion tool, not a partner. Then I discovered Sourcegraph’s Cody in VS Code and thought, “Okay, this is magic.” It was free but limited. I wanted more.  

That’s when I tried Cursor.  

---

## Falling for the Features  

Cursor’s free week (50 requests) was enough to hook me. When I came back to coding after a short break I started paying for Pro, and for the first few months I was experimenting non-stop: documenting libraries and resources, letting agents apply fixes to files, creating files without me telling them line by line. At times it felt like Cursor was doing the boring, repetitive work I hate, leaving me to the parts of engineering I actually enjoy.  

I recommended it to friends and family. I got three people to sign up and start paying. The product met my expectations, then some. When they released agents that could apply code directly to your files, create new files, and automate parts of workflows, I was genuinely impressed.  

---

## The One Thing That Changed Everything: Credits and Pricing  

This is where things went sideways for me. For months the $20 Pro plan and the way usage was shown in the dashboard made sense: you had a simple “credits” view and you could see how many you’d used. It was predictable, and it let me recommend the product confidently.  

Recently they changed how included usage is handled and how it’s displayed. The $20 price stayed the same, but the effective amount of usage you get per month (how many requests you can make on various models) got smaller for some models, and the dashboard now shows token counts and lines of code rather than the simple credits view I was used to. The docs even list rough equivalencies (for example, Pro being roughly ~550 Gemini requests or ~225 Sonnet 4 requests, and different included usage for higher tiers). [See Cursor’s pricing docs](https://docs.cursor.com/en/account/pricing).  

There are a few specifics that bothered me:  

- The limits feel more granular and more confusing now. It’s split by model, and if you use up your allocation on one model (say Claude 4) it can block other models even though you haven’t “used more” overall in the way you used to.  
- The dashboard switches from “credits left” to “tokens and lines” which is less intuitive when you’ve been tracking a credits balance for months.  
- The “Auto” model selection used to be reliable for me. Now it feels like it switches to models that give far fewer usable requests, and if you’re used to the pro models, Auto isn’t a great fallback.  
- Practically: my billing cycle started on the 9th of the month and by the 16th I was already at my limit. I hadn’t increased my usage, nothing about my workflow changed, but I hit the cap much earlier than before.  

Look, I get it: new, bigger models cost more to run and companies need to balance product quality with sustainability. I’m not outraged about the need to adjust pricing. I am, however, frustrated by the opaque way the change affects real-world usage and recommendations. When I was telling people “$20 gets you 500 credits and you’re fine,” that was an easy sell. Now it isn’t.  

---

## Bugs and Other Niggles (Not the Reason I’m Leaving)  

To be clear: this isn’t a story about buggy software. There are a few bugs, but nothing that would make me leave on its own. The UX around usage and the pricing model is the real problem for me. If Cursor fixed the usage display, made the model-usage rules easier to understand, or rebalanced how included usage maps to the newer models, I’d be back in a heartbeat. I mean it: I love the product.  

---

## So I’m Trying Windsurf  

Because of the credit changes and the dashboard confusion, I’m switching to **Windsurf**. They are offering what Cursor originally did: 500 requests for a fixed price. It’s simple and predictable, and that’s exactly what I need when coding for my job, side projects, and freelance clients.  

Would I recommend Cursor today? Not as-is. Would I recommend it to certain people? Maybe, if you’re curious and don’t mind crunching numbers and monitoring usage closely, it might still be a good fit. But for now, when someone asks me “is Cursor Pro worth it?” my answer is: it was absolutely worth it for me for nine months, but with the current pricing and usage model I can’t recommend it to people who want a predictable, hands-off experience.  

---

## Closing: A Love Letter, But Conditional  

I’m not writing this as a burn notice. Cursor did a lot of things right and it helped me ship more and worry less for months. This is more of a frustrated love letter: I want Cursor to work, and I’d happily come back if the team made the usage model simpler and gave more predictable included usage for those of us who rely on it day to day.  

If you’re a developer thinking about Cursor: try it, see how it fits your workflow, and pay close attention to the dashboard and which models you pick. If you’re a product person at Cursor reading this: please make the included usage easier to understand and make Auto behave like the “pro” Auto that used to feel like a safe middle ground.  
