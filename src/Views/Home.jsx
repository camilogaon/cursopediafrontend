import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../analytics';

const Home = () => {
  const [coursesData,setCoursesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://cursopediabackend.vercel.app/courses');
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
    <>
      <section className="w-full flex items-center justify-center py-12 md:py-32 lg:py-44">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Aprende con los mejores cursos online
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-400">
                Descubre una amplia variedad de cursos impartidos por expertos en diversas áreas. Mejora tus habilidades y alcanza tus metas profesionales.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/cursos">
                <Button>Explorar Cursos</Button>
              </Link>
              <Link to="/sobre-nosotros">
                <Button variant="outline">Saber Más</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex items-center justify-center mt-5">
        <div className="container px-4 md:px-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
            Cursos Destacados
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 justify-items-center">
            {coursesData.slice(0, 6).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center py-8 md:py-32 lg:py-44">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para empezar tu viaje de aprendizaje?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explora nuestra amplia gama de cursos y comienza a aprender hoy mismo. Tu futuro te está esperando.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/cursos">
                <Button size="lg">Ver Todos los Cursos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
