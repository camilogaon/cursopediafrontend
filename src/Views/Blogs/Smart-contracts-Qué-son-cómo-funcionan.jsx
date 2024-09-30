import React from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../../analytics';
import { useEffect } from 'react';

// Componente para el Blog
const BlogSmartContractsQueSon= () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {/* Título del Blog */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Smart Contracts: Qué son y cómo funcionan
      </h1>

      {/* Imagen del Blog */}
      <div className="w-full h-64 overflow-hidden mb-8">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://ik.imagekit.io/kgcc3rkbz/standard-quality-control-collage-concept.jpg?updatedAt=1727573162588"
          alt="Smart Contracts"
        />
      </div>

      {/* Contenido del Blog */}
      <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
        <p>
          Los <strong>smart contracts</strong>, o contratos inteligentes, son programas que se ejecutan automáticamente cuando se cumplen las condiciones previamente acordadas en el código. Desempeñan un papel crucial en las plataformas basadas en blockchain como Ethereum, ya que permiten acuerdos y transacciones sin intermediarios. Estos contratos no solo son rápidos y seguros, sino que también reducen los costos de transacción y el riesgo de manipulación humana.
        </p>

        <h2 className="text-2xl font-semibold my-4">¿Qué son los Smart Contracts?</h2>
        <p>
          Un smart contract es un código autoejecutable almacenado en una red blockchain. En esencia, un contrato inteligente es un acuerdo digital que sigue reglas predefinidas. Cuando las condiciones de ese acuerdo se cumplen, las acciones correspondientes se ejecutan automáticamente. Debido a que están basados en blockchain, son transparentes, inmutables y verificables por cualquier participante de la red.
        </p>

        <p>
          Estos contratos eliminan la necesidad de intermediarios, como abogados o bancos, ya que las transacciones se realizan directamente entre las partes interesadas. Esta automatización reduce los tiempos de espera, los costos adicionales y aumenta la confianza entre los participantes.
        </p>

        <h2 className="text-2xl font-semibold my-4">¿Cómo Funcionan los Smart Contracts?</h2>
        <p>
          Los smart contracts funcionan a través de código escrito en lenguajes específicos, como <strong>Solidity</strong> en Ethereum. El contrato contiene las reglas y condiciones necesarias que deben cumplirse para que una acción se lleve a cabo. Una vez que se cumple una condición, el contrato ejecuta automáticamente la acción predefinida, ya sea una transferencia de fondos, la validación de un documento, o cualquier otra tarea.
        </p>

        <p>
          Los pasos clave para el funcionamiento de un smart contract son:
        </p>

        <ul className="list-disc ml-6 my-4">
          <li><strong>Definición de Reglas:</strong> Las partes interesadas acuerdan los términos y condiciones, que se escriben en código y se suben a la blockchain.</li>
          <li><strong>Verificación:</strong> La red blockchain verifica el cumplimiento de las condiciones acordadas. Esta verificación es pública y puede ser auditada por cualquiera en la red.</li>
          <li><strong>Ejecución Automática:</strong> Si se cumplen todas las condiciones, el contrato inteligente se ejecuta automáticamente, sin intervención de terceros.</li>
        </ul>

        <p>
          Un ejemplo práctico sería un seguro de vuelo basado en smart contracts. Si el vuelo de una persona se retrasa más de 2 horas, el contrato inteligente ejecuta automáticamente el pago del seguro, sin necesidad de que el cliente tenga que realizar un reclamo.
        </p>

        <h2 className="text-2xl font-semibold my-4">Ventajas de los Smart Contracts</h2>
        <p>
          Los smart contracts tienen múltiples ventajas que los hacen atractivos en el mundo digital:
        </p>

        <ul className="list-disc ml-6 my-4">
          <li><strong>Automatización:</strong> Todo el proceso es automático, lo que reduce el tiempo de ejecución y evita errores humanos.</li>
          <li><strong>Transparencia:</strong> Todas las partes involucradas pueden ver el código y las transacciones realizadas, lo que asegura la confianza.</li>
          <li><strong>Seguridad:</strong> Los smart contracts están encriptados en una blockchain, lo que los hace altamente seguros y resistentes a manipulaciones.</li>
          <li><strong>Costos Reducidos:</strong> Al no requerir intermediarios, se eliminan muchos de los costos asociados con las transacciones tradicionales.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-4">Desventajas y Desafíos</h2>
        <p>
          A pesar de sus ventajas, los smart contracts también enfrentan algunos desafíos. La inmutabilidad de los contratos, que es una de sus fortalezas, también puede ser una desventaja en caso de que el código contenga errores, ya que corregir un contrato en la blockchain no es una tarea fácil.
        </p>

        <p>
          Otro desafío es la necesidad de que los términos del contrato estén claramente definidos y codificados correctamente. Además, dado que la tecnología blockchain todavía está en desarrollo, los contratos inteligentes requieren una infraestructura sólida y conocimiento especializado para su implementación.
        </p>

        <h2 className="text-2xl font-semibold my-4">Aplicaciones de los Smart Contracts</h2>
        <p>
          Los smart contracts se pueden utilizar en una variedad de industrias, como:
        </p>

        <ul className="list-disc ml-6 my-4">
          <li><strong>Finanzas:</strong> Automatización de pagos, préstamos y seguros.</li>
          <li><strong>Inmobiliario:</strong> Procesos de compraventa de propiedades sin intermediarios.</li>
          <li><strong>Logística:</strong> Rastreo de productos en la cadena de suministro.</li>
          <li><strong>Propiedad Intelectual:</strong> Protección y comercialización de derechos de autor.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-4">Conclusión</h2>
        <p>
          Los smart contracts están transformando la forma en que se realizan los acuerdos y transacciones en todo el mundo. A medida que la tecnología blockchain continúa avanzando, el uso de estos contratos inteligentes se expandirá a más industrias, ofreciendo una mayor automatización, seguridad y eficiencia. Sin embargo, es importante tener en cuenta los desafíos técnicos y éticos que pueden surgir con esta tecnología emergente.
        </p>
      </div>
    </div>
  );
};

export default BlogSmartContractsQueSon;
