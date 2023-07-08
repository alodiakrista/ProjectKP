let berita = document.getElementById("list-berita");

fetch("https://64a815dbdca581464b85431c.mockapi.io/berita")
  .then((data) => data.json())
  .then((result) => {
    result.forEach((news) => {
      const trimmedStringTitle = news.titleNews.length > 50 ? news.titleNews.substring(0, 50 - 3) + "..." : news.titleNews;
      const trimmedString = news.descNews.length > 100 ? news.descNews.substring(0, 100 - 3) + "..." : news.descNews;
      berita.innerHTML += `
      
      <div class="col-sm-9 col-md-4 col-lg-4">
      <div class="col">
       <div class="card">
        <img src="${news.images}" class="card-img-top" alt="">
        <div class="category"> ${news.category}</div>
        <div class="card-body">
         <h5 class="card-title">${trimmedStringTitle}</h5>
         <p class="card-text">${trimmedString}</p>
          <a href="detailberita.html?id=${news.id}" class="btn btn-outline-danger">Selengkapnya</a>
        </div>
      </div>
       </div>
      </div>
      `;
    });
  });
