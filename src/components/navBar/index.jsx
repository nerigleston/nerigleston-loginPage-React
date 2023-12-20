import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <div className="flex justify-center">
        <Link to="/" className="text-white font-bold text-lg mr-4">Home</Link>
        <Link to="/about" className="text-white font-bold text-lg">Sobre</Link>
      </div>
    </nav>
  );
};

export default Navbar;
