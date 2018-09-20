const path = (item, format) => (name, formatOverride) => 'images/' + item.toLowerCase() + '/' + name.toLowerCase() + '.' + (formatOverride || format).toLowerCase();
const blog = path('blog', 'jpg');
const company = path('company', 'png');
const emoji = path('emoji', 'png');
const flick = path('flick', 'jpg');
const food = path('food', 'jpg');
const gig = path('gig', 'gif')
const people = path('people', 'jpg');
const social = path('social', 'png');

const jobsPageContent = {
  jobs: [
    {
      logo: company('pearson'),
      endDate: 'PRESENT DAY',
      endDateStatus: 'Currently working in Pearson',
      location: 'Bengaluru, KA India',
      company: 'Pearson India Education Services',
      designation: 'Senior Engineer',
      achievements: [
        "Helped onboarding a good number of candidates for Frontend - UI - React development roles"
      ],
      works: [
        {
          app: 'BLUEPRINT',
          role: 'React-Redux Developer',
          description: "Blueprint is like a portal for couple of different applications for different purposes. I have worked on one of the first Blueprint applications called Rights. Rights is a tool for requesting usage rights for media assets such as Audio, Video, Image and Text Extract. The aim is to monitor and control the usage of any copyright protected media from external source, within a Pearson's digital or print publication. \nMy role was of a React-Redux-JavaScript developer, working mostly on Frontend and little bit of Backend (Node.js). I created a fair portion UI parts and solved a good number of bugs during development phase of Blueprint-Rights application",
        }
      ]
    },
    {
      logo: company('tricon','jpg'),
      endDate: 'OCT 2017',
      endDateStatus: 'Joined Pearson under payroll of Tricon Infotech',
      location: 'Bengaluru, KA India',
      company: 'Tricon Infotech Private Limited',
      designation: 'Software Engineer',
      achievements: [
        "Won 'Outstanding Newcomer 2017' award",
        "Won 2nd prize in 'Hacakathon 2017'",
        "Helped onboarding a good number of candidates for Frontend - UI - React development roles",
        "Paved a way for my company to become one of the trusted vendors of Pearson India by joining as one of the first selected members",
      ],
      works: [
        {
          app: 'MEDIUM',
          role: 'React-Redux Developer',
          description: "Medium is Tricon's in-house conceptualized and fabricated product for creation of digital publications. It consists of a widget panel full of UI components like Header, Image, Paragraph, Table, etc. from where you can simply drag one and drop to form a digital publication in no time. The development of this app was on hold for some time. I was added as a part for enhancements and revival of this app. After doing good amount of enhancements for some time of the already partly written source code, the second (revival) round of development started. My role now, was to lead frontend development part of the project. I got chance to add only few bits of frontend part, because shortly after start of revival I got selected to work for Pearson UK. Meanwhile I guided my fresher team mates in enhancing their understanding of JavaScript and Node.js in a great deal.",
        }
      ]
    },
    {
      logo: company('ibm'),
      startDate: 'JUL 2014',
      startDateStatus: 'Joined IBM as a fresher with Associate System Engineer designation',
      endDate: 'JUL 2017',
      endDateStatus: 'Joined Tricon Infotech Pvt. Ltd.',
      location: 'Bengaluru, KA India',
      company: 'IBM India Private Limited',
      designation: 'Application Developer',
      achievements: [
        "Created automation tools for the client"
      ],
      works: [
        {
          app: 'TIMESHEET AUTOMATION',
          role: 'JavaScript-Frontend Developer',
          description: "This tool was to automate the process of submitting timesheet. Though IBM has ILC app for clocking working hours and recording timesheet, clients generally want a dedicated format of timesheet for them which doesn't matches with ILC. Before automation this particular format of timesheet submission was being achieved through spreadsheets which used to take weeks for everyone to fill one monolith sheet. This tool was to automate this manual process by creating a portal. My role was to write scripts in JavaScript and C# to fill timesheet data from spreadsheet to tool or vice-versa",
        },
        {
          app: 'EERS',
          role: 'JavaScript-Frontend Developer',
          description: "EERS is HR management automation portal for IBM and other vendor's resources working for Citibank client. I worked on its one of the Database Access Management tool. This tool was for replacing earlier method of managing db access rights of developers in spreadsheets. Due to earlier stone-age spreadsheet method, it used to take 2-3 weeks on average to update developer's renewed db access. With this tool we reduced 2-3 weeks latency to mere few seconds. I worked as a JavaScript developer for frontend part and as ASP.net developer for backend part in this project. Entire 'Database Access Management Tool' and initial structure/frame of EERS portal was created by me along with one more senior developer.",
        },
        {
          app: 'CITIBANK ENTERPRISE APPS',
          role: 'JavaScript-Frontend-ASP.net Developer',
          description: "I started working as a web developer with expertise in JavaScript, C# and ASP.net for Citibank client. Our project was handling enhancements of Citibank's HR applications. The HR portal consisted of and was handling data of worldwide employees within Citibank. My responsibility was to take ownership of 7 HR apps for enhancements and bug-fixes. I understood the entire web-app life-cycle and operations here in a great deal, which helped me in my further career. Work was less so I volunteered for creating management solutions for Citibank client.",
        },
        {
          app: 'BAT ENTERPRISE APPS',
          role: 'SAP-ABAP Developer',
          description: "I worked in BAT (British American Tobacco) as SAP-ABAP developer for a very short duration. SAP's blueish interface and sandbox irked me more and more here. It was one of the most ugly looking interface I ever had to deal with. But one thing I understood was that SAP is one of the leading companies in providing end-to-end ERP solutions. SAP touched anything to everything in business. And being one of its tech developer ensured a better career path. Still I chose to follow my interest in web development.",
        },
        {
          app: 'ZOETIS-PFIZER ENTERPRISE APPS',
          role: 'Web Developer',
          description: "I worked as a SAP-ABAP developer in Zoetis-Pfizer. Only thing I did good was data migration from one environment to another for days and nights only to know that our (me along with my fresher team-mates) work was deemed unnecessary. Needless to say that SAP was neither my cup of tea nor I could get it even if I wanted to understand.",
        },
      ]
    }
  ]
};

const educationContent = {
  schools: [
    {
      startYear: '2010',
      endYear: '2014',
      name: 'NIT Rouekela',
      degree: 'Bachelor of Technology',
      subject: 'Electronics & Instrumentation',
      score: '7.45 CGPA',
      achievements: [
        'FINAL YEAR PROJECT: Handwritten Character Recognition Algorithm',
        'WORKSHOP: Gesture Control Workshop',
        'Cognitive Science',
        'Urban Governance',
        'Optimization Techniques Using Numerical Methods',
        'Real Analysis',
      ]
    },
    {
      startYear: '2009',
      endYear: '2007',
      name: 'B. D. Public School',
      degree: 'CBSE 10+2',
      subject: 'Physics, Chemistry and Maths',
      score: '74.0 %',
      achievements: [
        'Studied under Super30 fame mathematician - Anand Kumar',
        '88.4% aggragate in PCM',
        'COMPUTER COURSES: Visual Basic & SQL'
      ]
    },
    {
      startYear: '2007',
      endYear: '2003',
      name: 'Jawahar Navodaya Vidyalaya',
      degree: 'CBSE 10',
      subject: 'Science, Maths, Socials, English & Hindi',
      score: '90.0 %',
      achievements: [
        "Won 2nd prize in district's Painitng Competition",
        'Represented our JNV school in science exhibition',
      ]
    },
  ],
  skills: [
    {
      name: 'JavaScript',
      level: 100,
    },
    {
      name: 'React',
      level: 100,
    },
    {
      name: 'Web',
      level: 100,
    },
    {
      name: 'Redux',
      level: 100,
    },
    {
      name: 'React Native',
      level: 100,
    },
    {
      name: 'Flutter',
      level: 100,
    },
  ],
}

const gigsContent = {
  gigs: [],
  noGigErrorImage: gig('undermaintainance'),
};

const blogsPageContent = {
  blogs: [
    {
      title: 'Was Tulasidas a scientist?',
      imageSrc: blog('tulsidas'),
      synopsis: "It’s a better known fact that rishis (scholars or priests) in ancient India were no less than scientists. But the core of this article is not to prove or disprove whether Goswami Tulasidas was a scientist or not. Rather in this article we’ll try to analyze about something miraculous he wrote in one of his creations — Hanuman Chalisa, which led us to suspect that he was indeed a scientist.",
      link: 'https://medium.com/@chnkrydv/was-tulasidas-a-scientist-9aba4bb85855',
      tags: ['Ancient India', 'Mythology', 'Science']
    },
    {
      title: 'The Psychology of Ambitions',
      imageSrc: blog('ambition'),
      synopsis: "We, as one of the most advanced living beings, are full of desires. Desires be the first and last things in our life. It ranges from ‘turning our head in our own effing way’ to, may be, ‘slapping the president’. Desires can be from anything to everything. But when does a desire become ambition and when it does not?",
      link: 'https://medium.com/@chnkrydv/the-psychology-of-ambitions-29e092f06ceb',
      tags: ['Mind', 'Psychology', 'Life Hack']
    },
    {
      title: 'Karma is not a bitch but the most sophisticated Algorithm for life',
      imageSrc: blog('karma'),
      synopsis: "This is a widely believed perspective  that Karma is something like a 'Watcher', 'Punisher' or 'Grim Reaper' who only work in those (bad) shifts where they just have to go back to people saying - Watch ya'all. I know what you did last summer - willingly or unwillingly. There is no such shift for giving flowers to people who did good some time in past. Poor Karma! :(",
      link: '',
      tags: ['Mind', 'Psychology', 'Algorithm']
    },
  ]
}

const testimonialsPageContent = {
  myProfilePic: people('me'),
  myLinkedIn: 'https://www.linkedin.com/in/chnkrydv/',
  testimonials: [
    {
      friend: 'Saurabh Kumar',
      profilePic: people('Saurabh'),
      linkedIn: 'https://www.linkedin.com/in/saurabhkr146/',
      designation: 'UX Designer',
      company: "Byju's",
      testimonial: "Some of the testimonial videos aren't production-quality, but they get the message across and cover useful and relevant information -- which goes to show you don't need to invest thousands in production to get some testimonial videos up. Finally, in the theme of earning trust, we love that mHelpDesk closes out its testimonial page with awards and badges of recognition.",
      myReactions: [emoji('blush'), emoji('love')]
    },
    {
      friend: 'Eshun Sharma',
      profilePic: people('Eshun'),
      linkedIn: 'https://www.linkedin.com/in/eshunsharma/',
      designation: 'Frntend Developer',
      company: "Pearson",
      testimonial: "Some of the testimonial videos aren't production-quality, but they get the message across and cover useful and relevant information -- which goes to show you don't need to invest thousands in production to get some testimonial videos up. Finally, in the theme of earning trust, we love that mHelpDesk closes out its testimonial page with awards and badges of recognition.",
      myReactions: [emoji('happy'), emoji('blush')]
    },
    {
      friend: 'Sanjay Agarwal',
      profilePic: people('Sanjay'),
      linkedIn: 'https://www.linkedin.com/in/sanjay-agarwal-6243965a/',
      designation: 'Mathematics Tutor',
      company: "Allen's",
      testimonial: "Some of the testimonial videos aren't production-quality, but they get the message across and cover useful and relevant information -- which goes to show you don't need to invest thousands in production to get some testimonial videos up. Finally, in the theme of earning trust, we love that mHelpDesk closes out its testimonial page with awards and badges of recognition.",
      myReactions: [emoji('happy'), emoji('shh'), emoji('love')]
    },
  ]
}

const socialContent = {
  sites: [
    {
      link: 'https://www.linkedin.com/in/chnkrydv/',
      imgSrc: social('linkedin')
    },
    {
      link: 'https://github.com/chnkrydv',
      imgSrc: social('github')
    },
    {
      link: 'https://medium.com/@chnkrydv',
      imgSrc: social('medium')
    },
  ],
}

export default {
  jobsPageContent,
  educationContent,
  gigsContent,
  blogsPageContent,
  testimonialsPageContent,
  socialContent,
};