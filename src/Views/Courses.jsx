import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../analytics';
import AdComponent from '../components/AdComponent';

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [certificateFilter, setCertificateFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://cursopediabackend.onrender.com/courses');
      if (!response.ok) {
        throw new Error('Error al obtener los cursos');
      }
      const data = await response.json();
      setCoursesData(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    let filtered = coursesData;

    if (categoryFilter) {
      filtered = filtered.filter((course) => course.category === categoryFilter);
    }
    if (priceFilter) {
      if (priceFilter === 'Gratis') {
        filtered = filtered.filter((course) => course.price === 'Gratis');
      } else if (priceFilter === 'Pago') {
        filtered = filtered.filter((course) => course.price !== 'Gratis');
      }
    }
    if (certificateFilter) {
      filtered = filtered.filter((course) => course.certificate === certificateFilter);
    }

    setFilteredCourses(filtered);
  }, [categoryFilter, priceFilter, certificateFilter, coursesData]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center mt-5">
      <div className="container px-4 md:px-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
          Cursos Disponibles
        </h1>

        <div className="mb-8">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
          <div
            className={`mt-4 transition-all duration-300 ${
              showFilters ? 'block' : 'hidden'
            } md:block`}
          >
            <div className="flex flex-col md:flex-row justify-center gap-4  p-4 ">
              <select
                className="border rounded-md p-2 px-4 w-full md:w-auto"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Todas las Categorías</option>
                <option value="Programacion">Programación</option>
                <option value="Ciencia de Datos">Ciencia de Datos</option>
                <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                <option value="Marketing Digital">Marketing Digital</option>
                <option value="Ciberseguridad">Ciberseguridad</option>
                <option value="Idiomas">Idiomas</option>
                <option value="Sistema gestion ISO">Sistema gestion ISO</option>
              </select>

              <select
                className="border rounded-md p-2 w-full md:w-auto"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">Todos los Precios</option>
                <option value="Gratis">Gratis</option>
                <option value="Pago">Pago</option>
              </select>

              <select
                className="border rounded-md p-2 w-full md:w-auto"
                value={certificateFilter}
                onChange={(e) => setCertificateFilter(e.target.value)}
              >
                <option value="">Con y Sin Certificado</option>
                <option value="Sí">Con Certificado</option>
                <option value="No">Sin Certificado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 justify-items-center">
          {filteredCourses.map((course) => (
            <React.Fragment key={course.id}>
              <CourseCard course={course} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
