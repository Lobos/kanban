import { createStore } from 'vuex'
import kanban from './kanban'

export default createStore({
  modules: {
    kanban,
  },
})
