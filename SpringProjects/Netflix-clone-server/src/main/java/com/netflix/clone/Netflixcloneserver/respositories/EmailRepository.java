package com.netflix.clone.Netflixcloneserver.respositories;

import com.netflix.clone.Netflixcloneserver.model.Email;
import org.springframework.data.repository.CrudRepository;

public interface EmailRepository extends CrudRepository<Email,Long> {
}


// int ---> Integer, long --> Long, bool ---> Boolean, char---> Character, byte--> Byte