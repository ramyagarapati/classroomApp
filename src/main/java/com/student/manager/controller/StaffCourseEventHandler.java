package com.student.manager.controller;

import static com.student.manager.controller.WebSocketConfiguration.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.hateoas.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.student.manager.model.Staff;
import com.student.manager.model.StaffCourse;

@Component
@RepositoryEventHandler(StaffCourse.class)
public class StaffCourseEventHandler {

	private final SimpMessagingTemplate websocket;

	private final EntityLinks entityLinks;

	@Autowired
	public StaffCourseEventHandler(SimpMessagingTemplate websocket, EntityLinks entityLinks) {
		this.websocket = websocket;
		this.entityLinks = entityLinks;
	}

	@HandleAfterCreate
	public void newStaffCourse(StaffCourse staffCourse) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/newStaffCourse", getPath(staffCourse));
	}

	@HandleAfterDelete
	public void deleteStaffCourse(StaffCourse staffCourse) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/deleteStaffCourse", getPath(staffCourse));
	}

	@HandleAfterSave
	public void updateStaffCourse(StaffCourse staffCourse) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/updateStaffCourse", getPath(staffCourse));
	}

	/**
	 * Take an {@link StaffCourse} and get the URI using Spring Data REST's {@link EntityLinks}.
	 *
	 * @param staff
	 */
	private String getPath(StaffCourse staffCourse) {
		return this.entityLinks.linkForSingleResource(staffCourse.getClass(),
				staffCourse.getId()).toUri().getPath();
	}

}
