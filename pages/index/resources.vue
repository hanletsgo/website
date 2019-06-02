<template>
  <section>
    <h1></h1>
    <div class="pages">
      <div class="support">
        <h3 class="category">支持粉專</h3>
        <p
          v-for="(name, link, idx) in pages.support"
          :key="link"
          class="page"
          @click="goPage({ name, link, idx, category: 'support' })"
        >
          <a target="_blank" :href="`//www.facebook.com/${link}/`">
            {{ name }}
          </a>
        </p>
      </div>
      <div class="empathize">
        <h3 class="category">包容粉專</h3>
        <p
          v-for="(name, link, idx) in pages.empathize"
          :key="link"
          class="page"
          @click="goPage({ name, link, idx, category: 'empathize' })"
        >
          <a target="_blank" :href="`//www.facebook.com/${link}/`">
            {{ name }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const pages = {
  support: {
    KaohsiungCEO: '韓國瑜土包子軍團',
    'hantian.news': '韓天新聞',
    'mr.hanfans': '韓國瑜粉絲團'
  },
  empathize: {
    nokmtisgood: '打馬悍將粉絲團',
    FongshanHuangjie: '黃捷 鳳山捷伴同行',
    '館長陳之漢-國際粉絲後援會-195367184626473': '館長陳之漢-國際粉絲後援會'
  }
}

export default {
  data() {
    return {
      pages
    }
  },
  methods: {
    goPage({ name, link, idx, category }) {
      const items = [
        {
          id: link,
          name,
          list_name: `https//www.facebook.com/${link}/`,
          brand: category,
          category,
          variant: category,
          list_position: idx,
          price: 0
        }
      ]

      const content = {
        content_name: name,
        content_category: category,
        content_ids: [link],
        content_type: category,
        value: 0,
        currency: 'USD'
      }

      if (category === 'support') {
        this.$gtag('event', 'add_to_cart', { items })
        this.$fb.track('AddToCart', { content })
      }
      if (category === 'empathize') {
        this.$gtag('event', 'add_to_wishlist', { items })
        this.$fb.track('AddToWishlist', { content })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pages {
  width: 100%;
  height: 100%;

  margin-top: 50px;

  display: flex;

  > div {
    flex: 1;
    width: 50%;
    height: 100%;
  }

  .category {
    font-size: 28px;

    @media all and (max-width: $m-media) {
      font-size: 24px;
    }
  }

  .page {
    font-size: 28px;
    margin: 20px 3px;

    > a {
      color: white;
      // text-decoration: none;
    }

    @media all and (max-width: $m-media) {
      font-size: 20px;
    }

    @media all and (max-width: $s-media) {
      font-size: 14px;
    }
  }
}
</style>
