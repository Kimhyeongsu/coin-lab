import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header       from './Header';
import MenuSlide    from './MenuSlide';

import '../css/App.css';

import Home         from '../routes/Home';
import About        from '../routes/About';
import Dashboard    from '../routes/Dashboard';
import Login        from '../routes/Login';
import Register     from '../routes/Register';



class App extends React.Component {

    render(){
        return (
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Route exact path="/"       component={Home}        />
                        <Route path="/about"        component={About}       />
                        <Route path="/dashboard"    component={Dashboard}   />
                        <Route path="/login"        component={Login}       />
                        <Route path="/register"     component={Register}    />
                    </div>
                    <MenuSlide/>
                </div>
            </Router>
            
        );
    }

}

export default App;