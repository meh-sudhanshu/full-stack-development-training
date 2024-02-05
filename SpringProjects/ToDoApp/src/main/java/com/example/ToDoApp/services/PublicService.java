package com.example.ToDoApp.services;

import com.example.ToDoApp.models.User;
import com.example.ToDoApp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Optional;


@Service
public class PublicService {


    @Autowired
    private UserRepository userRepository;



    public ResponseEntity<?> attemptLogin(User user){
        var username = user.getUsername();
        var password = user.getPassword();
        HashMap<String,String> responseMap = new HashMap<>();
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if(optionalUser.isPresent()){
            var dbPassword = optionalUser.get().getPassword();
            if(dbPassword.equals(password)){
                responseMap.put("isAuthenticated","true");
                responseMap.put("userId",optionalUser.get().getId().toString());
                return new ResponseEntity<>(responseMap, HttpStatus.ACCEPTED);
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

    public  ResponseEntity<?> attemptRegister(User user, BindingResult resultSet){
        var userPassword = user.getPassword();
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
}
