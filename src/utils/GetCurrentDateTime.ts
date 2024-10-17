export const getCurrentDateTime = () => {
    const today = new Date();

    // Định dạng ngày
    const date =
        String(today.getDate()).padStart(2, '0') +
        '-' + // Thêm 0 nếu ngày < 10
        String(today.getMonth() + 1).padStart(2, '0') +
        '-' + // Thêm 0 nếu tháng < 10
        today.getFullYear();

    // Định dạng thời gian
    const time =
        String(today.getHours()).padStart(2, '0') +
        '.' + // Thêm 0 nếu giờ < 10
        String(today.getMinutes()).padStart(2, '0') +
        '.' + // Thêm 0 nếu phút < 10
        String(today.getSeconds()).padStart(2, '0'); // Thêm 0 nếu giây < 10

    return date + '_' + time;
};
