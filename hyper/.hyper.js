module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(238,238,238,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    //foregroundColor: '#eceff1',
		foregroundColor: 'rgb(255,255,255)',

    // terminal background color
    //backgroundColor: '#263238',
		backgroundColor: '#353845',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: 'span { background-color: transparent !important; }',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
/*
    // Material Atom color scheme
    colors: {
      black: '#546e7a',
      red: '#ff5252',
      green: '#69f0ae',
      yellow: '#ffd740',
      blue: '#40c4ff',
      magenta: '#ff4081',
      cyan: '#64fcda',
      white: '#ffffff',
      lightBlack: '#b0bec5',
      lightRed: '#ff8a80',
      lightGreen: '#b9f6ca',
      lightYellow: '#ffe57f',
      lightBlue: '#90d8ff',
      lightMagenta: '#ff90ab',
      lightCyan: '#a7fdeb',
      lightWhite: '#ffffff'
    },
*/

    // Custom Color Scheme
    colors: {

      black: '#546e7a',
      //blue: '#40c4ff',
      blue: '#90d8ff',
      //cyan: '#64fcda',
      cyan: '#90ffef',
      green: '#50fa7b',
      orange: '#fad050',
      magenta: '#bd93f9',
      red: '#ec644b',
      yellow: '#fad050',
      white: '#ffffff',

      lightBlack: '#b0bec5',
      lightRed: '#ec644b',
      lightGreen: '#b9f6ca',
      lightYellow: '#fdf9af',
      lightOrange: '#ffc689',
      lightBlue: '#90d8ff',
      lightMagenta: '#ff79c6',
      lightCyan: '#90ffef',
      lightWhite: '#ffffff'

    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
