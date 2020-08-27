import {AbstractHandler} from "@/router/handlers/abstractHandler";
import {Route} from "vue-router";
import store from "@/store";

export default class BeforeShopHandler extends AbstractHandler {
  public next(to: Route) {
    if(to.matched.some(record => record.path == '/shop') && !store.getters['shop/count']) this.process()
    else super.next(to)
  }
}
