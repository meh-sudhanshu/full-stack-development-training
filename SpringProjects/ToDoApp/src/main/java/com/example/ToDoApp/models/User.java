package com.example.ToDoApp.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @NotNull
    @Size(min = 3, max = 30, message = "username size should be in between 5 to 10 characters")
    @Column(unique = true)
    private String username; // ---> findByUsername()

    // userName  ---> findByUserName()

    @NotNull
    @NotBlank(message = "Password can not be blank")
    @Size(min = 8, max = 30, message = "password size should be in between 7 to 20 in length")
    @Pattern(regexp = "^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\\\\-__+.]){1,}).{1,}$")
    private String password;
    
    @Email
    private String email;


    @NotBlank
    @NotNull
    private String dob;

    @NotBlank
    @NotNull
    @Size(min = 3, max = 30, message = "name should be in between 3 to 30 in length")
    private String name;

    private String role = "USER";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
