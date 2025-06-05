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
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://cursopediabackend.vercel.app/courses');
      if (!response.ok) throw new Error('Error al obtener los cursos');
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
    <section className="w-full min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Explora nuestros cursos
        </h1>

        {/* Filtros */}
        <div className="mb-12 w-full flex justify-center">
          <div className="w-full max-w-5xl px-4">
            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  className="w-full px-4 py-2 text-white bg-blue-900/40 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
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
                  <option value="Sistema gestion ISO">Sistema gestión ISO</option>
                </select>

                <select
                  className="w-full px-4 py-2 text-white bg-blue-900/40 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="">Todos los Precios</option>
                  <option value="Gratis">Gratis</option>
                  <option value="Pago">Pago</option>
                </select>

                <select
                  className="w-full px-4 py-2 text-white bg-blue-900/40 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  value={certificateFilter}
                  onChange={(e) => setCertificateFilter(e.target.value)}
                >
                  <option value="">Con y Sin Certificado</option>
                  <option value="Sí">Con Certificado</option>
                  <option value="No">Sin Certificado</option>
                </select>

                <button
                  onClick={() => {
                    setCategoryFilter('');
                    setPriceFilter('');
                    setCertificateFilter('');
                  }}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de cursos */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>



        {/* Sin resultados */}
        {filteredCourses.length === 0 && (
          <div className="text-center mt-20 text-gray-500 text-lg">
            No se encontraron cursos con los filtros seleccionados.
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
