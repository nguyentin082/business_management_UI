export const CustomStyles = {
    check: {
        borderWidth: '2px',
        borderColor: 'red',
    },
};

export const topNavigation = [
    {
        href: '/overview',
        name: 'Tổng quan',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
            </svg>
        ),
    },
    {
        href: '/finance',
        name: 'Tài chính',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        ),
    },
    {
        href: '/employees',
        name: 'Giáo viên',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
            </svg>
        ),
    },
    {
        href: '/students',
        name: 'Học viên',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
            </svg>
        ),
    },
    {
        href: '/job-description',
        name: 'Vị trí công việc',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
            </svg>
        ),
    },
    {
        href: '/courses',
        name: 'Khóa học',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
            </svg>
        ),
    },
    {
        href: '/services',
        name: 'Dịch vụ khác',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
            </svg>
        ),
    },
    {
        href: '/absence',
        name: 'Ngày phép',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
            </svg>
        ),
    },
    {
        href: '/contracts',
        name: 'Hợp đồng',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                />
            </svg>
        ),
    },
    {
        href: '/policies',
        name: 'Chính sách',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
            </svg>
        ),
    },
];

export const botNavigation = [
    {
        name: 'Cài đặt',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        name: 'Đăng xuất',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
            </svg>
        ),
    },
];

export const fakeDataForEmployee = [
    {
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        full_name: 'Nguyễn Minh Anh',
        birth_date: '1990-05-15',
        gender: 'Nữ',
        citizen_id: '123456789',
        phone_number: '+84 (91) 234-5678',
        email: 'minhanh.nguyen@example.com',
        birth_place: 'Hà Nội',
        current_location: 'Đà Nẵng',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Cử nhân',
        position: 'Giáo viên Piano',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        full_name: 'Trần Văn Bình',
        birth_date: '1985-10-22',
        gender: 'Nam',
        citizen_id: '987654321',
        phone_number: '+84 (90) 876-5432',
        email: 'binh.tran@example.com',
        birth_place: 'Hải Phòng',
        current_location: 'TP. Hồ Chí Minh',
        ethnic: 'Kinh',
        marital: 'Đã kết hôn',
        certificate: 'Thạc sĩ',
        position: 'Kỹ sư Phần Mềm',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        full_name: 'Lê Thị Thu Hà',
        birth_date: '1992-02-14',
        gender: 'Nữ',
        citizen_id: '234567890',
        phone_number: '+84 (93) 123-9876',
        email: 'thuha.le@example.com',
        birth_place: 'Nam Định',
        current_location: 'Hà Nội',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Cử nhân',
        position: 'Nhân viên Marketing',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
        full_name: 'Phạm Quốc Huy',
        birth_date: '1988-08-09',
        gender: 'Nam',
        citizen_id: '345678901',
        phone_number: '+84 (92) 456-7890',
        email: 'quochuy.pham@example.com',
        birth_place: 'Đà Nẵng',
        current_location: 'Đà Nẵng',
        ethnic: 'Kinh',
        marital: 'Đã kết hôn',
        certificate: 'Cử nhân',
        position: 'Quản lý Dự án',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
        full_name: 'Hoàng Thanh Tâm',
        birth_date: '1995-12-30',
        gender: 'Nữ',
        citizen_id: '456789012',
        phone_number: '+84 (94) 567-4321',
        email: 'thanhtam.hoang@example.com',
        birth_place: 'Hà Tĩnh',
        current_location: 'Hà Nội',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Thạc sĩ',
        position: 'Nhà thiết kế đồ họa',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Đỗ Văn Minh',
        birth_date: '1980-03-18',
        gender: 'Nam',
        citizen_id: '567890123',
        phone_number: '+84 (95) 678-5432',
        email: 'vanminh.do@example.com',
        birth_place: 'Hà Nam',
        current_location: 'TP. Hồ Chí Minh',
        ethnic: 'Kinh',
        marital: 'Đã kết hôn',
        certificate: 'Cử nhân',
        position: 'Giám đốc Kinh doanh',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Ngô Hoàng Anh',
        birth_date: '1993-06-12',
        gender: 'Nam',
        citizen_id: '678901234',
        phone_number: '+84 (97) 123-4567',
        email: 'hoanganh.ngo@example.com',
        birth_place: 'Nghệ An',
        current_location: 'Hà Nội',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Thạc sĩ',
        position: 'Chuyên viên Tư vấn',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Phạm Thị Kim Ngân',
        birth_date: '1987-07-24',
        gender: 'Nữ',
        citizen_id: '789012345',
        phone_number: '+84 (98) 234-5678',
        email: 'kimngan.pham@example.com',
        birth_place: 'Quảng Ninh',
        current_location: 'TP. Hồ Chí Minh',
        ethnic: 'Kinh',
        marital: 'Đã kết hôn',
        certificate: 'Cử nhân',
        position: 'Nhân viên Hành chính',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Lê Quốc Duy',
        birth_date: '1991-11-02',
        gender: 'Nam',
        citizen_id: '890123456',
        phone_number: '+84 (99) 345-6789',
        email: 'quocduy.le@example.com',
        birth_place: 'Bắc Ninh',
        current_location: 'Hà Nội',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Cử nhân',
        position: 'Kỹ sư Xây dựng',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Vũ Thu Hằng',
        birth_date: '1994-09-16',
        gender: 'Nữ',
        citizen_id: '901234567',
        phone_number: '+84 (91) 456-7890',
        email: 'thuhang.vu@example.com',
        birth_place: 'Thái Nguyên',
        current_location: 'TP. Hồ Chí Minh',
        ethnic: 'Kinh',
        marital: 'Độc thân',
        certificate: 'Thạc sĩ',
        position: 'Chuyên viên Đào tạo',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200&q=80',
        full_name: 'Lý Hữu Nghĩa',
        birth_date: '1989-04-11',
        gender: 'Nam',
        citizen_id: '012345678',
        phone_number: '+84 (90) 567-8901',
        email: 'huunghia.ly@example.com',
        birth_place: 'Hà Tĩnh',
        current_location: 'Đà Nẵng',
        ethnic: 'Kinh',
        marital: 'Đã kết hôn',
        certificate: 'Cử nhân',
        position: 'Quản lý Hệ thống',
    },
];

export const fakeDataForStudent = [
    {
        full_name: 'Liam James',
        birth_date: '2002-03-12',
        gender: 'Nam',
        phone_number: '+84 (91) 234-5678',
        email: 'liam.james@example.com',
        current_location: 'Hà Nội',
        subject: 'Piano',
        teacher: 'Nguyễn Minh Anh',
    },
    {
        full_name: 'Emma Nguyễn',
        birth_date: '2001-05-23',
        gender: 'Nữ',
        phone_number: '+84 (91) 876-5432',
        email: 'emma.nguyen@example.com',
        current_location: 'Hồ Chí Minh',
        subject: 'Violin',
        teacher: 'Lê Hoàng Long',
    },
    {
        full_name: 'Olivia Trần',
        birth_date: '2000-11-10',
        gender: 'Nữ',
        phone_number: '+84 (93) 123-9876',
        email: 'olivia.tran@example.com',
        current_location: 'Đà Nẵng',
        subject: 'Drum',
        teacher: 'Phạm Mai Hương',
    },
    {
        full_name: 'Noah Phạm',
        birth_date: '1999-07-19',
        gender: 'Nam',
        phone_number: '+84 (94) 567-2345',
        email: 'noah.pham@example.com',
        current_location: 'Hải Phòng',
        subject: 'Keyboard',
        teacher: 'Trần Quốc Toản',
    },
    {
        full_name: 'Ava Lê',
        birth_date: '2003-02-27',
        gender: 'Nữ',
        phone_number: '+84 (92) 345-6789',
        email: 'ava.le@example.com',
        current_location: 'Cần Thơ',
        subject: 'Math',
        teacher: 'Vũ Anh Tú',
    },
    {
        full_name: 'Ethan Hồ',
        birth_date: '2002-12-05',
        gender: 'Nam',
        phone_number: '+84 (95) 789-1234',
        email: 'ethan.ho@example.com',
        current_location: 'Hà Nội',
        subject: 'Physic',
        teacher: 'Nguyễn Minh Anh',
    },
    {
        full_name: 'Sophia Đỗ',
        birth_date: '2001-09-14',
        gender: 'Nữ',
        phone_number: '+84 (96) 456-7890',
        email: 'sophia.do@example.com',
        current_location: 'Hồ Chí Minh',
        subject: 'Keyboard',
        teacher: 'Lê Hoàng Long',
    },
    {
        full_name: 'James Nguyễn',
        birth_date: '2000-08-03',
        gender: 'Nam',
        phone_number: '+84 (97) 234-5678',
        email: 'james.nguyen@example.com',
        current_location: 'Đà Nẵng',
        subject: 'Drum',
        teacher: 'Phạm Mai Hương',
    },
    {
        full_name: 'Amelia Võ',
        birth_date: '1999-06-22',
        gender: 'Nữ',
        phone_number: '+84 (98) 123-4567',
        email: 'amelia.vo@example.com',
        current_location: 'Hải Phòng',
        subject: 'Piano',
        teacher: 'Trần Quốc Toản',
    },
    {
        full_name: 'Alexander Bùi',
        birth_date: '2003-01-16',
        gender: 'Nam',
        phone_number: '+84 (99) 678-5432',
        email: 'alexander.bui@example.com',
        current_location: 'Cần Thơ',
        subject: 'Drum',
        teacher: 'Vũ Anh Tú',
    },
    {
        full_name: 'Mia Phạm',
        birth_date: '2002-04-29',
        gender: 'Nữ',
        phone_number: '+84 (91) 345-6789',
        email: 'mia.pham@example.com',
        current_location: 'Hà Nội',
        subject: 'Piano',
        teacher: 'Nguyễn Minh Anh',
    },
    {
        full_name: 'Benjamin Đinh',
        birth_date: '2001-10-18',
        gender: 'Nam',
        phone_number: '+84 (91) 567-2345',
        email: 'benjamin.dinh@example.com',
        current_location: 'Hồ Chí Minh',
        subject: 'Drum',
        teacher: 'Lê Hoàng Long',
    },
    {
        full_name: 'Charlotte Hồ',
        birth_date: '2000-12-07',
        gender: 'Nữ',
        phone_number: '+84 (91) 789-1234',
        email: 'charlotte.ho@example.com',
        current_location: 'Đà Nẵng',
        subject: 'Vocal',
        teacher: 'Phạm Mai Hương',
    },
    {
        full_name: 'Lucas Nguyễn',
        birth_date: '1999-03-30',
        gender: 'Nam',
        phone_number: '+84 (93) 234-5678',
        email: 'lucas.nguyen@example.com',
        current_location: 'Hải Phòng',
        subject: 'Vocal',
        teacher: 'Trần Quốc Toản',
    },
    {
        full_name: 'Harper Trần',
        birth_date: '2003-05-25',
        gender: 'Nữ',
        phone_number: '+84 (94) 678-5432',
        email: 'harper.tran@example.com',
        current_location: 'Cần Thơ',
        subject: 'Vocal',
        teacher: 'Vũ Anh Tú',
    },
    {
        full_name: 'Henry Lê',
        birth_date: '2002-07-12',
        gender: 'Nam',
        phone_number: '+84 (95) 123-4567',
        email: 'henry.le@example.com',
        current_location: 'Hà Nội',
        subject: 'Drum',
        teacher: 'Nguyễn Minh Anh',
    },
    {
        full_name: 'Evelyn Phạm',
        birth_date: '2001-09-21',
        gender: 'Nữ',
        phone_number: '+84 (96) 345-6789',
        email: 'evelyn.pham@example.com',
        current_location: 'Hồ Chí Minh',
        subject: 'Drum',
        teacher: 'Lê Hoàng Long',
    },
    {
        full_name: 'Mason Đỗ',
        birth_date: '2000-11-11',
        gender: 'Nam',
        phone_number: '+84 (97) 567-2345',
        email: 'mason.do@example.com',
        current_location: 'Đà Nẵng',
        subject: 'Piano',
        teacher: 'Phạm Mai Hương',
    },
    {
        full_name: 'Ella Võ',
        birth_date: '1999-02-28',
        gender: 'Nữ',
        phone_number: '+84 (98) 789-1234',
        email: 'ella.vo@example.com',
        current_location: 'Hải Phòng',
        subject: 'Piano',
        teacher: 'Trần Quốc Toản',
    },
    {
        full_name: 'William Bùi',
        birth_date: '2003-04-15',
        gender: 'Nam',
        phone_number: '+84 (99) 234-5678',
        email: 'william.bui@example.com',
        current_location: 'Cần Thơ',
        subject: 'Bass',
        teacher: 'Vũ Anh Tú',
    },
];

export const fakeDataForCourses = [
    {
        name: 'Thanh nhạc 1 kèm 1',
        status: 'Active',
        number_of_students: '1',
        number_of_hours: '8',
        price: '3,000,000',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Piano 1 kèm 1',
        status: 'Inactive',
        number_of_students: '1',
        number_of_hours: '8',
        price: '12,000,000',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Guitar 1 kèm 1',
        status: 'Inactive',
        number_of_students: '1',
        number_of_hours: '10',
        price: '20,000,000',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Thanh nhạc nhóm',
        status: 'Active',
        number_of_students: '4',
        number_of_hours: '12',
        price: '5,000,000',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Piano nhóm',
        status: 'Active',
        number_of_students: '4',
        number_of_hours: '12',
        price: '9,000,000',
        notes: 'unknown',
        bonus: 'unknown',
    },
];

export const fakeDataForServices = [
    {
        name: 'Quay MV',
        status: 'Active',
        price: '3,000,000',
        number_of_hours: '2',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Thu âm',
        status: 'Active',
        price: '12,000,000',
        number_of_hours: '2',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Mix - Master',
        status: 'Inactive',
        price: '20,000,000',
        number_of_hours: 'unknown',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Thuê phòng tập',
        status: 'Active',
        price: '5,000,000',
        number_of_hours: '1',
        notes: 'unknown',
        bonus: 'unknown',
    },
    {
        name: 'Huấn luyện viên thu âm',
        status: 'Active',
        price: '9,000,000',
        number_of_hours: '2',
        notes: 'unknown',
        bonus: 'unknown',
    },
];

export const fakeDataForJobsDescription = [
    {
        position: 'Nhà sáng lập',
        description:
            'Chịu trách nhiệm xây dựng và phát triển chiến lược kinh doanh, quản lý tài chính và lãnh đạo đội ngũ.',
        notes: 'Cần có kinh nghiệm quản lý và khởi nghiệp.',
    },
    {
        position: 'Quản lý nhân sự',
        description:
            'Quản lý quy trình tuyển dụng, đào tạo và phát triển nhân viên, đảm bảo môi trường làm việc tích cực.',
        notes: 'Yêu cầu có kỹ năng giao tiếp và tổ chức tốt.',
    },
    {
        position: 'Giáo viên thanh nhạc',
        description:
            'Dạy học sinh kỹ năng hát và phát triển giọng hát, tổ chức các buổi biểu diễn và đánh giá sự tiến bộ của học sinh.',
        notes: 'Cần có kinh nghiệm biểu diễn và giáo dục âm nhạc.',
    },
    {
        position: 'Giáo viên Piano',
        description:
            'Dạy học sinh kỹ năng chơi Piano, từ cơ bản đến nâng cao, giúp học sinh phát triển khả năng sáng tác và biểu diễn.',
        notes: 'Yêu cầu có bằng cấp âm nhạc và kinh nghiệm giảng dạy.',
    },
    {
        position: 'Giáo viên Guitar',
        description:
            'Dạy học sinh kỹ năng chơi Guitar, từ các kỹ thuật cơ bản đến các thể loại nhạc khác nhau.',
        notes: 'Cần có kinh nghiệm biểu diễn và dạy học.',
    },
    {
        position: 'Designer',
        description:
            'Chịu trách nhiệm thiết kế sản phẩm, hình ảnh thương hiệu và các tài liệu quảng cáo, làm việc chặt chẽ với các bộ phận khác.',
        notes: 'Cần có kỹ năng sử dụng các phần mềm thiết kế và tư duy sáng tạo.',
    },
    {
        position: 'Quản lý fanpage',
        description:
            'Quản lý nội dung và tương tác trên các trang mạng xã hội, xây dựng chiến lược truyền thông hiệu quả.',
        notes: 'Yêu cầu có kinh nghiệm marketing và quản lý nội dung trực tuyến.',
    },
];

export const fakeDataForCollect = [
    {
        id: '1',
        status: 'collect',
        amount: '500000',
        description: 'Thanh toán học phí',
        collector: 'Nguyễn Văn A',
        payer: '1001',
        notes: 'Đã thanh toán đầy đủ',
        student_id: '12345',
    },
    {
        id: '2',
        status: 'collect',
        amount: '750000',
        description: 'Thanh toán phí thư viện',
        collector: 'Lê Thị B',
        payer: '1002',
        notes: '',
        student_id: '12346',
    },
    {
        id: '3',
        status: 'collect',
        amount: '200000',
        description: 'Thanh toán phí nhà ăn',
        collector: 'Nguyễn Văn C',
        payer: '1003',
        notes: 'Đã thanh toán bằng thẻ',
        student_id: '12347',
    },
    {
        id: '4',
        status: 'collect',
        amount: '100000',
        description: 'Thanh toán phí khác',
        collector: 'Trần Văn D',
        payer: '1004',
        notes: '',
        student_id: '12348',
    },
    {
        id: '5',
        status: 'collect',
        amount: '650000',
        description: 'Thanh toán học phí',
        collector: 'Phạm Thị E',
        payer: '1005',
        notes: 'Thanh toán trễ',
        student_id: '12349',
    },
    {
        id: '6',
        status: 'collect',
        amount: '300000',
        description: 'Phí hoạt động ngoại khóa',
        collector: 'Nguyễn Văn F',
        payer: '1006',
        notes: 'Đã thanh toán bằng tiền mặt',
        student_id: '12350',
    },
    {
        id: '7',
        status: 'collect',
        amount: '120000',
        description: 'Phí in ấn tài liệu',
        collector: 'Hoàng Văn G',
        payer: '1007',
        notes: '',
        student_id: '12351',
    },
    {
        id: '8',
        status: 'collect',
        amount: '50000',
        description: 'Phí bảo vệ',
        collector: 'Vũ Thị H',
        payer: '1008',
        notes: 'Đã thanh toán',
        student_id: '12352',
    },
    {
        id: '9',
        status: 'collect',
        amount: '400000',
        description: 'Thanh toán phí đồng phục',
        collector: 'Trần Văn I',
        payer: '1009',
        notes: '',
        student_id: '12353',
    },
    {
        id: '10',
        status: 'collect',
        amount: '850000',
        description: 'Thanh toán phí ký túc xá',
        collector: 'Nguyễn Thị J',
        payer: '1010',
        notes: 'Đã thanh toán qua chuyển khoản',
        student_id: '12354',
    },
    {
        id: '11',
        status: 'collect',
        amount: '700000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Phạm Thị K',
        payer: '1011',
        notes: 'Đã thanh toán',
        student_id: '12355',
    },
    {
        id: '12',
        status: 'collect',
        amount: '900000',
        description: 'Thanh toán phí điểm danh',
        collector: 'Nguy��n Văn M',
        payer: '1012',
        notes: 'Đã thanh toán',
        student_id: '12356',
    },
    {
        id: '13',
        status: 'collect',
        amount: '600000',
        description: 'Thanh toán phí đăng ký',
        collector: 'Phạm Thị N',
        payer: '1013',
        notes: 'Đã thanh toán b��ng tiền mặt',
        student_id: '12357',
    },
    {
        id: '14',
        status: 'collect',
        amount: '450000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị O',
        payer: '1014',
        notes: 'Đã thanh toán',
        student_id: '12358',
    },
    {
        id: '15',
        status: 'collect',
        amount: '350000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Nguy��n Văn P',
        payer: '1015',
        notes: 'Đã thanh toán',
        student_id: '12359',
    },
    {
        id: '16',
        status: 'collect',
        amount: '250000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Phạm Thị Q',
        payer: '1016',
        notes: 'Đã thanh toán',
        student_id: '12360',
    },
    {
        id: '17',
        status: 'collect',
        amount: '150000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Nguy��n Văn R',
        payer: '1017',
        notes: 'Đã thanh toán',
        student_id: '12361',
    },
    {
        id: '18',
        status: 'collect',
        amount: '100000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Phạm Thị S',
        payer: '1018',
        notes: 'Đã thanh toán',
        student_id: '12362',
    },
    {
        id: '19',
        status: 'collect',
        amount: '50000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Nguy��n Văn T',
        payer: '1019',
        notes: 'Đã thanh toán',
        student_id: '12363',
    },
    {
        id: '20',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Phạm Thị U',
        payer: '1020',
        notes: 'Đã thanh toán',
        student_id: '12364',
    },
    {
        id: '21',
        status: 'collect',
        amount: '10000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Nguy��n Văn V',
        payer: '1021',
        notes: 'Đã thanh toán',
        student_id: '12365',
    },
    {
        id: '22',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị W',
        payer: '1022',
        notes: 'Đã thanh toán',
        student_id: '12366',
    },
    {
        id: '23',
        status: 'collect',
        amount: '15000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'Nguy��n Văn X',
        payer: '1023',
        notes: 'Đã thanh toán',
        student_id: '12367',
    },
    {
        id: '24',
        status: 'collect',
        amount: '5000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị Y',
        payer: '1024',
        notes: 'Đã thanh toán',
        student_id: '12368',
    },
    {
        id: '25',
        status: 'collect',
        amount: '25000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị Z',
        payer: '1025',
        notes: 'Đã thanh toán',
        student_id: '12369',
    },
    {
        id: '26',
        status: 'collect',
        amount: '5000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị AA',
        payer: '1026',
        notes: 'Đã thanh toán',
        student_id: '12370',
    },
    {
        id: '27',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị BB',
        payer: '1027',
        notes: 'Đã thanh toán',
        student_id: '12371',
    },
    {
        id: '28',
        status: 'collect',
        amount: '10000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị CC',
        payer: '1028',
        notes: 'Đã thanh toán',
        student_id: '12372',
    },
    {
        id: '29',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị DD',
        payer: '1029',
        notes: 'Đã thanh toán',
        student_id: '12373',
    },
    {
        id: '30',
        status: 'collect',
        amount: '15000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị EE',
        payer: '1030',
        notes: 'Đã thanh toán',
        student_id: '12374',
    },
    {
        id: '31',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị FF',
        payer: '1031',
        notes: 'Đã thanh toán',
        student_id: '12375',
    },
    {
        id: '32',
        status: 'collect',
        amount: '10000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị GG',
        payer: '1032',
        notes: 'Đã thanh toán',
        student_id: '12376',
    },
    {
        id: '33',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị HH',
        payer: '1033',
        notes: 'Đã thanh toán',
        student_id: '12377',
    },
    {
        id: '34',
        status: 'collect',
        amount: '15000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị II',
        payer: '1034',
        notes: 'Đã thanh toán',
        student_id: '12378',
    },
    {
        id: '35',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị III',
        payer: '1035',
        notes: 'Đã thanh toán',
        student_id: '12379',
    },
    {
        id: '36',
        status: 'collect',
        amount: '20000',
        description: 'Thanh toán phí dịch vụ',
        collector: 'V�� Thị JJ',
        payer: '1036',
        notes: 'Đã thanh toán',
        student_id: '12380',
    },
];

export const fakeDataForPay = [
    {
        id: '1',
        status: 'pay',
        amount: '100000',
        description: 'Mua sách giáo khoa',
        collector: 'Nguyễn Văn K',
        payer: '2001',
        notes: 'Đã thanh toán bằng thẻ',
        student_id: '12355',
    },
    {
        id: '2',
        status: 'pay',
        amount: '250000',
        description: 'Thanh toán học phí',
        collector: 'Lê Thị L',
        payer: '2002',
        notes: '',
        student_id: '12356',
    },
    {
        id: '3',
        status: 'pay',
        amount: '150000',
        description: 'Thanh toán phí nhà ăn',
        collector: 'Trần Văn M',
        payer: '2003',
        notes: 'Thanh toán qua ví điện tử',
        student_id: '12357',
    },
    {
        id: '4',
        status: 'pay',
        amount: '50000',
        description: 'Phí bảo hiểm y tế',
        collector: 'Nguyễn Thị N',
        payer: '2004',
        notes: 'Đã thanh toán bằng tiền mặt',
        student_id: '12358',
    },
    {
        id: '5',
        status: 'pay',
        amount: '450000',
        description: 'Phí ký túc xá',
        collector: 'Hoàng Văn O',
        payer: '2005',
        notes: '',
        student_id: '12359',
    },
    {
        id: '6',
        status: 'pay',
        amount: '70000',
        description: 'Phí vệ sinh',
        collector: 'Vũ Thị P',
        payer: '2006',
        notes: 'Đã thanh toán qua thẻ tín dụng',
        student_id: '12360',
    },
    {
        id: '7',
        status: 'pay',
        amount: '300000',
        description: 'Thanh toán phí học thêm',
        collector: 'Trần Văn Q',
        payer: '2007',
        notes: '',
        student_id: '12361',
    },
    {
        id: '8',
        status: 'pay',
        amount: '90000',
        description: 'Phí thể dục thể thao',
        collector: 'Nguyễn Văn R',
        payer: '2008',
        notes: '',
        student_id: '12362',
    },
    {
        id: '9',
        status: 'pay',
        amount: '220000',
        description: 'Thanh toán phí sách vở',
        collector: 'Lê Thị S',
        payer: '2009',
        notes: 'Đã thanh toán bằng thẻ ATM',
        student_id: '12363',
    },
    {
        id: '10',
        status: 'pay',
        amount: '850000',
        description: 'Thanh toán phí đồng phục',
        collector: 'Nguyễn Thị T',
        payer: '2010',
        notes: 'Đã thanh toán qua chuyển khoản',
        student_id: '12364',
    },
];

export const fakeDataForOverview1 = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 p-2 bg-white bg-opacity-30 rounded-full"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
            </svg>
        ),
        name: 'Số lượng giáo viên',
        value: 11,
        bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 p-2 bg-white bg-opacity-30 rounded-full"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
            </svg>
        ),
        name: 'Số lượng học viên',
        value: 52,
        bgColor: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 p-2 bg-white bg-opacity-30 rounded-full"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
            </svg>
        ),
        name: 'Số lượng khóa học',
        value: 3,
        bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 p-2 bg-white bg-opacity-30 rounded-full"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
            </svg>
        ),
        name: 'Số lượng dịch vụ khác',
        value: 6,
        bgColor: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    },
];
