package com.student.manager.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.student.manager.model.Users;

/**
 * @author Veera Marisetty
 */
public interface UserRepository extends Repository<Users, Long> {

	@RestResource(exported = false)
	Users save(Users users);

	@RestResource(exported = false)
	Users findByName(String name);
	
	@RestResource(exported = true, path="/users")
	@Query("select role from Users where name = ?1")
	String findRoleByName(String name);
	
}
