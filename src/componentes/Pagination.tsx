// Pagination.tsx
import React, { useEffect, useState } from 'react';
import './Pagination.css'; // Importa tus estilos personalizados

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [active, setActive] = useState(currentPage);

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const next = () => {
    if (active < totalPages) {
      const nextPage = active + 1;
      setActive(nextPage);
      onPageChange(nextPage);
    }
  };

  const prev = () => {
    if (active > 1) {
      const prevPage = active - 1;
      setActive(prevPage);
      onPageChange(prevPage);
    }
  };

  return (
    <div className='pagination'>
      <button className='pagination-button' onClick={prev} disabled={active === 1}>
        &lt;
      </button>
      <p className='pagination-text'>
        Page <strong>{active}</strong> of <strong>{totalPages}</strong>
      </p>
      <button className='pagination-button' onClick={next} disabled={active === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;