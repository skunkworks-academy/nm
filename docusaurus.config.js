const siteUrl = 'https://nm.skunkworksacademy.com';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nkateko Mtembi IDR',
  tagline: 'SOC Operations, Detection Engineering, Cloud Security and Career Growth',
  url: siteUrl,
  baseUrl: '/',
  organizationName: 'skunkworks-academy',
  projectName: 'nm',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  themes: ['@docusaurus/theme-mermaid'],
  headTags: [
    {tagName:'meta',attributes:{name:'robots',content:'noindex, nofollow, noarchive, nosnippet'}},
    {tagName:'meta',attributes:{name:'referrer',content:'strict-origin-when-cross-origin'}},
    {tagName:'meta',attributes:{name:'color-scheme',content:'light dark'}},
    {tagName:'link',attributes:{rel:'icon',type:'image/png',sizes:'32x32',href:'https://www.skunkworksacademy.com/images/favicon-black.png?v=2026.08.25.1',media:'(prefers-color-scheme: light)'}},
    {tagName:'link',attributes:{rel:'icon',type:'image/png',sizes:'32x32',href:'https://www.skunkworksacademy.com/images/favicon-white.png?v=2026.08.25.1',media:'(prefers-color-scheme: dark)'}},
    {tagName:'link',attributes:{rel:'stylesheet',href:'https://www.skunkworksacademy.com/assets/skunkworks-design-system.css?v=2026.08.15.1','data-skunkworks-design-system':'canonical'}},
    {tagName:'script',attributes:{defer:'true',src:'/route-recovery.js','data-idr-route-recovery':'v1'}},
    {tagName:'script',attributes:{defer:'true',src:'https://www.skunkworksacademy.com/assets/academy-navigation.js?v=2026.08.15.1','data-skunkworks-global-nav':'v10'}},
    {tagName:'script',attributes:{type:'application/ld+json'},innerHTML:JSON.stringify({
      '@context':'https://schema.org','@type':'LearningResource',name:'Nkateko Mtembi Individual Development Roadmap',
      description:'A practical cybersecurity career roadmap focused on SOC operations, SIEM, threat detection, incident response, cloud security and professional growth.',
      educationalLevel:'Early-career professional development',
      provider:{'@type':'EducationalOrganization',name:'Skunkworks Academy',url:'https://www.skunkworksacademy.com/'},
      url:`${siteUrl}/`
    })}
  ],
  presets: [['classic', {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      routeBasePath: 'idr',
      editUrl:'https://github.com/skunkworks-academy/nm/edit/main/',
      showLastUpdateAuthor:true,
      showLastUpdateTime:true
    },
    blog:false,
    sitemap:false,
    theme:{customCss: require.resolve('./src/css/custom.css')}
  }]],
  themeConfig: {
    navbar: {
      title: 'Nkateko IDR',
      items: [
        {to:'/idr/overview/',label:'IDR',position:'left'},
        {to:'/idr/12-week-sprint/',label:'12-Week Sprint',position:'left'},
        {to:'/idr/labs/',label:'Labs',position:'left'},
        {to:'/idr/projects/',label:'Portfolio',position:'left'},
        {to:'/idr/calendar/',label:'Calendar',position:'left'},
        {href:'https://github.com/Nkateko2656/SOC-Analyst-Portfolio',label:'GitHub Portfolio',position:'right'}
      ]
    },
    footer: {
      style:'dark',
      links:[
        {title:'Roadmap',items:[{label:'Overview',to:'/idr/overview/'},{label:'12-Week Sprint',to:'/idr/12-week-sprint/'},{label:'Goals & KPIs',to:'/idr/kpis/'}]},
        {title:'Evidence',items:[{label:'Labs',to:'/idr/labs/'},{label:'Assignments',to:'/idr/assignments/'},{label:'Portfolio Projects',to:'/idr/projects/'}]},
        {title:'Review',items:[{label:'Calendar',to:'/idr/calendar/'},{label:'References',to:'/idr/references/'},{label:'Download & Sign-Off',to:'/idr/download-and-review/'}]}
      ],
      copyright:`Copyright © ${new Date().getFullYear()} Skunkworks Academy.`
    },
    colorMode:{defaultMode:'dark',disableSwitch:false,respectPrefersColorScheme:true},
    prism:{additionalLanguages:['bash','json','powershell','yaml','python']},
    mermaid:{theme:{light:'neutral',dark:'dark'},options:{securityLevel:'strict'}},
    metadata:[
      {name:'description',content:'Nkateko Mtembi’s interactive SOC analyst, SIEM, cloud security and cybersecurity career development roadmap.'},
      {name:'theme-color',content:'#0f62fe'}
    ]
  }
};
module.exports = config;
