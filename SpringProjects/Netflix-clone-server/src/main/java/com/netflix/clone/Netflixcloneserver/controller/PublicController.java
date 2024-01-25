package com.netflix.clone.Netflixcloneserver.controller;


import com.netflix.clone.Netflixcloneserver.model.Email;
import com.netflix.clone.Netflixcloneserver.respositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class PublicController {



    @Autowired
    private EmailRepository emailRepository;
    @PostMapping("/save-email")
    public  String saveUserEmail(String userEmail){
        Email email = new Email();
        email.setEmail("sudhanshukumar8816@gmail.com");
        emailRepository.save(email);
        return "saved email address !!";
    }


}
