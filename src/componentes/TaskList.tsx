import React, { useEffect, useState } from 'react';

interface Task {
  Tarea: number,
  Factura: number,
  Nombre: string,
  TipoTarea: number,
  Estado: number,
  Intentos: number,
  FechaCreacion: string,
  HoraCreacion: string,
  FechaTerminado: string,
  HoraTerminado: string,
  Log: string,
  Asociacion: number,
  NombreAsociacion: string,
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

  const [taskList, setTaskList] = useState<Task[]>([]);
  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <div className="overflow-x-auto h-[65%]">
      <table className="w-full border-collapse">
        <thead className="bg-blue-200">
          <tr>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>TAREA</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>FACTURA</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>ESTADO</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>INTENTOS</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>FECHA CREADO</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>FECHA TERMINADO</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>LOG</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>ASOCIACION</p></th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="p-4 text-left font-medium"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.Tarea}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.Factura}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.Estado}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.Intentos}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.FechaCreacion}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.FechaTerminado}</p></td>
                <td className="p-4 text-left">
                  <div className='font-fondamento text-lg max-h-12 overflow-auto' style={{ maxHeight: '5rem' }}>{task.Log}</div>
                </td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.NombreAsociacion}</p></td>
              </tr>
              {/* Add a separator line except for the last row */}
              {index !== taskList.length - 1 && (
                <tr key={index}>
                  <td colSpan={8} className="p-2 border-t-2 border-blue-900"></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;