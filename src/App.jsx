import { useState } from "react";
import IconFacebook from "./icons/IconFacebook"
import IconGoogle from "./icons/iconGoogle"
import { useForm } from "react-hook-form";

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const staticUsername = 'ingreyeslara';
    const staticPassword = 'Utd_2024';
    const staticUsername1 = 'examen_parcial2';
    const staticPassword1 = 'Voyporel100';

    if ((username === staticUsername && password === staticPassword) || (username === staticUsername1 && password === staticPassword1)) {
      window.location.href = 'https://adalidh1.projectsutd.online/';
    } else {
      alert('Credenciales incorrectas');
    }
  };

  

  return (
    <>
      <div className="m-10 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-10">Inicio de sesión</h1>
        <div className="flex justify-center space-y-16">
          <form onSubmit={handleSubmit} className='flex flex-col w-2/6  p-2 space-y-4 text-center'>
            <label htmlFor="">Usuario</label>
            <input type="text" className='p-2 bg-violet-100 rounded' value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="">Contraseña</label>
            
            <input type="password" className='p-2 bg-violet-100 rounded' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button
            // type="submit"
            //  onClick={() => {
            //   setError("email", {
            //     type: "custom",
            //     message: "Campo requerido"
            //   })
            //  }}
             className="p-2 bg-violet-400 text-white font-bold rounded w-2/3 mx-auto shadow-md shadow-gray-700">Iniciar sesión</button>
          </form>
        </div>
        <hr className="border-t-2 border-gray-400 mt-10 mb-10 w-3/6 mx-auto" />
        <div className="flex justify-center space-x-24 items-center">
        <button className="flex items-center justify-center p-2 bg-blue-700 text-white font-bold rounded-xl w-1/6  shadow-md shadow-gray-700"><IconFacebook /> Facebook</button>
        <button className="flex items-center justify-center p-2 bg-white font-bold rounded-xl w-1/6  shadow-md shadow-gray-700"><IconGoogle /> Google</button>
        </div>
      </div>
    </>
  )
}

export default App
