import React from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../../analytics';
import { useEffect } from 'react';

// Componente para el Blog
const BlogOportunidadesLaboralesIA = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <>
      <section className='w-2/3'>
        <div className="max-w-4xl mx-auto py-10 px-5">
          {/* Título del Blog */}
          <h1 className="text-4xl font-bold text-center mb-8">
            Oportunidades Laborales en el Sector de la Inteligencia Artificial
          </h1>

          {/* Imagen del Blog */}
          <div className="w-full h-64 overflow-hidden mb-8">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://ik.imagekit.io/kgcc3rkbz/coworkers-solving-tasks-laptop-tablet-running-ai-software.png?updatedAt=1727411936764"
              alt="Oportunidades laborales en inteligencia artificial"
            />
          </div>

          {/* Contenido del Blog */}
          <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
            <p>
              La inteligencia artificial (IA) está revolucionando el mundo laboral a un ritmo sin precedentes. Desde la automatización de tareas rutinarias hasta la creación de sistemas autónomos avanzados, la IA está cambiando la forma en que las empresas operan y cómo los empleados interactúan con la tecnología.
            </p>
            
            <h2 className="text-2xl font-semibold my-4">¿Qué es la Inteligencia Artificial?</h2>
            <p>
              La inteligencia artificial es un campo de la informática que se enfoca en desarrollar máquinas capaces de realizar tareas que, en general, requieren inteligencia humana. Esto incluye actividades como el reconocimiento de voz, procesamiento del lenguaje natural, aprendizaje automático y análisis predictivo. Con la creciente demanda por automatización y tecnología avanzada, el sector de la IA ha abierto un vasto horizonte de <strong>oportunidades laborales</strong>.
            </p>
            
            <h2 className="text-2xl font-semibold my-4">Áreas de Oportunidades Laborales en IA</h2>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Ingeniería de Machine Learning:</strong> Los ingenieros de machine learning (aprendizaje automático) son altamente solicitados. Son responsables de desarrollar algoritmos que permiten a las máquinas aprender de los datos y mejorar su rendimiento sin intervención humana constante.</li>
              <li><strong>Científico de Datos:</strong> Los científicos de datos recopilan, analizan e interpretan grandes volúmenes de datos. Utilizan IA y algoritmos avanzados para descubrir patrones y ayudar a las empresas a tomar decisiones basadas en datos.</li>
              <li><strong>Desarrollador de IA:</strong> Estos profesionales construyen sistemas que incorporan IA, diseñando aplicaciones inteligentes.</li>
            </ul>

            <h2 className="text-2xl font-semibold my-4">Tendencias Futuras en el Empleo de IA</h2>
            <p>
              Con la creciente implementación de IA en diversos sectores, se espera que la demanda de profesionales especializados en esta área continúe aumentando. Se proyecta que el mercado de la IA crecerá en más de un 40% en los próximos cinco años.
            </p>
          </div>
        </div>
      </section>
      <section>

      </section>
    </>
  );
};

export default BlogOportunidadesLaboralesIA;
