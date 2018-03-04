package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Authority;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.repo.AuthorityRepo;
import github.eobrazovanje.repo.UcenikRepo;
import github.eobrazovanje.repo.UserRepo;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @Autowired
    private UcenikRepo ucenikRepo;

    @Autowired
    private AuthorityRepo authorityRepo;

    @Override
    public User findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public User findByUsername(String username) {
        return repo.findByUsername(username);
    }

    @Override
    public User findByUsernameOrId(String id) {
        try{
            return repo.findOne(Long.parseLong(id));
        }catch (NumberFormatException ex){
            return repo.findByUsername(id);
        }
    }

    @Override
    public List<User> findAll() {
        return repo.findAll();
    }

    @Override
    public User save(User user) {
        if(user.getId()==0){
            Set<Authority> authorities = new HashSet<>();
            if(user instanceof Nastavnik){
                authorities.add(authorityRepo.findOne((long)2)); // profesor
            }else if(user instanceof Ucenik){
                authorities.add(authorityRepo.findOne((long)3)); // ucenik
            }else{
                authorities.add(authorityRepo.findOne((long)1)); // admin
            }
            user.setAuthorities(authorities);
        }
        return repo.save(user.setAuthorities((Set<Authority>) this.findOne(user.getId()).getAuthorities()));
    }

    @Override
    public User savePassword(User user) {
        return repo.save(user);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }

    @Override
    public Ucenik findByBrojIndexa(String brojIndexa) {
        return ucenikRepo.findByBrojIndexa(brojIndexa);
    }
}
