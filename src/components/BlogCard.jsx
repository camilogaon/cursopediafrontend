import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-[368px] h-[200px] object-cover" src={blog.url_img} alt={blog.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base">
          {blog.description.length > 120 
            ? blog.description.substring(0, 120) + '...' 
            : blog.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <a href={blog.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" rel="noopener noreferrer">
          Ver Mas
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
