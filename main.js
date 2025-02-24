const API_KEY = `dddb00f0bd2649b69fddc3d39c9b1937`;
let news = [];

const getLatestNews = async () => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

   const response =  await fetch(url);
   const data = await response.json();
   news = data.articles;

   console.log("dddd", news);
};

getLatestNews();