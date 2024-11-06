import React from "react";

const Premium = () => {
  return (
    <section className="px-6 py-16 bg-green-50 text-gray-800 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-green-700 mt-20">¡Hazte Premium!</h1>
        <p className="text-lg text-gray-600">
          Únete a la membresía Premium y accede a herramientas exclusivas para calcular
          y reducir tu huella de carbono. Con tu apoyo, estamos promoviendo un futuro más
          sostenible.
        </p>
      </div>

      {/* Beneficios de la Membresía */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center text-green-600">
          Beneficios de ser Premium
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✔</span> Acceso a la calculadora avanzada de huella de carbono.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✔</span> Gráficos y tablas interactivas para comparar el impacto ambiental de diferentes plataformas de streaming.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✔</span> Almacenamiento y gestión de tus datos para hacer seguimiento en el tiempo.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✔</span> Prioridad en reportes y soporte exclusivo.
          </li>
        </ul>
      </div>

      {/* Costo de Membresía */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto">
        <h3 className="text-3xl font-bold text-gray-800">Costo de Membresía</h3>
        <p className="text-4xl font-extrabold text-green-700 mt-4 mb-6">$9.999/mes</p>
        <p className="text-gray-600 mb-8">Disfruta de todos los beneficios y herramientas de Life & Sustainability Today para llevar un estilo de vida más sostenible.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
          Únete ahora
        </button>
      </div>
    </section>
  );
};

export default Premium;
