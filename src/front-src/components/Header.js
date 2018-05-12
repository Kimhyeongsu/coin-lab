import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../actions';
import '../css/Header.css';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey'];
const menus  = 
    [
        {   name: 'home'        ,to  : '/'          },
        {   name: 'about'       ,to  : '/about'     },
        {   name: 'dashboard'   ,to  : '/dashboard' },
        {   name: 'register'    ,to  : '/register'  },
        {   name: 'login'       ,to  : '/login'     },
    ];

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <div className='header_container'>
                    <Link
                        className='header_logo'
                        to='/'>coinLab 1.0
                    </Link>
                    <Link 
                        className='header_login'
                        to='/login'>login
                    </Link>
                    <Link 
                        className='header_register'
                        to='/register'>register
                    </Link>
                    <span className='header_menu'
                        onClick={this.props.onToggle}>탭</span>
                </div>

                {/*
                routing을 하기위한 부분이나 일시적으로 주석처리함 2018-03-13
                <div style={{'display':'none'}}>
                    {
                    menus.map((menu,idx)=>(
                            <Link
                            style={{'color':colors[idx]}}
                            to={menu.to}>
                            {menu.name}
                            </Link>
                        ))
                    }
                </div>
                */}
            </div>
        )
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onToggle:() => dispatch(toggle())
    }
}

Header = connect(undefined, mapDispatchToProps)(Header);
export default Header;