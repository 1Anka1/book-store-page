<template>
  <section class="chapter section">
    <div class="chapter__container container">
      <Title center>The Chapter Includes</Title>
      <div class="chapter__book-content">
        <ul class="chapter__book-content-list">
          <li class="chapter__book-content-items">
            <h3 class="chapter__book-content-title">Chapter - 01 Get Started Intro</h3>
            <p class="chapter__book-content-description">
              Making this the first true value generator on the Internet. It of over 200 Latin
              words, combined with a handful.
            </p>
            <div class="chapter__book-details-wrapper">
              <div class="chapter__book-details">Pages: <span>85 pages</span></div>
              <div class="chapter__book-details">Length: <span>1 Hour 15 mins</span></div>
            </div>
          </li>
          <li class="chapter__book-content-items">
            <h3 class="chapter__book-content-title">Chapter - 02 Create a Massive Content</h3>
            <p class="chapter__book-content-description">
              Making this the first true value generator on the Internet. It of over 200 Latin
              words, combined with a handful.
            </p>
            <div class="chapter__book-details-wrapper">
              <div class="chapter__book-details">Pages: <span>85 pages</span></div>
              <div class="chapter__book-details">Length: <span>1 Hour 15 mins</span></div>
            </div>
          </li>
          <li class="chapter__book-content-items">
            <h3 class="chapter__book-content-title">Chapter - 03 Maintaining the Creative Arcs</h3>
            <p class="chapter__book-content-description">
              Making this the first true value generator on the Internet. It of over 200 Latin
              words, combined with a handful.
            </p>
            <div class="chapter__book-details-wrapper">
              <div class="chapter__book-details">Pages: <span>85 pages</span></div>
              <div class="chapter__book-details">Length: <span>1 Hour 15 mins</span></div>
            </div>
          </li>
          <li class="chapter__book-content-items">
            <h3 class="chapter__book-content-title">Chapter - 04 The Conclusion</h3>
            <p class="chapter__book-content-description">
              Making this the first true value generator on the Internet. It of over 200 Latin
              words, combined with a handful.
            </p>
            <div class="chapter__book-details-wrapper">
              <div class="chapter__book-details">Pages: <span>85 pages</span></div>
              <div class="chapter__book-details">Length: <span>1 Hour 15 mins</span></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chapter__subscription">
        <Button class="chapter__button">Start a 15-Days Free Trial</Button>
        <p>
          Short description about each chapter <br /><a class="chapter__subscription-link" href="#"
            >Have any questions? </a
          >Contact us!
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.chapter {
  background-color: var(--background-color);

  &__book-content-list {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(1, 1fr);

    @include breakpoint($screen-lg) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }
  &__book-content-items {
    padding: 40px 50px;
    background-color: var(--primary-text-color);
  }

  &__book-content-title {
    color: var(--secondary-color);
    margin-bottom: 10px;
    font: 700 20px/1.5 var(--secondary-font);
  }

  &__book-content-description {
    margin-bottom: 20px;
  }

  &__book-details-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__book-details {
    display: block;
    padding-left: 20px;
    position: relative;
    font-size: 20px;
    font-weight: 700;
    font-family: var(--secondary-font);
    color: var(--secondary-color);

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
  }

  &__book-content {
    margin-bottom: 80px;
  }

  &__subscription {
    text-align: center;
  }

  &__button {
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 30px;
  }

  &__subscription-link {
    color: var(--secondary-color);
  }
}
</style>
