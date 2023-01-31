package com.example.SimpleWebApp.repository;

import com.example.SimpleWebApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository <User,Integer> {

    List<User> findByType(String type);

    User findByUserNo(int userNo);

}
