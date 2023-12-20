import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <div className="flex justify-center gap-x-5">
        <Link to="/" className="text-white font-bold text-lg">Home</Link>
        <Link to="/about" className="text-white font-bold text-lg">Sobre</Link>
        <Link to="/profile" className="text-white font-bold text-lg">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
