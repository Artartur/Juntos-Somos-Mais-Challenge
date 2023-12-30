import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import "../styles/pagination.scss";

interface IPagination {
  currentPage: number;
  onClickNext: () => void;
  onClickPage: (page: number) => void;
  onClickPrev: () => void;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  onClickNext,
  onClickPage,
  onClickPrev,
  totalPages,
}: IPagination) {
  const visiblePages = 3;

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="pagination__container">
      <button disabled={currentPage === 1} onClick={onClickPrev}>
        <FaCircleChevronLeft
          color={currentPage === 1 ? "#E5E5E5" : "4A4A4A"}
          size={20}
        />
      </button>
      {pages.map((pageNumber) => (
        <button
          className={`pagination__container-numbers ${
            currentPage === pageNumber ? "selected" : ""
          }`}
          disabled={currentPage === pageNumber}
          key={pageNumber}
          onClick={() => onClickPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={onClickNext}>
        <FaCircleChevronRight
          color={currentPage === totalPages ? "#E5E5E5" : "#4A4A4A"}
          size={20}
        />
      </button>
    </div>
  );
}
