import React, { Component } from 'react';
import {address} from '../components/APIAddress';
import axios from 'axios';
import '../css/Home.css';

const coinType = [
    {kor:'비트코인'         ,eng:'BTC'},
    {kor:'이더리움'         ,eng:'ETH'},
    {kor:'리플'             ,eng:'XRP'},
    {kor:'비트코인캐시'     ,eng:'BCH'},
    {kor:'라이트코인'       ,eng:'LTC'},
    {kor:'이오스'           ,eng:'EOS'},
    {kor:'모네로'           ,eng:'XMR'},
    {kor:'대시'             ,eng:'DASH'},
    {kor:'이더리움 클래식'   ,eng:'ETC'},
    {kor:'퀀텀'             ,eng:'QTUM'},
    {kor:'비트코인 골드'     ,eng:'BTG'},
    {kor:'제트캐시'         ,eng:'ZEC'}

];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                price : {
                }
        }

        coinType.map((coin,idx)=>(
            this.state.price[coin.eng] = {sell_price:'0',opening_price:'0',volatility:{rate:'0',state:'zero'}}
        ));

    }
    componentDidMount() {
        let setData = (res) => {
            this.setState(
                {
                    price : res
                }
            )
        }
        axios.get(address['bithumb'])
                .then( response => { 
                    console.log('sucess');
                    console.dir(response.data.data);
                    let priceJson = response.data.data;
                    coinType.map((coin,idx)=>{
                        
                        let rate = (Math.floor(((priceJson[coin.eng].sell_price-priceJson[coin.eng].opening_price)/priceJson[coin.eng].opening_price)*10000)/100);
                        let state = 'zero';
                        if(rate>0){
                            state = 'plus';
                        }else if(rate<0){
                            state = 'minus';
                        }
                        priceJson[coin.eng].volatility = {'rate':rate,'state':state};
                    });
                    setData(priceJson);
                } ) 
                .catch( response => { 
                    console.log('fail')
        } );
        //POST SAMPLE
        /* 
            axios.post(url, parameters)
            .then( response => { 
                console.log('sucess');
            } )
            .catch( response => {
                console.log('fail');
            } );
        */
    }
    
    render() {
        let instance = this;

        return ( 
            <div>
                <table className='priceTable' style={{size:'7px'}}>
                    <tbody>
                        {coinType.map((coin,idx)=>(
                        <tr>
                            <td className='name'>{coin.kor}</td>
                            <td className='price'>
                                <span className={this.state.price[coin.eng].volatility.state}>
                                    {this.state.price[coin.eng].sell_price}
                                </span>
                            </td>
                            <td className='volatility'>
                                <span className={this.state.price[coin.eng].volatility.state}>
                                    {this.state.price[coin.eng].volatility.rate}
                                </span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Home;