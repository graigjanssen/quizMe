var React = require('react');
var ReactRouter = require('react-router');

// Router Tools
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// Components / Containers
var Main = require('./components/main/Main');
var Home = require('./components/Home');
var SetupContainer = require('./containers/setup/SetupContainer');
var AddContainer = require('./containers/AddContainer');
var ManageContainer = require('./containers/ManageContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/setup" component={SetupContainer}/>
      <Route path="/add" component={AddContainer}/>
      <Route path="/manage" component={ManageContainer}/>
    </Route>
  </Router>
)

module.exports = routes;
