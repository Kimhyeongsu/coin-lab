package com.coinlab.VO;

import java.util.Date;

public class userVO {
	private int user_id;
	private String email;
	private String password;
	private int bad_password_count;
	private Date password_change_date;
	private String status;
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getBad_password_count() {
		return bad_password_count;
	}
	public void setBad_password_count(int bad_password_count) {
		this.bad_password_count = bad_password_count;
	}
	public Date getPassword_change_date() {
		return password_change_date;
	}
	public void setPassword_change_date(Date password_change_date) {
		this.password_change_date = password_change_date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
