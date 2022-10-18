import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDv80nMbvMW526-L65XZ0Jz5iNdYeKvOLw',
	authDomain: 'ema-john-simple-5524e.firebaseapp.com',
	projectId: 'ema-john-simple-5524e',
	storageBucket: 'ema-john-simple-5524e.appspot.com',
	messagingSenderId: '391443343213',
	appId: '1:391443343213:web:4995da381a2bf30d7f5c64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;