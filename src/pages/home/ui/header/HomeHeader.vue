<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__container-list">
        <svg class="icon" width="25" height="28">
          <use href="@/assets/images/sprite.svg#page"></use>
        </svg>
        
        <h1 class="title--logo">Pages</h1>
      </div>
      <ul class="header__social-network-list">
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
      <nav class="header__navigation">
        <ul class="header__nav-list">
          <li>
            <a class="header__nav-link" href="#">Home</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Pages</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">About</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Services</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Contact</a>
          </li>
          <li class="header__nav-list-badge">
            <a href="#">
              <svg class="header__basket-icon" width="18" height="17">
                <use href="@/assets/images/sprite.svg#basket"></use>
              </svg>
              <span class="badge">01</span>
            </a>
          </li>
        </ul>
      </nav>
      <Button>Order Today</Button>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: var(--secondary-color);
}

.header__container {
  display: flex;
  align-items: center;
  padding: 20px;
}

.header__container-list {
  display: flex;
  margin-right: 25px;
}

.header__social-network-list {
  display: flex;
  justify-content: center;
  align-items: center;

  & > li:not(:last-child) {
  margin-right: 10px;
}
}
.header__navigation {
  margin-left: auto;
}

.header__nav-list {
  display: flex;
  column-gap: 30px;
}

.header__nav-list-badge {
  position: relative;
  display: inline-block;
}

.header__nav-link {
  color: #fff;
  font-size: 17px;
  line-height: 22px;
  transition: color 250ms var(--timing-function);

  &:hover {
  color: var(--primary-color);
}
}

.header__basket-icon {
  margin-right: 30px;
}
</style>
