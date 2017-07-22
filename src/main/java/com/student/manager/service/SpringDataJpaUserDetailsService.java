package com.student.manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.student.manager.model.Users;
import com.student.manager.repository.UserRepository;

@Component
public class SpringDataJpaUserDetailsService implements UserDetailsService {

	private final UserRepository repository;

	@Autowired
	public SpringDataJpaUserDetailsService(UserRepository repository) {
		this.repository = repository;
	}

	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		Users user = this.repository.findByName(name);
		if(user == null) {
			throw new UsernameNotFoundException("Username missing");
		}
		return new User(user.getName(), user.getPassword(),
				AuthorityUtils.createAuthorityList(user.getRole()));
	}

}
