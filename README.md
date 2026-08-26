# Nkateko Mtembi — Individual Development Roadmap

Docusaurus-based Skunkworks Academy IDR for `https://nm.skunkworksacademy.com`.

## Development focus

- Junior SOC Analyst → SOC Analyst pathway
- Wazuh SIEM and alert triage
- Windows security-event investigations
- detection engineering fundamentals
- incident response and MITRE ATT&CK
- networking and cloud-security fundamentals
- GitHub portfolio/evidence quality
- professional communication and mentor review

## Source basis

The IDR is derived from Nkateko's submitted Career Growth and Learning Assessment and supplied professional profile. Public content is intentionally sanitised and excludes private contact details.

## Local development

```bash
npm install
npm run validate
npm run start
```

Production build:

```bash
npm run check
```

## Information architecture

The Docusaurus documentation routes live under `/idr/` and include overview, capability profile, pathway, 12-month roadmap, 12-week sprint, credentials, curriculum, labs, assignments, portfolio projects, calendar, KPIs, mentor review, governance, resources, references and download/sign-off.

## Deployment

`main` deploys through GitHub Actions to GitHub Pages with the custom domain `nm.skunkworksacademy.com`.
