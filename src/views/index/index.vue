
<template>
  <div class="wrapper">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in carouselImgs" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    11111

  </div>
</template>

<script src="./index.ts" lang="ts">
</script>

<style lang="scss" src='./index.scss'></style>
