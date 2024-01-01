<template>
  <section class="about-writer section">
    <div class="about-writer__container container">
      <div class="about-writer__author-photo">
        <img src="/img/author.jpg" alt="Author of book" width="550" height="650" />
      </div>
      <div class="about-writer__author-details">
        <Title>About Author</Title>
        <p class="about-writer__information">
          All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as
          necessary, making this the first true value generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful.
        </p>
        <ul class="about-writer__list-data">
          <li class="about-writer__list-data-item">
            <span>02</span><br />
            Books published
          </li>
          <li class="about-writer__list-data-item">
            <span>4.5</span><br />
            User Reviews
          </li>
          <li class="about-writer__list-data-item"><span>04</span> <br />Best Seller Awards</li>
        </ul>
        <div class="about-writer__contact-info">
          <img src="/img/QR-code.jpg" alt="QR-code" />
          <ul class="about-writer__contact-info-list">
            <li class="about-writer__contact-info-item">John Abraham , Ph.d</li>
            <li>
              <a href="mailto:johnabraham@gmail.com" class="about-writer__contact-info-list-link">
                Mail : johnabraham@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:(+2) 123 545 9000" class="about-writer__contact-info-list-link">
                Phone : (+2) 123 545 9000
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-writer {
  background-color: var(--background-color);

  &__author-photo {
    display: grid;
    place-items: center;
    margin-bottom: 20px;

    @include breakpoint($screen-lg) {
      margin-right: 100px;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50px;
        left: 50px;
        height: 100%;
        width: 100%;
        border: 15px solid var(--primary-color);
      }
    }
  }

  &__container {
    @include breakpoint($screen-md) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }

  &__author-details {
    @include breakpoint($screen-lg) {
      max-width: 600px;
    }
  }

  &__list-data {
    display: flex;
    align-items: center;
    margin: 20px;
  }

  &__list-data-item {
    position: relative;
    padding: 0 20px;

    &:not(:last-child)::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      height: 100%;
      width: 2px;
      background-color: var(--primary-color);
    }

    & > span {
      font: 700 55px/1 var(--secondary-font);
      color: var(--secondary-color);
    }
  }

  &__contact-info {
    display: flex;
    background-color: var(--secondary-color);
    padding: 15px;
  }

  &__contact-info-list {
    justify-content: center;
    padding: 20px;
  }

  &__contact-info-item {
    font: 700 22px/1.5 var(--secondary-font);
    color: var(--primary-color);
  }

  &__contact-info-list-link {
    color: var(--light-color);
  }
}
</style>
