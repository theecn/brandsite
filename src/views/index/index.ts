import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    msg: String,
  },
})
export default class home extends Vue {
  name:string = 'index';
  carouselImgs:Array<Object> = [1,2,3]
}