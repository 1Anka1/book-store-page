<template>
    <section class="subscription section">
          <div class="subscription__container container">
            <div class="subscription__wrapper">
              <h2 class="title title--blue title--center">Read a free chapter</h2>
              <p class="subscription__description">
                Making this the first true value generator on the Internet. It of over 200 Latin words,
                combined with a handful.
              </p>
              <div class="subscription__input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email id"
                  aria-label="Your Email id"
                  aria-describedby="button-addon2"
                />
                <button class="button button--secondary" type="button" id="button-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
</template>

<style>
.subscription__wrapper {
  background-color: var(--primary-color);
  text-align: center;
  color: var(--secondary-color);
  padding: 100px;
}

.subscription__description {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.subscription__input-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>