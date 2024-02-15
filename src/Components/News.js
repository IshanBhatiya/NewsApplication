import React, { useState, useEffect } from 'react';


function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`);
                if (response.ok) {
                    const data = await response.json();
                    setArticles(data.articles);
                } else {
                    throw new Error('Failed to fetch news');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
        
    }, []);

    return (
        <div className="app">

            {articles.map((article, index) => (
                <div  key={index} className="card bg-dark">
                    <div className="image">
                        <img src={article.urlToImage? article.urlToImage : ""} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body text-white">
                        <h5 className="card-title">{article.title}</h5>
                        <p className='element'>BY : {article.author ? article.author : "Unknown"} <br /> Publish At : {article.publishedAt}</p>
                        <a href={article.url} target='_blank' rel="noreferrer" className="btn btn-outline-danger btn-sm">Learn More</a>
                    </div>
                     
                </div>
            ))}
        </div>
    )
}

export default App;
