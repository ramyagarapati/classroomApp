insert into user (id, name, password, role, user_type) values (13001,'pavan','pavan158','ROLE_STUDENT','STUDENT');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (527,1,'CLASSROOM','CSE','CD',1,100,45,'CD','ONE','FOUR');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (528,1,'CLASSROOM','CSE','DIP',1,100,40,'DLP','ONE','FOUR');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (529,1,'CLASSROOM','CSE','CC',1,100,40,'CC','ONE','FOUR');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (530,1,'CLASSROOM','CSE','ISN',1,100,35,'ISN','ONE','FOUR');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (531,1,'LAB','CSE','CDL',1,100,45,'CDL','ONE','FOUR');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (532,1,'LAB','CSE','DIPL',1,100,45,'DIPL','ONE','FOUR');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1031,'ONE','FOUR','CSE','pavankumar27@gmail.com','pavan','MALE',2017,'2013-07-03','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13001,527,'A',85,1031);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13002,528,'B',78,1031);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13003,529,'A',86,1031);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13004,530,'A',82,1031);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13005,531,'EX',90,1031);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13006,532,'B',80,1031);

insert into user (id, name, password, role, user_type) values (10032,'chinni','chinni00','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1032,'ONE','FOUR','CSE','chinni123@gmail.com','chinni','FEMALE',2017,'2013-07-03','Yadla',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13007,527,'B',76,1032);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13008,528,'B',75,1032);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13009,529,'B',80,1032);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13010,530,'A',83,1032);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13011,531,'A',85,1032);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13012,532,'B',82,1032);

insert into user (id, name, password, role, user_type) values (10033,'prabha','prabha121','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1033,'ONE','FOUR','CSE','prabhasaagi@gmail.com','prabha','MALE',2017,'2013-07-03','saagi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13013,527,'C',70,1033);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13014,528,'B',73,1033);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13015,529,'B',80,1033);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13016,530,'A',85,1033);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13017,531,'A',80,1033);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13018,532,'EX',90,1033);

insert into user (id, name, password, role, user_type) values (10034,'shabeena','shabbu786','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1034,'ONE','FOUR','CSE','shabeena433@gmail.com','shabeena','FEMALE',2017,'2013-07-03','shaik',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13019,527,'B',76,1034);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13020,528,'B',73,1034);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13021,529,'C',70,1034);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13022,530,'A',84,1034);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13023,531,'A',83,1034);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13024,532,'B',82,1034);

insert into user (id, name, password, role, user_type) values (10035,'sandeep','sandeepss','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1035,'ONE','FOUR','CSE','sandeepthota112@gmail.com','sandeep','MALE',2017,'2013-07-03','thota',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13025,527,'C',69,1035);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13026,528,'B',73,1035);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13027,529,'C',70,1035);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13028,530,'A',84,1035);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13029,531,'A',82,1035);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13030,532,'B',76,1035);

insert into user (id, name, password, role, user_type) values (10036,'sunitha','sunitha20','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1036,'ONE','FOUR','CSE','sunithagode01@gmail.com','sunitha','FEMALE',2017,'2013-07-03','gode',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13031,527,'B',75,1036);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13032,528,'C',72,1036);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13033,529,'A',82,1036);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13034,530,'A',83,1036);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13035,531,'B',75,1036);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13036,532,'B',80,1036);

insert into user (id, name, password, role, user_type) values (10037,'ram','ram@11','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1037,'ONE','FOUR','CSE','ramkethana@gmail.com','ram','MALE',2017,'2013-07-03','kethana',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13037,527,'A',88,1037);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13038,528,'EX',90,1037);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13039,529,'A',88,1037);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13040,530,'A',86,1037);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13041,531,'EX',90,1037);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13042,532,'EX',92,1037);

insert into user (id, name, password, role, user_type) values (13036,'keerthi','amma123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1038,'ONE','FOUR','CSE','keerthibheri@gmail.com','keerthi','FEMALE',2017,'2013-07-03','bheri',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13043,527,'B',80,1038);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13044,528,'B',73,1038);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13045,529,'D',67,1038);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13046,530,'A',80,1038);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13047,531,'B',81,1038);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13048,532,'B',80,1038);

insert into user (id, name, password, role, user_type) values (13049,'venkat','sai45','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1039,'ONE','FOUR','CSE','venkatgoluguri005@gmail.com','venkat','MALE',2017,'2013-07-03','goluguri',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13049,527,'EX',90,1039);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13050,528,'EX',92,1039);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13051,529,'EX',91,1039);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13052,530,'EX',94,1039);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13053,531,'EX',90,1039);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13054,532,'EX',92,1039);

insert into user (id, name, password, role, user_type) values (13055,'laxmi','la11234','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1040,'ONE','FOUR','CSE','laxmichilakamarti51@gmail.com','laxmi','FEMALE',2017,'2013-07-03','chilakamarthi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13055,527,'B',81,1040);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13056,528,'B',77,1040);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13057,529,'C',70,1040);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13058,530,'A',82,1040);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13059,531,'A',82,1040);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (13060,532,'B',78,1040);




