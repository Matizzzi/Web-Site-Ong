const SobreNosotros = () => {
    return (
      <div className="p-8 pt-80 bg-gray-100"> {/* Aumenta el padding superior */}
        {/* Sección de Introducción */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 animate-fadeIn mt-20">Sobre Nosotros</h1>
          <p className="mt-4 text-lg text-gray-600 animate-fadeIn">
            En Life & Sustainability Today, nos comprometemos a proteger el medio ambiente y promover
            prácticas de vida sostenibles. Nuestra misión es ayudar a los usuarios a entender su huella
            de carbono y fomentar un consumo más responsable en un mundo digital.
          </p>
        </section>
  
        {/* Sección de Misión y Visión */}
        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-green-600">Nuestra Misión</h2>
          <p className="mt-2 text-lg text-gray-700">
            Proporcionar herramientas que permitan a los individuos y organizaciones calcular y
            reducir su huella de carbono, promoviendo estilos de vida sostenibles.
          </p>
          <h2 className="text-3xl font-semibold text-green-600 mt-8">Nuestra Visión</h2>
          <p className="mt-2 text-lg text-gray-700">
            Ser líderes en la promoción de la sostenibilidad, contribuyendo a un futuro donde la
            tecnología y la conservación del medio ambiente coexistan en armonía.
          </p>
        </section>
  
        {/* Sección de Objetivos */}
        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-green-600">Nuestros Objetivos</h2>
          <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
            <li>Facilitar el acceso a información sobre la huella de carbono.</li>
            <li>Fomentar el uso responsable de plataformas de streaming.</li>
            <li>Proporcionar datos claros y útiles para tomar decisiones informadas.</li>
          </ul>
        </section>
  
        {/* Sección de Beneficios */}
        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-green-600">Beneficios de unirte a nosotros</h2>
          <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
            <li>✔ Herramientas exclusivas para calcular tu huella de carbono.</li>
            <li>✔ Gráficos interactivos que muestran tu impacto ambiental.</li>
            <li>✔ Acceso a recursos para reducir tu consumo energético.</li>
          </ul>
        </section>
  
        {/* Sección de Características Técnicas */}
        <section className="mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-green-600">Características Técnicas</h2>
          <p className="mt-2 text-lg text-gray-700">
            Utilizamos tecnologías avanzadas y seguimos las mejores prácticas para asegurar la
            seguridad y eficiencia de nuestros servicios. Esto incluye autenticación de usuarios,
            pasarelas de pago seguras y una base de datos optimizada para un rendimiento superior.
          </p>
        </section>
  
        {/* Sección de Llamado a la Acción */}
        <section className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-green-600">Únete a Nuestra Causa</h2>
          <p className="mt-2 text-lg text-gray-700">
            Juntos podemos hacer la diferencia. Únete a nosotros y empieza a medir y reducir tu huella
            de carbono hoy mismo.
          </p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
            ¡Hazte Premium!
          </button>
        </section>
      </div>
    );
};
  
export default SobreNosotros;
