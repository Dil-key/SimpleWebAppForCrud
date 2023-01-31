package com.example.SimpleWebApp.service;

import com.example.SimpleWebApp.entity.Profit;
import com.example.SimpleWebApp.repository.ProfitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfitService {

    @Autowired
    private ProfitRepository profitRepository;

    public Profit saveProfit(Profit profit){
        return profitRepository.save(profit);
    }

    public List<Profit> getProfit(){
        return profitRepository.findAll();
    }
}
