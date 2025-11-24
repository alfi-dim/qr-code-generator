import {render, route} from "rwsdk/router";
import {defineApp} from "rwsdk/worker";

import {Document} from "@/app/Document";
import {setCommonHeaders} from "@/app/headers";
import {Home} from "@/app/pages/Home";
import Pong from "@/app/pages/Pong";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ctx}) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    route("/", () => new Response("Hello from RWSDK")),
    route("/home", Home),
    route("/ping", Pong),
  ]),
]);
