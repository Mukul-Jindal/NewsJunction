import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  let pageSize = 10;
  const [progress, setProgress] = useState(0);
  let apiKey = process.env.REACT_APP_NEWS_API;


  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News changeProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" />} />
          <Route exact path='/business' element={<News changeProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" />} />
          <Route exact path='/entertainment' element={<News changeProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path='/general' element={<News changeProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" />} />
          <Route exact path='/health' element={<News changeProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" />} />
          <Route exact path='/science' element={<News changeProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" />} />
          <Route exact path='/sports' element={<News changeProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" />} />
          <Route exact path='/technology' element={<News changeProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}
