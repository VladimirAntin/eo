package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;
import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.03
*/
public class MessageDto {

    private long id;

    @NotNull
    private String text;

    private long recipient;
    private long sender;
    private Date date;
    private boolean seen;

    public MessageDto() { }

    public long getId() {
        return id;
    }

    public MessageDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public MessageDto setText(String text) {
        this.text = text;
        return this;
    }

    public long getRecipient() {
        return recipient;
    }

    public MessageDto setRecipient(long recipient) {
        this.recipient = recipient;
        return this;
    }

    public long getSender() {
        return sender;
    }

    public MessageDto setSender(long sender) {
        this.sender = sender;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public MessageDto setDate(Date date) {
        this.date = date;
        return this;
    }

    public boolean isSeen() {
        return seen;
    }

    public MessageDto setSeen(boolean seen) {
        this.seen = seen;
        return this;
    }
}
