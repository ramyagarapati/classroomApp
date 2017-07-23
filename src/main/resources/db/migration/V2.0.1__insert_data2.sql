insert into user (id, name, password, role, user_type) values (12001,'lahari','lahari123','ROLE_STUDENT','STUDENT');

insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (507, 1,'CLASSROOM','CSE','UNIX', 1,100,35, 'UNIX','TWO','TWO');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (508, 1,'CLASSROOM','CSE','COA', 1,100,35, 'COA','TWO','TWO');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (509, 1,'CLASSROOM','CSE','WT', 1,100,35, 'WT','TWO','TWO');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (510, 1,'CLASSROOM','CSE','Android', 1,100,35, 'Android','TWO','TWO');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (511, 1,'LAB','CSE','WT', 1,100,35, 'WTL','TWO','TWO');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (512, 1,'LAB','CSE','Android', 1,100,35, 'AndroidL','TWO','TWO');

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1011,'TWO','TWO','CSE','lahari@gmail.com','lahari','FEMALE',2017,'2016-06-05','vommisetti',1);

insert into student_course (id, course_id, grade, marks_scored, student_id) values (12001,507,'Ex',97,1011);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12002,508,'A',85,1011);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12003,509,'C',69, 1011);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12004,510,'Ex',97, 1011);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12005,511,'Ex',97, 1011);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12006,512,'Ex',97, 1011);



insert into user (id, name, password, role, user_type) values (12002,'jyothi','jyothi123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1012,'TWO','TWO','CSE','jyothi@gmail.com','jyothi','FEMALE',2017,'2016-06-05','simhapuri',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12007,507,'D',55, 1012);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12008,508,'C',67,1012);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12009,509,'C',69,1012);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12010,510,'B',81,1012);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12011,511,'D',58, 1012);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12012,512,'A',87,1012);


insert into user (id, name, password, role, user_type) values (12003,'rithika','rithika123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1013,'TWO','TWO','CSE','rithika@gmail.com','rithika','FEMALE',2017,'2016-06-05','gattamaneni',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12013,507,'D',55, 1013);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12014,508,'C',67, 1013);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12015,509,'C',69, 1013);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12016,510,'B',81, 1013);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12017,511,'D',58, 1013);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12018,512,'A',87, 1013);

insert into user (id, name, password, role, user_type) values (10014,'neha','neha123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1014,'TWO','TWO','CSE','neha@gmail.com','neha','FEMALE',2017,'2016-06-05','vasireddy',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12019,507,'D',55,1014);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12020,508,'C',67,1014);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12021,509,'C',69,1014);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12022,510,'B',81,1014);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12023,511,'D',58,1014);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12024,512,'A',87,1014);

insert into user (id, name, password, role, user_type) values (10015,'sujitha','sujitha123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1015,'TWO','TWO','CSE','sujitha@gmail.com','sujitha','FEMALE',2017,'2016-06-05','grandhi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12025,507,'D',55,1015);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12026,508,'C',67,1015);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12027,509,'C',69,1015);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12028,510,'B',81,1015);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12029,511,'D',58,1015);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12030,512,'A',87,1015);


insert into user (id, name, password, role, user_type) values (10016,'venkatesh','venkatesh123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1016,'TWO','TWO','CSE','venkatesh@gmail.com','venkatesh','MALE',2017,'2016-06-05','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12058,507,'A',86,1016);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12031,508,'B',79,1016);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12032,509,'D',56,1016);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12033,510,'B',81,1016);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12034,511,'A',85,1016);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12035,512,'B',78,1016);

insert into user (id, name, password, role, user_type) values (10017,'roshan','roshanh123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1017,'TWO','TWO','CSE','roshan@gmail.com','roshan','MALE',2017,'2016-06-05','shaik',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12036,507,'A',86,1017);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12037,508,'B',79,1017);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12038,509,'D',56,1017);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12039,510,'B',81,1017);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12040,511,'A',85,1017);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12041,512,'B',78,1017);

insert into user (id, name, password, role, user_type) values (10018,'siva','siva123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1018,'TWO','TWO','CSE','siva@gmail.com','siva','MALE',2017,'2016-06-05','donkada',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12059,507,'Ex',98,1018);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12042,508,'Ex',97,1018);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12043,509,'Ex',95,1018);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12044,510,'Ex',94,1018);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12045,511,'Ex',93,1018);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12046,512,'Ex',92,1018);


insert into user (id, name, password, role, user_type) values (10019,'yeswanth','yeswanth123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1019,'TWO','TWO','CSE','yeswanth@gmail.com','yeswanth','MALE',2017,'2016-06-05','akkineni',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12060,507,'A',86,1019);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12047,508,'B',79,1019);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12048,509,'D',56,1019);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12049,510,'B',81,1019);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12050,511,'A',85,1019);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12051,512,'B',78,1019);

insert into user (id, name, password, role, user_type) values (10020,'chiranjeevi','chiranjeevi123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1020,'TWO','TWO','CSE','chiranjeevi@gmail.com','chiranjeevi','MALE',2017,'2016-06-05','konidala',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12052,507,'Ex',98,1020);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12053,508,'Ex',97,1020);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12054,509,'Ex',95,1020);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12055,510,'Ex',94,1020);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12056,511,'Ex',93,1020);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (12057,512,'Ex',92,1020);