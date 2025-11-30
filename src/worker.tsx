import {layout, render, route} from "rwsdk/router";
import {defineApp} from "rwsdk/worker";

import {Document} from "@/app/Document";
import {setCommonHeaders} from "@/app/headers";
import {AppLayout} from "@/app/layouts/AppLayout";
import {Home} from "@/app/pages/Home";
import NotFound from "@/app/pages/NotFound";
import Pong from "@/app/pages/Pong";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ctx}) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    layout(AppLayout, [route("/", Home), route("/ping", Pong), route("/*", NotFound)]),
  ]),
]);
