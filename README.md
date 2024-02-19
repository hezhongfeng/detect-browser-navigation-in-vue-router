# detect-browser-navigation-in-vue-router

detect browser back/forward navigation button in vue-router

## how to use

## install

`npm install detect-browser-navigation-in-vue-router`

## use

```js
import router from './router'
import DetectBrowserNavigationInVueRouter from 'detect-browser-navigation-in-vue-router'

const app = createApp(App)

app.use(router)

const backCallback = () => {
  console.log('back')
}

const forwardCallback = () => {
  console.log('forward')
}

app.use(DetectBrowserNavigationInVueRouter, { router, backCallback, forwardCallback })
```

## demo

[this](https://github.com/hezhongfeng/detect-browser-navigation-in-vue-router-example)
