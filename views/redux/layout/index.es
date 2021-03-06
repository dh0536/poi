const { config, devicePixelRatio } = window

const initState = {
  window: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  webview: {
    width: config.get('poi.webview.width', 800 * Math.round(devicePixelRatio)),
    height: config.get('poi.webview.width', 800 * Math.round(devicePixelRatio)) * 0.6,
    useFixedResolution: true,
  },
}

export function reducer(state=initState, {type, value}) {
  switch (type) {
  case '@@LayoutUpdate':
    return value
  default:
    return state
  }
}
