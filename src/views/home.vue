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
    <div class="columns is-centered">
      <div class="column is-one-fifth">
        <div class="card">
          <div class="card-image has-background-link">
            <figure class="image">
              <img src="@assets/images/clip-education.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Notícias</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth">
        <div class="card">
          <div class="card-image has-background-link">
            <figure class="image">
              <img src="@assets/images/clip-3.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Projetos</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth">
        <div class="card">
          <div class="card-image has-background-link">
            <figure class="image">
              <img src="@assets/images/clip-woman-resting-on-nature.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Testemunhos</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@layouts/main.vue'

export default {
  components: {
    Layout
  },
  data () {
    return {
      images: [
        require('@assets/images/bookshelves-packed-with-books.jpg'),
        require('@assets/images/wondering-what-couldve-gone-wrong-here.jpg'),
        require('@assets/images/minimalistic-workspace.jpg')
      ]
    }
  }
}
</script>