package com.example.ToDoApp.controllers;


import com.example.ToDoApp.models.UserData;
import com.example.ToDoApp.repositories.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-data")
@CrossOrigin
public class UserDataController {

    @Autowired
    private UserDataRepository userDataRepository;

    @PostMapping("/save-user-data")
    public ResponseEntity<?> saveUserData(@RequestBody UserData userData){
        return new ResponseEntity<>( userDataRepository.save(userData), HttpStatus.ACCEPTED);
    }

    @GetMapping("/find-by-userId/{userId}") // find-user-data-by-userId/2
    public ResponseEntity<?> findUserDataByUserId(@PathVariable long userId){
        var allData = userDataRepository.findAllByUserId(userId);
        return new ResponseEntity<>(allData,HttpStatus.ACCEPTED);
    }



}
