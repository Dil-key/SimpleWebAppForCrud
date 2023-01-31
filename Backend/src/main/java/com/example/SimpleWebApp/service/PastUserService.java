package com.example.SimpleWebApp.service;

import com.example.SimpleWebApp.entity.PastUser;
import com.example.SimpleWebApp.repository.PastUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PastUserService {

    @Autowired
    private PastUserRepository pastUserRepository;

    public PastUser savePastUsers(PastUser pastUser){
        return pastUserRepository.save(pastUser);
    }

    public List<PastUser> getPastUsers(){
        return pastUserRepository.findAll();
    }
}
