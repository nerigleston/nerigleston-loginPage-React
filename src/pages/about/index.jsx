import { Link } from 'react-router-dom';
import Navbar from '../../components/navBar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-400 flex-col">
        <div className="bg-white p-8 shadow-md rounded-md flex items-center flex-col">
          <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
          <p className="text-gray-700 mb-4">
            Este projeto foi criado para testar minhas habilidades no desenvolvimento web. Utilizei as seguintes tecnologias:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Frontend com React</li>
            <li>Estilização com Tailwind CSS</li>
            <li>Backend com Golang</li>
            <li>Banco de dados MongoDB</li>
            <li>Autenticação com JSON Web Tokens (JWT) no backend</li>
            <li>Contexto de Autenticação (`AuthContext`) no frontend</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Uma funcionalidade destacada é a capacidade do frontend de recuperar dados do usuário logado e exibi-los na página de perfil.
          </p>
          <p className="text-gray-700 mb-4">
            O backend utiliza JWT para autenticação, e o frontend usa o contexto de autenticação para gerenciar o acesso a páginas privadas.
          </p>
          <p className="text-gray-700 mb-4">
            Para começar, faça o <Link to="/cadastro" className="text-blue-500">cadastro</Link> ou <Link to="/" className="text-blue-500">login</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
