import Vue from 'vue'
import Router from 'vue-router'
import Fitness from "../pages/Fitness/Fitness";
import Music from "../pages/Music/Music";
import Social from "../pages/Social/Social";
import Video from "../pages/Video/Video";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/fitness',
    },
    {
      path: '/fitness',
      name: 'Fitness',
      component: Fitness
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
  ]
})
