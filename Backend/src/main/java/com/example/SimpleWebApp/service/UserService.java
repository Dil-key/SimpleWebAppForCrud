package com.example.SimpleWebApp.service;

import com.example.SimpleWebApp.entity.User;
import com.example.SimpleWebApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User saveUser(User user){
        return repository.save(user);
    }

    public List <User> getAllUserLife(){
        List<User> users = repository.findByType("Life Insurance");
        return users;
    }

    public List <User> getUserMotor(){
        List<User> users = repository.findByType("Motor Insurance");
        return users;
    }

    public List <User> getUserProperty(){
        List<User> users = repository.findByType("Property Insurance");
        return users;
    }

    public User getOneUser(int userNo) {
        User emp = repository.findByUserNo(userNo);
        return emp;
    }


    public User updateUser(int userNo,User user) {
        User ob = repository.findByUserNo(userNo);
        ob.setUserNo(user.getUserNo());
        ob.setName(user.getName());
        ob.setAddress(user.getAddress());
        ob.setType(user.getType());
        ob.setTotal(user.getTotal());
        ob.setCurrent(user.getCurrent());
        return repository.save(ob);
    }

    public String deleteUser(int userNo){

        repository.deleteById(userNo);
        return "User removed !!"+userNo;
    }
}
