package com.coinlab.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long userId;


    private String email;
    private String password;
    private int badPasswordCount;
    private LocalDate passwordChangeDate;
    private String status;

    @Builder
    public User(String email, String password, int badPasswordCount, LocalDate passwordChangeDate, String status) {
        this.email = email;
        this.password = password;
        this.badPasswordCount = badPasswordCount;
        this.passwordChangeDate = passwordChangeDate;
        this.status = status;
    }


}
