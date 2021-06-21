<template>
  <div>
    <Header />
    <div id="wrapper">
        <div class="content">

          <ParallaxSection />

          <Breadscrumbs />

          <!--  section-->
          <section class="grey-blue-bg small-padding" id="sec1">
            <div class="container">
              <div class="row">

                <SidebarFilter />

                <ListingsSection />

              </div>
                  <!--row end-->
            </div>
            <div class="limit-box fl-wrap"></div>
          </section>
          <!--  section end-->

        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {}

</script>

