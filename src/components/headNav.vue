<template>
  <nav class="nav-bar">
    <ul class="nav-tabs layout">
      <li v-for="(page,index) in tabs" :key="index">
        <router-link :to="{name:page.link}" class="items">{{page.label}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    msg: String,
  },
})
export default class HeadNav extends Vue {
  tabs: Array<Object> = [
    { label: '首页', link: 'index' },
    { label: '服务内容', link: 'content' },
    { label: '产品展示', link: 'products' },
    { label: '关于我们', link: 'about' },
  ];
}
</script>

<style lang='scss' scoped>
.lay {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-bar {
  height: 60px;
  background: gray;
}
.nav-tabs {
  @extend .lay;
  height:100%;
  li {
    padding: 0 0.625rem;
    .items {
      font-size:18px;
      color:#000;
      &:hover {
        text-decoration: none;
        color:#eee;
      }
      &:active{
        color:#eee!important
      }
    }
  }
}
.router-link-active {
  font-size: 20px!important;
  color: #fff!important;
}
</style>

