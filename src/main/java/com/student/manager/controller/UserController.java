package com.student.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.student.manager.repository.UserRepository;

@RestController
@RequestMapping(path="/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(path="/role", method=RequestMethod.GET)
	public String getRoleForUser(@PathVariable(name="name") String name) {
		return this.userRepository.findRoleByName(name);
	}
}
