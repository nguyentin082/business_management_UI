type FormInputType = {
    label: string;
    type: 'text' | 'date' | 'email' | 'select' | 'number' | 'textarea'; // Restrict the types to expected values
    value?: string; // Make value optional
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    required?: boolean; // Make required optional with a default value
    options?: { value: string; label: string }[]; // Make options optional for select
};

const FormInput = ({
    label,
    type = 'text',
    value,
    onChange,
    required = false,
    options,
}: FormInputType) => (
    <div className="mb-2">
        <label className="font-normal">{label}</label>
        {type === 'select' && options ? (
            <select
                value={value}
                onChange={onChange}
                required={required}
                className="w-full my-2 px-3 py-1.5 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            >
                <option value="" disabled hidden>
                    Vui lòng chọn
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full my-2 px-3 py-1.5 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
        )}
    </div>
);

export default FormInput;
