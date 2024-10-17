import FormSelection from '../Form/FormSelection';

type LargeWidgetType = {
    title: string;
    graph: React.ReactNode;
    options: {
        content: string;
        value: string;
    }[];
};

function LargeWidget({ title, graph, options }: LargeWidgetType) {
    return (
        <div
            // style={CustomStyles.check}
            className={`border border-neutral-200 bg-white  h-96 rounded-lg   `}
        >
            <div className="flex flex-row justify-between gap-2 p-6">
                {/* Title */}
                <div className="p-1 font-medium text-black">{title}</div>
                {/* Option Selection & Value */}
                <div className="flex flex-col items-end">
                    <FormSelection options={options} />
                </div>
            </div>
            <div className="flex flex-1">{graph}</div>
        </div>
    );
}

export default LargeWidget;
