package com.coinlab;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
    	
        return "hello world!!";
    }
    
    @RequestMapping("/helloTest")
    public String helloTest() {
    	
        return "helloTest";
    }
}
