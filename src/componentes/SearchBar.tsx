import axios from 'axios';
import { useEffect, useState } from 'react';

interface filtro {
  fechaCreacion?: string,
  fechaTerminado?: string,
  estado?: number,
  tarea?: number,
  factura?: number,
  asociacion?: number,
}

interface Asociacion {
  Asociacion: number,
  Nombre: string,
}

interface SearchBarProps {
  onSearch: (filtro: filtro) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [fechaCreacion, setFechaCreacion] = useState<any>();
  const [fechaTerminado, setFechaTerminado] = useState<any>();
  const [estado, setEstado] = useState<any>();
  const [tarea, setTarea] = useState<any>();
  const [factura, setFactura] = useState<any>();
  const [dataResponse, setDataResponse] = useState<Asociacion[]>([]);
  const [asociacion, setAsociacion] = useState<any>();

  const SearchAsociacion = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL_WEB_ASOCIACION}`);
      //console.log("Los datos de la asociacion aqui: ", response.data);
      setDataResponse(response.data);
    } catch (lxError) {
      console.log("Ingreso al Catch: ", lxError);
    }
  }

  useEffect(() => {
    SearchAsociacion();
  }, []);

  const handleSearch = () => {
    // Aquí puedes realizar validaciones adicionales si es necesario
    console.log("FECHA ELEGIDA: ", fechaCreacion);
    const filtro: filtro = {
      fechaCreacion,
      fechaTerminado,
      estado: estado === '' ? undefined : estado,
      tarea: tarea === '' ? undefined : tarea,
      factura: factura === '' ? undefined : factura,
      asociacion: asociacion === '' ? undefined : asociacion,
    };
    onSearch(filtro);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mb-4 h-[20%]">
      {/*
      Descomentar para habilitar la busqueda por factura
      <div>
        <label htmlFor="tarea" className="block text-sm font-medium text-gray-700">Buscar por Tarea:</label>
        <input type="text" id="tarea" placeholder="ID de la tarea" className="p-2 border rounded-md" onChange={(e) => setTarea(Number(e.target.value))} />
      </div>*/}
      <div>
        <label htmlFor="factura" className="block text-sm font-medium text-gray-700">Buscar por Factura:</label>
        <input type="text" id="factura" placeholder="ID de la factura" className="p-2 border rounded-md" onChange={(e) => setFactura(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Buscar Estado:</label>
        <select id="estado" className="p-2 border rounded-md" onChange={(e) => setEstado(Number(e.target.value))} >
          <option value="">Seleccione un Estado</option>
          <option value="1">Pendiente 1</option>
          <option value="2">Completado 2</option>
          <option value="3">Correo Invalido 3</option>
          <option value="4">Fallido 4</option>
          <option value="5">En Proceso 5</option>
        </select>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <label htmlFor="asociacion" className="block text-sm font-medium text-gray-700">Buscar por Asociación:</label>
        <select id="asociacion" className="p-2 border rounded-md" style={{ width: '200px' }} onChange={(e) => setAsociacion(Number(e.target.value))}>
          <option value="">Seleccione una asociación</option>
          {dataResponse.map(asociacion => (
            <option key={asociacion.Asociacion} value={asociacion.Asociacion} title={asociacion.Nombre}>{asociacion.Nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">Buscar por Empresa:</label>
        <select id="empresa" className="p-2 border rounded-md">
          <option value="">Seleccione una empresa</option>
          <option value="1">Pollo Campeon</option>
          <option value="2">Pago Facil</option>
          <option value="3">Syscoop Solution</option>
        </select>
      </div>
      <div>
        <label htmlFor="sucursal" className="block text-sm font-medium text-gray-700">Buscar por Sucursal:</label>
        <select id="sucursal" className="p-2 border rounded-md">
          <option value="">Seleccione una sucursal</option>
          <option value="1">Pollo Campeon</option>
          <option value="2">Pago Facil</option>
          <option value="3">Syscoop Solution</option>
        </select>
      </div>
      <div>
        <label htmlFor="puntoventa" className="block text-sm font-medium text-gray-700">Buscar por Punto de Venta:</label>
        <select id="puntoventa" className="p-2 border rounded-md">
          <option value="">Seleccione un punto de venta</option>
          <option value="1">Pollo Campeon</option>
          <option value="2">Pago Facil</option>
          <option value="3">Syscoop Solution</option>
        </select>
      </div>
      <div>
        <label htmlFor="fechaCreacion" className="block text-sm font-medium text-gray-700">Buscar por Fecha de Creación:</label>
        <input
          type="date"
          id="fechaCreacion"
          className="p-2 border rounded-md"
          value={fechaCreacion}
          onChange={(e) => setFechaCreacion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fechaTerminado" className="block text-sm font-medium text-gray-700">Buscar por Fecha Realizado:</label>
        <input
          type="date"
          id="fechaTerminado"
          className="p-2 border rounded-md"
          value={fechaTerminado}
          onChange={(e) => setFechaTerminado(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;