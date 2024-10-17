import { useEffect, useState } from 'react';
import { botNavigation, topNavigation } from '../../constants/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigation = topNavigation;
    const navFooter = botNavigation;
    const [beChoosing, setBeChoosing] = useState<number>(() => {
        const savedIndex = localStorage.getItem('selectedIndex');
        return savedIndex ? Number(savedIndex) : 0; // Nếu không có giá trị, khởi tạo là 0
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Kiểm tra URL hiện tại và cập nhật beChoosing
        const currentPath = location.pathname;

        const index = navigation.findIndex((item) => item.href === currentPath);
        if (index !== -1) {
            setBeChoosing(index);
            localStorage.setItem('selectedIndex', index.toString());
        }
    }, [location.pathname, navigation]);

    const handleNavigation = (item: { href: string }, idx: number) => {
        navigate(item.href);
        setBeChoosing(idx); // cập nhật trạng thái khi chọn
        localStorage.setItem('selectedIndex', idx.toString()); // lưu vào localStorage
    };

    return (
        <div className="">
            <nav
                className="fixed top-0 left-0 h-full border-r space-y-8 sm:w-48 bg-gray-700"
                // style={CustomStyles.check}
            >
                <div className="flex flex-col h-full">
                    {/* <div className="h-20 flex items-center px-8">
                        <a href="/overview" className="flex-none">
                            <img
                                src="https://floatui.com/logo.svg"
                                width={140}
                                className="mx-auto"
                            />
                        </a>
                    </div> */}
                    <div className="flex-1 flex flex-col h-full overflow-auto mt-4">
                        <ul className="px-4 text-sm font-medium flex-1">
                            {navigation.map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() =>
                                            handleNavigation(item, idx)
                                        }
                                        className={`flex w-full items-center gap-x-2 text-white p-2 rounded-lg active:bg-gray-100 duration-150 ${
                                            idx === beChoosing
                                                ? 'bg-gray-600 hover:bg-gray-500'
                                                : 'hover:bg-gray-500 '
                                        }`}
                                    >
                                        <div
                                            className={` text-white ${
                                                beChoosing === idx ? '' : ''
                                            }`}
                                        >
                                            {item.icon}
                                        </div>
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-sm font-medium">
                                {navFooter.map((item, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={() =>
                                                console.log('Xem ' + item.name)
                                            }
                                            className="flex w-full items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-gray-500 duration-150"
                                            // style={CustomStyles.check}
                                        >
                                            <div className="text-white">
                                                {item.icon}
                                            </div>
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="py-4 px-4 border-t border-neutral-50">
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/79.jpg"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <span className="block text-white text-sm font-semibold">
                                            Administrator
                                        </span>
                                        <button
                                            onClick={() =>
                                                console.log('Xem profile')
                                            }
                                            className="block mt-px text-white hover:text-gray-300 text-xs"
                                        >
                                            Xem hồ sơ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
