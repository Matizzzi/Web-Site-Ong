"use client";

import React, { useState } from 'react';
import { sendPasswordResetEmail } from "@/lib/firebase";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            await sendPasswordResetEmail(email);
            setMessage('Se ha enviado un enlace de recuperación a tu correo electrónico.');
        } catch (err) {
            if (err instanceof Error) {
                setError('Error al enviar el correo: ' + err.message);
            } else {
                setError('Error desconocido al enviar el correo.');
            }
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Recuperar Contraseña</h1>
            <form onSubmit={handleResetPassword} style={styles.form}>
                <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Recuperar Contraseña
                </button>
            </form>
            {message && <p style={{ ...styles.successMessage, ...styles.fadeIn }}>{message}</p>}
            {error && <p style={{ ...styles.errorMessage, ...styles.fadeIn }}>{error}</p>}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
        animation: 'fadeIn 0.5s ease-in-out',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        transform: 'scale(1)',
    },
    input: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        marginBottom: '15px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        transition: 'box-shadow 0.3s ease',
    },
    button: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    successMessage: {
        color: '#28a745',
        marginTop: '15px',
    },
    errorMessage: {
        color: '#dc3545',
        marginTop: '15px',
    },
    fadeIn: {
        opacity: 0,
        animation: 'fadeIn 0.5s forwards',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
};

export default ForgotPassword;
