import { useReducer, useState } from 'react';
import FormModal, { FormFieldType } from '../components/Form/FormModal';
import Table from '../components/Table/Table';
import { fakeDataForJobsDescription } from '../constants/constants';

export type FormStateJDType = {
    position: string;
    description: string;
    notes: string;
};

const initialState: FormStateJDType = {
    position: '',
    description: '',
    notes: '',
};

export type ActionJDType =
    | { type: 'SET_POSITION'; payload: string }
    | { type: 'SET_DESCRIPTION'; payload: string }
    | { type: 'SET_NOTES'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateJDType }; // Action type to load form for editing

function JobDescription() {
    const [tableItems, setTableItems] = useState<FormStateJDType[]>(
        fakeDataForJobsDescription
    );
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null); // Index of the item being edited

    const [formState, dispatchForm] = useReducer(
        (state: FormStateJDType, action: ActionJDType) => {
            switch (action.type) {
                case 'SET_POSITION':
                    return { ...state, position: action.payload };
                case 'SET_DESCRIPTION':
                    return { ...state, description: action.payload };
                case 'SET_NOTES':
                    return { ...state, notes: action.payload };
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

    const formFieldsForJD: FormFieldType[] = [
        {
            label: 'VỊ TRÍ',
            type: 'text',
            value: formState.position,
            actionType: 'SET_POSITION',
        },
        {
            label: 'MÔ TẢ',
            type: 'textarea',
            value: formState.description,
            actionType: 'SET_DESCRIPTION',
        },
        {
            label: 'GHI CHÚ',
            type: 'textarea',
            value: formState.notes,
            actionType: 'SET_NOTES',
        },
    ];

    const handleSubmit = () => {
        if (editMode && editIndex !== null) {
            const updatedJDs = [...tableItems];
            updatedJDs[editIndex] = { ...formState };
            setTableItems(updatedJDs);
        } else {
            setTableItems((prev) => [...prev, { ...formState }]);
        }
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
        dispatchForm({ type: 'RESET_FORM' });
    };

    const handleEdit = (data: FormStateJDType, index: number) => {
        console.log('Editing item:', data, 'at index:', index);
        dispatchForm({ type: 'LOAD_FORM', payload: data });
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updatedJDs = [...tableItems];
        updatedJDs.splice(index, 1);
        setTableItems(updatedJDs);
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
                        className="h-10 w-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Các vị trí công việc
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
                        Thêm vị trí công việc mới
                    </button>
                </div>
            </div>
            <Table
                // columns_number={formFieldsForJD.length}
                columns_name={formFieldsForJD.map((field) => field.label)}
                tableItems={tableItems}
                handleEditJD={handleEdit}
                handleDelete={handleDelete}
                typeEdit="jobDescription"
            />
            {/* DIALOG MODAL */}
            <FormModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleSubmit={handleSubmit}
                editMode={editMode}
                formState={formState}
                dispatchForm={dispatchForm}
                object="vị trí công việc"
                formFields={formFieldsForJD}
            />
        </div>
    );
}

export default JobDescription;
