import { createStore } from 'vuex'


const store = createStore({
    state: {
       count: 0
     },
     mutations: {
         setCount: (state, count) => state.count = count,
     },
     getters: {
         getCount: (state) =>
         {
             return state.count
         }
     },
     computed: {
        studentsCount () {
          return this.$store.getters.getCount
        }
      }  
 })
export default store;
