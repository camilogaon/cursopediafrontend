import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../analytics';
import AdComponent from '../components/AdComponent';
import AddCurse from '../components/AddCurse';

const Courses = () => {
  const [coursesData,setCoursesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://cursopediabackend-production.up.railway.app/courses');
      if (!response.ok) {
        throw new Error('Error al obtener los cursos');
      }
      const data = await response.json();
      setCoursesData(data);
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  }

   useEffect (() => {
    fetchCourses();
   }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center mt-5">
      <div className="container px-4 md:px-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
          Cursos Disponibles
        </h1>
        <AdComponent/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 justify-items-center">
          {coursesData.map((course, index) => (
            <React.Fragment key={course.id}>
              <CourseCard course={course} />
              {(index + 1) % 6 === 0 && <AddCurse />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses