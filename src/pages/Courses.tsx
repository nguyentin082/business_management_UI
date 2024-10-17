import { useReducer, useState } from 'react';
import { fakeDataForCourses } from '../constants/constants';
import FormModal, { FormFieldType } from '../components/Form/FormModal';
import Table from '../components/Table/Table';

export type FormStateCourseType = {
    name: string;
    number_of_students: string;
    status: string;
    price: string;
    number_of_hours: string;
    notes: string;
    bonus: string;
};

const initialState: FormStateCourseType = {
    name: '',
    number_of_students: '',
    status: '',
    price: '',
    number_of_hours: '',
    notes: '',
    bonus: '',
};

export type ActionCourseType =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_NUMBER_OF_STUDENT'; payload: string }
    | { type: 'SET_STATUS'; payload: string }
    | { type: 'SET_PRICE'; payload: string }
    | { type: 'SET_NUMBER_OF_HOUR'; payload: string }
    | { type: 'SET_NOTES'; payload: string }
    | { type: 'SET_BONUS'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateCourseType }; // Action type to load form for editing

function Courses() {
    const [tableItems, setTableItems] =
        useState<FormStateCourseType[]>(fakeDataForCourses);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null); // Index of the item being edited

    const [formState, dispatchForm] = useReducer(
        (state: FormStateCourseType, action: ActionCourseType) => {
            switch (action.type) {
                case 'SET_NAME':
                    return { ...state, name: action.payload };
                case 'SET_NUMBER_OF_STUDENT':
                    return { ...state, number_of_students: action.payload };
                case 'SET_STATUS':
                    return { ...state, status: action.payload };
                case 'SET_PRICE':
                    return { ...state, price: action.payload };
                case 'SET_NUMBER_OF_HOUR':
                    return { ...state, number_of_hours: action.payload };
                case 'SET_NOTES':
                    return { ...state, notes: action.payload };
                case 'SET_BONUS':
                    return { ...state, bonus: action.payload };
                case 'RESET_FORM':
                    return initialState;
                case 'LOAD_FORM':
                    return action.payload;
                default:
                    return state;
            }
        },
        initialState
    );

    const formFieldsForCourse: FormFieldType[] = [
        {
            label: 'TÊN KHÓA HỌC',
            type: 'text',
            value: formState.name,
            actionType: 'SET_NAME',
        },
        {
            label: 'TRẠNG THÁI',
            type: 'select',
            value: formState.status,
            actionType: 'SET_STATUS',
            options: [
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
            ],
        },
        {
            label: 'SỐ LƯỢNG HỌC VIÊN',
            type: 'number',
            value: formState.number_of_students,
            actionType: 'SET_NUMBER_OF_STUDENT',
        },
        {
            label: 'SỐ GIỜ HỌC',
            type: 'number',
            value: formState.number_of_hours,
            actionType: 'SET_NUMBER_OF_HOUR',
        },
        {
            label: 'GIÁ KHÓA HỌC',
            type: 'number',
            value: formState.price,
            actionType: 'SET_PRICE',
        },
        {
            label: 'GHI CHÚ',
            type: 'textarea',
            value: formState.notes,
            actionType: 'SET_NOTES',
        },
        {
            label: 'KHUYẾN MÃI',
            type: 'text',
            value: formState.bonus,
            actionType: 'SET_BONUS',
        },
    ];

    const handleSubmit = () => {
        if (editMode && editIndex !== null) {
            const updatedCourses = [...tableItems];
            updatedCourses[editIndex] = { ...formState };
            setTableItems(updatedCourses);
        } else {
            setTableItems((prev) => [...prev, { ...formState }]);
        }
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
        dispatchForm({ type: 'RESET_FORM' });
    };

    const handleEdit = (data: FormStateCourseType, index: number) => {
        dispatchForm({ type: 'LOAD_FORM', payload: data });
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updatedCourses = [...tableItems];
        updatedCourses.splice(index, 1);
        setTableItems(updatedCourses);
    };

    return (
        <div className="max-w-screen-xl ml-48 py-10 mx-auto px-4 md:px-8 bg-neutral-50">
            <div className="flex items-start justify-between md:flex">
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
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Quản lý khóa học
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
                        Thêm khóa học mới
                    </button>
                </div>
            </div>

            <Table
                // columns_number={formFieldsForCourse.length}
                columns_name={formFieldsForCourse.map((field) => field.label)}
                tableItems={tableItems}
                handleEditCourse={handleEdit}
                handleDelete={handleDelete}
                typeEdit="course"
            />
            {/* DIALOG MODAL */}
            <FormModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleSubmit={handleSubmit}
                editMode={editMode}
                formState={formState}
                dispatchForm={dispatchForm}
                object="khóa học"
                formFields={formFieldsForCourse}
            />
        </div>
    );
}

export default Courses;
