import { useReducer, useState } from 'react';
import { fakeDataForEmployee } from '../constants/constants';
import FormModal, { FormFieldType } from '../components/Form/FormModal';

// Type for the form state
export type FormStateEmployeeType = {
    full_name: string;
    birth_date: string;
    gender: string;
    citizen_id: string;
    phone_number: string;
    email: string;
    birth_place: string;
    current_location: string;
    ethnic: string;
    marital: string;
    certificate: string;
    avatar: string;
    position: string;
};

export type ActionEmployeeType =
    | { type: 'SET_FULL_NAME'; payload: string }
    | { type: 'SET_BIRTH_DATE'; payload: string }
    | { type: 'SET_GENDER'; payload: string }
    | { type: 'SET_CITIZEN_ID'; payload: string }
    | { type: 'SET_PHONE_NUMBER'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_BIRTH_PLACE'; payload: string }
    | { type: 'SET_CURRENT_LOCATION'; payload: string }
    | { type: 'SET_ETHNIC'; payload: string }
    | { type: 'SET_MARITAL'; payload: string }
    | { type: 'SET_CERTIFICATE'; payload: string }
    | { type: 'SET_AVATAR'; payload: string }
    | { type: 'SET_POSITION'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateEmployeeType }; // Action type to load form for editing

const initialState: FormStateEmployeeType = {
    full_name: '',
    birth_date: '',
    gender: '',
    citizen_id: '',
    phone_number: '',
    email: '',
    birth_place: '',
    current_location: '',
    ethnic: '',
    marital: '',
    certificate: '',
    avatar: '',
    position: '',
};

function Employees() {
    //HOOKS
    const [tableItems, setTableItems] =
        useState<FormStateEmployeeType[]>(fakeDataForEmployee);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null); // Index of the item being edited

    const [formState, dispatchForm] = useReducer(
        (state: FormStateEmployeeType, action: ActionEmployeeType) => {
            switch (action.type) {
                case 'SET_FULL_NAME':
                    return { ...state, full_name: action.payload };
                case 'SET_BIRTH_DATE':
                    return { ...state, birth_date: action.payload };
                case 'SET_GENDER':
                    return { ...state, gender: action.payload };
                case 'SET_CITIZEN_ID':
                    return { ...state, citizen_id: action.payload };
                case 'SET_PHONE_NUMBER':
                    return { ...state, phone_number: action.payload };
                case 'SET_EMAIL':
                    return { ...state, email: action.payload };
                case 'SET_BIRTH_PLACE':
                    return { ...state, birth_place: action.payload };
                case 'SET_CURRENT_LOCATION':
                    return { ...state, current_location: action.payload };
                case 'SET_ETHNIC':
                    return { ...state, ethnic: action.payload };
                case 'SET_MARITAL':
                    return { ...state, marital: action.payload };
                case 'SET_CERTIFICATE':
                    return { ...state, certificate: action.payload };
                case 'SET_AVATAR':
                    return { ...state, avatar: action.payload };
                case 'SET_POSITION':
                    return { ...state, position: action.payload };
                case 'RESET_FORM':
                    return initialState; // Reset form state
                case 'LOAD_FORM':
                    return { ...action.payload }; // Load form state for editing
                default:
                    return state;
            }
        },
        initialState
    );

    const formFieldsForEmployee: FormFieldType[] = [
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
            label: 'Số CCCD/Hộ chiếu',
            type: 'text',
            value: formState.citizen_id,
            actionType: 'SET_CITIZEN_ID',
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
            label: 'Nơi sinh',
            type: 'text',
            value: formState.birth_place,
            actionType: 'SET_BIRTH_PLACE',
        },
        {
            label: 'Nơi ở hiện tại',
            type: 'text',
            value: formState.current_location,
            actionType: 'SET_CURRENT_LOCATION',
        },
        {
            label: 'Dân tộc',
            type: 'text',
            value: formState.ethnic,
            actionType: 'SET_ETHNIC',
        },
        {
            label: 'Tình trạng hôn nhân',
            type: 'select',
            value: formState.marital,
            actionType: 'SET_MARITAL',
            options: [
                { value: 'Độc thân', label: 'Độc thân' },
                { value: 'Đã kết hôn', label: 'Đã kết hôn' },
            ],
        },
        {
            label: 'Bằng cấp',
            type: 'text',
            value: formState.certificate,
            actionType: 'SET_CERTIFICATE',
        },
        {
            label: 'Ảnh đại diện',
            type: 'text',
            value: formState.avatar,
            actionType: 'SET_AVATAR',
        },
        {
            label: 'Chức vụ',
            type: 'text',
            value: formState.position,
            actionType: 'SET_POSITION',
        },
    ];

    // FUNCTIONS
    const handleSubmit = () => {
        if (editMode && editIndex !== null) {
            // Update existing employee
            const updatedEmployees = [...tableItems];
            updatedEmployees[editIndex] = { ...formState };
            setTableItems(updatedEmployees);
        } else {
            // Add new employee
            const newEmployee = { ...formState };
            setTableItems((prev) => [...prev, newEmployee]);
        }

        // Reset the form and close the modal
        dispatchForm({ type: 'RESET_FORM' });
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
    };

    const handleEdit = (data: FormStateEmployeeType, index: number) => {
        dispatchForm({ type: 'LOAD_FORM', payload: data }); // Load data into the form
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index); // Set the index of the item being edited
    };

    const handleDelete = (index: number) => {
        const updatedEmployees = [...tableItems];
        updatedEmployees.splice(index, 1); // Remove the employee from the table
        setTableItems(updatedEmployees);
    };

    return (
        <div className="relative max-w-screen-xl ml-48 py-10 mx-auto px-4 md:px-8 bg-neutral-50">
            <div
                className="items-start justify-between md:flex"
                // style={CustomStyles.check}
            >
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
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Quản lý giáo viên
                    </h3>
                </div>
                <div
                    className="mt-3 md:mt-0"
                    onClick={() => {
                        setShowModal(true);
                        setEditMode(false);
                        setEditIndex(null);
                        dispatchForm({ type: 'RESET_FORM' });
                    }}
                >
                    <a className="hover:cursor-pointer flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
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
                        Thêm giáo viên mới
                    </a>
                </div>
            </div>
            <div
                className=" mt-12 border rounded-lg overflow-x-auto bg-white"
                // style={CustomStyles.check}
            >
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="">
                            <th className="sticky z-50 bg-gray-50 top-0 left-0 py-3 px-6">
                                GIÁO VIÊN
                            </th>
                            <th className="py-3 px-6">GIỚI TÍNH</th>
                            <th className="py-3 px-6">CHỨC VỤ</th>
                            <th className=" py-3 px-6">BẰNG CẤP</th>
                            <th className="py-3 px-6">SỐ ĐIỆN THOẠI</th>
                            <th className="py-3 px-6">NGÀY SINH</th>
                            <th className="py-3 px-6">NƠI SINH</th>
                            <th className="py-3 px-6">NƠI Ở HIỆN TẠI</th>
                            <th className="py-3 px-6">DÂN TỘC</th>
                            <th className="py-3 px-6">TÌNH TRẠNG HÔN NHÂN</th>
                            <th className="text-right py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y ">
                        {tableItems.map((item, idx) => (
                            <tr
                                key={idx}
                                className=""
                                // style={CustomStyles.check}
                            >
                                <td
                                    className="sticky flex items-center justify-start top-0 left-0 bg-white py-2 px-4 gap-x-6 whitespace-nowrap w-72 h-full "
                                    // style={CustomStyles.check}
                                >
                                    <img
                                        src={item.avatar}
                                        className="w-14 h-14 rounded-full"
                                        // style={CustomStyles.check}
                                    />
                                    <div
                                        // style={CustomStyles.check}
                                        className="flex flex-col justify-center"
                                    >
                                        <span className="block text-gray-700 text-sm font-black">
                                            {item.full_name}
                                        </span>
                                        <span className="block text-gray-700 text-xs">
                                            {item.email}
                                        </span>
                                    </div>
                                </td>

                                <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    // style={CustomStyles.check}
                                >
                                    {item.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.position}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.certificate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.phone_number}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.birth_date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.birth_place}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.current_location}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.ethnic}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.marital}
                                </td>
                                <td
                                    className="text-right py-1 px-1 whitespace-nowrap"
                                    // style={CustomStyles.check}
                                >
                                    <button
                                        onClick={() => handleEdit(item, idx)}
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

            {/* DIALOG MODAL */}
            <FormModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleSubmit={handleSubmit}
                editMode={editMode}
                formState={formState}
                dispatchForm={dispatchForm}
                object="giáo viên"
                formFields={formFieldsForEmployee}
            />
        </div>
    );
}

export default Employees;
