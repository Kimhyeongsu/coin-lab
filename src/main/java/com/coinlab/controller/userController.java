package com.coinlab.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coinlab.VO.userVO;
import com.coinlab.common.Result;
import com.coinlab.jwt.JwtService;
import com.coinlab.service.userService;



@RestController
public class userController {
	
	@Autowired
	private userService userMapper;
	
	@Autowired
    private JwtService jwtService;
	
	@RequestMapping("/member")
	public List<userVO> member() throws Exception {
		List<userVO> member = userMapper.userAll();
		//int count = testMapper.memberList();
		return member;
	}
	
	
	 @PostMapping(value="/signin")
	 public Result signin(String email, String password, HttpServletResponse response){
	     Result result = Result.successInstance();
	     userVO loginMember = userMapper.signin(email, password);
	     String token = jwtService.create("member", loginMember, "user");
	     response.setHeader("Authorization", token);
	     result.setData(loginMember);
	     return result;
	 }

}
