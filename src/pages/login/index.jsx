/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './../../components/authContext/index.jsx';
import Go from "./../../assets/golang.webp";
import React from "./../../assets/react.svg";
import Navbar from '../../components/navBar/index.jsx';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        alert(data.message || 'Credenciais inválidas. Por favor, tente novamente.');
        setLoading(false);
        return;
      }

      if (typeof login === 'function') {
        console.log("Usuário logado", data);
        login(data);
      }

      if (typeof navigate === 'function') {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Algo deu errado! Verifique a conexão ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-400 flex-col">
        <div className="bg-white p-8 shadow-md rounded-md w-96 flex items-center flex-col">
          <div className='flex mb-7'>
            <img src={React} alt="" width={100} height={100} />
            <img src={Go} alt="" width={100} height={100} />
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 text-center">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 text-center">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
            <p className="mt-3 text-center">
              Não tem uma conta? <Link to="/cadastro" className="text-blue-500">Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
