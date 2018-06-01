package com.coinlab.user.controller;

import com.coinlab.user.dto.UserDto;
import com.coinlab.user.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class UserController {

    private UserService userService;
    private ModelMapper modelMapper;


    @PostMapping("/users")
    public void saveUser(@RequestBody UserDto dto) {
        userService.create(dto);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.findOne(userId));
    }

    @PutMapping("users")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto dto) {
        return ResponseEntity.ok(userService.update(dto));
    }

    @DeleteMapping("/users/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.delete(userId);
    }

//    @PostMapping(value="/signin")
//    public Result signin(String email, String password, HttpServletResponse response){
//	     Result result = Result.successInstance();
//	     userVO loginMember = userMapper.signin(email, password);
//	     String token = jwtService.create("member", loginMember, "user");
//	     response.setHeader("Authorization", token);
//	     result.setData(loginMember);
//	     return result;
//	 }
}


