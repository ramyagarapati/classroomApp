package com.student.manager.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

import com.student.manager.model.Staff;


public interface StaffRepository extends PagingAndSortingRepository<Staff, Long>{
	@Override
	Staff save(@Param("staff") Staff staff);
}
