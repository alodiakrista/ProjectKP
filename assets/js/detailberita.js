let detailberita = document.getElementById("detail-berita");

const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch(`https://64a815dbdca581464b85431c.mockapi.io/berita/${id}`)
  .then((data) => data.json())
  .then((article) => {
    console.log(article);
    detailberita.innerHTML += `
    <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row g-10">
            <div class="col-lg-200">
              <article class="blog-details">
                <div class="row gy-5" data-aos="fade-in">
                  <img src="${article.images}" alt="" class="img" />
                </div>
                <h2 class="title">${article.titleNews}</h2>
                <div class="meta-top">
                  <ul>
                    <li class="d-flex align-items-center"><i class="bi bi-person-circle"></i> <a href="#">${article.author}</a></li>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-calendar-event"></i> <a href="#"><time datetime="${article.publish}">${article.publish}</time></a>
                    </li>
                  
                    
                  </ul>
                  <br>
                  <ul>
                  <li class="d-flex align-items-center"><i class="bi  bi-globe"></i> <a href="${article.sumber}">Sumber ${article.sumber}</a></li>                   
                  </ul>
                </div>
                <!-- End meta top -->

                <div class="content">
                  <p>
                  ${article.descNews}
                  </p>
              </article>
              <!-- End blog post -->
          </div>
        </div>
      </section>
      `;
  });
