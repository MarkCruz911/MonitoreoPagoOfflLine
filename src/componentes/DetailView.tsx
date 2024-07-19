// DetailView.tsx
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import TaskList from './TaskList';
import Pagination from './Pagination';
import axios from 'axios';

interface filtro {
    fechaCreacion?: string,
    fechaTerminado?: string,
    estado?: number,
    tarea?: number,
    factura?: number,
    asociacion?: number,
}

const DetailView = () => {
    const ITEMS_PER_PAGE = 10;
    const [totalPagesDos, setTotalPages] = useState(0); // Número total de páginas
    const [dataResponse, setDataResponse] = useState([] as any);
    const [dataPerPage, setDataPerPage] = useState([] as any);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [timeRemaining, setTimeRemaining] = useState(60); // Tiempo restante en segundos (2 minutos)

    const fetchData = async (filtro: filtro) => {

        try {
            console.log("FILTROSS: ", filtro);
            const fechaActual = new Date().toISOString().split('T')[0];
            const url = filtro ? `${import.meta.env.VITE_API_URL_WEB_TAREAS}?fechaCreacion=${filtro?.fechaCreacion}&estado=${filtro?.estado}&tarea=${filtro?.tarea}&factura=${filtro?.factura}&fechaTerminado=${filtro?.fechaTerminado}&asociacion=${filtro?.asociacion}` : `http://localhost:3000/tareas?fechaCreacion=${fechaActual}`;
            const response: any = await axios.get(url); // Reemplaza con la URL de tu API
            console.log("AQUI: ", response);
            const tasksData: any = await response.data;
            const totalPages: any = Math.ceil(tasksData.length / ITEMS_PER_PAGE);
            setTotalPages(totalPages);
            setDataResponse(tasksData);
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const tasksForPage = await tasksData.slice(startIndex, endIndex);
            setDataPerPage(tasksForPage);
            console.log("DATOS POR PAGINA: ", dataPerPage);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    };

    const getDataPerPage = async () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const tasksForPage = await dataResponse.slice(startIndex, endIndex);
        setDataPerPage(tasksForPage);
        console.log("DATOS POR PAGINA DOS: ", dataPerPage);
    }

    useEffect(() => {
        getDataPerPage();
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        getDataPerPage();
    }, [totalPagesDos]);

    // Filtra las tareas a mostrar en la página actual
    useEffect(() => {
        const fechaActual = new Date().toISOString().split('T')[0];
        const filtro: filtro = { fechaCreacion: fechaActual, estado: 1 }
        fetchData(filtro);
    }, []);//, [currentPage, dataResponse]);

    useEffect(() => {
        const fetchAndUpdateData = async () => {
            // Actualizar los datos
            const fechaActual = new Date().toISOString().split('T')[0];
            const filtro: filtro = { fechaCreacion: fechaActual, estado: 1 };
            await fetchData(filtro);
            // Actualizar el tiempo restante
            setTimeRemaining(60); // Reinicia el tiempo restante a 2 minutos
        };

        // Ejecutar la función de actualización de datos cada 2 minutos
        const intervalId = setInterval(() => {
            fetchAndUpdateData();
        }, 60000); // 120000 milisegundos = 2 minutos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Actualizar el tiempo restante cada segundo
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000); // 1000 milisegundos = 1 segundo

        // Limpiar el intervalo cuando el tiempo restante llegue a cero
        if (timeRemaining <= 0) {
            clearInterval(intervalId);
        }

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [timeRemaining]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Actualizar la página actual cuando el usuario cambie de página
        // Aquí puedes actualizar los datos de tus tareas para mostrar las de la nueva página
    };

    const handleSearch = (filtro: filtro) => {
        fetchData(filtro);
    };

    return (
        <>
        <section className="relative flex-1 p-4 bg-white ">
            <h2 className="text-3xl font-bold mb-4 font-fondamento">Monitoreo de Facturación Offline</h2>
            <p>Próxima actualización en: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</p>
            <SearchBar onSearch={handleSearch} />
            <TaskList tasks={dataPerPage} />
            <Pagination currentPage={currentPage} totalPages={totalPagesDos} onPageChange={handlePageChange} />
        </section>
        </>
    );
}

export default DetailView;