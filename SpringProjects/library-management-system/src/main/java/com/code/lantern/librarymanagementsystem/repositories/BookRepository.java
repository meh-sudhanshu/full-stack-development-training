package com.code.lantern.librarymanagementsystem.repositories;

import com.code.lantern.librarymanagementsystem.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findAllByCategory(String category);

    Book findByTitle(String title);
}
