// Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="pagination flex space-x-2">
          {getPageNumbers().map(page => (
            <li key={page} className={`mx-1 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-full h-8 w-8 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white`}>
              <button onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;