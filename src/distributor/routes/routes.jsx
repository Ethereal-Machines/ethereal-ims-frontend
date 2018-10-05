import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard'
import AddNew from '../pages/issues/new/isuue-form'
import PendingIssues from '../pages/issues/pending/pending-issue'
import PendingIssueChat from '../pages/issues/pending/pending-issue-chat/pending-issue-chat'
import ResolvedIssue from '../pages/issues/resolved/resolved-issue'
import ResolvedIssueChat from '../pages/issues/resolved/resolved-issue-chat/resolved-issue-chat'
import Inventory from '../pages/inventory/inventory'
import Shopping from '../pages/shopping/shopping'
import ShoppingDetail from '../pages/shopping/shopping-detail/shopping-detail'
import Faqs from '../pages/faq/faq'

class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Switch>
          <Route path="/issues/new" exact component={AddNew} />
          <Route path="/issues/pending" exact component={PendingIssues} />
          <Route path="/issues/pending/:id" exact component={PendingIssueChat} />
          <Route path="/issues/resolved" exact component={ResolvedIssue} />
          <Route path="/issues/resolved/:id" exact component={ResolvedIssueChat} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/shopping" exact component={Shopping} />
          <Route path="/shopping/details/:id" component={ShoppingDetail} />
          <Route path="/faqs" exact component={Faqs} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
    );
  }
}


export default Routes;