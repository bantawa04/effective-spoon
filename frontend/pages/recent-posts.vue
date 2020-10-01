<template>
  <b-container class="container-wrapper">
    <b-row>
      <b-col sm="12 " md="8" lg="8">
        <b-row class="posts-wrapper">
          <b-col>
            <div v-for="i in 3" :key="i" class="recent-article">
              <b-row>
                <b-col cols="4" sm="12 " md="4" lg="4">
                  <b-img-lazy
                    :src="'https://picsum.photos/600/?image='+i"
                    class="recent-article-image"
                    fluid
                  />
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
                    asperiores beatae cupiditate dolorum eos laboriosam libero minima minus modi molestias nam porro
                    quaerat
                    reiciendis, rerum saepe sed similique temporibus ullam?
                  </p>
                  <b-link to="#" class="recent-read-link">
                    Continue Reading
                  </b-link>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row class="pagination-wrapper">
          <b-col>
            <Pagination />
          </b-col>
        </b-row>
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
import Search from '@/components/widgets/search'
import Newsletter from '@/components/widgets/Newsletter'
import RecentPosts from '@/components/widgets/recentPosts'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Search,
    Newsletter,
    RecentPosts,
    Pagination
  }
}
</script>

<style scoped>

</style>
