package com.student.manager.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

import com.student.manager.model.Course;
import com.student.manager.model.Student;

/**
 * @author Veera Marisetty
 */
public interface CourseRepository extends PagingAndSortingRepository<Course, Long>{
	@Override
	Course save(@Param("course") Course course);
}
