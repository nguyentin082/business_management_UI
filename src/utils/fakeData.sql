INSERT INTO "contracts" ("employee_id", "content", "from", "to", "create_at")
VALUES 
(1, 'Hợp đồng lao động 1', '2024-01-01', '2024-12-31', CURRENT_TIMESTAMP),
(2, 'Hợp đồng lao động 2', '2024-01-01', '2024-12-31', CURRENT_TIMESTAMP);







INSERT INTO "employees" ("full_name", "birth_date", "gender", "phone_number", "email", "birth_place", "current_location", "ethnic", "marital", "certificate", "avatar", "create_at", "contract_id", "citizen_id")
VALUES 
('Nguyễn Văn A1', '1990-01-01', TRUE, '0123456789', 'vana1@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456789),
('Nguyễn Văn A2', '1990-01-02', TRUE, '0123456788', 'vana2@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456788),
('Nguyễn Văn A3', '1990-01-03', TRUE, '0123456787', 'vana3@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456787),
('Nguyễn Văn A4', '1990-01-04', TRUE, '0123456786', 'vana4@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456786),
('Nguyễn Văn A5', '1990-01-05', TRUE, '0123456785', 'vana5@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456785),
('Nguyễn Văn A6', '1990-01-06', TRUE, '0123456784', 'vana6@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456784),
('Nguyễn Văn A7', '1990-01-07', TRUE, '0123456783', 'vana7@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456783),
('Nguyễn Văn A8', '1990-01-08', TRUE, '0123456782', 'vana8@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456782),
('Nguyễn Văn A9', '1990-01-09', TRUE, '0123456781', 'vana9@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456781),
('Nguyễn Văn A10', '1990-01-10', TRUE, '0123456780', 'vana10@gmail.com', 'Hà Nội', 'Hà Nội', 'Kinh', FALSE, 'Bằng đại học', 'https://xsgames.co/randomusers/avatar.php?g=male', CURRENT_TIMESTAMP, 1, 123456780),

('Nguyễn Thị B1', '1995-01-01', FALSE, '0987654321', 'thib1@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654321),
('Nguyễn Thị B2', '1995-01-02', FALSE, '0987654320', 'thib2@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654320),
('Nguyễn Thị B3', '1995-01-03', FALSE, '0987654319', 'thib3@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654319),
('Nguyễn Thị B4', '1995-01-04', FALSE, '0987654318', 'thib4@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654318),
('Nguyễn Thị B5', '1995-01-05', FALSE, '0987654317', 'thib5@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654317),
('Nguyễn Thị B6', '1995-01-06', FALSE, '0987654316', 'thib6@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654316),
('Nguyễn Thị B7', '1995-01-07', FALSE, '0987654315', 'thib7@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654315),
('Nguyễn Thị B8', '1995-01-08', FALSE, '0987654314', 'thib8@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654314),
('Nguyễn Thị B9', '1995-01-09', FALSE, '0987654313', 'thib9@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654313),
('Nguyễn Thị B10', '1995-01-10', FALSE, '0987654312', 'thib10@gmail.com', 'Đà Nẵng', 'Đà Nẵng', 'Kinh', TRUE, 'Bằng thạc sĩ', 'https://xsgames.co/randomusers/avatar.php?g=female', CURRENT_TIMESTAMP, 2, 987654312);






INSERT INTO "courses" ("name", "status", "price", "number_of_hours", "note", "bonus_service", "create_at", "updated_at")
VALUES 
('Khóa học Vocal Cơ Bản', TRUE, 1500, 40, 'Khóa học dành cho người mới bắt đầu', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Vocal Nâng Cao', TRUE, 3000, 60, 'Khóa học cho người đã có kiến thức cơ bản', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Piano Cơ Bản', TRUE, 2000, 45, 'Học Piano cho người mới', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Guitar Nâng Cao', TRUE, 2500, 50, 'Khóa học dành cho những người đã biết chơi Guitar', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Thanh Nhạc', TRUE, 1800, 30, 'Khóa học chuyên sâu về thanh nhạc', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Nhạc Cụ Dân Tộc', TRUE, 2200, 50, 'Khóa học về các nhạc cụ dân tộc Việt Nam', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Sáng Tác Âm Nhạc', TRUE, 3500, 70, 'Học cách sáng tác và hòa âm', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học DJ Cơ Bản', TRUE, 2800, 40, 'Khóa học cho DJ mới vào nghề', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Âm Nhạc Thiếu Nhi', TRUE, 1200, 30, 'Khóa học âm nhạc cho trẻ em', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Khóa học Nhạc Jazz', TRUE, 3000, 60, 'Khóa học dành cho những ai yêu thích nhạc Jazz', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);






INSERT INTO "students" ("full_name", "birth_date", "gender", "phone_number", "email", "current_location", "create_at", "teacher_id", "course_id", "updated_at")
VALUES 
('Nguyễn Văn 1', '2000-01-01', TRUE, '0123456781', 'student1@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 21, 1, CURRENT_TIMESTAMP),
('Nguyễn Văn 2', '2000-01-02', TRUE, '0123456782', 'student2@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 21, 1, CURRENT_TIMESTAMP),
('Nguyễn Văn 3', '2000-01-03', TRUE, '0123456783', 'student3@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 22, 1, CURRENT_TIMESTAMP),
('Nguyễn Văn 4', '2000-01-04', TRUE, '0123456784', 'student4@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 22, 1, CURRENT_TIMESTAMP),
('Nguyễn Văn 5', '2000-01-05', TRUE, '0123456785', 'student5@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 23, 2, CURRENT_TIMESTAMP),
('Nguyễn Văn 6', '2000-01-06', TRUE, '0123456786', 'student6@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 23, 2, CURRENT_TIMESTAMP),
('Nguyễn Văn 7', '2000-01-07', TRUE, '0123456787', 'student7@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 24, 2, CURRENT_TIMESTAMP),
('Nguyễn Văn 8', '2000-01-08', TRUE, '0123456788', 'student8@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 24, 3, CURRENT_TIMESTAMP),
('Nguyễn Văn 9', '2000-01-09', TRUE, '0123456789', 'student9@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 25, 3, CURRENT_TIMESTAMP),
('Nguyễn Văn 10', '2000-01-10', TRUE, '0123456790', 'student10@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 25, 3, CURRENT_TIMESTAMP),

('Nguyễn Thị 1', '2001-01-01', FALSE, '0987654311', 'student11@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 26, 4, CURRENT_TIMESTAMP),
('Nguyễn Thị 2', '2001-01-02', FALSE, '0987654312', 'student12@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 26, 4, CURRENT_TIMESTAMP),
('Nguyễn Thị 3', '2001-01-03', FALSE, '0987654313', 'student13@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 27, 5, CURRENT_TIMESTAMP),
('Nguyễn Thị 4', '2001-01-04', FALSE, '0987654314', 'student14@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 27, 5, CURRENT_TIMESTAMP),
('Nguyễn Thị 5', '2001-01-05', FALSE, '0987654315', 'student15@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 28, 6, CURRENT_TIMESTAMP),
('Nguyễn Thị 6', '2001-01-06', FALSE, '0987654316', 'student16@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 28, 6, CURRENT_TIMESTAMP),
('Nguyễn Thị 7', '2001-01-07', FALSE, '0987654317', 'student17@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 29, 7, CURRENT_TIMESTAMP),
('Nguyễn Thị 8', '2001-01-08', FALSE, '0987654318', 'student18@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 29, 7, CURRENT_TIMESTAMP),
('Nguyễn Thị 9', '2001-01-09', FALSE, '0987654319', 'student19@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 30, 8, CURRENT_TIMESTAMP),
('Nguyễn Thị 10', '2001-01-10', FALSE, '0987654320', 'student20@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 30, 8, CURRENT_TIMESTAMP),

('Trần Văn 1', '2002-01-01', TRUE, '0123456701', 'student21@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 31, 9, CURRENT_TIMESTAMP),
('Trần Văn 2', '2002-01-02', TRUE, '0123456702', 'student22@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 31, 9, CURRENT_TIMESTAMP),
('Trần Văn 3', '2002-01-03', TRUE, '0123456703', 'student23@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 32, 10, CURRENT_TIMESTAMP),
('Trần Văn 4', '2002-01-04', TRUE, '0123456704', 'student24@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 32, 10, CURRENT_TIMESTAMP),
('Trần Văn 5', '2002-01-05', TRUE, '0123456705', 'student25@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 33, 10, CURRENT_TIMESTAMP),
('Trần Văn 6', '2002-01-06', TRUE, '0123456706', 'student26@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 33, 10, CURRENT_TIMESTAMP),
('Trần Văn 7', '2002-01-07', TRUE, '0123456707', 'student27@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 34, 10, CURRENT_TIMESTAMP),
('Trần Văn 8', '2002-01-08', TRUE, '0123456708', 'student28@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 34, 10, CURRENT_TIMESTAMP),
('Trần Văn 9', '2002-01-09', TRUE, '0123456709', 'student29@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 35, 10, CURRENT_TIMESTAMP),
('Trần Văn 10', '2002-01-10', TRUE, '0123456710', 'student30@gmail.com', 'Hà Nội', CURRENT_TIMESTAMP, 35, 10, CURRENT_TIMESTAMP),

('Trần Thị 1', '2003-01-01', FALSE, '0987654301', 'student31@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 36, 1, CURRENT_TIMESTAMP),
('Trần Thị 2', '2003-01-02', FALSE, '0987654302', 'student32@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 36, 1, CURRENT_TIMESTAMP),
('Trần Thị 3', '2003-01-03', FALSE, '0987654303', 'student33@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 37, 1, CURRENT_TIMESTAMP),
('Trần Thị 4', '2003-01-04', FALSE, '0987654304', 'student34@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 37, 1, CURRENT_TIMESTAMP),
('Trần Thị 5', '2003-01-05', FALSE, '0987654305', 'student35@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 38, 1, CURRENT_TIMESTAMP),
('Trần Thị 6', '2003-01-06', FALSE, '0987654306', 'student36@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 38, 1, CURRENT_TIMESTAMP),
('Trần Thị 7', '2003-01-07', FALSE, '0987654307', 'student37@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 39, 1, CURRENT_TIMESTAMP),
('Trần Thị 8', '2003-01-08', FALSE, '0987654308', 'student38@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 39, 1, CURRENT_TIMESTAMP),
('Trần Thị 9', '2003-01-09', FALSE, '0987654309', 'student39@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 40, 1, CURRENT_TIMESTAMP),
('Trần Thị 10', '2003-01-10', FALSE, '0987654310', 'student40@gmail.com', 'Đà Nẵng', CURRENT_TIMESTAMP, 40, 1, CURRENT_TIMESTAMP);











INSERT INTO "jobs" ("position", "description", "note")
VALUES 
('Giáo viên Toán', 'Dạy học sinh môn Toán', 'Chuyên môn tốt'),
('Giáo viên Văn', 'Dạy học sinh môn Văn', 'Chuyên môn tốt'),
('Giáo viên Tiếng Anh', 'Dạy học sinh môn Tiếng Anh', 'Chuyên môn tốt'),
('Giáo viên Vật Lý', 'Dạy học sinh môn Vật Lý', 'Chuyên môn tốt'),
('Giáo viên Hóa Học', 'Dạy học sinh môn Hóa Học', 'Chuyên môn tốt'),
('Giáo viên Lịch Sử', 'Dạy học sinh môn Lịch Sử', 'Chuyên môn tốt'),
('Giáo viên Địa Lý', 'Dạy học sinh môn Địa Lý', 'Chuyên môn tốt'),
('Giáo viên Giáo Dục Công Dân', 'Dạy học sinh môn Giáo Dục Công Dân', 'Chuyên môn tốt'),
('CEO', 'Giám sát và điều hành toàn bộ công ty', 'Có kinh nghiệm quản lý cao'),
('Quản lý nhân sự', 'Quản lý và phát triển nguồn nhân lực', 'Có kỹ năng giao tiếp tốt'),
('Quản lý fanpage', 'Quản lý nội dung và tương tác trên fanpage', 'Có kinh nghiệm marketing'),
('Chuyên viên tuyển dụng', 'Tìm kiếm và lựa chọn ứng viên', 'Kỹ năng phỏng vấn tốt'),
('Chuyên viên đào tạo', 'Đào tạo nhân viên mới', 'Có khả năng truyền đạt tốt'),
('Nhân viên hành chính', 'Quản lý các công việc hành chính', 'Chăm chỉ và tỉ mỉ'),
('Kỹ sư phần mềm', 'Phát triển và bảo trì phần mềm', 'Có kinh nghiệm lập trình');







INSERT INTO "services" ("name", "status", "number_of_hours", "price", "note", "bonus")
VALUES 
('Dịch vụ Thu âm Cá nhân', TRUE, 5, 1500, 'Dịch vụ thu âm cho ca sĩ cá nhân', 'Tặng một bản thu âm miễn phí'),
('Dịch vụ Quay MV', TRUE, 10, 5000, 'Quay video âm nhạc chất lượng cao', 'Tặng kèm 2 phút video giới thiệu'),
('Dịch vụ Vocal 1 kèm 1', TRUE, 10, 2000, 'Học vocal với giáo viên một kèm một', 'Giảm 10% cho khóa học tiếp theo'),
('Dịch vụ Vocal Nhóm', TRUE, 8, 1200, 'Học vocal theo nhóm từ 3-5 người', 'Tặng tài liệu học tập'),
('Dịch vụ Mix và Master', TRUE, 7, 1800, 'Dịch vụ mix và master bài hát', 'Nhận bản nháp miễn phí'),
('Dịch vụ Tổ chức Chương trình Âm nhạc', TRUE, 15, 4000, 'Tổ chức các sự kiện âm nhạc', 'Giảm giá cho sự kiện lớn'),
('Dịch vụ Dạy Nhạc Cụ', TRUE, 10, 1500, 'Học các loại nhạc cụ như guitar, piano', 'Tặng tài liệu học tập'),
('Dịch vụ Sáng tác Nhạc', TRUE, 12, 2500, 'Sáng tác nhạc theo yêu cầu của khách hàng', 'Tặng bản nháp miễn phí'),
('Dịch vụ Tư vấn Âm nhạc', TRUE, 5, 800, 'Tư vấn về sự nghiệp âm nhạc', 'Giảm 15% cho học sinh'),
('Dịch vụ Hòa âm và Phối khí', TRUE, 8, 2200, 'Dịch vụ hòa âm và phối khí cho bài hát', 'Nhận xét miễn phí'),
('Dịch vụ Quay Video Âm nhạc', TRUE, 10, 3000, 'Quay video cho ca sĩ và nhóm nhạc', 'Tặng kèm video giới thiệu'),
('Dịch vụ Hướng dẫn Làm nhạc', TRUE, 10, 1700, 'Hướng dẫn cách làm nhạc điện tử', 'Giảm giá cho lần đăng ký đầu tiên'),
('Dịch vụ Giới thiệu Nghệ sĩ', TRUE, 5, 600, 'Giới thiệu nghệ sĩ đến với khán giả', 'Miễn phí cho lần giới thiệu đầu tiên');







INSERT INTO "finance" ("status", "amount", "description", "collector", "payer", "note", "create_at", "student_id")
VALUES 
('collect', 50000, 'Thu học phí', 'Nguyễn Văn A', 1, 'Đã thu', CURRENT_TIMESTAMP, 81),
('pay', 30000, 'Chi phí dịch vụ', 'Trần Thị B', 2, 'Đã chi', CURRENT_TIMESTAMP, 82),
('collect', 70000, 'Thu học phí', 'Nguyễn Văn C', 3, 'Đã thu', CURRENT_TIMESTAMP, 83),
('pay', 25000, 'Chi phí trang thiết bị', 'Trần Thị D', 4, 'Đã chi', CURRENT_TIMESTAMP, 84),
('collect', 60000, 'Thu học phí', 'Nguyễn Văn E', 5, 'Đã thu', CURRENT_TIMESTAMP, 85),
('pay', 15000, 'Chi phí tổ chức sự kiện', 'Trần Thị F', 6, 'Đã chi', CURRENT_TIMESTAMP, 86),
('collect', 80000, 'Thu học phí', 'Nguyễn Văn G', 7, 'Đã thu', CURRENT_TIMESTAMP, 87),
('pay', 40000, 'Chi phí hoạt động ngoại khóa', 'Trần Thị H', 8, 'Đã chi', CURRENT_TIMESTAMP, 88),
('collect', 55000, 'Thu học phí', 'Nguyễn Văn I', 9, 'Đã thu', CURRENT_TIMESTAMP, 89),
('pay', 20000, 'Chi phí lớp học', 'Trần Thị J', 10, 'Đã chi', CURRENT_TIMESTAMP, 90),
('collect', 90000, 'Thu học phí', 'Nguyễn Văn K', 11, 'Đã thu', CURRENT_TIMESTAMP, 91),
('pay', 35000, 'Chi phí dịch vụ gia sư', 'Trần Thị L', 12, 'Đã chi', CURRENT_TIMESTAMP, 92),
('collect', 65000, 'Thu học phí', 'Nguyễn Văn M', 13, 'Đã thu', CURRENT_TIMESTAMP, 93),
('pay', 28000, 'Chi phí tài liệu học tập', 'Trần Thị N', 14, 'Đã chi', CURRENT_TIMESTAMP, 94),
('collect', 72000, 'Thu học phí', 'Nguyễn Văn O', 15, 'Đã thu', CURRENT_TIMESTAMP, 95),
('pay', 23000, 'Chi phí phương tiện', 'Trần Thị P', 16, 'Đã chi', CURRENT_TIMESTAMP, 96),
('collect', 58000, 'Thu học phí', 'Nguyễn Văn Q', 17, 'Đã thu', CURRENT_TIMESTAMP, 97),
('pay', 19000, 'Chi phí điện nước', 'Trần Thị R', 18, 'Đã chi', CURRENT_TIMESTAMP, 98),
('collect', 74000, 'Thu học phí', 'Nguyễn Văn S', 19, 'Đã thu', CURRENT_TIMESTAMP, 99),
('pay', 27000, 'Chi phí bảo trì thiết bị', 'Trần Thị T', 20, 'Đã chi', CURRENT_TIMESTAMP, 100),
('collect', 62000, 'Thu học phí', 'Nguyễn Văn U', 21, 'Đã thu', CURRENT_TIMESTAMP, 101),
('pay', 22000, 'Chi phí in ấn tài liệu', 'Trần Thị V', 22, 'Đã chi', CURRENT_TIMESTAMP, 102),
('collect', 85000, 'Thu học phí', 'Nguyễn Văn W', 23, 'Đã thu', CURRENT_TIMESTAMP, 103),
('pay', 32000, 'Chi phí ăn uống', 'Trần Thị X', 24, 'Đã chi', CURRENT_TIMESTAMP, 104),
('collect', 67000, 'Thu học phí', 'Nguyễn Văn Y', 25, 'Đã thu', CURRENT_TIMESTAMP, 105),
('pay', 18000, 'Chi phí vệ sinh', 'Trần Thị Z', 26, 'Đã chi', CURRENT_TIMESTAMP, 106),
('collect', 92000, 'Thu học phí', 'Nguyễn Văn AA', 27, 'Đã thu', CURRENT_TIMESTAMP, 107),
('pay', 24000, 'Chi phí thiết kế website', 'Trần Thị AB', 28, 'Đã chi', CURRENT_TIMESTAMP, 108),
('collect', 54000, 'Thu học phí', 'Nguyễn Văn AC', 29, 'Đã thu', CURRENT_TIMESTAMP, 109),
('pay', 16000, 'Chi phí bảo hiểm', 'Trần Thị AD', 30, 'Đã chi', CURRENT_TIMESTAMP, 110),
('collect', 80000, 'Thu học phí', 'Nguyễn Văn AE', 31, 'Đã thu', CURRENT_TIMESTAMP, 111),
('pay', 35000, 'Chi phí quảng cáo', 'Trần Thị AF', 32, 'Đã chi', CURRENT_TIMESTAMP, 112),
('collect', 90000, 'Thu học phí', 'Nguyễn Văn AG', 33, 'Đã thu', CURRENT_TIMESTAMP, 113),
('pay', 23000, 'Chi phí gia sư', 'Trần Thị AH', 34, 'Đã chi', CURRENT_TIMESTAMP, 114),
('collect', 61000, 'Thu học phí', 'Nguyễn Văn AI', 35, 'Đã thu', CURRENT_TIMESTAMP, 115),
('pay', 29000, 'Chi phí tập huấn', 'Trần Thị AJ', 36, 'Đã chi', CURRENT_TIMESTAMP, 116),
('collect', 73000, 'Thu học phí', 'Nguyễn Văn AK', 37, 'Đã thu', CURRENT_TIMESTAMP, 117),
('pay', 31000, 'Chi phí dạy thêm', 'Trần Thị AL', 38, 'Đã chi', CURRENT_TIMESTAMP, 118),
('collect', 82000, 'Thu học phí', 'Nguyễn Văn AM', 39, 'Đã thu', CURRENT_TIMESTAMP, 119),
('pay', 25000, 'Chi phí sự kiện', 'Trần Thị AN', 40, 'Đã chi', CURRENT_TIMESTAMP, 120);




INSERT INTO "absences" ("employee_id", "remaining", "reason", "create_at")
VALUES 
(21, 5, 'Bệnh', CURRENT_TIMESTAMP),
(22, 3, 'Việc riêng', CURRENT_TIMESTAMP),
(23, 2, 'Học thêm', CURRENT_TIMESTAMP),
(24, 4, 'Đi công tác', CURRENT_TIMESTAMP),
(25, 1, 'Thăm gia đình', CURRENT_TIMESTAMP),
(26, 6, 'Bệnh', CURRENT_TIMESTAMP),
(27, 2, 'Lý do cá nhân', CURRENT_TIMESTAMP),
(28, 3, 'Chăm sóc con cái', CURRENT_TIMESTAMP),
(29, 4, 'Tổ chức sự kiện', CURRENT_TIMESTAMP),
(30, 5, 'Khám sức khỏe', CURRENT_TIMESTAMP),
(31, 2, 'Làm thủ tục hành chính', CURRENT_TIMESTAMP),
(32, 1, 'Lý do cá nhân', CURRENT_TIMESTAMP),
(33, 3, 'Bệnh', CURRENT_TIMESTAMP),
(34, 4, 'Tham gia hội thảo', CURRENT_TIMESTAMP),
(35, 2, 'Việc riêng', CURRENT_TIMESTAMP),
(36, 3, 'Học tập nâng cao', CURRENT_TIMESTAMP),
(37, 1, 'Khẩn cấp', CURRENT_TIMESTAMP),
(38, 5, 'Chăm sóc người thân', CURRENT_TIMESTAMP),
(39, 4, 'Tham gia hội nghị', CURRENT_TIMESTAMP),
(40, 2, 'Bệnh nhẹ', CURRENT_TIMESTAMP);








INSERT INTO "employee_vs_job" ("employee_id", "job_id", "assign_date")
VALUES 
(21, 1, '2024-01-01'),
(22, 2, '2024-01-01'),
(23, 3, '2024-01-01'),
(24, 4, '2024-01-01'),
(25, 5, '2024-01-01'),
(26, 6, '2024-01-01'),
(27, 7, '2024-01-01'),
(28, 8, '2024-01-01'),
(29, 9, '2024-01-01'),
(30, 10, '2024-01-01'),
(31, 1, '2024-01-01'),
(32, 2, '2024-01-01'),
(33, 3, '2024-01-01'),
(34, 4, '2024-01-01'),
(35, 5, '2024-01-01'),
(36, 6, '2024-01-01'),
(37, 7, '2024-01-01'),
(38, 8, '2024-01-01'),
(39, 9, '2024-01-01'),
(40, 10, '2024-01-01');



INSERT INTO "employee_vs_course" ("employee_id", "course_id")
VALUES 
(21, 1),
(22, 2),
(23, 3),
(24, 4),
(25, 5),
(26, 6),
(27, 7),
(28, 8),
(29, 9),
(30, 10),
(31, 1),
(32, 2),
(33, 3),
(34, 4),
(35, 5),
(36, 6),
(37, 7),
(38, 8),
(39, 9),
(40, 10);
