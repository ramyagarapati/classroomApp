create table course (id bigint generated by default as identity, active boolean not null, course_type varchar(255) not null,
department varchar(255) not null, description varchar(255) not null, manadatory boolean not null, 
maximum_marks integer not null, minimum_pass_marks integer not null, name varchar(255) not null,
semester varchar(255) not null, year varchar(255) not null, primary key (id));
create table staff (id bigint generated by default as identity, department varchar(255), first_name varchar(255),
join_date date, last_name varchar(255), version bigint, primary key (id));
create table staff_course (id bigint generated by default as identity, course_id bigint, staff_id bigint, primary key (id));
create table student (id bigint generated by default as identity, current_semester varchar(255), 
current_year varchar(255), department varchar(255), email varchar(255), first_name varchar(255),
gender varchar(255), graduation_year integer not null, join_date date, last_name varchar(255),
version bigint, primary key (id));
create table student_course (id bigint generated by default as identity, grade varchar(255),
marks_scored integer not null, course_id bigint, student_id bigint, primary key (id));
create table user (id bigint generated by default as identity, name varchar(255), password varchar(255),
role varchar(255), user_type varchar(255), primary key (id));
create index IDXaahh38g3cw4vliplu11ee2tqu on course (year);
create index IDX93q9wtlpc8sl8jr6fv2xi6kmu on course (semester);
create index IDXco39ggoajk96vh02xo7xv8wji on course (department);
create index IDXpa5di0na9dj98m18w3q8kcmi on staff (department);
create index IDXjibxkrevl6ocux4knh5oee0i2 on student (current_year);
create index IDX2yay5pswsbpye7io9mat8pih9 on student (current_semester);
create index IDXns8qhllb4820tt8hg9l7gk1dk on student (department);
alter table staff_course add constraint FKa2o93wh31pb2ej8mq3y17miuf foreign key (course_id) references course;
alter table staff_course add constraint FKjsfb55dw5wsyr2qbhbh8xnle0 foreign key (staff_id) references staff;
alter table student_course add constraint FKejrkh4gv8iqgmspsanaji90ws foreign key (course_id) references course;
alter table student_course add constraint FKq7yw2wg9wlt2cnj480hcdn6dq foreign key (student_id) references student;