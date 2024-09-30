import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-[384px] h-[240px] object-cover" src={course.url_img} alt={course.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">
          {course.description.length > 150
            ? course.description.substring(0, 150) + '...'
            : course.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course.category}</span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">${course.price}</span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">{course.certificate ? 'Certificado' : 'Sin certificado'}</span>
      </div>
      <div className="px-6 pt-4 pb-4">
        <a href={course.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
          Ver curso en {course.plataform}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
