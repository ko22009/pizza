import {Route} from "vue-router";

export interface Handler {
  setNext(handler: Handler): Handler

  next(to: Route): void
}
