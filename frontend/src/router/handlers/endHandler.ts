import {AbstractHandler} from "@/router/handlers/abstractHandler";
import {Route} from "vue-router";

export default class EndHandler extends AbstractHandler {
  public next(to: Route) {
    this.process()
  }
}
