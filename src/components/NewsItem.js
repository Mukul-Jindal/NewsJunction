import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className='my-2 mx-2'>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://img.freepik.com/free-vector/hand-holding-smartphones-with-online-newspaper-newsletter-weblog_74855-20591.jpg?w=1060&t=st=1705485232~exp=1705485832~hmac=14d810a74d78ddc2885b6737160fa950674435b36ac2811f45feb611a500aab6"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
