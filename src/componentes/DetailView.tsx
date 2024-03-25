// DetailView.tsx
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import TaskList from './TaskList';
import Pagination from './Pagination';

const tasksData = [
    { id: 1, task: 123432, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 2, task: 123423, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 3, task: 123455, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 4, task: 123467, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 5, task: 123456, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 6, task: 123434, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 7, task: 123490, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 8, task: 123478, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 9, task: 123409, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 10, task: 123351, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 12, task: 123445, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 13, task: 123490, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 14, task: 123423, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 15, task: 123456, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 16, task: 123467, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 17, task: 123413, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 18, task: 123490, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 19, task: 123565, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 20, task: 123362, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 21, task: 123909, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 22, task: 123901, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 23, task: 123351, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 24, task: 123029, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 25, task: 123124, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 26, task: 123653, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 27, task: 123163, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 28, task: 123535, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 29, task: 123215, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 30, task: 123904, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 31, task: 123361, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 32, task: 123346, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 33, task: 123163, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 34, task: 123263, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 35, task: 123521, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 36, task: 123903, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 37, task: 123042, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 38, task: 123153, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 39, task: 123124, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 40, task: 123462, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 41, task: 123163, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 42, task: 123902, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 43, task: 123362, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 44, task: 123905, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 45, task: 123546, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 46, task: 123106, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 47, task: 123305, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    { id: 48, task: 123159, factura: 12345, estado: 1, intentos: 2, fechaTerminado: "2024-03-25", log: "Tarea completada exitosamente" },
    { id: 49, task: 123847, factura: 54321, estado: 2, intentos: 1, fechaTerminado: "2024-03-24", log: "Error al procesar la factura" },
    // Agrega más tareas según sea necesario
];
const ITEMS_PER_PAGE = 15;

const DetailView: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [displayedTasks, setDisplayedTasks] = useState([] as typeof tasksData); // Tareas a mostrar en la página actual
    // Calcula el número total de páginas
    const totalPages = Math.ceil(tasksData.length / ITEMS_PER_PAGE);
    // Filtra las tareas a mostrar en la página actual
    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const tasksForPage = tasksData.slice(startIndex, endIndex);
        setDisplayedTasks(tasksForPage);
    }, [currentPage, tasksData]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Actualizar la página actual cuando el usuario cambie de página
        // Aquí puedes actualizar los datos de tus tareas para mostrar las de la nueva página
    };
    return (
        <section className="flex-1 p-4 bg-white h-full">
            <h2 className="text-3xl font-bold mb-4 font-fondamento">Monitoreo de Facturación Offline</h2>
            <SearchBar />
            <TaskList tasks={displayedTasks} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
    );
}

export default DetailView;