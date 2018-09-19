import page from './pageContents';

const jobPages = [
  {
    header: 'JOB DETAILS',
    content: page.jobsPageContent
  }
];
const knowledgePages = [
  {
    header: 'EDUCATION',
    content: page.educationContent
  },
  {
    header: 'SKILLS',
    content: {}
  }
];
const gigsPages = [
  {
    header: 'DESIGNS',
    content: {}
  },
  {
    header: 'APPS',
    content: {}
  }
];
const blogsPages = [
  {
    header: 'BLOGS',
    content: page.blogsPageContent
  }
];
const fuelPages = [
  {
    header: 'FLICKS',
    content: {}
  },
  {
    header: 'FOOD',
    content: {}
  },
  {
    header: 'DREAM',
    content: {}
  }
];
const testimonialsPages = [
  {
    header: 'TESTIMONIALS',
    content: page.testimonialsPageContent
  }
];
const socialPages = [
  {
    header: 'SOCIAL COMPULSION',
    content: {}
  }
];

const areas = [
  {
    name: 'jobs',
    menuTitle: 'job details',
    pages: jobPages
  },
  {
    name: 'knowledge',
    menuTitle: 'education n stuff',
    pages: knowledgePages
  },
  {
    name: 'gigs',
    menuTitle: 'gigs',
    pages: gigsPages
  },
  {
    name: 'blogs',
    menuTitle: 'blog posts',
    pages: blogsPages
  },
  {
    name: 'fuel',
    menuTitle: 'fuel for life',
    pages: fuelPages
  },
  {
    name: 'testimonials',
    menuTitle: 'kind words',
    pages: testimonialsPages
  },
  {
    name: 'social',
    menuTitle: 'judge me here',
    pages: socialPages
  },
];

const barebone = {
  name: 'CHANDAN KUMAR',
  profilePicUrl: 'assets/images/people/me',
  expertise: ['designer', 'developer'],
  areas: areas
}


const getMenus = () => areas.reduce((menus, area) => menus.push(area.menuTitle) && menus, []);

const getTabs = areaIndex => areas[areaIndex].pages.reduce((headers, page) => headers.push(page.header) && headers, []);

const getPage = (areaIndex, pageIndex) => areas[areaIndex].pages[pageIndex];

const getBlogs = () => page.blogsPageContent.blogs;

const getAllBlogTags = () => new Set(
  page.blogsPageContent.blogs.reduce( (tags, blog) => [...tags, ...blog.tags], [])
);

const getTestimonials = () => page.testimonialsPageContent.testimonials;

const getMyProfile = () => ({
  profilePic: page.testimonialsPageContent.myProfilePic,
  linkedIn: page.testimonialsPageContent.myLinkedIn
});

export default {
  barebone,
  getMenus,
  getTabs,
  getPage,
  getBlogs,
  getAllBlogTags,
  getTestimonials,
  getMyProfile,
};