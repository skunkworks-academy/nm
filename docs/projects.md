---
id: projects
title: Portfolio Projects
sidebar_label: Portfolio Projects
---

# Portfolio Projects

The portfolio should show how Nkateko thinks and works, not only screenshots of tools. Every project must be safe to publish and should contain a clear README, evidence, references, limitations and lessons learned.

## Project 1 — SOC Analyst Portfolio Index

Create a landing repository/page that organises all security evidence by capability:

- investigations;
- Wazuh/SIEM work;
- detection engineering;
- incident response;
- networking;
- cloud security;
- automation;
- professional communication.

**Acceptance:** every claim links to evidence and outdated/duplicate material is removed.

## Project 2 — Event 4625 Investigation Pack

Expand the existing failed-logon investigation work into a professional case study with:

- scenario and scope;
- timeline;
- event interpretation;
- source/target context;
- correlation with successful logons where available;
- hypothesis and conclusion;
- false-positive considerations;
- response recommendations;
- references and lessons learned.

## Project 3 — Wazuh Detection Pack

Create at least three detection entries. Each should include threat hypothesis, data source, rule/logic, severity, test method, expected result, false positives, tuning notes and ATT&CK mapping.

## Project 4 — Incident Response Runbook

Build a junior-SOC-friendly runbook for a simulated suspicious Windows endpoint. Cover intake, severity, evidence collection, containment options, escalation, eradication/recovery considerations and lessons learned.

## Project 5 — Cloud Security Baseline

Build a concise control baseline covering identity, MFA, least privilege, logging, storage/network exposure, monitoring and incident evidence. Map concepts to Google Cloud and one additional major cloud platform.

## Project 6 — SOC Capstone Case Study

Create a synthetic multi-stage case that combines:

- authentication anomalies;
- endpoint/process evidence;
- network context;
- Wazuh alerts;
- ATT&CK mapping;
- detection logic;
- incident-response decision making;
- final technical and non-technical summaries.

## Standard repository structure

```text
project-name/
├── README.md
├── evidence/
├── detections-or-scripts/
├── references.md
├── SECURITY.md
└── review-notes.md
```

## Portfolio readiness rule

A project is interview-ready when Nkateko can explain the scenario without reading the README, answer why each step was taken, identify limitations and show that all published evidence is sanitised.
