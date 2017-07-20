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

@Component
@RepositoryEventHandler(Staff.class)
public class StaffEventHandler {

	private final SimpMessagingTemplate websocket;

	private final EntityLinks entityLinks;

	@Autowired
	public StaffEventHandler(SimpMessagingTemplate websocket, EntityLinks entityLinks) {
		this.websocket = websocket;
		this.entityLinks = entityLinks;
	}

	@HandleAfterCreate
	public void newStaff(Staff staff) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/newStaff", getPath(staff));
	}

	@HandleAfterDelete
	public void deleteStaff(Staff staff) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/deleteStaff", getPath(staff));
	}

	@HandleAfterSave
	public void updateStaff(Staff staff) {
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/updateStaff", getPath(staff));
	}

	/**
	 * Take an {@link Staff} and get the URI using Spring Data REST's {@link EntityLinks}.
	 *
	 * @param staff
	 */
	private String getPath(Staff staff) {
		return this.entityLinks.linkForSingleResource(staff.getClass(),
				staff.getId()).toUri().getPath();
	}

}
