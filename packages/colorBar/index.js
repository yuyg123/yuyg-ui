import ColorBar from './src/ColorBar';

/* istanbul ignore next */
ColorBar.install = function(Vue) {
    Vue.component(ColorBar.name, ColorBar);
};

export default ColorBar;