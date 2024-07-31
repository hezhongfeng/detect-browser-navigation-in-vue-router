import { Router } from 'vue-router';

interface DetectBrowserNavigationInVueRouterOption {
  router: Router | null;
  backCallback: Function | null;
  forwardCallback: Function | null;
}

const DetectBrowserNavigationInVueRouter = {
  install(
    _app: any,
    { router, backCallback, forwardCallback }: DetectBrowserNavigationInVueRouterOption = {
      router: null,
      backCallback: null,
      forwardCallback: null
    }
  ) {
    if (!router) {
      throw Error('router is required');
    }
    let navigationInfo: { direction: string; delta: number } | null = null;
    router.options.history.listen((_to, _from, info) => {
      navigationInfo = info;
    });

    router.beforeEach(() => {
      if (navigationInfo) {
        if (navigationInfo.direction === 'back' && backCallback) {
          backCallback(navigationInfo.delta);
        } else if (navigationInfo.direction === 'forward' && forwardCallback) {
          forwardCallback(navigationInfo.delta);
        }
        // need to reset it to null
        navigationInfo = null;
      }
    });
  }
};

export default DetectBrowserNavigationInVueRouter;
