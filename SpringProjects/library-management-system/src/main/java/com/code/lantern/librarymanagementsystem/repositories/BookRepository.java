package com.code.lantern.librarymanagementsystem.repositories;

import com.code.lantern.librarymanagementsystem.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
