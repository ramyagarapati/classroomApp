insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (501,1,'CLASSROOM','CSE','OSA',1,100,45,'OS','ONE','ONE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (502,1,'CLASSROOM','CSE','DAAA',1,100,40,'DAA','ONE','ONE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (503,1,'CLASSROOM','CSE','AIA',1,100,50,'AI','ONE','ONE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (504,1,'CLASSROOM','CSE','OOPSA',1,100,50,'OOPS','ONE','ONE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (505,1,'LAB','CSE','OSLA',1,100,50,'OSL','ONE','ONE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (506,1,'CLASSROOM','CSE','OOPSLA',1,100,50,'OOPSL','ONE','ONE');

insert into user (id, name, password, role, user_type) values (10000,'admin','pass','ROLE_ADMIN','ADMIN');
insert into user (id, name, password, role, user_type) values (10001,'durga','durga456','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10002,'sai','sai123','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10003,'kavya','kavya271','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10004,'praveen','praveen121','ROLE_STUDENT','STUDENT');

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1001,'ONE','ONE','CSE','durga112@gmail.com','durga','FEMALE',2017,'2014-06-01','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10001,501,'A',85,1001);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10002,502,'B',76,1001);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10003,503,'A',87,1001);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10004,504,'B',75,1001);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10005,505,'A',89,1001);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10006,506,'A',85,1001);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1002,'ONE','ONE','CSE','sai236@gmail.com','sai','MALE',2017,'2014-06-01','diddi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10007,501,'B',75,1002);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10008,502,'A',86,1002);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10009,503,'A',84,1002);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10010,504,'B',73,1002);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10011,505,'A',84,1002);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10012,506,'EX',91,1002);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1003,'ONE','ONE','CSE','kavya271@gmail.com','kavya','FEMALE',2017,'2014-06-01','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10013,501,'A',80,1003);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10014,502,'A',79,1003);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10015,503,'A',82,1003);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10016,504,'A',82,1003);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10017,505,'A',82,1003);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10018,506,'A',83,1003);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1004,'ONE','ONE','CSE','praveen121@gmail.com','praveen','MALE',2017,'2014-06-01','kapaka',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10019,501,'A',80,1004);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10020,502,'A',79,1004);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10021,503,'A',82,1004);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10022,504,'A',82,1004);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10023,505,'A',82,1004);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10024,506,'A',83,1004);