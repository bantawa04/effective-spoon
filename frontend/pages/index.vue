<template>
  <b-container class="home-wrapper">
    <b-row>
      <b-col sm="12 " md="8" lg="8" class="main-content">
        <div class="featured-article">
          <b-img
            src="https://picsum.photos/1024/400/?image=41"
            fluid-grow
            alt="Responsive image"
            class="article-image"
          />
          <h2 class="article-title">
            Featured article title
          </h2>
          <p class="article-info">
            13 July, 2020 | 3 comments
          </p>
          <p class="article-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dolores enim
            expedita explicabo iste labore perferendis qui. Ab, accusamus, deleniti! Aut corporis eius esse id
            laudantium natus nobis repudiandae.
          </p>
          <b-link class="article-read-more btn btn-pry-color" to="#">
            Continue Reading
          </b-link>
        </div>

        <div v-for="i in 3" :key="i" class="recent-article">
          <b-row>
            <b-col cols="4" sm="12 " md="4" lg="4">
              <b-img-lazy :src="'https://picsum.photos/600/?image='+i" class="recent-article-image" fluid />
            </b-col>
            <b-col cols="8" sm="12 " md="8" lg="8">
              <h3 class="recent-article-title">
                Recent article title
              </h3>
              <p class="recent-article-info">
                July 1, 2020 | 6 Comments
              </p>
              <p class="recent-article-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                asperiores beatae cupiditate dolorum eos laboriosam libero minima minus modi molestias nam porro quaerat
                reiciendis, rerum saepe sed similique temporibus ullam?
              </p>
              <b-link to="#" class="recent-read-link">
                Continue Reading
              </b-link>
            </b-col>
          </b-row>
        </div>

        <Pagination />
      </b-col>
      <b-col sm="12 " md="4" lg="4" class="aside">
        <Search />
        <Newsletter />
        <RecentPosts />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Pagination from '@/components/Pagination'
import Search from '@/components/widgets/search'
import Newsletter from '@/components/widgets/Newsletter'
import RecentPosts from '@/components/widgets/recentPosts'

export default {
  components: {
    Pagination,
    Search,
    Newsletter,
    RecentPosts
  },
  data () {
    return {
      mainProps: {
        blank: true
      }
    }
  }
}
</script>
