<template>
  <section class="footer">
    <div class="footer__container container">
      <div class="footer__container-icons-list">
        <div class="footer__container-list">
          <svg class="icon" width="25" height="28">
            <use href="@/assets/images/sprite.svg#page"></use>
          </svg>
          <h1 class="title--light caption--logo">Pages</h1>
        </div>
        <ul class="footer__social-network-list">
          <li>
            <a class="social-network-link social-link--secondary" href="#">
              <svg class="social-network-icon--footer" width="18" height="18">
                <use href="@/assets/images/sprite.svg#facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a class="social-network-link social-link--secondary" href="#">
              <svg class="social-network-icon--footer" width="18" height="18">
                <use href="@/assets/images/sprite.svg#twitter"></use>
              </svg>
            </a>
          </li>
          <li>
            <a class="social-network-link social-link--secondary" href="#">
              <svg class="social-network-icon--footer" width="18" height="18">
                <use href="@/assets/images/sprite.svg#linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a class="social-network-link social-link--secondary" href="#">
              <svg class="social-network-icon--footer" width="18" height="18">
                <use href="@/assets/images/sprite.svg#instagram"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__wrapper">
        <ul class="footer__nav-link-list">
          <h3 class="footer__title">Explore</h3>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Home</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">About Us</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Services</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Appointments</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Blog</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <ul class="footer__nav-link-list">
          <h3 class="footer__title">Utility Pages</h3>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Start here</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Style guide</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">404 not found</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Password protected</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Licenses</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__header__nav-link" href="#">Changelog</a>
          </li>
        </ul>
        <ul class="footer__address-list">
          <h3 class="footer__title">Keep in Touch</h3>
          <li class="footer__list-item">
            <a
              class="footer__address-list-link"
              target="_blank"
              href="https://maps.app.goo.gl/RGSzBohB3G2yKyMB8"
              >Address :
              <span class="footer__address-list-link-info"
                >24A Kingston St, Los Vegas NC 28202, USA.</span
              ></a
            >
          </li>
          <li class="footer__list-item">
            <a class="footer__address-list-link" href="mailto:support@doctors.com">
              Mail : <span class="footer__address-list-link-info">support@doctors.com</span></a
            >
          </li>
          <li class="footer__list-item">
            <a class="footer__address-list-link" href="tel:(+22)1234567900">
              Phone : <span class="footer__address-list-link-info">(+22) 123 - 4567 - 900</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.footer {
  background-color: var(--secondary-color);

  &__container-icons-list {
    display: flex;
    justify-content: space-between;
    align-items: last baseline;
    margin-bottom: 20px;

    @include breakpoint($screen-md) {
      display: grid;
    }

    @include breakpoint($screen-lg) {
      display: block;
    }
  }

  &__container {
    @include breakpoint($screen-lg) {
      display: flex;
    }
  }

  &__container-list {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    color: var(--secondary-color);
  }

  &__social-network-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 10px;

    @include breakpoint($screen-lg) {
      grid-template-columns: repeat(4, 3rem);
    }

    & > li {
      @include breakpoint($screen-lg) {
        margin-right: 20px;
      }
      border: 1px solid var(--primary-color);
    }
    & > li:not(:last-child) {
      @include breakpoint($screen-lg) {
        margin-right: 10px;
      }
    }
  }

  &__wrapper:not(:first-child) {
    display: flex;
    margin-left: auto;
    gap: 50px;
  }

  &__list-item:not(:last-child) {
    margin-bottom: 15px;
  }

  &__title {
    margin-bottom: 20px;
    color: var(--primary-text-color);
  }

  &__header__nav-link {
    color: var(--light-color);
    transition: color 250ms var(--timing-function);

    &:hover {
      color: var(--primary-text-color);
    }
  }

  &__address-list-link {
    font-weight: 700;
    font-family: var(--secondary-font);
    color: var(--primary-text-color);
  }

  &__address-list-link-info {
    font-weight: 400;
    font-family: var(--primary-font);
    color: var(--light-color);
  }
}

.caption--logo {
  color: var(--primary-text-color);
  font-size: 23px;
}
</style>
