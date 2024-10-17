const SectionNumbers = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
        {/* Título principal */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-15 leading-tight animate-fade-in">
          Desconéctate para <br /> reconectar
        </h1>
  
        {/* Contenedor de estadísticas */}
        <div className="bg-white shadow-2xl p-10 rounded-3xl max-w-lg transform hover:scale-105 transition-transform duration-500">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 animate-pulse">
            +1 millón de <br /> personas con nosotros
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Promovemos el consumo responsable <br />
            que reduce el impacto ambiental y fomenta un estilo de vida más consciente.
          </p>
        </div>
  
        {/* Elemento decorativo */}
        <div className="mt-16 w-16 md:w-20 h-16 md:h-20 bg-blue-500 rounded-full shadow-xl animate-bounce"></div>
      </div>
    );
  };
  
  export default SectionNumbers;
  