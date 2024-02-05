package com.example.ToDoApp.controllers;


import com.example.ToDoApp.models.User;
import com.example.ToDoApp.services.PublicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
@CrossOrigin(origins = "http://localhost:5173/")
public class PublicController {

    @Autowired
    private PublicService publicService;


    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult resultSet){
        return publicService.attemptRegister(user,resultSet);
    }
    @PostMapping("/login")
    public ResponseEntity<?> attemptLogin(@RequestBody User user){
        return publicService.attemptLogin(user);
    }
}
