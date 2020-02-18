import ButtonGroup from '../packages/button/index';
import ColorBar from '../packages/colorBar/index';

const Components = [
      ButtonGroup,
      ColorBar
]

export default Components

const install = function(Vue, opts = {}) {
      Components.forEach(component => {
            Vue.component(component.name, component);
      });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue);
}

export default {
      install,
      ButtonGroup,
      ColorBar
};
