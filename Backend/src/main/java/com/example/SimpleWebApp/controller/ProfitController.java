package com.example.SimpleWebApp.controller;

import com.example.SimpleWebApp.entity.Profit;
import com.example.SimpleWebApp.service.ProfitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping
public class ProfitController {

   @Autowired
    private ProfitService profitService;

    @PostMapping("/addProfit")
    private Profit saveProfit(@RequestBody Profit profit){ return profitService.saveProfit(profit); }

    @GetMapping("/getProfit")
    private List<Profit> getProfit(){
        return profitService.getProfit();
    }
}
