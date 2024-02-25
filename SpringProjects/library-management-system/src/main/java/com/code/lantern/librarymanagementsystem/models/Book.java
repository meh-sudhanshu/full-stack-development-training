package com.code.lantern.librarymanagementsystem.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 3, max = 50 , message = "title size should be in range 3 to 50 characters")
    @Column(unique = true)
    private String title; // title

    @Size(min = 5, max = 50 , message = "author name should be 5 to 50 character in length")
    private String author;

    @Min(value = 101 , message = "minimum value for cost should be 100")
    @Max(value = 10000 , message = "maximum value for cost should be 10000")
    private int cost;

    @Size(min = 5, max = 20, message = "category size should be between 5 to 20 characters")
    private String category;


    private String publishedDate; // published_date

    private int availableQuantity;

}
