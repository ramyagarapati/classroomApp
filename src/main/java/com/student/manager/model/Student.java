package com.student.manager.model;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;
import javax.validation.constraints.NotNull;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.student.manager.common.Department;
import com.student.manager.common.Gender;
import com.student.manager.common.Semester;
import com.student.manager.common.StudentYear;


@Data
@Entity
@Table(name="STUDENT")
public class Student {

	private @Id @GeneratedValue Long id;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	private String email;
	@Enumerated(EnumType.STRING)
	private StudentYear currentYear;
	@Enumerated(EnumType.STRING)
	private Semester currentSemester;
	@Enumerated(EnumType.STRING)
	private Department department;
	@NotNull
	private Date joinDate;
	@NotNull
	private int graduationYear;

	@JsonIgnore
	@OneToMany(targetEntity=StudentCourse.class, cascade=CascadeType.REMOVE, 
	fetch=FetchType.LAZY, mappedBy="student")
	private Set<Course> courses;
	
	private @Version @JsonIgnore Long version;
	
	private Student() {}

	public Student(String firstName, String lastName, Gender gender, String email, StudentYear currentYear,
			Semester currentSemester, Department department, Date joinDate, int graduationYear) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.currentYear = currentYear;
		this.currentSemester = currentSemester;
		this.department = department;
		this.joinDate = joinDate;
		this.graduationYear = graduationYear;
	}

	@Override
	public String toString() {
		return "Student firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender
				+ ", email=" + email + ", currentYear=" + currentYear + ", currentSemester=" + currentSemester
				+ ", department=" + department + ", joinDate=" + joinDate + ", graduationYear=" + graduationYear
				+ ", version=" + version + "]";
	}

	
}