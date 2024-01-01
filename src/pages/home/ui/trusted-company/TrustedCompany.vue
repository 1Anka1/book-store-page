<template>
  <section class="trusted-company section">
    <div class="container">
      <Title center>Trusted by the Best</Title>
      <div class="trusted-company__company-wrapper">
        <ul class="trusted-company__company-list">
          <li class="trusted-company__company-items">
            <div class="trusted-company__company-icon">
              <svg class="trusted-company__logo-icon" width="100" height="90">
                <use href="@/assets/images/sprite-logo.svg#icon-amazen"></use>
              </svg>
            </div>
            <h3 class="trusted-company__company-title">Amazen Corp</h3>
            <p>A long established fact that a who looking at its layout.</p>
          </li>
          <li class="trusted-company__company-items">
            <div class="trusted-company__company-icon">
              <svg class="trusted-company__logo-icon" width="100" height="90">
                <use href="@/assets/images/sprite-logo.svg#icon-megan"></use>
              </svg>
            </div>
            <h3 class="trusted-company__company-title">Megan Books</h3>
            <p>A long established fact that a who looking at its layout.</p>
          </li>
          <li class="trusted-company__company-items">
            <div class="trusted-company__company-icon">
              <svg class="trusted-company__logo-icon" width="100" height="90">
                <use href="@/assets/images/sprite-logo.svg#icon-los"></use>
              </svg>
            </div>
            <h3 class="trusted-company__company-title">Los Books</h3>
            <p>A long established fact that a who looking at its layout.</p>
          </li>
          <li class="trusted-company__company-items">
            <div class="trusted-company__company-icon">
              <svg class="trusted-company__logo-icon" width="100" height="90">
                <use href="@/assets/images/sprite-logo.svg#icon-urban-lib"></use>
              </svg>
            </div>
            <h3 class="trusted-company__company-title">Urban Lib</h3>
            <p>A long established fact that a who looking at its layout.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.trusted-company {
  &__company-icon {
    text-align: center;
    margin-bottom: 30px;
    fill: var(--secondary-color);
  }

  &__company-title {
    font: 700 24px/1.2 var(--secondary-font);
    margin-bottom: 10px;
    text-align: center;
    color: var(--secondary-color);
  }

  &__company-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @include breakpoint($screen-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__company-items {
    padding: 20px;
    border-radius: 5px;
  }
}
</style>
