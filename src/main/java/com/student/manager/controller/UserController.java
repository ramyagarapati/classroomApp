package com.student.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.student.manager.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(path="/user/role", method=RequestMethod.GET)
	public String getRoleForUser(@PathVariable(name="name") String name) {
		return this.userRepository.findRoleByName(name);
	}
}
