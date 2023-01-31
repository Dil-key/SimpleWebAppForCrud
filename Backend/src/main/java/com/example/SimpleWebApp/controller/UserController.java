package com.example.SimpleWebApp.controller;

import com.example.SimpleWebApp.entity.User;
import com.example.SimpleWebApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userService.saveUser(user);
    }


    @GetMapping("/{userNo}")
    public User findByUserNo(@PathVariable int userNo) { return  userService.getOneUser(userNo); }

    @GetMapping("/life")
    public List<User> findAllUserLife() { return userService.getAllUserLife(); }

    @GetMapping("/motor")
    public List<User> findAllMotor() { return userService.getUserMotor(); }

    @GetMapping("/property")
    public List<User> findAllProperty() { return userService.getUserProperty(); }

    @PutMapping("/updateUser/{userNo}")
    public User updateUser(@PathVariable int userNo,@RequestBody User user){ return userService.updateUser(userNo,user); }

    @DeleteMapping("/deleteUser/{userNo}")
    public String deleteUser(@PathVariable int userNo){
        return userService.deleteUser(userNo);
    }


}
