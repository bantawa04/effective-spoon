<template>
  <b-container class="single-post">
    <b-row>
      <b-col sm="12 " md="8" lg="8" class="post-wrapper">
        <b-row class="post-content">
          <b-img-lazy src="https://picsum.photos/600/400/?image=90" alt="Image 4" class="post-img"/>
          <p class="post-info">
            <span>In:<b-link to="#">Life</b-link></span>
            <span>Tags:<b-link to="#">Designs</b-link>,</span>
            <span>July 31, 2020 by <strong>John Doe</strong></span>
          </p>
          <h1 class="post-title">Discussion Between Abbott and Costello</h1>
          <div class="post-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut autem consequuntur esse facere
              nostrum quo! Accusamus, aspernatur corporis eaque eius ipsum molestias, mollitia neque quidem similique
              sit
              tempore voluptatem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci aliquam aliquid
              asperiores
              aut autem, ducimus eaque earum et excepturi explicabo fugit ipsam laudantium, magni maiores mollitia nemo,
              non officiis omnis placeat provident quam quo ratione reprehenderit temporibus tenetur velit? Aperiam
              doloribus iure nostrum nulla quisquam quos soluta voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at, autem corporis debitis provident
              quas ratione reiciendis sapiente. Accusamus ad animi consectetur consequuntur dolor dolores eveniet
              facilis
              fuga incidunt, inventore modi molestiae, nobis nulla odit quam quia tempora? A aliquam, assumenda dolor
              dolorum, eligendi enim facere iure maxime non possimus quae quo repudiandae rerum sed similique sint sit
              soluta, tempora voluptate voluptatem! A accusantium atque consequatur ea, est explicabo mollitia nulla
              pariatur placeat quam qui saepe sapiente sit tempore voluptate.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab et modi unde. Alias amet dolorum ea, eaque
              exercitationem fugiat harum laboriosam minima nulla numquam optio placeat repellendus suscipit temporibus
              tenetur?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut autem consequuntur esse facere
              nostrum quo! Accusamus, aspernatur corporis eaque eius ipsum molestias, mollitia neque quidem similique
              sit
              tempore voluptatem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci aliquam aliquid
              asperiores
              aut autem, ducimus eaque earum et excepturi explicabo fugit ipsam laudantium, magni maiores mollitia nemo,
              non officiis omnis placeat provident quam quo ratione reprehenderit temporibus tenetur velit? Aperiam
              doloribus iure nostrum nulla quisquam quos soluta voluptates?</p>
          </div>
        </b-row>

        <b-row class="post-comment-wrapper">
          <b-col cols="12" class="comments">
            <h2 class="comment-counter">3 comments</h2>
            <b-media class="mb-4">
              <template v-slot:aside>
                <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
              </template>

              <h3 class="mt-0 comment-by">Media Title</h3>
              <p class="comment-info">June 14, 2020 - 9:54 am</p>
              <div class="comment-body">
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>

              <b-media>
                <template v-slot:aside>
                  <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                </template>

                <h3 class="mt-0 reply-by">Nested Media</h3>
                <p class="comment-info">June 15, 2015 - 8:42 pm</p>
                <div class="comment-body">
                  <p class="mb-0">
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                  </p>
                </div>
              </b-media>
            </b-media>

            <b-media class="mb-4">
              <template v-slot:aside>
                <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
              </template>

              <h3 class="mt-0 comment-by">Media Title</h3>
              <p class="comment-info">June 26, 2015 - 8:20 pm</p>
              <div class="comment-body">
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </b-media>
          </b-col>
          <b-col cols="12" class="comment-form">
            <h2 class="comment-form-title">Leave a reply</h2>
            <p>Your email address will not be published. Required fields are marked *</p>
            <b-row>
              <b-col cols="12">
                <b-form-group
                  label="Comment"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Enter something..."
                    rows="4"
                    no-resize
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  label="Name *"
                >
                  <b-form-input
                    id="name"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  label="Email *"
                >
                  <b-form-input
                    id="name"
                    type="email"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-button class="btn btn-type-1"> Submit Comment</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12 " md="4" lg="4" class="aside">
        <Search/>
        <Newsletter/>
        <RecentPosts/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Search from '@/components/widgets/search'
import Newsletter from '@/components/widgets/Newsletter'
import RecentPosts from '@/components/widgets/recentPosts'

export default {
  components: {
    Search,
    Newsletter,
    RecentPosts
  }
}
</script>

<style scoped>

</style>
