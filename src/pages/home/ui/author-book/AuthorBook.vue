<template>
  <section class="author-book section">
    <div class="author-book__container container">
      <Title center>Author’s Book Includes</Title>
      <ul class="author-book__list">
        <li class="author-book__item">
          <img
            src="/img/atomic-one-book.png"
            alt="Atomic One's Book Title"
            width="300"
            height="400"
          />
          <div class="author-book__item-information">
            <h3 class="author-book__book-title">Atomic One’s</h3>
            <p class="author-book__book-describe">
              Many variations of passages of Lorem Ipsum willing araise alteration in some form.
            </p>
            <ul class="author-book__list-details">
              <li class="author-book__item-details">
                Pages: <br />
                <span>586 pages</span>
              </li>
              <li class="author-book__item-details">
                Length: <br />
                <span>10 Hours</span>
              </li>
            </ul>
            <Button outline>Order today</Button>
          </div>
        </li>
        <li class="author-book__item">
          <img
            src="/img/light-front-page.png"
            alt="The Dark Light Title"
            width="300"
            height="400"
          />
          <div class="author-book__item-information">
            <h3 class="author-book__book-title">The Dark Light</h3>
            <p class="author-book__book-describe">
              Many variations of passages of Lorem Ipsum willing araise alteration in some form.
            </p>
            <ul class="author-book__list-details">
              <li class="author-book__item-details">
                Pages: <br />
                <span>586 pages</span>
              </li>
              <li class="author-book__item-details">Length: <br /><span>10 Hours</span></li>
            </ul>
            <Button outline>Order today</Button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.author-book {
  &_title::after {
    background: var(--primary-color);
    content: '';
    display: block;
    width: 55px;
    height: 3px;
    margin-bottom: 15px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: -30px;
  }

  &__item {
    display: flex;
    flex-basis: calc((100% - 60px) / 2);
    margin-top: 30px;
    margin-left: 30px;

    & > img {
      border: 8px solid var(--border-color-card);
      margin-right: 50px;
    }
  }

  &__item-information {
    margin-top: auto;
    margin-bottom: auto;
  }

  &__book-title {
    color: var(--secondary-color);
    font: 700 32px/1.5 var(--secondary-font);
    margin-bottom: 10px;
  }

  &__book-describe {
    margin-bottom: 15px;
  }

  &__list-details {
    display: flex;
  }

  &__item-details {
    display: block;
    padding-left: 20px;
    position: relative;
    font: 700 24px/1.5 var(--secondary-font);
    color: var(--secondary-color);
    margin-bottom: 30px;

    &::before {
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

    & > span {
      font: 400 19px/1.5 var(--primary-font);
      color: var(--body-color);
    }
  }
}
</style>
