import ChevronLeft from "../assets/icons/chevron-left";
import ChevronRight from "../assets/icons/chevron-right";

type PaginationProps = {
  activePage: number;
  noOfPages: number;
  onPaginate: (page: number) => void;
};

const Pagination = ({ onPaginate, noOfPages, activePage }: PaginationProps) => {
  return (
    <div className="pagination">
      <span
        className={`pagination__item ${activePage <= 1 ? "isDisabled" : ""}`}
        onClick={() => onPaginate(activePage - 1)}
      >
        <ChevronLeft />
      </span>
      {Array(noOfPages)
        .fill("")
        .map((page, index) => {
          return (
            <span
              className={`pagination__item ${
                activePage === index + 1 ? "isActive" : ""
              }`}
              key={index}
              onClick={() => onPaginate(index + 1)}
            >
              {index + 1}
            </span>
          );
        })}
      <span
        className={`pagination__item ${
          activePage >= noOfPages ? "isDisabled" : ""
        }`}
        onClick={() => onPaginate(activePage + 1)}
      >
        <ChevronRight />
      </span>
    </div>
  );
};

export default Pagination;
