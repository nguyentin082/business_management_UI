import { Dispatch, useCallback, useEffect, useRef } from 'react';
import FormInput from './FormInput';
import {
    ActionEmployeeType,
    FormStateEmployeeType,
} from '../../pages/Employees';
import { ActionStudentType, FormStateStudentType } from '../../pages/Students';
import { ActionCourseType, FormStateCourseType } from '../../pages/Courses';
import { ActionServiceType, FormStateServiceType } from '../../pages/Services';
import { ActionJDType, FormStateJDType } from '../../pages/JobDescription';
import { ActionFinanceType, FormStateFinanceType } from '../../pages/Finance';

type InputElement = HTMLInputElement | HTMLSelectElement;

interface OptionType {
    value: string;
    label: string;
}

type DispatchType =
    | Dispatch<ActionEmployeeType>
    | Dispatch<ActionStudentType>
    | Dispatch<ActionCourseType>
    | Dispatch<ActionServiceType>
    | Dispatch<ActionJDType>
    | Dispatch<ActionFinanceType>;

export interface FormFieldType {
    label: string;
    type: 'text' | 'date' | 'email' | 'select' | 'textarea' | 'number';
    value: string | undefined;
    actionType:
        | ActionEmployeeType['type']
        | ActionStudentType['type']
        | ActionCourseType['type']
        | ActionServiceType['type']
        | ActionJDType['type']
        | ActionFinanceType['type'];
    options?: OptionType[];
}

interface FormModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    handleSubmit: () => void;
    editMode: boolean;
    formState:
        | FormStateEmployeeType
        | FormStateStudentType
        | FormStateCourseType
        | FormStateServiceType
        | FormStateJDType
        | FormStateFinanceType;
    dispatchForm: DispatchType;
    object: string;
    formFields: FormFieldType[];
}

function FormModal({
    showModal,
    setShowModal,
    handleSubmit,
    editMode,
    formState,
    dispatchForm,
    object,
    formFields,
}: FormModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const closeModal = useCallback(() => {
        setShowModal(false);
        dispatchForm({ type: 'RESET_FORM' });
    }, [setShowModal, dispatchForm]);

    const handleChange = useCallback(
        (actionType: FormFieldType['actionType']) =>
            (e: React.ChangeEvent<InputElement>) => {
                const value = e.target.value;
                dispatchForm({
                    type: actionType,
                    payload: value,
                });
            },
        [dispatchForm]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal, closeModal]);

    return (
        showModal && (
            <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                aria-modal="true"
                role="dialog"
            >
                <div
                    ref={modalRef}
                    className="bg-white rounded-lg shadow-lg p-6 max-h-[80%] w-[70%] lg:w-[40%] overflow-y-scroll"
                >
                    <h2 className="text-xl font-bold mb-4 text-center">
                        {editMode
                            ? `Chỉnh sửa thông tin ${object}`
                            : `Thêm thông tin ${object} mới`}
                    </h2>
                    {formFields.map((field, index) => (
                        <FormInput
                            key={index}
                            label={field.label}
                            type={field.type}
                            value={field.value}
                            onChange={handleChange(field.actionType)}
                            options={field.options}
                        />
                    ))}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={closeModal}
                            className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handleSubmit}
                            // Thêm điều kiện để tắt nút
                            // disabled={
                            //     !formFields.every(
                            //         (field) => field.value.trim() !== ''
                            //     )
                            // }
                            // className={`px-4 py-2 rounded-md text-white ${
                            //     !formFields.every(
                            //         (field) => field.value.trim() !== ''
                            //     )
                            //         ? 'bg-indigo-300 cursor-not-allowed'
                            //         : 'bg-indigo-600 hover:bg-indigo-500'
                            // }`}
                            className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500"
                        >
                            {editMode ? 'Cập nhật' : 'Thêm'}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default FormModal;
