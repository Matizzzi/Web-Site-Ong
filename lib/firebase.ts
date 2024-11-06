import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail as firebaseSendPasswordResetEmail } from "firebase/auth";
import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYcZAjo9bYeLUzh5FP3wc2BxqqC-z3h0U",
  authDomain: "next-ong.firebaseapp.com",
  projectId: "next-ong",
  storageBucket: "next-ong.firebasestorage.app",
  messagingSenderId: "311046777883",
  appId: "1:311046777883:web:eecce93c2980c2b3189cbe",
  measurementId: "G-X33GMHQGT1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Función asíncrona para iniciar sesión
export const signIn = async (user: { email: string, password: string }) => {
  try {
    return await signInWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error de inicio de sesión:", error.message);
      throw new Error("No se pudo iniciar sesión. " + error.message);
    }
    throw new Error("Error desconocido al iniciar sesión.");
  }
};

// Función asíncrona para registrarse
export const signUp = async (user: { email: string, password: string }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    return userCredential.user; // Retorna el usuario creado
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error de registro:", error.message);
      throw new Error("No se pudo crear la cuenta. " + error.message);
    }
    throw new Error("Error desconocido al crear la cuenta.");
  }
};

// Función para crear un usuario en Firestore
export const createUserInDB = async (user: {
  id: string;
  name: string;
  username: string;
  email: string;
}) => {
  const path = `users/${user.id}`; // Crea la referencia a la colección `users`

  try {
    await setDoc(doc(db, path), {
      ...user,
      createdAt: Timestamp.now(), // Guarda la fecha de creación
    }); 
  } catch (error) {
    console.error("Error al crear el usuario en la base de datos:", error);
  }
};

// Función para enviar correo de restablecimiento de contraseña
export const sendPasswordResetEmail = async (email: string) => {
  try {
    await firebaseSendPasswordResetEmail(auth, email);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al enviar correo de restablecimiento:", error.message);
      throw new Error("Error al enviar correo de restablecimiento: " + error.message);
    }
    throw new Error("Error desconocido al enviar correo de restablecimiento.");
  }
};
