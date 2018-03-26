package github.eobrazovanje.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.22
*/
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 1, max = 30)
    private String ime;

    @NotNull
    @Size(min = 1, max = 30)
    private String prezime;

    @NotNull
    @Size(min = 1, max = 30)
    @Column(unique = true)
    private String username;

    @NotNull
    @Size(min = 10, max = 50)
    @Column(unique = true)
    private String email;

    @NotNull
    @Size(min = 1, max = 256) //hash
    private String password;

    @NotNull
    private boolean online;
    private Date lastOnline;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_authority",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
    private Set<Authority> authorities = new HashSet<>();
    public User() { }

    public User(long id, String ime, String prezime, String username, String email, String password) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(long id, String ime, String prezime, String username, String email, String password, boolean online, Date lastOnline) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.email = email;
        this.password = password;
        this.online = online;
        this.lastOnline = lastOnline;
    }

    public long getId() {
        return id;
    }

    public User setId(long id) {
        this.id = id;
        return this;
    }

    public String getIme() {
        return ime;
    }

    public User setIme(String ime) {
        this.ime = ime;
        return this;
    }

    public String getPrezime() {
        return prezime;
    }

    public User setPrezime(String prezime) {
        this.prezime = prezime;
        return this;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public User setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
        return this;
    }

    public boolean isOnline() {
        return online;
    }

    public User setOnline(boolean online) {
        this.online = online;
        return this;
    }

    public Date getLastOnline() {
        return lastOnline;
    }

    public User setLastOnline(Date lastOnline) {
        this.lastOnline = lastOnline;
        return this;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
