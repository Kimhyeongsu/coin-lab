import React, { Component } from 'react';
import '../css/Login.css';
import '../css/App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {

        return (
            <div className='login_container'>
                <div className='login_mainstr'>로그인</div>
                <input className='login_email' type='email'/>
                <input className='login_password' type='password'/>
                <div className='horizontal_button'>
                    <span className='login_button' onClick={function(){alert('로그인처리')}}>
                        로그인하기
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Login;