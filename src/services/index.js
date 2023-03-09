import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "credentials-firebase";

const Auth = getAuth(firebase);

export const Register = (email, password) => createUserWithEmailAndPassword(Auth, email, password);
  
export const Login = (email, password) => signInWithEmailAndPassword(Auth, email, password);