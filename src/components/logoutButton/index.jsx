import { useAuth } from './../authContext/index';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('Usuário deslogado')
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
