import { createStore } from "vuex";
import { postModule } from "./PostModule";

export default createStore({
   state:{
   },
   modules:{
      post: postModule
   }
})