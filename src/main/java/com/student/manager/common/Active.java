package com.student.manager.common;

public enum Active {
	
	YES(1), NO(2);
	
	private int activeValue;
	
	Active(int activeValue) {
		this.activeValue = activeValue;
	}
	
	public int getActive() {
		return activeValue;
	}

}