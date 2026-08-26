---
id: 12-week-sprint
title: 12-Week Applied Sprint
sidebar_label: 12-Week Sprint
---

# 12-Week Applied Sprint

<div className="idr-badges"><span className="idr-badge">Proposed start: 31 Aug 2026</span><span className="idr-badge">Self-paced</span><span className="idr-badge">Hands-on evidence</span><span className="idr-badge">Regular mentor review</span></div>

This sprint turns Nkateko's current Wazuh/home-lab foundation into structured SOC evidence. Each week should end with something inspectable: an investigation, rule, runbook, diagram, test result or written explanation.

## Sprint map

| Week | Focus | Practical output | Acceptance signal |
|---:|---|---|---|
| 1 | SOC baseline | Capability matrix + lab inventory | Clear starting point and evidence standard |
| 2 | Networking & Windows telemetry | Event-source map + packet/Windows notes | Can explain where security evidence comes from |
| 3 | Wazuh operations | Wazuh architecture and alert-triage notes | Can trace agent → manager → rule → alert |
| 4 | Authentication investigation | Event 4625 investigation pack | Evidence-based conclusion with timeline |
| 5 | Detection engineering | Two basic detection ideas/rules | Logic, test method and false positives documented |
| 6 | Incident response | Endpoint-compromise tabletop runbook | Severity, escalation and containment decisions clear |
| 7 | GitHub workflow | Clean evidence repository and PR workflow | Work is traceable and reviewable |
| 8 | Cloud security | Cloud-control baseline | Identity/logging/least-privilege concepts explained |
| 9 | ATT&CK & threat intelligence | Technique-to-telemetry map | Can connect attacker behaviour to observable evidence |
| 10 | Automation | Small Python/PowerShell SOC utility | Safe input/output and clear README |
| 11 | Communication | Executive-style incident summary + mock interview | Explains findings clearly without jargon overload |
| 12 | Capstone | Multi-stage SOC case study | Portfolio-ready evidence and next-90-day plan |

## Week 1 — Baseline and SOC foundations

**Objectives**
- understand the role of Tier-1/Tier-2 SOC work;
- inventory the current Wazuh lab and available telemetry;
- define a simple evidence standard for every future investigation;
- identify what is already strong and what still needs structured practice.

**Practical work**
Create a capability matrix covering networking, Windows logs, Wazuh, incident response, Git, cloud security and communication. Draw the current home-lab architecture and identify which logs are available.

**Evidence**
- `capability-matrix.md`
- `lab-architecture.md` or diagram
- first mentor/self-review note

## Week 2 — Networking and Windows telemetry

**Objectives**
- reinforce IP addressing, ports, DNS, DHCP, TCP/UDP and common protocols;
- understand Windows Security log sources and authentication events;
- practise timeline thinking.

**Practical work**
Create an event-source map for Windows endpoint, authentication and network evidence. Capture safe examples from the home lab and explain what each event proves and what it does not prove.

**Evidence**
- event-source map;
- short notes on Event IDs 4624, 4625 and a process-creation event source;
- one basic network flow explanation.

## Week 3 — Wazuh operations

**Objectives**
- understand Wazuh agents, manager, decoders, rules, alert levels and dashboards;
- distinguish collection from detection;
- practise alert triage.

**Practical work**
Take three safe lab alerts and document: source, rule, severity, observable facts, possible explanation, next evidence to collect and final disposition.

**Evidence**
- Wazuh architecture diagram;
- three alert-triage records;
- one tuning idea.

## Week 4 — Event 4625 investigation

**Objectives**
- investigate failed Windows logons systematically;
- distinguish user error, service/account issues and brute-force indicators;
- document assumptions and uncertainty.

**Practical work**
Use synthetic or authorised Windows event data. Build a timeline around repeated 4625 events, correlate source information, check successful logons where available and produce a conclusion.

**Evidence**
- investigation README;
- timeline table;
- evidence screenshots/log excerpts with private data removed;
- conclusion and recommended next steps.

## Week 5 — Detection engineering basics

**Objectives**
- write detections from a threat hypothesis;
- define required telemetry;
- test expected positives and benign activity;
- document false positives.

**Practical work**
Design two simple detection ideas: one authentication-based and one endpoint/process-based. Implement in Wazuh where safe or provide well-formed rule/pseudocode.

**Evidence**
For each detection: hypothesis, telemetry, logic, severity, test case, false positives, tuning notes and ATT&CK mapping.

## Week 6 — Incident response

**Objectives**
- understand identify → contain → eradicate → recover → lessons learned;
- separate facts from assumptions;
- know when to escalate.

**Practical work**
Run a tabletop for a simulated suspicious endpoint with failed logons and an unusual process alert. Write the incident timeline, severity rationale, containment options and stakeholder update.

**Evidence**
- incident-response runbook;
- timeline;
- decision log;
- concise incident update.

## Week 7 — Git and GitHub professionalism

**Objectives**
- use issues, branches, commits and pull requests cleanly;
- organise portfolio evidence;
- protect secrets and sensitive data.

**Practical work**
Refactor one existing SOC portfolio investigation into a professional repository structure with README, evidence, references and lessons learned.

**Evidence**
- issue → branch → PR history;
- improved README;
- privacy/security check.

## Week 8 — Cloud-security fundamentals

**Objectives**
- understand shared responsibility;
- explain identity, MFA, least privilege, logging, storage/network exposure and monitoring;
- connect cloud events to SOC operations.

**Practical work**
Build a vendor-neutral cloud-security baseline, then map equivalent services/concepts in Google Cloud and one additional major cloud platform.

**Evidence**
- control matrix;
- simple cloud architecture diagram;
- one logging/detection use case.

## Week 9 — MITRE ATT&CK and threat intelligence

**Objectives**
- use ATT&CK to organise behaviours rather than memorise IDs;
- distinguish indicators from behaviours;
- map detections to useful telemetry.

**Practical work**
Choose three common behaviours and map tactic, technique, likely data sources, Wazuh/Windows evidence and investigation questions.

**Evidence**
- technique-to-telemetry matrix;
- one threat-intelligence note explaining source confidence and relevance.

## Week 10 — Automation basics

**Objectives**
- automate a small repetitive SOC task;
- validate inputs and outputs;
- avoid unsafe assumptions.

**Practical work**
Build a small Python or PowerShell utility such as IOC-list normalisation, failed-logon summary parsing or evidence-file hashing.

**Evidence**
- source code;
- README;
- test input/output;
- limitations and safety notes.

## Week 11 — Communication and interview evidence

**Objectives**
- improve concise technical communication;
- explain incidents to both technical and non-technical audiences;
- practise junior SOC interview responses using real portfolio evidence.

**Practical work**
Rewrite one investigation as a one-page incident summary. Prepare three STAR-style stories: investigation, learning challenge and teamwork/initiative.

**Evidence**
- one-page summary;
- three interview stories;
- mentor feedback notes.

## Week 12 — Capstone

**Objectives**
- combine telemetry, detection, investigation and communication;
- show a complete SOC workflow;
- decide the next specialisation direction.

**Practical work**
Create a synthetic multi-stage case: suspicious authentication, endpoint alert and supporting network evidence. Triage, investigate, map ATT&CK, document response and present the conclusion.

**Evidence**
- capstone repository;
- investigation timeline;
- detection logic;
- incident-response decisions;
- 5–10 minute presentation;
- next-90-day plan.

## Completion rule

A week is accepted only when Nkateko can explain the evidence, identify limitations, protect sensitive information and respond to review questions. Time spent alone does not equal completion.
