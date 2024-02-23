package com.code.lantern.librarymanagementsystem.exceptions;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DuplicateTitleExceptionResponse {

    private String cause;
    private String statusCode;
    private String message;

}
