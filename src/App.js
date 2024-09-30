import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initGA, logPageView } from './analytics';
import Navbar from './components/Navbar';
import Home from './Views/Home';
import Courses from './Views/Courses';
import Blog from './Views/Blog';
import AboutUs from './Views/AboutUs';
import Contact from './Views/Contact';
import BlogOportunidadesLaboralesIA from './Views/Blogs/Oportunidades-Laborales-en-el-Sector-de-la-Inteligencia-Artificial';
import BlogReactAngularVue from './Views/Blogs/React-Angular-o-Vue';
import BlogAsistenteConIA from './Views/Blogs/Desarrollo-de-Asistentes-Virtuales-con-IA';
import BlogEticaUsoEnIA from './Views/Blogs/La-ética-en-el-uso-de-inteligencia-artificial';
import BlogPrepararseEntrevistasTecnicasProgramacion from './Views/Blogs/Cómo-prepararse-para-entrevistas-técnicas-de-programación';
import BlogBuenasPracticasOptimizacionRendimientoAppWeb from './Views/Blogs/Buenas-prácticas-optimización-del-rendimiento-aplicaciones-web';
import BlogAlgoritmosMasUsadosCienciaDeDatos from './Views/Blogs/Algoritmos-Machine-Learning-más-utilizados-en-ciencia-de-datos';
import BlogSmartContractsQueSon from './Views/Blogs/Smart-contracts-Qué-son-cómo-funcionan';

function App() {
  useEffect(() => {
    initGA(); // Inicializa Google Analytics
    logPageView(); // Registra la primera visita
  }, []);

  return (
    <Router> {/* Asegúrate de envolver todo en Router */}
      <section className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
          <Route path="/cursos" element={<Courses />} /> {/* Ruta para la página de cursos */}
          <Route path="/blog" element={<Blog />} /> {/* Ruta para la página de blog */}
          <Route path="/sobre-nosotros" element={<AboutUs />} /> {/* Ruta para la página sobre nosotros */}
          <Route path="/contacto" element={<Contact />} /> {/* Ruta para la página de contacto */}
          <Route path="/oportunidades-laborales-en-el-sector-de-la-inteligencia-artificial" element={<BlogOportunidadesLaboralesIA/>} />
          <Route path="/desarrollo-web-moderno:-¿React-Angular-Vue?" element={<BlogReactAngularVue/>}/>
          <Route path="/desarrollo-de-asistentes-virtuales-con-ia" element={<BlogAsistenteConIA/>} />
          <Route path="/la-ética-en-el-uso-de-inteligencia-artificial" element={<BlogEticaUsoEnIA/>} />
          <Route path="/cómo-prepararse-para-entrevistas-técnicas-de-programación" element={<BlogPrepararseEntrevistasTecnicasProgramacion/>} />
          <Route path="/buenas-prácticas-para-la-optimización-del-rendimiento-en-aplicaciones-web" element={<BlogBuenasPracticasOptimizacionRendimientoAppWeb/>}/>
          <Route path="/algoritmos-de-machine-learning-más-utilizados-en-ciencia-de-datos" element={<BlogAlgoritmosMasUsadosCienciaDeDatos/>}/>
          <Route path="/smart-contract-qué-son-y-cómo-funcionan" element={<BlogSmartContractsQueSon/>}/>
        </Routes>
      </section>
    </Router>
  );
}

export default App;
