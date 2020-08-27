import {AbstractHandler} from "@/router/handlers/abstractHandler";
import {Route} from "vue-router";
import store from "@/store";

export default class AfterAuthHandler extends AbstractHandler {
  public next(to: Route) {
    if (to.matched.some(record => record.meta.forceAfterAuth)) {
      if(store.getters['auth/isLoggedIn']) {
        this.process()
        return
      }
    }
    super.next(to)
  }
}
