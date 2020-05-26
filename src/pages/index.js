import React from "react"

import '../css/App.scss';
import Header from '../components/Header/Header'
import Posts from '../components/posts'
import Videos from '../components/videos'
import Footer from '../components/Footer'
import Intro from '../components/Intro/Intro'

import ArticleData from '../data/articles'
import VideoData from '../data/videos'


const IndexPage = () => {
  const featuredArticles = (data, feat) => {
    return data.filter(el => el.featured === feat)
  };

  return (
    <div className="App">
      <div className="bodywrapper">
        <Header />
        <Intro />
        <Posts postData={featuredArticles(ArticleData, 1)} />
        <Videos data={VideoData} quantity="3" />
        <Posts postData={featuredArticles(ArticleData, 0)} />
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage
