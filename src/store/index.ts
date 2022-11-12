import { createStore } from 'vuex'
import data from '@/data.json'

export default createStore({
  state: {
    movie: data
  },
  getters: {
    trendingList(state: any) {
      // return JSON.parse(JSON.stringify(this.movie))
      const movie : [] = JSON.parse(JSON.stringify(state.movie))
        movie.filter((item: any): any => {
          return item.isTrending === true;
      })
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
