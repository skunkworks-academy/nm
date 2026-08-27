import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ProgressWorkspace from '@site/src/components/ProgressWorkspace';
import styles from './index.module.css';

const siteUrl='https://nm.skunkworksacademy.com';
const sprintUrl=`${siteUrl}/idr/12-week-sprint/`;
const calendarUrl=`${siteUrl}/idr/calendar/`;
const pdfUrl=`${siteUrl}/downloads/Nkateko_Mtembi_Individual_Development_Roadmap.pdf`;

const cards=[
 ['01','Understand the roadmap','Review the learner profile, recommended pathway and 12-month outcomes.','/idr/overview/'],
 ['02','Run the 12-week sprint','Follow a focused weekly SOC, SIEM, cloud-security and communication plan.','/idr/12-week-sprint/'],
 ['03','Build technical evidence','Complete safe labs using Wazuh, Windows logs, networking, GitHub and cloud-security concepts.','/idr/labs/'],
 ['04','Build the portfolio','Turn investigations, detections, runbooks and projects into interview-ready evidence.','/idr/projects/'],
 ['05','Track skill milestones','Use credentials and practical milestones to structure learning without chasing certificates alone.','/idr/credentials/'],
 ['06','Review progress','Use measurable KPIs, mentor reviews and the study calendar to control pace.','/idr/kpis/']
];

function Hero(){return <header className={styles.hero}><div className="container hero-grid"><div><p className="hero-kicker">Skunkworks Academy · Individual Development Roadmap</p><h1 className="hero-title">Welcome, <span>Nkateko.</span></h1><p className="hero-lead">Build from a hands-on Wazuh home-lab foundation into employable SOC capability: SIEM operations, Windows event investigation, threat detection, incident response, cloud security, GitHub evidence and professional communication.</p><div className="button-row"><a className="button button--primary button--lg" href={sprintUrl}>Start the 12-week sprint</a><a className="button button--secondary button--lg" href={calendarUrl}>Open study calendar</a><a className="button button--secondary button--lg" href={pdfUrl} download>Download IDR PDF</a></div><div className="privacy-banner"><strong>Public evidence rule:</strong> do not publish personal contact details, credentials, customer information, production logs or sensitive architecture. Use synthetic data and authorised lab environments.</div></div><aside className="hero-panel"><div><span>Recommended entry pathway</span><strong>Junior SOC Analyst → SOC Analyst</strong></div><div><span>Technical emphasis</span><strong>Wazuh SIEM · Windows telemetry · Detection · Incident response</strong></div><div><span>Broader growth</span><strong>Cloud security · GitHub · Networking · AI awareness</strong></div><div><span>Learning preference</span><strong>Self-paced · Hands-on · Regular one-on-one feedback</strong></div><div><span>Initial sprint</span><strong>12 weeks · evidence based</strong></div></aside></div></header>}

export default function Home(){return <Layout title="Nkateko Mtembi — Individual Development Roadmap" description="Interactive cybersecurity career roadmap for SOC operations, SIEM, threat detection, incident response and cloud security."><Hero/><main className="container"><section className="home-section"><div className={styles.sectionHead}><div><p>Execution model</p><h2>Move from learning to demonstrable evidence.</h2></div><span>Every phase ends in a lab, investigation, runbook, repository or mentor-reviewed artefact.</span></div><div className="home-grid">{cards.map(([n,t,c,l])=><Link className="home-card" to={l} key={n}><small>{n}</small><h3>{t}</h3><p>{c}</p><strong>Open →</strong></Link>)}</div></section><section className="north-star"><p className="hero-kicker">12-month North Star</p><h2>Become employable, defensible and progressively independent in security operations.</h2><p>By the end of the roadmap, Nkateko should be able to investigate Windows and network security events, operate and tune a SIEM, document incident decisions, create basic detections, explain common threats, use GitHub professionally, demonstrate cloud-security fundamentals and present a credible evidence portfolio for junior SOC and security-operations roles.</p></section><section className="home-section" id="workspace"><div className={styles.sectionHead}><div><p>Progress workspace</p><h2>Track the work locally in your browser.</h2></div><span>Completion data stays in browser local storage and can be exported as JSON for mentor review.</span></div><ProgressWorkspace/></section></main></Layout>}
