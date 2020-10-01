<template>
  <div class="footer-wrapper">
    <footer>
      <b-container>
        <b-row>
          <b-col class="footer-widget">
            <h4 class="widget-title">
              About author
            </h4>
            <img src="https://randomuser.me/api/portraits/women/50.jpg" class="float-left pr-2 pb-1" alt="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt ea fuga nemo voluptatibus?
              A
              ab accusamus, inventore, ipsa laborum, nisi nobis nostrum obcaecati optio perspiciatis placeat sapiente
              suscipit voluptates!
            </p>
          </b-col>
          <b-col class="footer-widget">
            <h4 class="widget-title">
              Tags
            </h4>
            <div class="tags-wrapper">
              <b-link v-for="i in 10" :key="i" href="#foo" class="btn tag-btn">
                Tag name
              </b-link>
            </div>
          </b-col>
          <b-col class="footer-widget">
            <h4 class="widget-title">
              Get social
            </h4>
            <div class="social-wrapper d-flex flex-row">
              <b-link href="#foo">
                <i class="fab fa-facebook-f" />
              </b-link>
              <b-link href="#foo">
                <i class="fab fa-twitter" />
              </b-link>
              <b-link href="#foo">
                <i class="fab fa-instagram" />
              </b-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <b-container>
      <b-row class="copyright">
        <b-col>
          <p> &#169; 2020 Futura. All rights reserved.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
