package com.student.manager.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.student.manager.common.CourseType;
import com.student.manager.common.Department;
import com.student.manager.common.Semester;
import com.student.manager.common.StudentYear;
import lombok.Data;

@Data
@Entity
@Table(name="COURSE")
public class Course {
	
	@Id
	@Column(name="id") @GeneratedValue private Long id;
	@NotNull
	@Enumerated(EnumType.STRING)
	private StudentYear year;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Semester semester;
	@NotNull
	private String name;
	@NotNull
	private String description;
	
	@JsonIgnore
	@OneToMany(targetEntity=StudentCourse.class, cascade=CascadeType.REMOVE, 
	fetch=FetchType.LAZY, mappedBy="course")
	
	private Set<Student> students;
	
	private boolean active;
	@NotNull
	@Enumerated(EnumType.STRING)
	private CourseType courseType;
	@NotNull
	private int maximumMarks;
	@NotNull
	private int minimumPassMarks;

	private boolean manadatory;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private Department department;
	
	private Course(){
		
	}

	public Course(String name, String description, StudentYear year, Semester semester, boolean active,
			CourseType courseType, int maximumMarks, int minimumPassMarks, boolean manadatory, Department department) {
		super();
		this.year = year;
		this.semester = semester;
		this.name = name;
		this.description = description;
		this.active = active;
		this.courseType = courseType;
		this.maximumMarks = maximumMarks;
		this.minimumPassMarks = minimumPassMarks;
		this.manadatory = manadatory;
		this.department = department;
	}

	@Override
	public String toString() {
		return "Course [year=" + year + ", semester=" + semester + ", name=" + name + ", description=" + description
				+ ", active=" + active + ", courseType=" + courseType + ", maximumMarks=" + maximumMarks
				+ ", minimumPassMarks=" + minimumPassMarks + ", manadatory=" + manadatory + ", department=" + department
				+ "]";
	}
}
