insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (521,1,'CLASSROOM','CSE','OS',1,100,45,'OS','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (522,1,'CLASSROOM','CSE','DAA',1,100,40,'DAA','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (523,1,'CLASSROOM','CSE','AI',1,100,50,'AI','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (524,1,'CLASSROOM','CSE','OOPS',1,100,50,'OOPS','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (525,1,'LAB','CSE','OSL',1,100,50,'OSL','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (526,1,'CLASSROOM','CSE','OOPSL',1,100,50,'OOPSL','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks,
 name, semester, year) values (527,1,'CLASSROOM','CSE','CD',1,100,45,'CD','ONE','FOUR');

insert into user (id, name, password, role, user_type) values (10021,'durga','durga456','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10022,'sai','sai123','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10023,'kavya','kavya271','ROLE_STUDENT','STUDENT');
insert into user (id, name, password, role, user_type) values (10031,'pavan','pavan158','ROLE_STUDENT','STUDENT');

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1021,'ONE','THREE','CSE','durga112@gmail.com','durga','FEMALE',2017,'2014-06-01','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10001,521,'A',85,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10002,522,'B',76,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10003,523,'A',87,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10004,524,'B',75,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10005,525,'A','89',1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10006,526,'A',85,1021);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1022,'ONE','THREE','CSE','sai236@gmail.com','sai','MALE',2017,'2014-06-01','diddi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10007,521,'B',75,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10008,522,'A',86,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10009,523,'A',84,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10010,524,'B',73,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10011,525,'A','84',1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10012,526,'EX',91,1022);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year,
 join_date, last_name, version) values (1023,'ONE','THREE','CSE','kavya271@gmail.com','kavya','FEMALE',2017,'2014-06-01','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10013,521,'A',80,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10014,522,'A',79,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10015,523,'A',82,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10016,524,'A',82,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10017,525,'A','82',1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10018,526,'A',83,1023);

insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date,
last_name, version) values (1031,'ONE','FOUR','CSE','pavankumar27@gmail.com','pavan','MALE',2017,'2013-07-01','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (10031,527,'A',85,1031);

