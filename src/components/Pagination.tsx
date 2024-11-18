"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PaginationProps = {
  totalPages: number;
};

const Pagination = ({ totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get("pageNumber")) || 0;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageNumber", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const navigateToPage = (pageNumber: number) => {
    router.replace(createPageURL(pageNumber));
  };

  const navigateBackward = () => {
    navigateToPage(pageNumber - 1);
  };

  const navigateForward = () => {
    navigateToPage(pageNumber + 1);
  };

  return (
    <div className="row">
      <nav className="pagination">
        {pageNumber > 0 ? (
          <button className="page-numbers prev" onClick={navigateBackward}>
            Prev
          </button>
        ) : (
          <button className="page-numbers prev inactive">Prev</button>
        )}
        {Array.from({ length: totalPages }, (_, index) => {
          if (index === pageNumber) {
            return (
              <button key={index} className="page-numbers current">
                {index + 1}
              </button>
            );
          }
          return (
            <button
              key={index}
              className="page-numbers"
              onClick={() => navigateToPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        {pageNumber < totalPages - 1 ? (
          <button className="page-numbers next" onClick={navigateForward}>
            Next
          </button>
        ) : (
          <button className="page-numbers next inactive">Next</button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
