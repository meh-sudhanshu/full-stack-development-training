package com.code.lantern.librarymanagementsystem.repositories;

import com.code.lantern.librarymanagementsystem.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findAllByCategory(String category);

    Optional<Book> findByTitle(String title);
}
