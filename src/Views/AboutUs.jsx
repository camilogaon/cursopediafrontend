import React from 'react'

const AboutUs = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        {/* Introducción */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">Sobre Nosotros</h1>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            En <span className="font-bold text-blue-600">KurseAcademy</span>, creemos que la educación es la clave para transformar el futuro. Nuestro objetivo es democratizar el acceso a cursos de alta calidad en las habilidades digitales más demandadas. Desde programación hasta marketing digital, ofrecemos una plataforma que conecta a estudiantes con las mejores oportunidades educativas del mundo.
          </p>
        </div>


        {/* Sección: Lo que nos diferencia */}
        <div className="py-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">¿Qué nos diferencia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diferencia 2 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Educación para Todos</h3>
              <p className="text-gray-700">
                Creemos en la accesibilidad. Por eso ofrecemos tanto cursos gratuitos como de pago, de modo que todos puedan aprender sin importar su presupuesto. Nuestra misión es romper las barreras que limitan el acceso a la educación.
              </p>
            </div>
            {/* Diferencia 3 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Actualización Continua</h3>
              <p className="text-gray-700">
                En el mundo de la tecnología, el cambio es constante. Mantenemos nuestra plataforma actualizada con las últimas novedades en herramientas, lenguajes de programación y metodologías emergentes, asegurando que siempre aprendas lo más relevante.
              </p>
            </div>
          </div>
        </div>

        {/* Sección: Áreas de Enfoque */}
        <div className="bg-gray-50 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Nuestras Áreas de Enfoque</h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              En Cursopedia, nos especializamos en las habilidades más solicitadas en el mercado laboral actual. Estas son algunas de nuestras principales áreas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Programación</h3>
                <p className="text-gray-700">
                  Desde lenguajes como JavaScript, Python y Java hasta frameworks como React, Angular y Node.js. La programación es una habilidad fundamental en la economía digital.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Ciencia de Datos</h3>
                <p className="text-gray-700">
                  Aprende a analizar grandes volúmenes de datos, crear modelos predictivos y descubrir insights clave con herramientas como Python, R, y SQL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Inteligencia Artificial</h3>
                <p className="text-gray-700">
                  Explora el fascinante mundo de la IA, desde el aprendizaje automático hasta el procesamiento de lenguaje natural y la visión por computadora.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Marketing Digital</h3>
                <p className="text-gray-700">
                  Conviértete en un experto en estrategias de marketing digital, aprendiendo sobre SEO, SEM, marketing de contenidos, y análisis de métricas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Comunidades a las que Servimos */}
        <div className="py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Comunidades a las que Servimos</h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              Nos enorgullece ser una plataforma inclusiva y diversa, diseñada para servir a una amplia gama de comunidades alrededor del mundo. Desde estudiantes que buscan iniciarse en la programación, hasta profesionales que desean mejorar sus habilidades en áreas emergentes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Estudiantes</h3>
                <p className="text-gray-700">Para aquellos que están comenzando su viaje en el mundo digital, ofrecemos una base sólida en los fundamentos de programación y tecnología.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Profesionales</h3>
                <p className="text-gray-700">Proporcionamos cursos avanzados para profesionales que desean mantenerse actualizados o cambiar de carrera hacia una industria más tecnológica.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Emprendedores</h3>
                <p className="text-gray-700">Ayudamos a los emprendedores a aprender las habilidades digitales necesarias para construir y escalar sus proyectos de forma eficaz.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Cifras Clave
        <div className="bg-blue-100 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Cifras Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-blue-600">+10,000</h3>
                <p className="text-gray-700">Cursos disponibles</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-blue-600">+50,000</h3>
                <p className="text-gray-700">Estudiantes satisfechos</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-blue-600">+100</h3>
                <p className="text-gray-700">Categorías de cursos</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default AboutUs