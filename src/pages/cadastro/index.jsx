/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Go from "./../../assets/golang.webp";
import React from "./../../assets/react.svg";
import NavBar1 from '../../components/navBar1';

const Cadastro = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: 0, password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'age' && (isNaN(value) || Number(value) < 0)) {
      alert('A idade deve ser um número positivo.');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'age' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age || !formData.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        alert(data.message || 'Erro ao cadastrar. Por favor, tente novamente.');
        setLoading(false);
        return;
      }

      alert('Cadastro realizado com sucesso!');

      // Redirect to login after successful registration
      if (typeof navigate === 'function') {
        navigate('/');
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
      <NavBar1 />
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900">
        <div className="bg-white p-8 shadow-md rounded-md w-96 flex items-center flex-col">
          <div className='flex mb-7'>
            <img src={React} alt="" width={100} height={100} />
            <img src={Go} alt="" width={100} height={100} />
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 text-center">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="age" className="block text-sm font-medium text-gray-600 text-center">
                Idade
              </label>
              <input
                type="number"
                id="age"
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
              className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500 w-full"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Cadastrar'}
            </button>
            <p className="mt-3 text-center">
              Não tem uma conta? <Link to="/" className="text-blue-700">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
