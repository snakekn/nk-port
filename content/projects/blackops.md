+++
title = 'supporting black founders VC with tool automation'
date = 2023-11-20T21:27:10-08:00
draft = false

+++

Black Operators VC is a venture capital firm built by black founders, for black founders. With a small team, they were looking for ways to reduce their adminstrative tasks to emphasize time spent caring for founders.

I worked with Antonia (role: Principal) to develop low-cost and low-time tools they could start running with to support the 20+ requests they were receiving for review each week.

Antonia & I spent some time to review the team's goals, and specifically to understand her experienced pain points:
- She was requesting companies who found Black Ops for standard information, and didn't want to spend her time here.
- Many startups didn't meet the VC's basic funding thesis, and wanted to focus on black founders making an impact.
- Antonia would ask the Managing Partners to review and score companies to determine if they would pass, and she didn't want to manually have to send and tally scorecards.
- As the company expanded, they were creating new databases to handle new data and they were experencing information segmentation.

I built a relational database using Airtable (a low-code database SaaS) to manage their data in one place. 

Airtable helped by:
- Automating email sendouts so Antonia could manage her ongoing relationships (rather than her rejected companies).
- Putting their data first when a teammate enters the page, making it easy to filter through companies and take action on a startup.
- Sending scorecards to each Partner and tallying the scores, letting Antonia know whether the company should move forward without any calculating on her part.

![airtable uses automation steps so data can take action on its own.](/projects/blackops/automation.png)
*automations let the data take action, so nobody has to keep an eye on the data.*

![an image of the relational database's metadata.](/projects/blackops/database.png)
*they need to keep lots of data on each startup. relational databases help reduce information overload by sharing data only where it needs to be loaded and seen.*

![the header of a form.](/projects/blackops/form.png)
*startups would pitch via email before. now, antonia can receive exactly the information she needs to move startups forward from first interaction.*

![the header of a database documentation page.](/projects/blackops/notion.png)
*a large database makes future edits tricky. i wrote a comprehensive guide to their airtable instance, including references on how to edit tables, automations, and avoid common issues to airtable.*

![a table of contents for the documentation.](/projects/blackops/toc.png)
*the table of contents for the documentation guide on notion.*