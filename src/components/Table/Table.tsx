import { useEffect } from 'react';
import { FormStateCourseType } from '../../pages/Courses';
import { FormStateServiceType } from '../../pages/Services';
import { FormStateJDType } from '../../pages/JobDescription';

type TableType = {
    columns_name: string[];
    tableItems: (
        | FormStateCourseType
        | FormStateServiceType
        | FormStateJDType
    )[];

    handleEditCourse?: (data: FormStateCourseType, index: number) => void;
    handleEditService?: (data: FormStateServiceType, index: number) => void;
    handleEditJD?: (data: FormStateJDType, index: number) => void;
    handleDelete: (index: number) => void;
    typeEdit: 'course' | 'service' | 'jobDescription';
};

function Table({
    columns_name,
    tableItems,
    handleEditCourse,
    handleEditService,
    handleEditJD,
    handleDelete,
    typeEdit,
}: TableType) {
    useEffect(() => console.log(typeEdit));

    const handleEdit = (
        data: FormStateCourseType | FormStateServiceType | FormStateJDType,
        index: number,
        typeEdit: 'course' | 'service' | 'jobDescription'
    ) => {
        if (typeEdit === 'course' && handleEditCourse) {
            console.log('editCourse');
            handleEditCourse(data as FormStateCourseType, index);
        } else if (typeEdit === 'service' && handleEditService) {
            console.log('editService');
            handleEditService(data as FormStateServiceType, index);
        } else if (typeEdit === 'jobDescription' && handleEditJD) {
            console.log('editJD');
            handleEditJD(data as FormStateJDType, index);
        }
    };

    return (
        <div className="mt-12 relative h-max overflow-x-auto">
            <table className="min-w-full max-w-full table-auto text-sm text-left bg-neutral-50">
                <thead className="text-gray-600 font-medium border-b">
                    <tr>
                        {columns_name.map((column, index) => (
                            <th
                                // style={CustomStyles.check}
                                key={index}
                                className={`py-3 pr-6 bg-neutral-50 ${
                                    index === 0 ? 'sticky left-0  z-50' : ''
                                } `}
                            >
                                {column}
                            </th>
                        ))}
                        <th className="w-1/6 py-3 pr-6 sticky right-0 z-10 bg-neutral-50"></th>
                    </tr>
                </thead>

                <tbody className="text-gray-600 divide-y">
                    {tableItems.map((item, idx) => (
                        <tr key={idx}>
                            {Object.values(item).map((value, columnIdx) => (
                                <td
                                    key={columnIdx}
                                    className={`pr-6 py-4 bg-neutral-50 min-w-[200px] ${
                                        columnIdx === 0
                                            ? 'sticky left-0  font-black z-50'
                                            : ''
                                    } `}
                                >
                                    {columnIdx ===
                                    columns_name.indexOf('TRẠNG THÁI') ? (
                                        'status' in item ? (
                                            <span
                                                className={`px-3 py-2 rounded-full font-semibold text-xs  ${
                                                    item.status === 'Active'
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
                            ))}
                            <td className="py-1 sticky right-0 z-10 pl-1 bg-neutral-50">
                                <button
                                    onClick={() =>
                                        handleEdit(item, idx, typeEdit)
                                    }
                                    className="flex w-32 mb-1 px-3 py-1.5 justify-center items-center font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 border rounded-lg"
                                >
                                    {/* Icon chỉnh sửa */}
                                    Chỉnh sửa
                                </button>
                                <button
                                    onClick={() => handleDelete(idx)}
                                    className="flex w-32 px-3 py-1.5 justify-center items-center font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg border"
                                >
                                    {/* Icon xóa */}
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
