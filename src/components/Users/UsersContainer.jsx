import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducers";
import * as axios from 'axios';
import Users from './Users'

class UsersContainer extends React.Component {
    //Components are mounted only once. After that only updated. Axios gets called asynchronously after component
    // mounting.
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}/>
    }
}


//State belongs to store
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

//Dispatch belongs to store
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);