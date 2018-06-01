package com.coinlab.user.dto;

import com.coinlab.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private Long userId;
    private String email;
    private String nickname;

    @JsonIgnore
    private String password;
    @JsonIgnore
    private int badPasswordCount;
    @JsonIgnore
    private LocalDate passwordChangeDate;

    private String status;

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .badPasswordCount(badPasswordCount)
                .passwordChangeDate(passwordChangeDate)
                .build();
    }
}
