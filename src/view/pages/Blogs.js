import React from 'react';
import './_pages.css';
import { Card, Chip } from '../components/';
import barebone from '../../data/barebone';

const Blogs = () => {
  const tags = [...barebone.getAllBlogTags()];
  const blogs = [...barebone.getBlogs()];

  return (
    <div className="blogs">
      <div className="blogs__filter">
        {tags.map(tag => <Chip value={tag} isSelected={!!Math.floor(Math.random() * 2)} />)}
      </div>
      <div className="blogs__items">
        <Column blogs={blogs} columnIndex={0}/>
        <Column blogs={blogs} columnIndex={1}/>
        <Column blogs={blogs} columnIndex={2}/>
      </div>
    </div>
  );
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
    <a className="blog__link" href={link} target="_blank">Read more...</a>
  </Card>
);

export default Blogs;
