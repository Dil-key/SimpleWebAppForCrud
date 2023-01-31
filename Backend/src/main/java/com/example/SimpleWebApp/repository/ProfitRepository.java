package com.example.SimpleWebApp.repository;

import com.example.SimpleWebApp.entity.Profit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfitRepository extends JpaRepository<Profit,Integer>{
}
