<template>
  <section class="banner">
    <div class="banner__container container">
      <div>
        <p class="banner__welcome">Welcome to Pages</p>
        <h2 class="banner__title">Books are uniquely portable magic</h2>
        <p class="banner__book-description">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form.
        </p>
        <Button class="banner__button">Order today</Button>
        <a class="banner__read-link" href="#">Read Free Demo</a>
        <ul class="banner__book-list">
          <li>Pages: <br /><span class="banner__book-list-item">586 pages</span></li>
          <li>Length: <br /><span class="banner__book-list-item">10 Hours</span></li>
          <li>Rating: <br /><span class="banner__book-list-item">4.5/5 (305 ratings)</span></li>
        </ul>
      </div>
      <div>
        <img class="banner__book-img" src="/img/dark-front-page.png" alt="Front book page" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  background-color: var(--secondary-color);

  &__container {
    display: grid;
    gap: 130px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    color: var(--primary-text-color);
  }

  &__welcome {
    display: flex;
    align-items: center;
    font: 400 italic 20px/1.5 var(--secondary-font);
    margin-bottom: 15px;

    &::before {
      background: var(--primary-color);
      content: '';
      display: block;
      width: 34px;
      height: 1px;
      margin-right: 10px;
    }
  }

  &__title {
    font: 700 65px/1.2 var(--secondary-font);
    letter-spacing: -0.02em;
    margin-bottom: 35px;
  }

  &__book-description {
    color: var(--light-color);
    letter-spacing: -0.01em;
    margin-bottom: 35px;
  }

  &__read-link {
    font: 700 19px/1.5 var(--secondary-font);
    border-bottom: 1px solid var(--primary-text-color);
    transition: color 250ms var(--timing-function);
    color: var(--primary-text-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  &__book-list {
    display: flex;
    justify-content: space-between;

    & > li {
      display: block;
      padding-left: 20px;
      position: relative;
    }

    & > li::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }

  &__button {
    margin: 0 30px 30px 0;
  }

  &__book-list-item {
    color: var(--light-color);
  }

  &__book-img {
    border: 8px solid var(--border-color-card);
    opacity: 0.7;
    transition: opacity 250ms var(--timing-function);
    background-image: url('/img/dark-front-page.png');

    &:hover {
      opacity: 1;
      content: url('/img/light-front-page.png');
    }
  }
}
</style>
