package com.coinlab;

import com.coinlab.entity.User;
import com.coinlab.entity.UserRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @After
    public void clean() {
        userRepository.deleteAll();
    }

    @Test
    public void insert() {
        userRepository.save(User.builder()
                .email("khs0324@gmail.com")
                .password("1234")
                .badPasswordCount(0)
                .status("S")
                .build());

        List<User> userList = userRepository.findAll();

        User user = userList.get(0);
        assertThat(user.getEmail(), is("khs0324@gmail.com"));
        assertThat(user.getPassword(), is("1234"));
        assertThat(user.getStatus(), is("S"));

    }

}
