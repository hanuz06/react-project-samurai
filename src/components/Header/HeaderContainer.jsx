import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducers";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            //Allows CORS
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id , email, login} = response.data.data;
                this.props.setAuthUserData(id , email, login)
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapsStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
//Sends mapsStateToProps and setAuthUserData to HeaderContainer
export default connect(mapsStateToProps, {setAuthUserData})(HeaderContainer);