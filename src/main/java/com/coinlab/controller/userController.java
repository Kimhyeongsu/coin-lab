package com.coinlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coinlab.VO.userVO;
import com.coinlab.service.userService;


@RestController
public class userController {
	
	@Autowired
	private userService userMapper;
	
	@RequestMapping("/member")
	public List<userVO> member() throws Exception {
		List<userVO> member = userMapper.userAll();
		//int count = testMapper.memberList();
		return member;
	}

}
