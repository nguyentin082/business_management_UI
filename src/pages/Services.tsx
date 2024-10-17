import { useReducer, useState } from 'react';
import Table from '../components/Table/Table';
import { fakeDataForServices } from '../constants/constants';
import FormModal, { FormFieldType } from '../components/Form/FormModal';

export type FormStateServiceType = {
    name: string;
    status: string;
    price: string;
    number_of_hours: string;
    notes: string;
    bonus: string;
};

const initialState: FormStateServiceType = {
    name: '',
    status: '',
    price: '',
    number_of_hours: '',
    notes: '',
    bonus: '',
};

export type ActionServiceType =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_STATUS'; payload: string }
    | { type: 'SET_PRICE'; payload: string }
    | { type: 'SET_NUMBER_OF_HOURS'; payload: string }
    | { type: 'SET_NOTES'; payload: string }
    | { type: 'SET_BONUS'; payload: string }
    | { type: 'RESET_FORM' }
    | { type: 'LOAD_FORM'; payload: FormStateServiceType }; // Action type to load form for editing

function Services() {
    const [tableItems, setTableItems] =
        useState<FormStateServiceType[]>(fakeDataForServices);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null); // Index of the item being edited

    const [formState, dispatchForm] = useReducer(
        (state: FormStateServiceType, action: ActionServiceType) => {
            switch (action.type) {
                case 'SET_NAME':
                    return { ...state, name: action.payload };
                case 'SET_STATUS':
                    return { ...state, status: action.payload };
                case 'SET_PRICE':
                    return { ...state, price: action.payload };
                case 'SET_NUMBER_OF_HOURS':
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

    const formFieldsForService: FormFieldType[] = [
        {
            label: 'TÊN DỊCH VỤ',
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
            label: 'GIÁ (VNĐ)',
            type: 'number',
            value: formState.price,
            actionType: 'SET_PRICE',
        },
        {
            label: 'SỐ GIỜ',
            type: 'number',
            value: formState.number_of_hours,
            actionType: 'SET_NUMBER_OF_HOURS',
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
            const updatedServices = [...tableItems];
            updatedServices[editIndex] = { ...formState };
            setTableItems(updatedServices);
        } else {
            setTableItems((prev) => [...prev, { ...formState }]);
        }
        setShowModal(false);
        setEditMode(false);
        setEditIndex(null);
        dispatchForm({ type: 'RESET_FORM' });
    };

    const handleEdit = (data: FormStateServiceType, index: number) => {
        dispatchForm({ type: 'LOAD_FORM', payload: data });
        setShowModal(true);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updatedServices = [...tableItems];
        updatedServices.splice(index, 1);
        setTableItems(updatedServices);
    };

    return (
        <div className="max-w-screen-xl ml-48 py-10 mx-auto px-4 md:px-8 bg-neutral-50">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                        />
                    </svg>
                    <h3 className="ml-2 text-gray-800 text-xl font-bold sm:text-2xl">
                        Các dịch vụ khác
                    </h3>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href=" "
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
                        Thêm dịch vụ mới
                    </a>
                </div>
            </div>
            <Table
                // columns_number={formFieldsForService.length}
                columns_name={formFieldsForService.map((field) => field.label)}
                tableItems={tableItems}
                handleEditService={handleEdit}
                handleDelete={handleDelete}
                typeEdit="service"
            />
            <FormModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleSubmit={handleSubmit}
                editMode={editMode}
                formState={formState}
                dispatchForm={dispatchForm}
                object="dịch vụ"
                formFields={formFieldsForService}
            />
        </div>
    );
}

export default Services;
