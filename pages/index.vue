<template>
  <div>
    <Header />
    <div id="wrapper">
        <div class="content">
          <HeroSection />

          <DestinationSection />

          <RecentlyaddedSection />

          <MostpopularSection />

          <WhychooseusSection />

          <Testimonials />
        </div>
    </div>
    <!--div>
      <Logo />
      <h1 class="title">
        booking-chicaparts
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>

      <div id="components-demo">
        <button-counter></button-counter>
      </div>

    </div-->
    <Footer />
  </div>
</template>


<script>
import Vue from 'vue'
export default {}
</script>

<style>
.container-vue {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
