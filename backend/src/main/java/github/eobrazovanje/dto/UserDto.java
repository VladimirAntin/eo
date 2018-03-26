package github.eobrazovanje.dto;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import github.eobrazovanje.entity.Authority;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.53
*/
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = UcenikDto.class, name = "Ucenik"),
        @JsonSubTypes.Type(value = NastavnikDto.class, name = "Nastavnik"),
        @JsonSubTypes.Type(value = UserDto.class, name = "User")
})
public class UserDto {
    private long id;

    @NotNull
    @Size(min = 1, max = 30)
    private String ime;

    @NotNull
    @Size(min = 1, max = 30)
    private String prezime;

    @NotNull
    @Size(min = 1, max = 30)
    private String username;

    @NotNull
    @Size(min = 10, max = 50)
    private String email;

    @Size(min = 1, max = 256) //hash
    private String password;

    private boolean online;
    private Date lastOnline;

    private Set<Authority> authorities = new HashSet<>();

    public UserDto() { }

    public UserDto(long id, String ime, String prezime, String username, String email, Set<Authority> authorities) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.email = email;
        this.authorities = authorities;
    }

    public UserDto(long id, String ime, String prezime, String username, String email, boolean online, Date lastOnline, Set<Authority> authorities) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.email = email;
        this.authorities = authorities;
        this.online = online;
        this.lastOnline = lastOnline;
    }

    public long getId() {
        return id;
    }

    public UserDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getIme() {
        return ime;
    }

    public UserDto setIme(String ime) {
        this.ime = ime;
        return this;
    }

    public String getPrezime() {
        return prezime;
    }

    public UserDto setPrezime(String prezime) {
        this.prezime = prezime;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public UserDto setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserDto setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserDto setPassword(String password) {
        this.password = password;
        return this;
    }

    public Set<Authority> getAuthorities() {
        return authorities;
    }

    public UserDto setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
        return this;
    }

    public boolean isOnline() {
        return online;
    }

    public UserDto setOnline(boolean online) {
        this.online = online;
        return this;
    }

    public Date getLastOnline() {
        return lastOnline;
    }

    public UserDto setLastOnline(Date lastOnline) {
        this.lastOnline = lastOnline;
        return this;
    }
}
