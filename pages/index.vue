<template>
  <section class="container">
    <div></div>
    <div class="man">
      <img src="@/assets/han.png" alt="" />
    </div>

    <h1 class="name">韓國瑜</h1>
    <h1 class="action">選 總統</h1>

    <nav class="menu">
      <nuxt-link to="/support">我要表示支持！</nuxt-link>
      <nuxt-link to="/resources">韓粉資源整理</nuxt-link>
      <a href="mailto:han.lets.go@gmail.com">回報</a>
    </nav>

    <nuxt-child class="content" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$gap: 20px;

.container {
  user-select: none;

  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;
  background-color: red;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
}

.man {
  position: fixed;
  bottom: 0px;
  left: 0px;

  width: 85vw;
  margin-left: -10vh;
  margin-bottom: -3%;

  pointer-events: none;

  z-index: 200;

  img {
    max-width: 100%;
  }
}

h1 {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.8);

  z-index: 300;

  &.name {
    position: fixed;

    font-size: 10vw;

    top: 20px;
    left: 5vw;
  }

  &.action {
    position: fixed;

    font-size: 15vw;

    bottom: 20px;
    right: 5vw;
  }
}

.menu {
  position: fixed;

  line-height: 10vw;
  top: $gap;
  right: 15vw;

  font-size: 30px;
  color: white;

  z-index: 300;

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
    margin: 0px 20px;
  }

  @media all and (max-width: $l-media) {
    right: 3vw;
    font-size: 26px;

    a {
      margin: 0px 10px;
    }
  }

  @media all and (max-width: $m-media + $gap) {
    top: $gap + 80px;
    right: $gap;
    font-size: 20px;
    line-height: 1.5;
  }
}

.content {
  // background-color: white;
  width: 768px;
  // height: 450px;
  // height: 768px * 0.56;
  height: 768px * 0.6;

  position: absolute;
  right: $gap;
  top: calc(10vw + #{$gap});

  z-index: 100;

  @media all and (min-width: $l-media) {
    top: calc(10vw - #{$gap});
  }

  @media all and (max-width: $m-media + $gap) {
    top: calc(10vw + 120px);

    right: 0px;
    width: 100vw;
    height: 100vw * 0.6;
  }
}

@media all and (max-width: $s-media) {
  h1 {
    &.name {
      font-size: 64px;
    }

    &.action {
      font-size: 84px;
    }
  }

  .menu {
    font-size: 16px;

    a {
      margin: 0px 5px;
    }
  }

  .man {
    right: 0px;
    left: unset;

    height: 50vh;
    width: 100vw;

    margin-left: -10vh;
    margin-bottom: -3%;

    z-index: 200;

    img {
      max-height: 100%;
      max-width: unset;
    }
  }
}
</style>
