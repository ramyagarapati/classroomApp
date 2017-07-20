package com.student.manager.model;

import java.sql.Date;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.student.manager.common.Department;
import com.student.manager.common.Gender;
import com.student.manager.common.Semester;
import com.student.manager.common.StudentYear;

import lombok.Data;


@Data
@Entity
@Table(name="STAFF")
public class Staff {

	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private Department department;
	private Date joinDate;
	private @Version @JsonIgnore Long version;

	private Staff() {}

	public Staff(String firstName, String lastName,Department department, Date joinDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.joinDate = joinDate;
	}

	@Override
	public String toString() {
		return "Staff [firstName=" + firstName + ", lastName=" + lastName + ",department=" + department + ", joinDate=" + joinDate +"]";
	}

	
}
