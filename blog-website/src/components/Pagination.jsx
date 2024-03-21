const Pagination = ({ currentPage, blogs, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={`${
            pageNumber === currentPage ? "activePagination" : ""
          }  py-2 px-3 border border-[#ccc] rounded hover:bg-[#eee] cursor-pointer`}
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      )
    );
  };
  return (
    <ul className="flex justify-center items-center list-none my-8">
      <li className=" mx-5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className=" flex items-center gap-4">{renderPaginationLinks()}</div>
      <li className=" mx-5">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
