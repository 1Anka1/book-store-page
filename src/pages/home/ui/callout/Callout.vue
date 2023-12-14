<template>
  <section class="callout section">
    <div class="callout__container container">
      <div class="callout__advert">
        <Title color="light">Get Book Copy Today!</Title>
        <p class="callout__advert-description">
          This the first true value generator on the Internet. It uses alphas dictionary of over 200
          Latin words.
        </p>
        <Button secondary class="callout__advert-button">Order today</Button>
      </div>
      <div>
        <img class="callout__advert-img" src="/img/book-and-coffee.png" alt="Book and coffee" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.callout {
  background-color: var(--secondary-color);

  &__container {
    display: grid;
    gap: 125px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  &__advert-description {
    margin-bottom: 30px;
  }

  &__advert-button {
    color: var(--primary-text-color);
  }
}
</style>
