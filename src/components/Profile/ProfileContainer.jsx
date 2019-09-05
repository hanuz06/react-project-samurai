import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import * as axios from 'axios';
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

//Without () "a" will be considered as function body but we need object(It returns object).
let mapStateToProps = state => ({
    profile:state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);