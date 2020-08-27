import {Handler} from "@/router/handlers/handler";
import {Route} from "vue-router";

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | undefined
  private readonly action: () => void;

  constructor(action: () => void) {
    this.action = action;
  }

  protected process() {
    this.action()
  }

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  public next(to: Route) {
    if (this.nextHandler) {
      return this.nextHandler.next(to)
    }
  }
}
