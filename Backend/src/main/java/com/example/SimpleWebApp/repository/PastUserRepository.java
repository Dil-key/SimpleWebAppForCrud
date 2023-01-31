package com.example.SimpleWebApp.repository;

import com.example.SimpleWebApp.entity.PastUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PastUserRepository extends JpaRepository<PastUser,Integer> {

}
