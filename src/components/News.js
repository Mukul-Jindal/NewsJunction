import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  async function updateNews() {
    setLoading(true);
    props.changeProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url)
    props.changeProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.changeProgress(60);
    props.changeProgress(100);
    setLoading(false);
  }

  useEffect(() => {
    document.title = `${props.category} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMore = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  return (
    <>
      <h1 className='text-center' style={{ marginTop: 60 }}>NewsMonkey - Top {props.category} Headlines</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={loading ? <Loading /> : <></>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  changeProgress: PropTypes.func,
}
News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
}