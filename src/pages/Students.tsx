import { useReducer, useState } from 'react';
import { fakeDataForStudent } from '../constants/constants';
import FormModal, { FormFieldType } from '../components/Form/FormModal';

export type FormStateStudentType = {
    full_name: string;
    birth_date: string;
    gender: string;
    phone_number: string;
    email: string;
    current_location: string;
    subject: string;
    teacher: string;
};

export type ActionStudentType =
    | { type: 'SET_FULL_NAME'; payload: string }
    | { type: 'SET_BIRTH_DATE'; payload: string }
    | { type: 'SET_GENDER'; payload: string }
    | { type: 'SET_PHONE_NUMBER'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_CURRENT_LOCATION'; payload: string }
    | { type: 'SET_SUBJECT'; payload: string }
    | { type: 'SET_TEACHER'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateStudentType };

const initialState: FormStateStudentType = {
    full_name: '',
    birth_date: '',
    gender: '',
    phone_number: '',
    email: '',
    current_location: '',
    subject: '',
    teacher: '',
};

function Students() {
    // HOOKS
    const [tableItems, setTableItems] =
        useState<FormStateStudentType[]>(fakeDataForStudent);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const [formState, dispatchForm] = useReducer(
        (state: FormStateStudentType, action: ActionStudentType) => {
            switch (action.type) {
                case 'SET_FULL_NAME':
                    return { ...state, full_name: action.payload };
                case 'SET_BIRTH_DATE':
                    return { ...state, birth_date: action.payload };
                case 'SET_GENDER':
                    return { ...state, gender: action.payload };
                case 'SET_PHONE_NUMBER':
                    return { ...state, phone_number: action.payload };
                case 'SET_EMAIL':
                    return { ...state, email: action.payload };
                case 'SET_CURRENT_LOCATION':
                    return { ...state, current_location: action.payload };
                case 'SET_SUBJECT':
                    return { ...state, subject: action.payload };
                case 'SET_TEACHER':
                    return { ...state, teacher: action.payload };
                case 'RESET_FORM':
                    return initialState;
                case 'LOAD_FORM':
                    return { ...action.payload };
                default:
                    return state;
            }
        },
        initialState
    );

    const formFields: FormFieldType[] = [
        {
            label: 'Họ và tên',
            type: 'text',
            value: formState.full_name,
            actionType: 'SET_FULL_NAME',
        },
        {
            label: 'Ngày, tháng, năm sinh',
            type: 'date',
            value: formState.birth_date,
            actionType: 'SET_BIRTH_DATE',
        },
        {
            label: 'Giới tính',
            type: 'select',
            value: formState.gender,
            actionType: 'SET_GENDER',
            options: [
                { value: 'Nam', label: 'Nam' },
                { value: 'Nữ', label: 'Nữ' },
            ],
        },
        {
            label: 'Số điện thoại',
            type: 'text',
            value: formState.phone_number,
            actionType: 'SET_PHONE_NUMBER',
        },
        {
            label: 'Email',
            type: 'email',
            value: formState.email,
            actionType: 'SET_EMAIL',
        },
        {
            label: 'Nơi ở hiện tại',
            type: 'text',
            value: formState.current_location,
            actionType: 'SET_CURRENT_LOCATION',
        },
        {
            label: 'Môn học',
            type: 'text',
            value: formState.subject,
            actionType: 'SET_SUBJECT',
        },
        {
            label: 'Giáo viên phụ trách',
            type: 'text',
            value: formState.teacher,
            actionType: 'SET_TEACHER',
        },
    ];

    // FUNCTIONS
    const handleSubmit = () => {
        // Chỉnh sửa
        if (editMode && editIndex !== null) {
            const updateStudent = [...tableItems];
            updateStudent[editIndex] = { ...formState };
            setTableItems(updateStudent);
        } else {
            // Thêm mới
            setTableItems((prev) => [...prev, { ...formState }]);
        }

        dispatchForm({ type: 'RESET_FORM' });
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
    };

    const handleEdit = (data: FormStateStudentType, index: number) => {
        dispatchForm({ type: 'LOAD_FORM', payload: data });
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updatedStudents = [...tableItems];
        updatedStudents.splice(index, 1);
        setTableItems(updatedStudents);
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
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Quản lý học viên
                    </h3>
                </div>
                <div className="mt-3 md:mt-0">
                    <button
                        onClick={() => {
                            setShowModal(true);
                            setEditMode(false);
                            setEditIndex(null);
                            dispatchForm({ type: 'RESET_FORM' });
                        }}
                        className="flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
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
                        Thêm học viên mới
                    </button>
                </div>
            </div>
            <div className="flex-grow mt-12 shadow-sm border rounded-lg overflow-hidden">
                <div className="overflow-x-scroll ">
                    {/* Adjust the height based on your header height */}
                    <table className="min-w-full table-auto text-sm text-left border-collapse bg-white">
                        <thead className="bg-gray-50 text-gray-600 font-medium">
                            <tr>
                                <th className="sticky top-0 left-0 bg-gray-50 z-20 py-3 px-6 border-b">
                                    HỌC VIÊN
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    NGÀY, THÁNG, NĂM SINH
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    GIỚI TÍNH
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    SỐ ĐIỆN THOẠI
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    EMAIL
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    NƠI Ở HIỆN TẠI
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    MÔN HỌC
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b">
                                    GIÁO VIÊN
                                </th>
                                <th className="sticky top-0 bg-gray-50 z-10 py-3 px-6 border-b"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="sticky left-0 bg-white z-10 py-3 px-6 border-b whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-black">
                                                {item.full_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.birth_date}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.gender}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.phone_number}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.current_location}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.subject}
                                    </td>
                                    <td className="px-6 py-4 border-b whitespace-nowrap">
                                        {item.teacher}
                                    </td>
                                    <td
                                        className="text-right px-1 py-1 whitespace-nowrap"
                                        // style={CustomStyles.check}
                                    >
                                        <button
                                            onClick={() =>
                                                handleEdit(item, idx)
                                            }
                                            className="hover:cursor-pointer flex items-center justify-center w-full py-2 px-4 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-50 rounded-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                            Chỉnh sửa
                                        </button>
                                        <button
                                            onClick={() => handleDelete(idx)}
                                            className="hover:cursor-pointer flex items-center justify-center w-full py-2 px-4 leading-none font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4 mr-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* MODAL FOR STUDENT FORM */}
            <FormModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleSubmit={handleSubmit}
                editMode={editMode}
                formState={formState}
                dispatchForm={dispatchForm}
                object="học viên"
                formFields={formFields}
            />
        </div>
    );
}

export default Students;
