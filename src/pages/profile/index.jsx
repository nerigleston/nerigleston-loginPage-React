import { useAuth } from "../../components/authContext";
import LogoutButton from "../../components/logoutButton";
import Navbar from "../../components/navBar";

export default function Profile() {
  const { user, authenticated } = useAuth();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-400 text-white p-8 flex items-center justify-center flex-col">
        <div className="max-w-md bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-black flex justify-center">Profile</h1>
          {authenticated ? (
            <div className="text-black">
              <p className="text-lg mb-2">{`Nome: ${user.name}`}</p>
              <p className="text-lg mb-2">{`Email: ${user.email}`}</p>
              <p className="text-lg mb-6">{`Idade: ${user.age}`}</p>
              <div className="flex justify-center">
                <LogoutButton />
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Please log in to view your profile.</p>
          )}
        </div>
      </div>
    </>
  );
}