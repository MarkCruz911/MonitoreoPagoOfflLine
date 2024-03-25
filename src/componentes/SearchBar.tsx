import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <div>
        <label htmlFor="tarea" className="block text-sm font-medium text-gray-700">Buscar por Tarea:</label>
        <input type="text" id="tarea" placeholder="ID de la tarea" className="p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="factura" className="block text-sm font-medium text-gray-700">Buscar por Factura:</label>
        <input type="text" id="factura" placeholder="ID de la factura" className="p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Buscar por Estado:</label>
        <input type="text" id="estado" placeholder="Número de estado" className="p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="asociacion" className="block text-sm font-medium text-gray-700">Buscar por Asociación:</label>
        <select id="asociacion" className="p-2 border rounded-md">
          <option value="">Seleccione una asociación</option>
          <option value="1">Asociación 1</option>
          <option value="2">Asociación 2</option>
          <option value="3">Asociación 3</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
      </div>
      <div>
        <label htmlFor="fechaCreacion" className="block text-sm font-medium text-gray-700">Buscar por Fecha de Creación:</label>
        <input type="date" id="fechaCreacion" className="p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="fechaRealizado" className="block text-sm font-medium text-gray-700">Buscar por Fecha Realizado:</label>
        <input type="date" id="fechaRealizado" className="p-2 border rounded-md" />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buscar</button>
    </div>
  );
}

export default SearchBar;