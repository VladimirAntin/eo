package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.User;
import github.eobrazovanje.repo.UserRepo;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.34
*/
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo repo;

    @Override
    public User findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<User> findAll() {
        return repo.findAll();
    }

    @Override
    public User save(User user) {
        return repo.save(user);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
