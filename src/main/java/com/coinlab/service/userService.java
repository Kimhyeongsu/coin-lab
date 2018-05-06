package com.coinlab.service;

import java.util.List;

import com.coinlab.VO.userVO;

public interface userService {
	//public int memberList() throws Exception;
	
	public List<userVO> userAll() throws Exception;
}
