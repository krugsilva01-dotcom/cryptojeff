import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// @ts-ignore - Suppress error if module resolution fails for getFirestore in certain environments
import { getFirestore } from 'firebase/firestore';
import { getEnv } from '../utils/env';

// Configuração do Firebase lida das variáveis de ambiente de forma segura
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY'),
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_FIREBASE_APP_ID')
};

let auth: any = null;
let db: any = null;
let app: any = null;

// Só inicializa se a chave de API estiver presente e válida
if (firebaseConfig.apiKey && typeof firebaseConfig.apiKey === 'string' && firebaseConfig.apiKey.startsWith('AIza')) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        console.log("Firebase conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao inicializar Firebase:", error);
    }
} else {
    console.warn("Chaves do Firebase não encontradas. O app rodará em modo SIMULAÇÃO (Mock).");
}

export { auth, db };