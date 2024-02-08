import { Router } from 'vue-router';

interface DetectBrowserNavigationInVueRouterOption {
  router: Router;
  backNavigation: Function;
  forwardNavigation: Function;
}

const DetectBrowserNavigationInVueRouter = {
  install(_app: any, { router, backNavigation, forwardNavigation }: DetectBrowserNavigationInVueRouterOption) {
    // 配置此应用
    let navigationInfo: { direction: string } | null = null;
    router.options.history.listen((_to, _from, info) => {
      navigationInfo = info;
    });

    router.beforeEach(() => {
      if (navigationInfo) {
        if (navigationInfo.direction === 'back') {
          backNavigation();
        } else if (navigationInfo.direction === 'forward') {
          forwardNavigation();
        }
        // need to reset it to null
        navigationInfo = null;
      }
    });
  }
};

export default DetectBrowserNavigationInVueRouter;
