import { useMemo } from 'react';

type PaginationType = {
    numberOfItems: number;
    itemsPerPage: number;
    currentPage: number; // Thêm props cho trang hiện tại
    handlePageChange: (page: number) => void; // Hàm để xử lý khi người dùng chọn trang
};

function Pagination({
    numberOfItems,
    itemsPerPage,
    currentPage,
    handlePageChange,
}: PaginationType) {
    const totalPages = useMemo(
        () => Math.ceil(numberOfItems / itemsPerPage),
        [numberOfItems, itemsPerPage]
    );

    const pages = useMemo(() => {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [totalPages]);

    return (
        <div className="w-full mx-auto mt-4 px-4 text-gray-600 md:px-8">
            {/* Desktop */}
            <div className="hidden items-center justify-between sm:flex">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`hover:text-indigo-600 flex items-center gap-x-2 ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Previous
                </button>
                <ul className="flex items-center gap-1">
                    {/* Toi uu render pagination */}
                    {pages.map((item, index) => {
                        if (pages.length > 6) {
                            if (index === 0) {
                                return (
                                    <li key={item} className="text-sm">
                                        <button
                                            onClick={() =>
                                                handlePageChange(item)
                                            }
                                            className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                                                currentPage === item
                                                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                    : ''
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            }
                            if (
                                item === currentPage - 1 ||
                                item === currentPage ||
                                item === currentPage + 1
                            ) {
                                return (
                                    <li key={item} className="text-sm">
                                        <button
                                            onClick={() =>
                                                handlePageChange(item)
                                            }
                                            className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                                                currentPage === item
                                                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                    : ''
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            }
                            if (index === pages.length - 1) {
                                return (
                                    <li key={item} className="text-sm">
                                        <button
                                            onClick={() =>
                                                handlePageChange(item)
                                            }
                                            className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                                                currentPage === item
                                                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                    : ''
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            }
                            if (item === currentPage - 2) {
                                return (
                                    <span
                                        key="ellipsis-start"
                                        className="text-sm"
                                    >
                                        ...
                                    </span>
                                );
                            }
                            if (item === currentPage + 2) {
                                return (
                                    <span
                                        key="ellipsis-end"
                                        className="text-sm"
                                    >
                                        ...
                                    </span>
                                );
                            }
                        } else {
                            return (
                                <li key={item} className="text-sm">
                                    <button
                                        onClick={() => handlePageChange(item)}
                                        className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                                            currentPage === item
                                                ? 'bg-indigo-50 text-indigo-600 font-medium'
                                                : ''
                                        }`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`hover:text-indigo-600 flex items-center gap-x-2 ${
                        currentPage === totalPages
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                    }`}
                >
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    Previous
                </button>
                <div className="font-medium">
                    Page {currentPage} of {totalPages}
                </div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 ${
                        currentPage === totalPages
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;
