+++
title = 'contact tracing on navy ships using on-person RFID sensors'
date = 2023-11-20T21:27:10-08:00
draft = false

+++


I was contracted by the National Security Innovation Network during COVID to develop on-vessel contact tracing with the Navy. Given my civilian status, all the work had to be done remotely.

My team requested dimensions at key points on the ship (some of which we were granted), along with access to several on-vessel personnel to determine user practices we could utilize. In a 10-week design period, we made a decentralized sensor system using small custom-made RFID clips and hallway RFID readers to keep track of physical user interactions. A centralized system kept track of sensor pings and, when given a PII-removed sensor ID, would tell an authorized user who the person spent time near in the last 5 days.

### Takeaways
- Remote work requires a shared sense of open communication to ensure everyone is meaningfully working toward the same goal.
- Determining specific requirements can help turn a complex project into more linear goals.

![the ecosystem of technology we utilized](/projects/torus/tech.png)
*the on-person and gateway sensors required various niche technologies to come together in a cheap format.*

![two designs describing the final product.](/projects/torus/design.png)
*we prototyped on raspberry pi\'s, deployed via docker, built and shipped pcb prototypes, and put a plastic shielding outside the device.*

![a list of lessons and future recommendations.](/projects/torus/lessons.png)
*we shared our design pitch with our navy team along with what we'd learned during the experience and how we\'d improve our design if we kept designing.*