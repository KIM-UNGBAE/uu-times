const API_KEY = `dddb00f0bd2649b69fddc3d39c9b1937`;
let news = [];

const getLatestNews = async () => {
    const url = new URL(
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&pageSize=${PAGE_SIZE}`
      );

   const response =  await fetch(url);
   const data = await response.json();
   news = data.articles;

   console.log("dddd", news);
};

getLatestNews();