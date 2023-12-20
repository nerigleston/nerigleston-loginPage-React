<<<<<<< HEAD
// Importando dependências necessárias
=======
>>>>>>> 69f30e3... console.log
import { useAuth } from "../../components/authContext";
import LogoutButton from "../../components/logoutButton";
import Navbar from "../../components/navBar";

export default function Profile() {
<<<<<<< HEAD
  const { authenticated, user } = useAuth();
=======
  const { user } = useAuth();
  console.log("User", user)
>>>>>>> 69f30e3... console.log

  return (
    <>
      <div className="min-h-screen bg-blue-400 text-white p-8 flex items-center justify-center flex-col">
        <Navbar />
        <div className="max-w-md bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-black flex justify-center">Profile</h1>
<<<<<<< HEAD
          {authenticated ? (
            <div className="text-black">
=======
            <div className="text-black">
              <p className="text-lg mb-2">{`ID: ${user.id}`}</p>
>>>>>>> 69f30e3... console.log
              <p className="text-lg mb-2">{`Nome: ${user.name}`}</p>
              <p className="text-lg mb-2">{`Email: ${user.email}`}</p>
              <p className="text-lg mb-6">{`Idade: ${user.age}`}</p>
              <div className="flex justify-center">
                <LogoutButton />
              </div>
            </div>
<<<<<<< HEAD
          ) : (
            <p className="text-gray-600">Please log in to view your profile.</p>
          )}
=======
>>>>>>> 69f30e3... console.log
        </div>
      </div>
    </>
  );
}
