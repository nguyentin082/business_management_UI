type SmallWidgetType = {
    icon: React.ReactNode;
    value: number;
    title: string;
    bgColor: string;
};

function SmallWidget({ icon, value, title, bgColor }: SmallWidgetType) {
    return (
        <div
            className={`${bgColor} h-36 rounded-lg flex flex-col justify-center items-center gap-1 text-white`}
        >
            {icon}
            <div className="text-5xl font-bold">{value}</div>
            <div className="text-base font-thin">{title}</div>
        </div>
    );
}

export default SmallWidget;
