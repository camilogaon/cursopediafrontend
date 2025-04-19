import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
      <img
        className="w-full h-[240px] object-cover rounded-t-2xl"
        src={course.url_img}
        alt={course.title}
      />

      <div className="p-6">
        {/* Etiquetas arriba del título */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            ${course.price}
          </span>
          <span
            className={`${
              course.certificate ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
            } text-xs font-medium px-3 py-1 rounded-full`}
          >
            {course.certificate ? 'Certificado' : 'Sin certificado'}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {course.description}
        </p>

        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
        >
          Ver en {course.plataform}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
