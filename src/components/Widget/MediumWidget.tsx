import FormSelection from '../Form/FormSelection';

type MediumWidgetType = {
    title: string;
    value?: number;
    graph?: React.ReactNode;
    options: {
        content: string;
        value: string;
    }[];
};

function MediumWidget({ value, title, graph, options }: MediumWidgetType) {
    return (
        <div
            // style={CustomStyles.check}
            className={`border border-neutral-200 bg-white flex flex-col h-96 rounded-lg  gap-2 p-6 `}
        >
            <div className="flex flex-row justify-between">
                {/* Title */}
                <div className="p-1 font-medium text-black">{title}</div>
                {/* Option Selection & Value */}
                <div className="flex flex-col items-end">
                    <FormSelection options={options} />
                    <div className="text-4xl font-bold mt-4">{value}</div>
                </div>
            </div>
            <div className="flex flex-1 w-full">{graph}</div>
        </div>
    );
}

export default MediumWidget;
