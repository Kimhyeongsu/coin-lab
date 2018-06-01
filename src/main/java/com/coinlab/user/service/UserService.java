package com.coinlab.user.service;


import com.coinlab.user.dto.UserDto;
import com.coinlab.user.entity.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;
    private ModelMapper modelMapper;

    public UserDto create(UserDto userDto) {
        return modelMapper.map(userRepository.save(userDto.toEntity()), UserDto.class);
    }

    public UserDto update(UserDto userDto) {
        return modelMapper.map(userRepository.save(userDto.toEntity()), UserDto.class);
    }

    public void delete(Long userId) {
        userRepository.delete(userId);
    }

    @Transactional(readOnly = true)
    public UserDto findOne(Long userId) {
        return modelMapper.map(userRepository.findOne(userId), UserDto.class);
    }

    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        return modelMapper.map(userRepository.findAll(), List.class);
    }
}
