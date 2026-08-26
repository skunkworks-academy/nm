---
id: labs
title: Hands-On Labs
sidebar_label: Labs
---

# Hands-On Labs

All labs must use the existing home lab, local virtual machines, vendor sandboxes or synthetic datasets. Never test third-party systems without explicit authorisation.

## Standard lab evidence

Every lab should include objective, authorised scope, environment diagram, steps, evidence, test results, conclusion, limitations, cleanup/rollback and references.

## Lab 1 — Windows authentication investigation

Generate or use safe sample failed/successful logons. Investigate Event IDs 4625 and 4624, build a timeline, identify source context and explain whether the evidence suggests user error, service-account problems or suspicious activity.

**Deliverable:** `event-4625-investigation/README.md` plus sanitised evidence.

## Lab 2 — Wazuh alert triage

Select three different Wazuh alerts. For each record rule ID/name, alert level, raw facts, hypothesis, next evidence, disposition and tuning recommendation.

**Deliverable:** three completed triage sheets.

## Lab 3 — Wazuh detection rule

Create or safely simulate a simple custom detection. Define the threat hypothesis, log source, logic, test events, expected alert and false positives.

**Deliverable:** rule/pseudocode, test evidence and tuning notes.

## Lab 4 — Network evidence analysis

Use a local packet capture or synthetic flow data. Identify endpoints, protocol, ports, DNS context and whether the traffic is expected.

**Deliverable:** annotated traffic-analysis note.

## Lab 5 — Incident-response tabletop

Simulate suspicious logons followed by a process alert. Decide severity, containment options, escalation path, evidence collection and recovery criteria.

**Deliverable:** incident timeline, decision log and stakeholder update.

## Lab 6 — Threat mapping

Choose three attacker behaviours relevant to authentication or endpoint activity. Map them to MITRE ATT&CK and identify Wazuh/Windows/network telemetry that could detect or investigate them.

**Deliverable:** ATT&CK-to-telemetry matrix.

## Lab 7 — Cloud-security baseline

Create a small vendor-neutral control baseline covering identity, MFA, least privilege, logging, storage exposure, network controls and monitoring. Map the concepts to Google Cloud and one additional cloud platform.

**Deliverable:** control comparison and architecture diagram.

## Lab 8 — SOC automation utility

Build a small Python or PowerShell utility for one safe task: normalising IOC lists, summarising failed logons, hashing evidence files or parsing a simple log export.

**Deliverable:** source, test data, output, README and limitations.

## Lab 9 — GitHub evidence workflow

Create an issue, branch, commit series and pull request for one investigation. Ensure no secrets or private data are committed.

**Deliverable:** traceable GitHub workflow and mentor/self-review note.

## Lab 10 — Capstone case

Combine authentication, endpoint and network evidence into a synthetic incident. Triage, investigate, map relevant ATT&CK techniques, propose response actions and present the case.

**Deliverable:** full portfolio case study and short presentation.
