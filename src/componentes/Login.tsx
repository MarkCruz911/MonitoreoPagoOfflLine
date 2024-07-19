import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [gmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loHistory = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    try{
      const loResponse = await axios.post('http://localhost:3000/auth/login',{gmail, password});
      console.log("Resspuesta del bakend del usuario: ", loResponse);
      if(loResponse.data.status === 1){
        console.log("Token a guardar: ",loResponse.data.values[0]);
        localStorage.setItem('token', loResponse.data.values[0])
        loHistory('/index');
      }else{
        console.log("Inicio de sesion fallida");
      }
    }catch(lxError){
      console.log("Error durante el inicio de sesión: ",lxError);
    } 
    console.log('Email:', gmail);
    console.log('Contraseña:', password);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(../assets/images/mundo.jpg)`, backgroundSize: 'cover' }}>
      <div className="max-w-md w-full space-y-8 bg-blue-400 p-8 rounded-lg">
        <div>
          <img className="mx-auto h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nTFlhvCa6FJncELKOhjMgIYPXjJvK-HUKg&usqp=CAU" alt="Logo" /> {/* Ajusta el tamaño de la imagen aquí */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicio de sesión</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={gmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="text-sm">
              <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿No tienes una cuenta? Regístrate
              </a>
            </div>
          </div>
          <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm13.707-2.293a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L9.414 11H17a1 1 0 100-2h-7.586l2.293-2.293z" clipRule="evenodd" />
                  </svg>
                </span>
                Iniciar sesión
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


