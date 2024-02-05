package com.example.ToDoApp.repositories;

import com.example.ToDoApp.models.UserData;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface UserDataRepository extends CrudRepository<UserData,Long> {

     ArrayList<Optional<UserData>> findAllByUserId(long userId);
}
