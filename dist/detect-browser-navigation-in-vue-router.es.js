const f = {
  install(l, { router: o, backCallback: e, forwardCallback: r } = {
    router: null,
    backCallback: null,
    forwardCallback: null
  }) {
    if (!o)
      throw Error("router is required");
    let i = null;
    o.options.history.listen((n, a, t) => {
      i = t;
    }), o.beforeEach(() => {
      i && (i.direction === "back" && e ? e() : i.direction === "forward" && r && r(), i = null);
    });
  }
};
export {
  f as default
};
