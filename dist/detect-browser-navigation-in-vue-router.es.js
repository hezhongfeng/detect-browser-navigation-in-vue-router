const f = {
  install(r, { router: t, backCallback: i, forwardCallback: l } = {
    router: null,
    backCallback: null,
    forwardCallback: null
  }) {
    if (!t)
      throw Error("router is required");
    let e = null;
    t.options.history.listen((n, a, o) => {
      e = o;
    }), t.beforeEach(() => {
      e && (e.direction === "back" && i ? i(e.delta) : e.direction === "forward" && l && l(e.delta), e = null);
    });
  }
};
export {
  f as default
};
