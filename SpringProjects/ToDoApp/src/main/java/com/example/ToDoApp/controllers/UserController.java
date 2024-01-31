package com.example.ToDoApp.controllers;


import com.example.ToDoApp.models.User;
import com.example.ToDoApp.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {


    @Autowired
    private UserRepository userRepository;


    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult resultSet){
        if(resultSet.hasErrors()){
            HashMap<String,String> errorMap = new HashMap<>();
            for(FieldError error : resultSet.getFieldErrors()){
                var field = error.getField();
                var defaultMessage = error.getDefaultMessage();
                errorMap.put(field,defaultMessage);
            }
            return new ResponseEntity<>(errorMap,HttpStatus.BAD_REQUEST);
        }
        var savedUser = userRepository.save(user);
       return new ResponseEntity<>(savedUser, HttpStatus.ACCEPTED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> attemptLogin(@RequestBody User user){
        var username = user.getUsername();
        var password = user.getPassword();
        HashMap<String,String> responseMap = new HashMap<>();
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if(optionalUser.isPresent()){
            var dbPassword = optionalUser.get().getPassword();
            if(dbPassword.equals(password)){
                responseMap.put("isAuthenticated","true");
                responseMap.put("userId",optionalUser.get().getId().toString());
                return new ResponseEntity<>(responseMap,HttpStatus.ACCEPTED);
            }else{
                responseMap.put("isAuthenticated","false");
                responseMap.put("reason","INCORRECT_PASSWORD");
                return new ResponseEntity<>(responseMap,HttpStatus.ACCEPTED);
            }
        }else{
            responseMap.put("isAuthenticated","false");
            responseMap.put("reason","INVALID_USERNAME");
            return new ResponseEntity<>(responseMap,HttpStatus.OK);
        }
    }




}
