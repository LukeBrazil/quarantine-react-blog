import React from 'react';
import Blog from "./components/Blog"
import BlogPost from './components/BlogPost';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Blog} />
        <Route path='/post/:post_id?' component={BlogPost} />
        <Route path='/post/:post_id?/comments' component={Comments} />
      </Router>
    </div>
  );
}

export default App;
