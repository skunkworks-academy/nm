---
id: governance
title: Governance, Privacy and Safety
sidebar_label: Governance & Safety
---

# Governance, Privacy and Safety

The public IDR and portfolio must be useful without exposing personal or organisational information.

## Never publish

- passwords, API keys, tokens, private keys or connection strings;
- personal phone numbers, email addresses or home addresses;
- employer/customer private data;
- production logs with identifiers or confidential information;
- unauthorised vulnerability details;
- private tenant/account identifiers;
- screenshots that expose sensitive administration details.

## Safe lab rule

Use only:

- Nkateko's own home-lab systems;
- local virtual machines;
- synthetic data;
- vendor-provided training sandboxes;
- systems for which explicit testing permission exists.

## Evidence sanitisation checklist

Before committing evidence to GitHub:

1. remove personal/contact information;
2. search for secrets and tokens;
3. replace real usernames/hostnames with synthetic examples where practical;
4. crop/redact screenshots that expose irrelevant identifiers;
5. verify repository visibility;
6. check commit history, not only the latest file;
7. include references and explain what was simulated.

## Responsible security practice

This roadmap does not require scanning, exploiting, accessing or modifying third-party systems without permission. If lab scope is unclear, stop and clarify before proceeding.

## Accidental exposure process

If a secret or sensitive value is committed:

1. stop further sharing;
2. revoke/rotate the secret if applicable;
3. notify the relevant owner/mentor;
4. remove the data from the current repository state;
5. assess Git history and published artefacts;
6. document the corrective action.

## Quality rule

A technically strong artefact cannot pass review while it contains unsafe or unauthorised information.
