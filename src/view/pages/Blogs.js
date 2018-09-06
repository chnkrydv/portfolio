import React from 'react';
import './_pages.css';
import Chip from '../components/Chip';
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
        <Card
          title={blog.title}
          imageSrc={blog.imageSrc}
          synopsis={blog.synopsis}
          link={blog.link}
        />
        : null
    ))}
  </div>
);

const Card = ({ title, imageSrc, synopsis, link }) => (
  <div className="blogs__card">
    <div className="blogs__card__title">{title}</div>
    <img className="blogs__card__image" src={imageSrc} />
    <div className="blogs__card__description">{synopsis}</div>
    <a className="blogs__card__link" href={link} target="_blank">Read more...</a>
  </div>
);

export default Blogs;
