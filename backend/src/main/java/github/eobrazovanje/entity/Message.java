package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 13.55
*/
@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String text;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender", referencedColumnName = "id")
    private User recipient;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipient", referencedColumnName = "id")
    private User sender;

    @NotNull
    private Date date;

    @NotNull
    private boolean seen;

    public Message() { }

    public long getId() {
        return id;
    }

    public Message setId(long id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public Message setText(String text) {
        this.text = text;
        return this;
    }

    public User getRecipient() {
        return recipient;
    }

    public Message setRecipient(User recipient) {
        this.recipient = recipient;
        return this;
    }

    public User getSender() {
        return sender;
    }

    public Message setSender(User sender) {
        this.sender = sender;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Message setDate(Date date) {
        this.date = date;
        return this;
    }

    public boolean isSeen() {
        return seen;
    }

    public Message setSeen(boolean seen) {
        this.seen = seen;
        return this;
    }
}
