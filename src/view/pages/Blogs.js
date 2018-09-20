import React from 'react';
import './_pages.css';
import { Card, Chip } from '../components/';
import barebone from '../../data/barebone';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [0, 1, 2],
      tags: [],
      blogs:[]
    };
  }

  componentDidMount(){
    const blogs = barebone.getBlogs();
    const tags = barebone.getAllBlogTags();
    this.setState({
      tags: this.tagsWithState(tags, blogs),
      blogs: blogs
    })
  }

  tagsWithState = (tags, blogs) => {
    const tagsWithState = [];

    tags.forEach(tag => {
      const newField = { selected: false, value: tag, count: this.blogsCountBasedOnTag(blogs, tag) };
      tagsWithState.push(newField);
    });

    return tagsWithState;
  }

  blogsCountBasedOnTag = (blogs, tag) => blogs.reduce((blogsCount, blog) => blogsCount + (blog.tags.includes(tag) ? 1 : 0), 0);

  getSelectedTags = tags => tags.reduce((selectedTags, tag) => tag.selected ? [...selectedTags, tag.value] : [...selectedTags], []);

  getFilteredBlogs = (blogs, tagsArray) => blogs.filter(blog => tagsArray.some(tag => blog.tags.includes(tag)));

  toggleTagSelect = tagIndex => () => {
    const updatedTags = [...this.state.tags];
    updatedTags[tagIndex].selected = !updatedTags[tagIndex].selected;
    this.setState({ tags: updatedTags });
  }

  render() {
    const { columns, tags, blogs } = this.state;
    const selectedTags = this.getSelectedTags(tags);
    const filteredBlogs = this.getFilteredBlogs(blogs, selectedTags);
    console.log(filteredBlogs)

    return (
      <div className="blogs">
        <div className="blogs__filter">
          <Chip value={'All'} count={tags.length} isSelected={!selectedTags.length} />
          {tags.map((tag, key) => (
            <Chip
              key={key}
              value={tag.value}
              count={tag.count}
              onToggle={this.toggleTagSelect(key)}
              isSelected={tag.selected}
            />
          ))}
        </div>
        <div className="blogs__items">
          {columns.map(colIndex => <Column blogs={filteredBlogs.length ? filteredBlogs : blogs} columnIndex={colIndex} />)}
        </div>
      </div>
    );
  }
}

const Column = ({ blogs, columnIndex }) => (
  <div>
    {blogs.map((blog, i) => (
      i % 3 === columnIndex ?
        <BlogCard
          title={blog.title}
          imageSrc={blog.imageSrc}
          synopsis={blog.synopsis}
          link={blog.link}
        />
        : null
    ))}
  </div>
);

const BlogCard = ({ title, imageSrc, synopsis, link }) => (
  <Card className="blog">
    <div className="blog__title">{title}</div>
    <img className="blog__image" src={imageSrc} />
    <div className="blog__description">{synopsis}</div>
    <a className="blog__link" href={link || null} target="_blank">{link ? 'Read more...' : 'Upcoming...'}</a>
  </Card>
);

export default Blogs;
