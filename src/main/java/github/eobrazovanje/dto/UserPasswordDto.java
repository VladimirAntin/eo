package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 3.3.18.
  Time: 17.16
*/
public class UserPasswordDto {
//    @NotNull
//    @Size(min = 4, max = 30)
    private String oldPassword;
    @NotNull
    @Size(min = 4, max = 30)
    private String newPassword;
    @NotNull
    @Size(min = 4, max = 30)
    private String newPasswordRepeat;

    public UserPasswordDto() { }

    public String getOldPassword() {
        return oldPassword;
    }

    public UserPasswordDto setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public UserPasswordDto setNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }

    public String getNewPasswordRepeat() {
        return newPasswordRepeat;
    }

    public UserPasswordDto setNewPasswordRepeat(String newPasswordRepeat) {
        this.newPasswordRepeat = newPasswordRepeat;
        return this;
    }
}
