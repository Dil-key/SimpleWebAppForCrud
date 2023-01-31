package com.example.SimpleWebApp.controller;


import com.example.SimpleWebApp.entity.PastUser;
import com.example.SimpleWebApp.service.PastUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping
public class PastUserController {

    @Autowired
    private PastUserService pastUserService;

    @PostMapping("/addPastUser")
    private PastUser savePastUsers(@RequestBody PastUser pastUser){ return pastUserService.savePastUsers(pastUser); }

    @GetMapping("/getAllPastUsers")
    private List<PastUser> getPastUsers(){
        return pastUserService.getPastUsers();
    }

}
