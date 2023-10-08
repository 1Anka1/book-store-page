<template>
    <section class="testimonial section">
        <div class="testimonial__container container">
            <div>
                <h2 class="title">What Readers Say About the Book</h2>
                <p class="testimonial__book-description">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                </p>
                <div class="testimonial__rating">(4.8/5)</div>
                <p>Overall Customer Ratings</p>
            </div>
            <div class="testimonial__block">
                <div class="testimonial__wrapper">
                    <div class="testimonial__user-review">
                        <div class="testimonial__user">
                            <img class="testimonial__user-photo" src="/img/user-photo-one.png" width="85" height="85"
                                alt="User Photo" />
                            <h3 class="testimonial__user-name">Martin Philips</h3>
                        </div>
                        <h3 class="testimonial__comment">“Awesome Impact”</h3>
                        <p class="testimonial__review">
                            All the Lorem Ipsum generators on the Internet tend to repeat willings predefined
                            chunks value.
                        </p>
                    </div>
                    <div class="testimonial__user-review">
                        <div class="testimonial__user">
                            <img class="testimonial__user-photo" src="/img/user-photo-two.png" width="85" height="85"
                                alt="User Photo" />
                            <h3 class="testimonial__user-name">James Anderson</h3>
                        </div>
                        <h3 class="testimonial__comment">“Mind Blowing Words”</h3>
                        <p class="testimonial__review">
                            All the Lorem Ipsum generators on the Internet tend to repeat willings predefined
                            chunks value.
                        </p>
                    </div>
                </div>
                <div class="testimonial__wrapper">
                    <div class="testimonial__user-review">
                        <div class="testimonial__user">
                            <img class="testimonial__user-photo" src="/img/user-photo-three.png" width="85" height="85"
                                alt="User Photo" />
                            <h3 class="testimonial__user-name">Christina Louis</h3>
                        </div>
                        <h3 class="testimonial__comment">“ Great Books Collections”</h3>
                        <p class="testimonial__review">
                            All the Lorem Ipsum generators on the Internet tend to repeat willings predefined
                            chunks value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.testimonial__container {
  display: grid;
  gap: 110px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.testimonial__book-description {
  margin-bottom: 30px;
}

.testimonial__rating {
  display: block;
  padding-left: 25px;
  position: relative;
  font: 700 20px/1.5 var(--secondary-font);
  color: var(--secondary-color);
  margin-bottom: 5px;
}

.testimonial__rating::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background-color: var(--primary-color);
  border-radius: 50%;
}

.testimonial__block {
  display: flex;
  align-items: center;
  gap: 30px;
}

.testimonial__wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.testimonial__user-photo {
  border-radius: 50%;
}

.testimonial__user-review {
  padding: 20px 15px;
  background-color: var(--secondary-color);
}

.testimonial__review {
  color: var(--light-color);
}

.testimonial__user {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.testimonial__user-name {
  margin-left: 15px;
  font: 700 20px/1.5 var(--secondary-font);
  color: var(--primary-text-color);
}

.testimonial__comment {
  color: var(--primary-text-color);
  font: 700 15px/1.5 var(--secondary-font);
  margin-bottom: 10px;
}
</style>