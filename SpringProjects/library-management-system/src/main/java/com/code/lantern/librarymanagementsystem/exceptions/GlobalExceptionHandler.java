package com.code.lantern.librarymanagementsystem.exceptions;


import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(DuplicateTitleException.class)
    public ResponseEntity<?> duplicateTitleHandle(Exception ex){
//        String message = ex.getMessage();
//        String cause = ex.getCause().toString();
//        DuplicateTitleExceptionResponse response = new DuplicateTitleExceptionResponse();
//        response.setMessage(message);
//        response.setCause(cause);
        return  new ResponseEntity<>("Duplicate title has been encountered", HttpStatusCode.valueOf(200));
    }

}
