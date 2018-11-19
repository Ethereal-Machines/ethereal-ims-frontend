import React, { Component } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
import {connect} from 'react-redux'
import Loadable from 'react-loadable'

import {GetToken} from '../helpers/token'
import Login from '../login/login'
import LoginChecker from '../login/login-checker'
import loader from './loader.gif'
import UpdatePassword from '../update-password/update-password'
import CreateProfile from '../create-profile/create-profile'

// loader gif if component is not loaded
const Loading = () => {
    return (
      <div className="page">
        <div className="page-loader u-text-center">
          <img src={loader} alt="Loader" height="100"/>
          <p className="u-text-center">LOADING...</p>
        </div>
      </div>
    );
  };

  // user component use suffix User

const UserDashboard = Loadable({
    loader: () => import('../distributor/pages/dashboard/dashboard'),
    loading: Loading
});

const UserAddNew = Loadable({
    loader: () => import('../distributor/pages/issues/new/isuue-form'),
    loading: Loading
});

const UserPendingIssues = Loadable({
    loader: () => import('../distributor/pages/issues/pending/pending-issue'),
    loading: Loading
});

const UserPendingIssueChat = Loadable({
    loader: () => import('../distributor/pages/issues/pending/pending-issue-chat/pending-issue-chat'),
    loading: Loading
});

const UserResolvedIssue = Loadable({
    loader: () => import('../distributor/pages/issues/resolved/resolved-issue'),
    loading: Loading
});

const UserResolvedIssueChat = Loadable({
    loader: () => import('../distributor/pages/issues/resolved/resolved-issue-chat/resolved-issue-chat'),
    loading: Loading
});

const UserInventory= Loadable({
    loader: () => import('../distributor/pages/inventory/inventory'),
    loading: Loading
});

const UserShopping = Loadable({
    loader: () => import('../distributor/pages/shopping/shopping'),
    loading: Loading
});

const UserShoppingDetail = Loadable({
    loader: () => import('../distributor/pages/shopping/shopping-detail/shopping-detail'),
    loading: Loading
});

const UserFaqs = Loadable({
    loader: () => import('../distributor/pages/faq/faq'),
    loading: Loading
});

// user component use suffix User

const AdminDashboard = Loadable({
    loader: () => import('../admin/index'),
    loading: Loading
})

class MainRouting extends Component {
    history = createHashHistory({
        basename: "", // The base URL of the app (see below)
        hashType: "slash", // The hash type to use (see below)
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message)),
      });

    render(){
        return(
            <Router history={this.history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/user/updatePassword" render={(match) => (
                        GetToken() && !this.props.isFirst
                        ? <UpdatePassword/>
                        : <Redirect to="/" />
                    )} />
                    <Route path="/user/profile"  render={(match) => (
                        this.props.isFirst && GetToken() && !this.props.isApproved
                        ? <CreateProfile/>
                        : <Redirect to="/" />
                    )} />
                    {/* <Route path="/login" component={Login}/> */}
                    <LoginChecker>
                        { this.props.userType === 'user'
                            ?
                            <Switch>
                                <Route path="/issues/new" exact component={UserAddNew} />
                                <Route path="/issues/pending" exact component={UserPendingIssues} />
                                <Route path="/issues/pending/:id" exact component={UserPendingIssueChat} />
                                <Route path="/issues/resolved" exact component={UserResolvedIssue} />
                                <Route path="/issues/resolved/:id" exact component={UserResolvedIssueChat} />
                                <Route path="/inventory" exact component={UserInventory} />
                                <Route path="/shopping" exact component={UserShopping} />
                                <Route path="/shopping/details/:id" component={UserShoppingDetail} />
                                <Route path="/faqs" exact component={UserFaqs} />
                                <Route path="/dashboard" exact component={UserDashboard} />
                            </Switch>
                            :
                            <Switch>
                                <Route path="/dashboard" exact component={AdminDashboard}/>
                            </Switch>
                        }
                    </LoginChecker>
                </Switch>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
      isFirst: state.Basic.basic.firstTime,
      isApproved: state.Basic.basic.approved,
      userType: state.Basic.basic.group
    }
  }

export default connect(mapStateToProps)(MainRouting)