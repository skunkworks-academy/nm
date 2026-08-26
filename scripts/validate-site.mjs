import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const errors=[];
const required=[
 'docusaurus.config.js','sidebars.js','src/pages/index.jsx','src/components/ProgressWorkspace.jsx',
 'docs/overview.md','docs/profile.md','docs/pathway.md','docs/roadmap.md','docs/12-week-sprint.md','docs/credentials.md','docs/curriculum.md','docs/labs.md','docs/assignments.md','docs/projects.md','docs/calendar.md','docs/kpis.md','docs/mentor.md','docs/governance.md','docs/resources.md','docs/references.md','docs/download-and-review.md',
 'static/CNAME','static/route-recovery.js','static/downloads/nkateko-idr-12-week-calendar.ics','scripts/generate-idr-pdf.mjs'
];
for(const file of required){const full=path.join(root,file);if(!fs.existsSync(full)||fs.statSync(full).size===0)errors.push(`${file}: missing or empty`)}
const cname=fs.readFileSync(path.join(root,'static/CNAME'),'utf8').trim();if(cname!=='nm.skunkworksacademy.com')errors.push('static/CNAME: wrong domain');
const config=fs.readFileSync(path.join(root,'docusaurus.config.js'),'utf8');for(const needle of ["url: siteUrl","baseUrl: '/'","trailingSlash: true","routeBasePath: 'idr'","/route-recovery.js","academy-navigation.js"]){if(!config.includes(needle))errors.push(`docusaurus.config.js: missing ${needle}`)}
const sprint=fs.readFileSync(path.join(root,'docs/12-week-sprint.md'),'utf8');for(let week=1;week<=12;week++){if(!sprint.includes(`## Week ${week}`))errors.push(`12-week sprint missing Week ${week}`)}
const sidebar=fs.readFileSync(path.join(root,'sidebars.js'),'utf8');for(const id of ['overview','profile','pathway','roadmap','12-week-sprint','credentials','curriculum','labs','assignments','projects','calendar','kpis','mentor','governance','resources','references','download-and-review']){if(!sidebar.includes(`'${id}'`))errors.push(`sidebars.js missing ${id}`)}
const roots=['docs','src'];
const email=/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const phone=/(?:\+?27|0)\s?\d{2}[\s-]?\d{3}[\s-]?\d{4}/;
function scan(target){const full=path.join(root,target);if(!fs.existsSync(full))return;const st=fs.statSync(full);if(st.isDirectory()){for(const name of fs.readdirSync(full))scan(path.join(target,name));return}if(!/\.(md|mdx|js|jsx|css)$/i.test(target))return;const text=fs.readFileSync(full,'utf8');if(email.test(text))errors.push(`${target}: contains an email address; public IDR must not expose contact details`);if(phone.test(text))errors.push(`${target}: contains a phone number; public IDR must not expose contact details`)}
for(const r of roots)scan(r);
if(errors.length){console.error('Nkateko IDR validation failed.');for(const e of errors)console.error(`- ${e}`);process.exit(1)}
console.log('Nkateko IDR validation passed: routes, full content, custom domain and public privacy controls are present.');
