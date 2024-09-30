import React from 'react';

const BlogPost = ({ title, url_img, content }) => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* Título del Blog */}
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>

      {/* Imagen del Blog */}
      <div className="w-full h-64 overflow-hidden mb-8">
        <img className="w-full h-full object-cover rounded-lg" src={url_img} alt={title} />
      </div>

      {/* Contenido del Blog */}
      <div className="text-lg text-gray-700 leading-relaxed">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
