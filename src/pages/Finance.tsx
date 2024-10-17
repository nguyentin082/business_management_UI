import { useReducer, useRef, useState } from 'react';
import { fakeDataForCollect, fakeDataForPay } from '../constants/constants';
import FormModal, { FormFieldType } from '../components/Form/FormModal';
import TableWithPagination from '../components/Table/TableWithPagination';
import { exportToExcel } from '../utils/XlsxExport';
import { getCurrentDateTime } from '../utils/GetCurrentDateTime';

export type FormStateFinanceType = {
    id: string | undefined;
    status: string;
    amount: string | undefined;
    description: string;
    collector: string;
    payer: string | undefined;
    notes: string;
    student_id?: string;
};

const initialState: FormStateFinanceType = {
    id: '',
    status: '',
    amount: '',
    description: '',
    collector: '',
    payer: '',
    notes: '',
    student_id: '',
};

export type ActionFinanceType =
    | { type: 'SET_ID'; payload: string | undefined }
    | { type: 'SET_STATUS'; payload: string }
    | { type: 'SET_AMOUNT'; payload: string }
    | { type: 'SET_DESCRIPTION'; payload: string }
    | { type: 'SET_COLLECTOR'; payload: string }
    | { type: 'SET_PAYER'; payload: string | undefined }
    | { type: 'SET_NOTES'; payload: string }
    | { type: 'SET_STUDENT_ID'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateFinanceType };

function Finance() {
    const [tableCollectItems, setTableCollectItems] =
        useState<FormStateFinanceType[]>(fakeDataForCollect);
    const [tablePayItems, setTablePayItems] =
        useState<FormStateFinanceType[]>(fakeDataForPay);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isEditCollectSection, setIsEditCollectSection] = useState<
        boolean | undefined
    >(undefined);
    const [editIndex, setEditIndex] = useState<number | null>(null); // Index of the item being edited
    const itemsPerPage = useRef<number>(5);

    const [formState, dispatchForm] = useReducer(
        (state: FormStateFinanceType, action: ActionFinanceType) => {
            switch (action.type) {
                case 'SET_ID':
                    return { ...state, id: action.payload };
                case 'SET_STATUS':
                    return { ...state, status: action.payload };
                case 'SET_AMOUNT':
                    return { ...state, amount: action.payload };
                case 'SET_DESCRIPTION':
                    return { ...state, description: action.payload };
                case 'SET_COLLECTOR':
                    return { ...state, collector: action.payload };
                case 'SET_PAYER':
                    return { ...state, payer: action.payload };
                case 'SET_NOTES':
                    return { ...state, notes: action.payload };
                case 'SET_STUDENT_ID':
                    return { ...state, student_id: action.payload };
                case 'RESET_FORM':
                    return initialState;
                case 'LOAD_FORM':
                    return action.payload;
            }
            return state;
        },
        initialState
    );

    // useEffect(() => {
    //     console.log(tableCollectItems);
    // }, [tableCollectItems]);

    // useEffect(() => {
    //     console.log(tablePayItems);
    // }, [tablePayItems]);

    const createFormFields = (): FormFieldType[] => [
        {
            label: 'ID',
            type: 'number',
            value: formState.id,
            actionType: 'SET_ID',
        },
        {
            label: 'TRẠNG THÁI',
            type: 'text',
            value: formState.status,
            actionType: 'SET_STATUS',
        },
        {
            label: 'SỐ TIỀN',
            type: 'number',
            value: formState.amount,
            actionType: 'SET_AMOUNT',
        },
        {
            label: 'MÔ TẢ',
            type: 'text',
            value: formState.description,
            actionType: 'SET_DESCRIPTION',
        },
        {
            label: 'NGƯỜI THU',
            type: 'text',
            value: formState.collector,
            actionType: 'SET_COLLECTOR',
        },
        {
            label: 'NGƯỜI CHI',
            type: 'text',
            value: formState.payer,
            actionType: 'SET_PAYER',
        },
        {
            label: 'GHI CHÚ',
            type: 'text',
            value: formState.notes,
            actionType: 'SET_NOTES',
        },
        {
            label: 'CỦA HỌC VIÊN',
            type: 'text',
            value: formState.student_id,
            actionType: 'SET_STUDENT_ID',
        },
    ];

    const formFieldsForCollect = createFormFields();
    const FormFieldsForPay = createFormFields();

    const handleShowModal = (section: 'collect' | 'pay') => {
        setShowModal(true);
        setIsEditCollectSection(section === 'collect'); // Xác định đang ở phần thu hay chi
        setEditIndex(null);
        setEditMode(false); // Đảm bảo trạng thái edit được reset khi tạo mới
        dispatchForm({ type: 'RESET_FORM' }); // Reset form khi tạo mới
    };

    const handleSubmit = () => {
        // EDIT MODE
        if (editMode && editIndex !== null) {
            const updatedItems = isEditCollectSection
                ? tableCollectItems.map((item, index) =>
                      index === editIndex ? { ...formState } : item
                  )
                : tablePayItems.map((item, index) =>
                      index === editIndex ? { ...formState } : item
                  );

            if (isEditCollectSection) {
                setTableCollectItems(updatedItems);
            } else {
                setTablePayItems(updatedItems);
            }
        } else {
            // CREATE MODE
            if (isEditCollectSection) {
                setTableCollectItems((prev) => [...prev, { ...formState }]);
            } else {
                setTablePayItems((prev) => [...prev, { ...formState }]);
            }
        }

        // Reset trạng thái sau khi lưu
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
        dispatchForm({ type: 'RESET_FORM' });
    };

    const handleEdit = (
        data: FormStateFinanceType,
        index: number,
        section: 'collect' | 'pay'
    ) => {
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index);
        setIsEditCollectSection(section === 'collect'); // Xác định phần đang chỉnh sửa là collect hay pay
        dispatchForm({ type: 'LOAD_FORM', payload: data });
    };

    const handleDelete = (index: number, section: 'collect' | 'pay') => {
        if (section === 'collect') {
            const updatedCollectItems = tableCollectItems.filter(
                (_, i) => i !== index
            );
            setTableCollectItems(updatedCollectItems);
        } else {
            const updatedPayItems = tablePayItems.filter((_, i) => i !== index);
            setTablePayItems(updatedPayItems);
        }

        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
    };

    return (
        <div className="max-w-screen-xl ml-48 py-10 mx-auto px-4 md:px-8 bg-neutral-50">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Quản lý tài chính
                    </h3>
                </div>
            </div>
            <div>
                <div>
                    <h4
                        className="mt-12 text-gray-800 text-lg text-center font-bold sm:text-2xl"
                        // style={CustomStyles.check}
                    >
                        DÒNG TIỀN THU
                    </h4>
                    <div className="flex gap-2 justify-center mt-1">
                        <button
                            onClick={() => {
                                handleShowModal('collect');
                            }}
                            className="hover:cursor-pointer flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            Thêm entry thu
                        </button>
                        <button
                            onClick={() => {
                                const dateTime = getCurrentDateTime();
                                exportToExcel({
                                    data: tableCollectItems,
                                    fileName: 'thu_' + dateTime,
                                });
                            }}
                            className="hover:cursor-pointer flex items-center px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-800 md:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                            Xuất excel thu
                        </button>
                    </div>
                    <TableWithPagination
                        columns_name={formFieldsForCollect.map(
                            (field) => field.label
                        )}
                        tableItems={tableCollectItems}
                        handleEditFinance={(data, index) =>
                            handleEdit(data, index, 'collect')
                        }
                        handleDeleteFinance={(index) =>
                            handleDelete(index, 'collect')
                        }
                        itemsPerPage={itemsPerPage.current}
                    />
                </div>
                <div>
                    <h4 className="mt-24 text-gray-800 text-lg text-center font-bold sm:text-2xl">
                        DÒNG TIỀN CHI
                    </h4>
                    <div className="flex gap-2 justify-center mt-1">
                        <button
                            onClick={() => {
                                handleShowModal('pay');
                            }}
                            className="hover:cursor-pointer flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            Thêm entry chi
                        </button>
                        <button
                            onClick={() => {
                                const dateTime = getCurrentDateTime();
                                exportToExcel({
                                    data: tablePayItems,
                                    fileName: 'chi_' + dateTime,
                                });
                            }}
                            className="hover:cursor-pointer flex items-center px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-800 md:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                            Xuất excel chi
                        </button>
                    </div>
                    <TableWithPagination
                        columns_name={FormFieldsForPay.map(
                            (field) => field.label
                        )}
                        tableItems={tablePayItems}
                        handleEditFinance={(data, index) =>
                            handleEdit(data, index, 'pay')
                        }
                        handleDeleteFinance={(index) =>
                            handleDelete(index, 'pay')
                        }
                        itemsPerPage={itemsPerPage.current}
                    />
                </div>
                <FormModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleSubmit={handleSubmit}
                    editMode={editMode}
                    formState={formState}
                    dispatchForm={dispatchForm}
                    object={isEditCollectSection ? 'thu' : 'chi'} // Sử dụng điều kiện để quyết định object
                    formFields={
                        isEditCollectSection
                            ? formFieldsForCollect
                            : FormFieldsForPay
                    }
                />
            </div>
        </div>
    );
}

export default Finance;
