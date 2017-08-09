'use strict'

const backgroundColor = '#2F3542'
const foregroundColor = '#eff0eb'
const borderColor = '#222430'
const cursorColor = '#7a527a'
const red = '#c65379'
const green = '#ebbf9b'
const yellow = '#FC8458'
const blue = '#6e94b9'
const magenta = '#b18bb1'
const cyan = '#44C0C6'
const white = '#f1f1f0'
const lightBlack = '#787878'

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
  })
