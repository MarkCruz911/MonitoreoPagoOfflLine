// Sidebar.tsx
import React, { useState } from 'react';
//import empresaImage from './empresa-logo.png'; // Importa la imagen de la empresa desde tu directorio

const Sidebar: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Tareas');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <aside className="bg-blue-100 w-64 h-full p-4 flex flex-col">
      <div className="mb-4">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nTFlhvCa6FJncELKOhjMgIYPXjJvK-HUKg&usqp=CAU' alt="Logo de la empresa" className="w-full" />
      </div>
      <ul className="space-y-4 flex-1">
        <li className="text-lg font-semibold text-gray-500">Menú</li>
        <li 
          className={`text-gray-500 cursor-pointer px-2 py-1 rounded-md ${selectedOption === 'Tareas' ? 'bg-blue-900 text-white' : 'hover:bg-blue-100'}`} 
          onClick={() => handleOptionClick('Tareas')}
        >
          Tareas
        </li>
        <li 
          className={`text-gray-500 cursor-pointer px-2 py-1 rounded-md ${selectedOption === 'Otra Opción' ? 'bg-blue-900 text-white' : 'hover:bg-blue-100'}`} 
          onClick={() => handleOptionClick('Otra Opción')}
        >
          Otra Opción
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;