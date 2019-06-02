<template>
  <section>
    <div class="support">
      <span class="btn" @click="donate">
        <div class="text">
          點擊 <br />
          表支持!
        </div>
      </span>

      <span class="total">
        <p class="count">{{ countBy10k }}萬人次</p>
        <p class="desc">*一天限按一次</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 12382000,
      purchased: false
    }
  },
  computed: {
    countBy10k() {
      return ~~(this.count / 10000)
    }
  },
  methods: {
    donate() {
      if (!this.purchased) {
        this.$gtag('event', 'sign_up')
        this.$fb.track('CompleteRegistration')
      } else {
        alert('一天限按一次')
        this.$gtag('event', 'view_item')
        this.$fb.track('ViewContent')
      }

      this.purchased = true
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #3b60c3;

.support {
  height: 300px;

  display: flex;

  align-items: center;
  justify-content: left;

  margin: 0px 50px;

  @media all and (max-width: $l-media) {
    justify-content: flex-end;
  }

  @media all and (max-width: $m-media) {
    margin: 0px 20px;
  }
}

.btn {
  display: inline-block;
  $r: 240px;
  width: $r;
  height: $r;

  background-color: white;
  border: $blue 8px solid;
  border-radius: $r;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  cursor: pointer;

  .text {
    display: flex;
    font-size: 52px;
    color: $blue;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media all and (max-width: $m-media) {
    $r: 200px;
    width: $r;
    height: $r;

    .text {
      font-size: 36px;
    }
  }

  @media all and (max-width: $s-media) {
    $r: 116px;
    width: $r;
    height: $r;

    .text {
      font-size: 20px;
    }
  }
}

.total {
  display: inline-block;
  text-align: left;

  margin-left: 30px;

  .count {
    font-size: 48px;
  }
  .desc {
    font-size: 30px;
  }

  @media all and (max-width: $m-media) {
    .count {
      font-size: 32px;
    }
    .desc {
      font-size: 18px;
    }
  }

  @media all and (max-width: $s-media) {
    .count {
      font-size: 20px;
    }
    .desc {
      font-size: 14px;
    }
  }
}
</style>
