const list = [
  {
    title: 'Senior Software Developer',
    company: 'Aytacworld',
    start: 'Jul 2017',
    end: undefined,
    description: `Founded Aytacworld to help clients deliver their software
    projects effectively. Develop applications and web portals, and manage
    servers and infrastructure. Explore emerging technologies, including AI,
    to continuously expand my technical expertise.`,
    skills: ['Angular', 'React', 'Node.js', 'DevOps', 'Automation', 'AI', 'Neovim', 'Docker'],
    projects: [
      {
        title: 'Senior Angular Developer',
        company: 'Fod IBZ',
        start: 'May 2023',
        end: 'Aug 2026',
        description: `Developed the frontend for the Single Permit Project
        using Angular and contributed to the implementation of an internal
        design system.`,
        skills: ['Angular', 'Agile', 'VS Code', 'DevBox', 'Azure', 'DevOps', 'Figma'],
      },
      {
        title: 'Senior Software Developer',
        company: 'Immoscoop',
        start: 'Oct 2021',
        end: 'May 2023',
        description: `Integrated Immoscoop's software with client systems by
        developing client-specific adapters. Contributed to the migration
        to Jira and coached junior and medior colleagues remotely.`,
        skills: ['Node.js', 'Puppeteer', 'AWS', 'Jira', 'REST APIs', 'Neovim', 'Apify', 'Cheerio'],
      },
      {
        title: 'Angular Developer',
        company: 'Energie.be',
        start: 'May 2021',
        end: 'Oct 2021',
        description: `Developed the frontend of Energie.be and integrated with
        the CMS. Implemented CSS animations to add visual character to the
        website.`,
        skills: ['Angular', 'Agile', 'Figma', 'Strapi CMS', 'Animations'],
      },
      {
        title: 'Frontend Developer',
        company: 'Flow Pilots / ACA',
        start: 'Oct 2020',
        end: 'May 2023',
        description: `Developed frontend applications for internal and client
        projects. Contributed to project initiation, requirements analysis
        and internal technical knowledge-sharing sessions.`,
        skills: ['Angular', 'Agile', '.NET', 'ItsMe', 'Bootstrap', 'PrimeNG'],
      },
      {
        title: 'Software Developer',
        company: 'KBC Bank & Verz.',
        start: 'Jan 2018',
        end: 'May 2020',
        description: `Worked in the Surfstudio R&D department, developing
        applications from proof of concept to production. Explored blockchain,
        chatbots, machine learning and Google Home/Alexa integrations. Also
        developed portal applications for the Investment department and
        coached other developers.`,
        skills: [
          'Angular',
          'Agile',
          'Java',
          'Spring Boot',
          'Maven',
          'Chatbots',
          'Alexa',
          'Google Assistant',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Immoweb',
        start: 'Jul 2017',
        end: 'Dec 2017',
        description: `Developed web applications as part of Immoweb's R&D team,
        including tools to simplify property creation and a WYSIWYG page
        editor that enabled partner agencies to build their own pages.`,
        skills: ['Angular', 'Agile', 'Java'],
      },
    ],
  },
  {
    title: 'Mobile/Web Developer',
    company: 'CTG Europe',
    start: 'Mar 2015',
    end: 'Jul 2017',
    description: `Developed mobile and web applications for internal and
    client projects. Participated in project initiation, requirements analysis
    and technical knowledge-sharing sessions.`,
    skills: ['Angular', '.NET', 'React', 'Ionic'],
    projects: [
      {
        title: 'Frontend Developer',
        company: 'BridgeStone',
        start: 'Jul 2016',
        end: 'Jul 2017',
        description: `Developed an application for tyre service locations
        across Europe to record measurements and manage tyre pressure, pricing
        and fleet information.`,
        skills: ['Angular', 'Agile'],
      },
      {
        title: 'Frontend Developer/Analyst',
        company: 'BNP Paribas Fortis',
        start: 'Sep 2015',
        end: 'Jun 2016',
        description: `Developed portal applications to help customers book
        appointments for investment services. Improved development processes,
        organized weekly knowledge-sharing sessions and coached junior
        developers.`,
        skills: [
          'JavaScript',
          'Agile',
          'jQuery',
          'GulpJs',
          'Batch scripting',
          'Selligent Tools',
          'Internal library',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Essenscia',
        start: 'Apr 2015',
        end: 'Jun 2015',
        description: `Developed a web application for reporting discarded
        hazardous gas cylinders or tanks, enabling Essenscia to notify the
        appropriate service for collection.`,
        skills: ['Angular', 'JavaScript', 'SCSS'],
      },
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Sherpa.be / TicketMaster',
    start: 'Aug 2012',
    end: 'Mar 2015',
    description: `Contributed to the migration of a legacy application and
    developed an event-ticketing portal with venue seat creation and selection
    tools for customers and organizers. Also created an internal single-page
    application (SPA) framework.`,
    skills: [
      '.NET',
      'ASP.NET',
      'jQuery',
      'Knockout.js',
      'MSSQL',
      'EntityFramework',
      'TFS',
      'Visual Studio',
    ],
  },
];

const Experiences = () => {
  return (
    <>
      <h3>Experience</h3>
      {list.map((i) => (
        <div key={i.title + i.company} className="mb-[1rem]">
          <div className="flex justify-between items-center">
            <b>
              {i.title} - {i.company}
            </b>
            <span className="text-sm">
              {i.start} - {i.end || 'Present'}
            </span>
          </div>
          <div className="text-sm">{i.description}</div>
          <div className="italic text-xs">
            {i.skills.map((s, index) => (
              <span key={s}>
                {s}
                {index < i.skills?.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
          {i.projects?.length && <h4 className="ml-[1rem]">Projects</h4>}
          {i.projects?.map((p) => (
            <div key={p.title + p.company} className="ml-[1rem] mb-[1rem]">
              <div className="flex justify-between items-center">
                <b>
                  {p.title} - {p.company}
                </b>
                <span className="text-sm">
                  {p.start} - {p.end || 'Present'}
                </span>
              </div>
              <div className="text-sm">{p.description}</div>
              <div className="italic text-xs">
                {p.skills.map((s, index) => (
                  <span key={s}>
                    {s}
                    {index < p.skills?.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Experiences;
