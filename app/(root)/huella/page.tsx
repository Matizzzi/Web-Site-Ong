"use client"; // Indica que este es un componente de cliente

import React, { useState } from 'react';

// Datos de plataformas de streaming con su consumo por hora
const plataformas = [
    { id: 1, nombre: "Netflix", consumoPorHora: 3.5 }, // en kWh
    { id: 2, nombre: "YouTube", consumoPorHora: 2.4 },
    { id: 3, nombre: "Spotify", consumoPorHora: 0.15 },
    { id: 4, nombre: "Amazon Prime Video", consumoPorHora: 3.5 },
    { id: 5, nombre: "Disney+", consumoPorHora: 3.5 },
];

const CO2_PER_KWH = 500; // gramos de CO₂ por kWh

const Huella = () => {
    const [plataformaSeleccionada, setPlataformaSeleccionada] = useState('');
    const [horas, setHoras] = useState<number>(0);
    const [huellaCarbono, setHuellaCarbono] = useState<number | null>(null);
    const [historial, setHistorial] = useState<{ plataforma: string; huella: number; co2: number }[]>([]);

    const calcularHuella = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const plataforma = plataformas.find(p => p.id === parseInt(plataformaSeleccionada));
        if (plataforma) {
            const huella = plataforma.consumoPorHora * horas;
            const co2 = huella * CO2_PER_KWH;
            setHuellaCarbono(huella);

            // Agregar resultado al historial
            setHistorial(prevHistorial => [
                ...prevHistorial,
                { plataforma: plataforma.nombre, huella, co2 }
            ]);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800">Calculadora de Huella de Carbono</h2>
            <p className="text-center text-sm text-gray-500 mt-2">Versión Básica</p>
            <form onSubmit={calcularHuella} className="mt-4 space-y-4">
                <div>
                    <label htmlFor="plataforma" className="block text-gray-700 font-semibold">Selecciona una plataforma de streaming:</label>
                    <select
                        id="plataforma"
                        value={plataformaSeleccionada}
                        onChange={(e) => setPlataformaSeleccionada(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Selecciona...</option>
                        {plataformas.map(plataforma => (
                            <option key={plataforma.id} value={plataforma.id}>
                                {plataforma.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="horas" className="block text-gray-700 font-semibold">Horas de uso:</label>
                    <input
                        type="number"
                        id="horas"
                        value={horas}
                        onChange={(e) => setHoras(parseFloat(e.target.value) || 0)}
                        required
                        min="1"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition duration-300"
                >
                    Calcular Huella de Carbono
                </button>
            </form>

            {huellaCarbono !== null && (
                <div className="mt-6 p-4 border border-blue-600 bg-blue-100 rounded-md text-center">
                    <h3 className="text-lg font-semibold">Resultado:</h3>
                    <p className="text-gray-700">Tu huella de carbono es: <span className="font-bold">{huellaCarbono} kWh</span></p>
                    <p className="text-gray-700">Esto equivale a aproximadamente: <span className="font-bold">{huellaCarbono * CO2_PER_KWH} gramos de CO₂</span></p>
                </div>
            )}

            {historial.length > 0 && (
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-semibold">Historial de Cálculos:</h3>
                    <ul className="mt-2 space-y-2">
                        {historial.map((item, index) => (
                            <li key={index} className="border border-gray-300 p-2 rounded-md bg-gray-50">
                                <p className="font-bold">{item.plataforma}</p>
                                <p>Huella: {item.huella} kWh</p>
                                <p>CO₂: {item.co2} gramos</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Huella;
