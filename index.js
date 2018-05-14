function noUnhandledRejection ({ onlyProduction = false, callback = function () {} } = {}) {
  if (onlyProduction && process.env.NODE_ENV === 'production') return

  const inBrowser = typeof window !== 'undefined'
  const addListener = inBrowser ? window.addEventListener : process.addListener.bind(process)
  const event = 'unhandledRejection'

  addListener(inBrowser ? event.toLowerCase() : event, e => {
    if (inBrowser) e.preventDefault()
    callback(e)
  })
}

module.exports = noUnhandledRejection
