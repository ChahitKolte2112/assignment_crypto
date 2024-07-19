import React from 'react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <nav>
        <ul className="inline-flex">
          {pageNumbers.map(number => (
            <li key={number} className={`px-3 py-2 mx-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              <a onClick={() => paginate(number)} className="cursor-pointer">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
