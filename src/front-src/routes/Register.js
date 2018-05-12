import React, { Component } from 'react';
import '../css/Register.css';
import '../css/App.css';

import registerAction from '../actions';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password_repeat: '',
            errors: {
            },
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate     = this.validate.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value }, () => this.validate());
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.formValid){
            alert('회원가입 처리');
        }
    }

    validate(){
        const {email, username, password, password_repeat} = this.state;
        let formValid = this.state;
        let errors = {};

        if(!email) {
            errors["email"] = '이메일주소를 입력해주세요.';
        }else if(!email.match(/[\w\-\~]+\@[\w\-\~]+(\.[\w\-\~]+)+/g)) {
            errors["email"] = '이메일주소를 정확하게 입력해주세요.';
        }else {
            formValid = true;
        }

        if(!username) {
            errors["username"] = '닉네임을 입력해주세요.';
        }else {
            formValid = true;
        }

        if(!password || !password_repeat) {
            errors["password"] = '암호를 입력해주세요.';
        }else if(password != password_repeat) {
            errors["password"] = '암호가 일치하지 않습니다.';
        }else {
            formValid = true;
        }

        this.setState({errors: errors});
        this.setState({formValid: formValid});

    }

    render() {
        const {email, username, password, password_repeat, errors} = this.state;
        return (
            <div className='register_container'>
                <form name="register">
                    <div className='register_mainstr'>회원가입</div>
                    <input type='text'     className='register_email'    name='email'           value={email}           onChange={this.handleChange} placeholder='이메일주소' />
                    <div className="register_block">{errors["email"]}</div>
                    <input type='text'     className='register_email'    name='username'        value={username}        onChange={this.handleChange} placeholder='닉네임' />
                    <div className="register_block">{errors["username"]}</div>
                    <input type='password' className='register_password' name='password'        value={password}        onChange={this.handleChange} placeholder='암호' />
                    <input type='password' className='register_password' name='password_repeat' value={password_repeat} onChange={this.handleChange} placeholder='암호 확인' />
                    <div className="register_block">{errors["password"]}</div>
                    <div className='horizontal_button'>
                        <span className='register_button' onClick={this.handleSubmit}>
                            회원가입
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;