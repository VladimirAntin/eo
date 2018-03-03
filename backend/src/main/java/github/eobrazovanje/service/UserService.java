package github.eobrazovanje.service;

import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.User;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.12
*/
public interface UserService {
    User findOne(long id);

    User findByUsername(String username);

    User findByUsernameOrId(String id);

    List<User> findAll();

    User save(User user);

    User savePassword(User user);

    void delete(long id);
}
