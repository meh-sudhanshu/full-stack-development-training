package com.example.ToDoApp.controllers;


import com.example.ToDoApp.models.User;
import com.example.ToDoApp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {


    @Autowired
    private UserRepository userRepository;
    @PostMapping("/delete-user-by-id/{id}")
    public String deleteUserById(@PathVariable long id){
        var optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()){
            userRepository.deleteById(id);
        }else{
            return "user with provided id does not exist";
        }
        return "user deleted successfully";
    }

}
