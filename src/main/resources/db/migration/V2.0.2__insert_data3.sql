insert into user (id, name, password, role, user_type) values (10021,'durga','durga456','ROLE_STUDENT','STUDENT');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (521,1,'CLASSROOM','CSE','OS',1,100,45,'OS','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (522,1,'CLASSROOM','CSE','DAA',1,100,40,'DAA','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (523,1,'CLASSROOM','CSE','AI',1,100,50,'AI','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (524,1,'CLASSROOM','CSE','OOPS',1,100,50,'OOPS','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (525,1,'LAB','CSE','OSL',1,100,50,'OSL','ONE','THREE');
insert into course (id, active, course_type, department, description, manadatory, maximum_marks, minimum_pass_marks, name, semester, year) values (526,1,'LAB','CSE','OOPSL',1,100,50,'OOPSL','ONE','THREE');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1021,'ONE','THREE','CSE','durga112@gmail.com','durga','FEMALE',2017,'2014-06-02','madine',1);
insert into student_course (id,course_id, grade, marks_scored, student_id) values (11021,521,'A',85,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11022,522,'B',76,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11023,523,'A',87,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11024,524,'B',75,1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11025,525,'A','89',1021);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11026,526,'A',85,1021);

insert into user (id, name, password, role, user_type) values (10022,'sai','sai123','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1022,'ONE','THREE','CSE','sai236@gmail.com','sai','MALE',2017,'2014-06-02','diddi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11027,521,'B',75,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11028,522,'A',86,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11029,523,'A',84,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11030,524,'B',73,1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11031,525,'A','84',1022);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11032,526,'EX',91,1022);

insert into user (id, name, password, role, user_type) values (10023,'kavya','kavya271','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1023,'ONE','THREE','CSE','kavya271@gmail.com','kavya','FEMALE',2017,'2014-06-02','madine',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11033,521,'A',85,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11034,522,'B',76,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11035,523,'A',82,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11036,524,'A',82,1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11037,525,'A','82',1023);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11038,526,'A',83,1023);

insert into user (id, name, password, role, user_type) values (10024,'venky','venky241','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1024,'ONE','THREE','CSE','venky231@gmail.com','venky','MALE',2017,'2014-06-02','tibirisetti',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11039,521,'A',85,1024);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11040,522,'A',88,1024);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11041,523,'A',87,1024);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11042,524,'EX',90,1024);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11043,525,'EX','92',1024);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11044,526,'A',85,1024);

insert into user (id, name, password, role, user_type) values (10025,'paru','paru810','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1025,'ONE','THREE','CSE','paru568@gmail.com','paru','FEMALE',2017,'2014-06-02','diddi',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11045,521,'B',72,1025);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11046,522,'C',70,1025);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11047,523,'A',87,1025);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11048,524,'B',73,1025);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11049,525,'A','82',1025);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11050,526,'A',84,1025);

insert into user (id, name, password, role, user_type) values (10026,'sathwik','sathwik146','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1026,'ONE','THREE','CSE','sathwik412@gmail.com','sathwik','FEMALE',2017,'2014-06-02','sangana',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11080,521,'B',73,1026);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11051,522,'B',77,1026);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11052,523,'A',82,1026);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11053,524,'B',73,1026);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11054,525,'A','83',1026);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11055,526,'EX',90,1026);

insert into user (id, name, password, role, user_type) values (10027,'prajna','prajju08','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1027,'ONE','THREE','CSE','prajju101@gmail.com','prajju','FEMALE',2017,'2014-06-02','yadla',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11056,521,'A',82,1027);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11057,522,'C',69,1027);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11058,523,'B',77,1027);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11059,524,'B',75,1027);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11060,525,'EX','93',1027);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11061,526,'A',85,1027);

insert into user (id, name, password, role, user_type) values (10028,'swathi','swathi@12','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1028,'ONE','THREE','CSE','swathiallu12@gmail.com','swathi','FEMALE',2017,'2014-06-02','allu',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11062,521,'EX',90,1028);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11063,522,'A',86,1028);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11064,523,'A',87,1028);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11065,524,'A',85,1028);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11066,525,'A','82',1028);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11067,526,'A',85,1028);

insert into user (id, name, password, role, user_type) values (10029,'seeta','seeta@34','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1029,'ONE','THREE','CSE','seetatalatam09@gmail.com','seeta','FEMALE',2017,'2014-06-02','talatam',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11068,521,'A',85,1029);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11069,522,'B',72,1029);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11070,523,'B',77,1029);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11071,524,'B',73,1029)
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11072,525,'A','89',1029);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11073,526,'B',80,1029);

insert into user (id, name, password, role, user_type) values (10030,'siva','siva@03','ROLE_STUDENT','STUDENT');
insert into student (id, current_semester, current_year, department, email, first_name, gender, graduation_year, join_date, last_name, version) values (1030,'ONE','THREE','CSE','sivamekala25@gmail.com','siva','MALE',2017,'2014-06-02','mekala',1);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11074,521,'B',78,1030);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11075,522,'B',72,1030);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11076,523,'B',76,1030);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11077,524,'C',68,1030);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11078,525,'A','84',1030);
insert into student_course (id, course_id, grade, marks_scored, student_id) values (11079,526,'B',80,1030);