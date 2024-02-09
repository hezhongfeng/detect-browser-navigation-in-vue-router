import { Router } from 'vue-router';

interface DetectBrowserNavigationInVueRouterOption {
  router: Router;
  backCallback: Function;
  forwardCallback: Function;
}

const DetectBrowserNavigationInVueRouter = {
  install(_app: any, { router, backCallback, forwardCallback }: DetectBrowserNavigationInVueRouterOption) {
    if (!router) {
      throw Error('router is required');
    }
    let navigationInfo: { direction: string } | null = null;
    router.options.history.listen((_to, _from, info) => {
      navigationInfo = info;
    });

    router.beforeEach(() => {
      if (navigationInfo) {
        if (navigationInfo.direction === 'back' && backCallback) {
          backCallback();
        } else if (navigationInfo.direction === 'forward' && forwardCallback) {
          forwardCallback();
        }
        // need to reset it to null
        navigationInfo = null;
      }
    });
  }
};

export default DetectBrowserNavigationInVueRouter;
