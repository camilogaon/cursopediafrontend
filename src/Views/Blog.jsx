import React from 'react';
import BlogCard from '../components/BlogCard';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);
  
  const blogs = [
    {
      title: 'Oportunidades Laborales en el Sector de la Inteligencia Artificial',
      description: ' La inteligencia artificial (IA) está revolucionando el mundo laboral a un ritmo sin precedentes. Desde la automatización de tareas rutinarias hasta la creación de sistemas autónomos avanzados, la IA está cambiando la forma en que las empresas operan y cómo los empleados interactúan con la tecnología.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/coworkers-solving-tasks-laptop-tablet-running-ai-software.png?updatedAt=1727411936764',
      link: `/oportunidades-laborales-en-el-sector-de-la-inteligencia-artificial`,
    },
    {
      title: 'Desarrollo web moderno: ¿React, Angular o Vue?',
      description: 'El desarrollo web ha avanzado considerablemente en los últimos años, con la aparición de frameworks y bibliotecas que han facilitado la creación de aplicaciones dinámicas y escalables. Entre las opciones más populares para el desarrollo de front-end se encuentran React, Angular y Vue. Pero, ¿cuál es la mejor opción para tu proyecto?',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).png?updatedAt=1727496718015',
      link: `/desarrollo-web-moderno:-¿React-Angular-Vue?`,
    },
    {
      title: 'Desarrollo de Asistentes Virtuales con IA',
      description: 'Los asistentes virtuales basados en inteligencia artificial (IA) se han convertido en una herramienta clave en la interacción entre humanos y máquinas. Estos asistentes no solo ayudan a automatizar tareas cotidianas, sino que también mejoran la experiencia del usuario a través de respuestas rápidas y personalizadas. Desde aplicaciones móviles hasta dispositivos inteligentes, el uso de asistentes virtuales está transformando la forma en que interactuamos con la tecnología.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/3d-rendering-biorobots-concept.jpg?updatedAt=1727497926472',
      link: `/desarrollo-de-asistentes-virtuales-con-ia`,
    },
    {
      title: 'La ética en el uso de inteligencia artificial',
      description: 'El rápido desarrollo de la inteligencia artificial (IA) ha generado numerosos avances tecnológicos en campos como la medicina, la educación, los negocios y más. Sin embargo, con este crecimiento exponencial también surgen importantes preguntas sobre las implicaciones éticas del uso de la IA. ¿Hasta qué punto podemos permitir que las máquinas tomen decisiones? ¿Qué impacto tendrá esto en la sociedad y en nuestras vidas diarias? Este artículo explora las principales preocupaciones éticas en torno a la IA y el papel de la responsabilidad en su desarrollo.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/business-hand-robot-handshake-artificial-intelligence-digital-transformation.jpg?updatedAt=1727562229297',
      link: '/la-ética-en-el-uso-de-inteligencia-artificial',
    },
    {
      title: 'Cómo prepararse para entrevistas técnicas de programación',
      description: 'Las entrevistas técnicas de programación son un reto para muchos desarrolladores. Implican no solo mostrar tus habilidades de codificación, sino también tu capacidad para resolver problemas bajo presión, tu conocimiento de estructuras de datos, algoritmos y conceptos de ingeniería de software. La buena noticia es que, con la preparación adecuada, puedes mejorar significativamente tus posibilidades de éxito. A continuación, te damos algunos consejos para prepararte de la mejor manera posible.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/html-css-collage-concept-with-person%20(3).jpg?updatedAt=1727563267646',
      link: `/cómo-prepararse-para-entrevistas-técnicas-de-programación`,
    },
    {
      title: 'Buenas prácticas para la optimización del rendimiento en aplicaciones web',
      description: 'La optimización del rendimiento en aplicaciones web es un aspecto crucial para garantizar una experiencia de usuario fluida y eficiente. Una aplicación lenta puede llevar a la frustración de los usuarios, altas tasas de abandono y un mal posicionamiento en los motores de búsqueda. Por ello, aplicar buenas prácticas en el desarrollo y mantenimiento de aplicaciones web puede mejorar significativamente el rendimiento. A continuación, presentamos algunas de las mejores prácticas para lograrlo.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/representation-user-experience-interface-design.jpg?updatedAt=1727568089870',
      link: '/buenas-prácticas-para-la-optimización-del-rendimiento-en-aplicaciones-web',
    },
    {
      title: 'Algoritmos de Machine Learning Más Utilizados en Ciencia de Datos',
      description: 'En la ciencia de datos, los algoritmos de Machine Learning juegan un papel fundamental para descubrir patrones, hacer predicciones y tomar decisiones basadas en grandes volúmenes de datos. Estos algoritmos se aplican en diversas áreas como la predicción de comportamientos, la clasificación de objetos o la detección de anomalías. A continuación, exploraremos algunos de los algoritmos más utilizados en este campo.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/man-using-tablet-work-connect-with-others.jpg?updatedAt=1727571430931',
      link: '/algoritmos-de-machine-learning-más-utilizados-en-ciencia-de-datos',
    },
    {
      title: 'Smart Contracts: Qué son y cómo funcionan',
      description: 'Los smart contracts, o contratos inteligentes, son programas que se ejecutan automáticamente cuando se cumplen las condiciones previamente acordadas en el código. Desempeñan un papel crucial en las plataformas basadas en blockchain como Ethereum, ya que permiten acuerdos y transacciones sin intermediarios. Estos contratos no solo son rápidos y seguros, sino que también reducen los costos de transacción y el riesgo de manipulación humana.',
      url_img: 'https://ik.imagekit.io/kgcc3rkbz/standard-quality-control-collage-concept.jpg?updatedAt=1727573162588',
      link: '/smart-contract-qué-son-y-cómo-funcionan',
    },
  ];

  return (
    <div className="p-5 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
