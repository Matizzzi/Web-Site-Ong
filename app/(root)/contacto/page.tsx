import React from 'react';

const Contacto = () => {
    return (
        <div className="p-8 bg-gray-50 text-gray-800">
            <h1 className="text-3xl font-bold text-green-600 mb-6">Contacto</h1>

            {/* Sucursales */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Nuestras Sucursales</h2>
                <ul className="space-y-2">
                    <li>Sucursal 1: Av. Libertador Bernardo OHiggins 1234, santiago</li>
                    <li>Sucursal 2: Calle Valparaíso 4567, temuco</li>
                    <li>Sucursal 3:  Av. Alemania 789, melipilla</li>
                </ul>
            </section>

            {/* Reuniones en Zoom */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Reuniones en Zoom</h2>
                <p className="mb-2">Únete a nuestras reuniones semanales para conocer más sobre nuestros servicios y proyectos sostenibles.</p>
                <p className="mb-1"><strong>Fechas:</strong> Todos los martes y jueves</p>
                <p className="mb-1"><strong>Horarios:</strong> 10:00 AM - 11:00 AM (GMT -4)</p>
                <p>
                    <strong>Link de Zoom:</strong>{' '}
                    <a href="https://zoom.us/j/123456789" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://zoom.us/j/123456789
                    </a>
                </p>
            </section>

            {/* Correos de Contacto */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Correos de Contacto</h2>
                <ul className="space-y-2">
                    <li><strong>Soporte:</strong> soporte@life-sustainability.org</li>
                    <li><strong>Proyectos:</strong> proyectos@life-sustainability.org</li>
                    <li><strong>General:</strong> contacto@life-sustainability.org</li>
                </ul>
            </section>

            {/* Números de Contacto */}
            <section>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Números de Contacto</h2>
                <ul className="space-y-2">
                    <li><strong>Teléfono:</strong> +56 9 1234 5678</li>
                    <li><strong>WhatsApp:</strong> +56 9 8765 4321</li>
                </ul>
            </section>
        </div>
    );
}

export default Contacto;
