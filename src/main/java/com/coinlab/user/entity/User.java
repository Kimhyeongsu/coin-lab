package com.coinlab.user.entity;

import com.coinlab.common.entity.CommonTimeEntity;
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
public class User extends CommonTimeEntity {

    @Id
    @GeneratedValue
    private Long userId;

    private String email;
    private String nickname;
    private String password;
    private int badPasswordCount;
    private LocalDate passwordChangeDate;
    private String status;

    @Builder
    public User(String email, String nickname, String password, int badPasswordCount, LocalDate passwordChangeDate, String status) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.badPasswordCount = badPasswordCount;
        this.passwordChangeDate = passwordChangeDate;
        this.status = status;
    }


}
