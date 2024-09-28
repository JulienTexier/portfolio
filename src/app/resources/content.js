import { Flex, InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Julien',
  lastName: 'Texier',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Mobile Fullstack Developer',
  avatar: '/images/avatar.jpg',
  location: 'Europe/Helsinki', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'French', 'Spanish'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const contact = {
  display: true,
  label: 'Contact',
  title: "Let's build something together",
  description: `Feel free to reach out if you have a project in mind or just want to say hi 👋`,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/JulienTexier',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/texierjulien/',
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:juu.texier@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mobile Fullstack Developer</>,
  subline: (
    <>
      Oh, hey there 👋 <br />
      I’m Julien, a passionate creator turned full-stack engineer, <br />{' '}
      discovering unexpected opportunities through coding and a love for
      problem-solving.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <Flex direction="column" gap="16" alignItems="center">
        <p>
          I’ve always had a thing for creating—whether it was crafting music,
          editing travel videos, or imagining a new business. The thrill of
          building something from scratch has always captivated me. During my
          business school days, a friend and I dreamed up a company, and I
          eagerly volunteered to handle the technical side of things. There was
          just one small problem: I had absolutely no idea what I was doing.
        </p>
        <p>
          But, hey, “fake it ’til you make it,” right? So, I jumped into a
          peer-to-peer bootcamp to back up my spontaneous CTO title with some
          real skills. It was an exhilarating experience. The company itself
          never really took off, but the real magic of that project was that I
          discovered a love for coding that’s stuck with me ever since.
        </p>
        <p>
          Fast forward a bit: I fell in love (the real kind of love) with an
          incredible Finnish girl while in Portugal, and after a few years of
          living abroad, we made the leap to Finland together. Somewhere between
          adjusting to a new country and (trying to) learn a new language, I
          somehow showcased my skills to the right person at the right time.
          Next thing I knew, I had an offer for a full-stack engineer position —
          something I never imagined possible with just a 3-month bootcamp
          behind me.
        </p>
        <p>
          I found a special passion for mobile development, and it quickly
          became my focus. Years have passed since then, but the thrill of
          solving problems, building something meaningful, and watching it come
          to life on a screen hasn’t faded one bit.
        </p>
        <p>
          Today, I’m still that same creator at heart, always on the hunt for
          more knowledge, fresh challenges, and fun projects that make the hours
          disappear.
        </p>
      </Flex>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Taito United Oy',
        timeframe: '2022 - Present',
        role: 'Full Stack Developer | Mobile Development Specialist',
        description: (
          <>
            As the company’s go-to expert in mobile app development and
            deployment, I have led the development of a wide range of mobile
            applications, serving both internal stakeholders and external
            clients. In addition to my focus on mobile, I continue to deliver
            full stack web solutions, offering comprehensive development
            services across both platforms. My work spans solo projects as well
            as collaborative efforts in agile teams, consistently delivering
            high-quality, scalable solutions.
          </>
        ),
        keyResponsibilities: [
          <>
            Design and develop robust, user-centric mobile applications,
            focusing on performance, scalability, and intuitive UI/UX.• Design
            and develop robust, user-centric mobile applications, focusing on
            performance, scalability, and intuitive UI/UX.
          </>,
          <>
            Manage the full app lifecycle from concept to deployment, including
            App Store and Google Play releases, ensuring seamless delivery to
            end users. • Manage the full app lifecycle from concept to
            deployment, including App Store and Google Play releases, ensuring
            seamless delivery to end users.
          </>,
          <>
            Develop full stack web applications, ensuring seamless backend
            integration and front-end functionality across web and mobile
            platforms. • Develop full stack web applications, ensuring seamless
            backend integration and front-end functionality across web and
            mobile platforms.
          </>,
          <>
            Collaborate with cross-functional teams, integrating APIs, managing
            databases, and refining both web and mobile user experiences. •
            Collaborate with cross-functional teams, integrating APIs, managing
            databases, and refining both web and mobile user experiences.
          </>,
          <>
            Serve as the company’s primary resource for mobile development,
            mentoring other developers and ensuring the use of best practices. •
            Serve as the company’s primary resource for mobile development,
            mentoring other developers and ensuring the use of best practices.
          </>,
          <>
            Work closely with clients to translate their business needs into
            technical solutions, ensuring that app functionalities align with
            user expectations and business goals. • Work closely with clients to
            translate their business needs into technical solutions, ensuring
            that app functionalities align with user expectations and business
            goals.
          </>,
          <>
            Employ agile methodologies (Scrum/Kanban) to streamline project
            development, ensuring continuous improvement and fast delivery
            cycles. • Employ agile methodologies (Scrum/Kanban) to streamline
            project development, ensuring continuous improvement and fast
            delivery cycles.
          </>,
        ],
        achievements: [
          <>
            Successfully launched multiple apps with over 30,000 active users,
            receiving positive feedback for performance and user experience.
          </>,
          <>
            Streamlined app deployment processes, reducing time-to-market and
            improving update cycles for ongoing projects.
          </>,
          <>
            Pioneered the integration of modern technologies and tools to
            enhance development efficiency and app functionality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*  {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          }, */
        ],
      },
      {
        company: 'Quanturi Oy',
        timeframe: '2021 - 2022',
        role: 'Full Stack Engineer',
        achievements: [
          <>
            Successfully migrated the application to AWS, improving performance
            and reducing infrastructure costs.
          </>,
          <>
            Spearheaded the implementation of automated CI/CD pipelines,
            reducing deployment times by over 40% and minimizing production
            issues.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'The Hacking Project',
        description: <>Peer-programming intensive Bootcamp</>,
      },
      {
        name: 'Udemy',
        description: <>Studied React Native, React & AWS</>,
      },
      {
        name: 'IÉSEG - School of Management',
        description: (
          <>
            Master's Degree in Management, specialized in Management of
            Information Systems
          </>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
};
