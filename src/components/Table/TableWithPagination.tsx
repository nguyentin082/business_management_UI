import { useMemo, useState } from 'react';
import { FormStateFinanceType } from '../../pages/Finance';
import Pagination from '../Pagination/Pagination';

type TableType = {
    columns_name: string[];
    tableItems: FormStateFinanceType[];
    handleEditFinance: (data: FormStateFinanceType, index: number) => void;
    handleDeleteFinance: (index: number) => void;
    itemsPerPage: number;
};

function TableWithPagination({
    columns_name,
    tableItems,
    handleEditFinance,
    handleDeleteFinance,
    itemsPerPage,
}: TableType) {
    //HOOKS
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Tính tổng số trang
    const totalPages = useMemo(() => {
        return Math.ceil(tableItems.length / itemsPerPage);
    }, [tableItems.length, itemsPerPage]);

    // Đảm bảo currentPage hợp lệ với totalPages
    const displayedItems = useMemo(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1); // Reset currentPage nếu vượt quá số trang
        }
        const start = (currentPage - 1) * itemsPerPage;
        return tableItems
            .slice()
            .reverse()
            .slice(start, start + itemsPerPage);
    }, [currentPage, itemsPerPage, tableItems, totalPages]);

    // Chuyển trang
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="mt-4 relative h-max overflow-x-auto">
                <table className="min-w-full max-w-full table-auto text-sm text-left bg-neutral-50 border-separate border-spacing-0 border-gray-300">
                    <thead className="text-gray-600 font-medium border border-gray-300">
                        <tr>
                            {columns_name.map((column, index) => (
                                <th
                                    key={index}
                                    className={`py-3 bg-neutral-50 border border-gray-300 text-center ${
                                        index === 0 ? 'sticky left-0 z-50' : ''
                                    }`}
                                >
                                    {column}
                                </th>
                            ))}
                            <th className="w-1/6 py-3 pr-6 sticky right-0 z-10 bg-neutral-50 border border-gray-300"></th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-600 divide-y">
                        {displayedItems.map((item, idx) => {
                            const originalIndex =
                                tableItems.length -
                                1 -
                                ((currentPage - 1) * itemsPerPage + idx);

                            return (
                                <tr
                                    key={originalIndex}
                                    className="border-b border-gray-300"
                                >
                                    {Object.values(item).map(
                                        (value, columnIdx) => (
                                            <td
                                                key={columnIdx}
                                                className={`pr-6 py-4 px-4 bg-neutral-50 min-w-[200px] border border-gray-300 ${
                                                    columnIdx === 0
                                                        ? 'sticky left-0 font-black z-50'
                                                        : ''
                                                }`}
                                            >
                                                {columnIdx ===
                                                columns_name.indexOf(
                                                    'TRẠNG THÁI'
                                                ) ? (
                                                    'status' in item ? (
                                                        <span
                                                            className={`px-3 py-2 rounded-full font-semibold text-xs ${
                                                                item.status ===
                                                                'Active'
                                                                    ? 'text-green-600 bg-green-50'
                                                                    : 'text-red-600 bg-red-50'
                                                            }`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    ) : (
                                                        'Không có trạng thái'
                                                    )
                                                ) : (
                                                    value
                                                )}
                                            </td>
                                        )
                                    )}
                                    <td className="flex flex-col flex-1 p-1 sticky right-0 z-10 bg-neutral-50 border border-gray-300">
                                        <button
                                            onClick={() =>
                                                handleEditFinance(
                                                    item,
                                                    originalIndex
                                                )
                                            }
                                            className="flex mb-1 px-1.5 py-1.5 justify-center items-center font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 border rounded-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDeleteFinance(
                                                    originalIndex
                                                )
                                            }
                                            className="flex px-1.5 py-1.5 justify-center items-center font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg border"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                numberOfItems={tableItems.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </div>
    );
}

export default TableWithPagination;
