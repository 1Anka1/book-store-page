<template>
  <section class="blog section">
    <div class="blog__container container">
      <Title center>Articles & Resources</Title>
      <div class="blog__article-wrapper">
        <ul class="blog__article-list">
          <li class="blog__article-items">
            <img
              src="/img/article-one.png"
              alt="Artice Photo"
              class="blog__article-img"
              width="410"
              height="350"
            />
            <div class="blog__article-items-block">
              <h3 class="blog__article-title">The energy efficiency offers hydrotherapy or swim</h3>
              <p class="blog__article-description">
                The point of using Lorem Ipsum hiter of that using making it look like others
                readable will get end.
              </p>
              <div class="blog__article-block">
                <a href="" class="blog__article-readmore">Read more </a>
                <span class="blog__article-author">Author - 23.05.2022</span>
              </div>
            </div>
          </li>
          <li class="blog__article-items">
            <img
              src="/img/article-two.png"
              alt="Artice Photo"
              class="blog__article-img"
              width="410"
              height="350"
            />
            <div class="blog__article-items-block">
              <h3 class="blog__article-title">
                Release of Letraset sheets tools containing passages
              </h3>
              <p class="blog__article-description">
                The point of using Lorem Ipsum hiter of that using making it look like others
                readable will get end.
              </p>
              <div class="blog__article-block">
                <a href="" class="blog__article-readmore">Read more </a>
                <span class="blog__article-author">Author - 23.05.2022</span>
              </div>
            </div>
          </li>
          <li class="blog__article-items">
            <img
              src="/img/article-three.png"
              alt="Artice Photo"
              class="blog__article-img"
              width="410"
              height="350"
            />
            <div class="blog__article-items-block">
              <h3 class="blog__article-title">The energy efficiency offers hydrotherapy or swim</h3>
              <p class="blog__article-description">
                The point of using Lorem Ipsum hiter of that using making it look like others
                readable will get end.
              </p>
              <div class="blog__article-block">
                <a href="" class="blog__article-readmore">Read more </a>
                <span class="blog__article-author">Author - 23.05.2022</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.blog {
  background-color: var(--background-color);
}

.blog__article-list {
  display: flex;
  margin: -30px;
}

.blog__article-items {
  margin: 30px;
  background-color: var(--primary-text-color);
}

.blog__article-items-block {
  padding: 25px 30px;
  border: 1px solid #eee;
  border-top: none;
}

.blog__article-title {
  font-weight: 700;
  font-size: 20px;
  font-family: var(--secondary-font);
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.blog__article-description {
  margin-bottom: 25px;
}

.blog__article-block {
  display: flex;
  justify-content: space-between;
  color: var(--secondary-color);
}

.blog__article-readmore {
  color: var(--secondary-color);
  text-decoration: underline;
  transition: color 250ms var(--timing-function);

  &:hover {
  color: var(--primary-color);
  text-decoration: none;
}
}
</style>
