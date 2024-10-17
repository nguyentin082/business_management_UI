type OptionsType = {
    content: string;
    value: string;
};

type FormSelectionProps = {
    options: OptionsType[];
};

function FormSelection({ options }: FormSelectionProps) {
    return (
        <form className="mx-auto">
            <select
                id="countries"
                className=" border border-gray-300 text-gray-900 font-light rounded-lg  block w-full p-1"
                defaultValue={options[0]?.value}
            >
                {options.map((item: OptionsType, idx: number) => {
                    return (
                        <option key={idx} value={item.value}>
                            {item.content}
                        </option>
                    );
                })}
            </select>
        </form>
    );
}

export default FormSelection;
