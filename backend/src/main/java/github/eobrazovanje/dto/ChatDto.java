package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;
import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.02
*/
public class ChatDto {

    private long id;

    @NotNull
    private String text;

    @NotNull
    private Date date;

    private UserDto sender;

    public ChatDto() { }

    public long getId() {
        return id;
    }

    public ChatDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public ChatDto setText(String text) {
        this.text = text;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public ChatDto setDate(Date date) {
        this.date = date;
        return this;
    }

    public UserDto getSender() {
        return sender;
    }

    public ChatDto setSender(UserDto sender) {
        this.sender = sender;
        return this;
    }
}
