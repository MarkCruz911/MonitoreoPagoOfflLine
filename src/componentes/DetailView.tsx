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

    const fetchData = async (filtro: filtro) => {
        
        try {
            console.log("FILTRO: ", filtro);
            const fechaActual = new Date().toISOString().split('T')[0];
            const url = filtro ? `${import.meta.env.VITE_API_URL_LOCAL_TAREAS}?fechaCreacion=${filtro?.fechaCreacion}&estado=${filtro?.estado}&tarea=${filtro?.tarea}&factura=${filtro?.factura}&fechaTerminado=${filtro?.fechaTerminado}&asociacion=${filtro?.asociacion}` : `http://localhost:3000/tareas?fechaCreacion=${fechaActual}`;
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

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Actualizar la página actual cuando el usuario cambie de página
        // Aquí puedes actualizar los datos de tus tareas para mostrar las de la nueva página
    };

    const handleSearch = (filtro: filtro) => {
        fetchData(filtro);
    };

    return (
        <section className="flex-1 p-4 bg-white ">
            <h2 className="text-3xl font-bold mb-4 font-fondamento">Monitoreo de Facturación Offline</h2>
            <SearchBar onSearch={handleSearch} />
            <TaskList tasks={dataPerPage} />
            <Pagination currentPage={currentPage} totalPages={totalPagesDos} onPageChange={handlePageChange} />
        </section>
    );
}

export default DetailView;