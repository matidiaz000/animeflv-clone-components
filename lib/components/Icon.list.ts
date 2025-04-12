import { lazy as _lazy } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function lazy(importFn: Function) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Add: lazy(async () => import("./assets/add.svg")),
  User: lazy(async () => import("./assets/user.svg")),
  Calendar: lazy(async () => import("./assets/calendar.svg")),
};
