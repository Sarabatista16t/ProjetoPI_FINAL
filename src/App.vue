<template>
  <Layout>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <b-carousel>
          <b-carousel-item v-for="(image, i) in images" :key="i">
            <figure class="image is-16by9">
              <img :src="image" />
            </figure>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      images: [
        require('./assets/images/slideshow1.png'),
        require('./assets/images/slideshow2.png'),
        require('./assets/images/slideshow3.png')
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
