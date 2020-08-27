import {AbstractHandler} from "@/router/handlers/abstractHandler";
import {Route} from "vue-router";
import store from "@/store";

export default class BeforeAuthHandler extends AbstractHandler {
  public next(to: Route) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if(!store.getters['auth/isLoggedIn']) {
        this.process()
        return
      }
    }
    super.next(to)
  }
}
