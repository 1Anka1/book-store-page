<template>
        <section class="callout section">
          <div class="callout__container container">
            <div class="callout__advert">
              <h2 class="title title--light">Get Book Copy Today!</h2>
              <p class="callout__advert-description">
                This the first true value generator on the Internet. It uses alphas dictionary of over
                200 Latin words.
              </p>
              <button type="button" class="callout__advert-button button button--outline">
                Order today
              </button>
            </div>
            <div>
              <img class="callout__advert-img" src="/img/book-and-coffee.png" alt="Book and coffee" />
            </div>
          </div>
        </section>
</template>

<style>
.callout {
  background-color: var(--secondary-color);
}

.callout__container {
  display: grid;
  gap: 125px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.callout__advert-description {
  margin-bottom: 30px;
}

.callout__advert-button {
  color: var(--primary-text-color);
}
</style>