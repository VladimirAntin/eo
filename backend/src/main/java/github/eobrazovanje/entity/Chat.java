package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 17.52
*/
@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 1)
    private String text;

    @NotNull
    private Date date;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender", referencedColumnName = "id")
    private User sender;

    public Chat() { }

    public long getId() {
        return id;
    }

    public Chat setId(long id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public Chat setText(String text) {
        this.text = text;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Chat setDate(Date date) {
        this.date = date;
        return this;
    }

    public User getSender() {
        return sender;
    }

    public Chat setSender(User sender) {
        this.sender = sender;
        return this;
    }
}
