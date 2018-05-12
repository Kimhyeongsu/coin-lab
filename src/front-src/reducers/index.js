import { 
        TOGGLE,
        CHECK_TOKEN, UPDATE_TOKEN 
     } from '../actions';
import { combineReducers} from 'redux';

const toggleInitialState = {
    value : true
}

const tokenInitialState = {
    value : 'none',
    info : {},
    validity : false
}

const toggleMenu = (state = toggleInitialState, action) => {
    switch(action.type){
        case TOGGLE :
            console.log(state.value);
            return Object.assign({},state,{
                value: !state.value
            });
        default:
            return state;
    }
}

const checkToken = (state = tokenInitialState, action) => {
    switch(action.type){
        case CHECK_TOKEN :
            //서버와 통신후 유효성 여부를 확인후 해당값을 validity에 갱신
            //ajax 통신 구현
            let checkedValidity = true;
            return Object.assign({},state,{
                validity: checkedValidity
            });
        case UPDATE_TOKEN :
            //어딘가에서 유효성 체크후 갱신하는 모듈 호출부 ; 어디서 처리하는지 정의필요
            //ajax 통신 구현
            let updatedToken = 'updated'
            return Object.assign({},state,{
                value : updatedToken,
                info : {},
                validity : true,
            });            
        default:
            return state;
    }
}

const extra = (state = {value: 'this_is_extra_reducer'}, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const investmentApp = combineReducers({
    toggleMenu,
    checkToken,
    extra
});

export default investmentApp;