import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions';
import '../css/MenuSlide.css';

class MenuSlide extends Component {
    render() { 
        return (
            <div
                className={'menuSlide'+(this.props.value?' close':'')}>
                <div style={{backgroundColor:'white',width:'100%',height:'100%', color:'white', fontSize:'16px'}}>
                    <div style={{backgroundColor:'#1b82d1',width:'100%',height:'100px', padding:'10px'}}>
                        <span style={{width:'90%'}}>상태메세지 - 빗썸 모델링</span>
                        <span style={{position: 'absolute',right: '10px',width: '20px',textAlign: 'center'}} onClick={this.props.onToggle}>x</span>
                        <div style={{marginTop:'5px'}}>
                            <div style={{textAlign:'center',display:'inline-block',width:'25%'}}>
                                <div style={{display:'inline-block',width:'80px',height:'80px',border:'1px solid'}}>아이콘1</div>
                            </div>
                            <div style={{textAlign:'center',display:'inline-block',width:'25%'}}>
                                <div style={{display:'inline-block',width:'80px',height:'80px',border:'1px solid'}}>아이콘2</div>
                            </div>
                            <div style={{textAlign:'center',display:'inline-block',width:'25%'}}>
                                <div style={{display:'inline-block',width:'80px',height:'80px',border:'1px solid'}}>아이콘3</div>
                            </div>
                            <div style={{textAlign:'center',display:'inline-block',width:'25%'}}>
                                <div style={{display:'inline-block',width:'80px',height:'80px',border:'1px solid'}}>아이콘4</div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        value: state.toggleMenu.value
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onToggle:() => dispatch(toggle())
    }
}

MenuSlide = connect(mapStateToProps,mapDispatchToProps)(MenuSlide);
export default MenuSlide;