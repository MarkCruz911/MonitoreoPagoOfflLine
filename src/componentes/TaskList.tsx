import React from 'react';

interface Task {
  id: number;
  task: number;
  factura: number;
  estado: number;
  intentos: number;
  fechaTerminado: string;
  log: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto h-[75%]">
      <table className="w-full border-collapse">
        <thead className="bg-blue-200">
          <tr>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>TAREA</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>TAREA</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>ESTADO</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>INTENTOS</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>FECHA TERMINADO</p></th>
            <th className="p-2 text-left"><p className='font-fondamento text-lg'>LOG</p></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <tr>
                <td className="p-4 text-left font-medium"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.task}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.factura}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.estado}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.intentos}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.fechaTerminado}</p></td>
                <td className="p-4 text-left"><p className='font-fondamento text-lg max-h-12 overflow-hidden'>{task.log}</p></td>
              </tr>
              {/* Add a separator line except for the last row */}
              {index !== tasks.length - 1 && (
                <tr>
                  <td colSpan={6} className="p-2 border-t-2 border-blue-900"></td>
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