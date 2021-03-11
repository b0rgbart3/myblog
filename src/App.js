import logo from './logo.svg';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import articles from './pages/article-content.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div id="page-body">
        {/* Switch makes sure that only one route is rendered at a time */}
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} exact />
          <Route path='/articles-list' component={ArticlesListPage} exact />
          {/* :name is our url parameter */}
          <Route path='/article/:name' component={ArticlePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
