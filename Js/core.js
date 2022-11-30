const html = ([first, ...strings], ...values) => {
  return values
    .reduce((initial, cur) => initial.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
};

const createStore = (reducer) => {
  let state = reducer({});
  const roots = new Map();

  // rennder ra du lieu
  const render = () => {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  };

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer({ action, args });
      render();
    },
  };
};

export { html, createStore };
