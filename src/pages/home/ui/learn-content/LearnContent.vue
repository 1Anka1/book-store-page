<template>
  <section class="learn-content section">
    <div class="learn-content__container container">
      <Title center>What will you learn?</Title>
      <div class="learn-content__wrapper">
        <div class="learn-content__info-capsule">
          <ul class="learn-content__info-list">
            <li class="learn-content__info-items">
              <span>01</span> <br />
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </li>
            <li class="learn-content__info-items">
              <span>02</span> <br />
              Consume streaming data using Spark Streaming, Flink, and Storm.
            </li>
            <li class="learn-content__info-items">
              <span>03</span> <br />
              Choose an appropriate data storage technology for your application
            </li>
            <li class="learn-content__info-items">
              <span>04</span> <br />
              Analyze non-relational data using HBase, Cassandra, and MongoDB.
            </li>
          </ul>
        </div>
        <div class="learn-content__woman-photo">
          <img src="/img/reading-girl.png" alt="Reading girl" width="550" height="650" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.learn-content__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.learn-content__info-list {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 290px);
}

.learn-content__info-items {
  background-color: var(--background-color);
  font: 700 15px/1.5 var(--secondary-font);
  color: var(--secondary-color);
  padding: 40px 30px;
  
  & > span {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  border-radius: 50%;
}
}

.learn-content__woman-photo {
  margin-left: 100px;
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
</style>
