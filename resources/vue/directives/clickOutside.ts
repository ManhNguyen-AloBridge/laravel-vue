// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (event: MouseEvent) => any;
type Middleware = (event: Event, el: HTMLElement) => never;
type Handler =
  | Callback
  | {
      handler: Callback;
      middleware?: Middleware;
    };

const instances = new Map();

function processArgs(value: any) {
  const isFunction = typeof value === 'function';

  if (!isFunction && typeof value !== 'object') {
    throw new Error(`v-click-outside: Binding value should be a function or an object, ${typeof value} given`);
  }

  return {
    handler: isFunction ? value : value.handler,
    middleware: value.middleware || (() => true),
  };
}

function onClickOutside({
  event,
  el,
  handler,
  middleware,
}: {
  event: MouseEvent;
  el: HTMLElement;
  handler: Callback;
  middleware: Middleware;
}) {
  const isClickOutside = event.target !== el && !el.contains(event.target as Node);

  if (!isClickOutside || !middleware(event, el)) {
    return null;
  }

  return handler(event);
}

const beforeMount = (el: HTMLElement, { value }: { value: Handler }) => {
  const { handler, middleware } = processArgs(value);
  const handleClick = (event: MouseEvent) => onClickOutside({ event, el, handler, middleware });
  window.addEventListener('click', handleClick, true);
  instances.set(el, handleClick);
};

const unmounted = (el: HTMLElement) => {
  const handleClick = instances.get(el);
  window.removeEventListener('click', handleClick, true);
};

export default {
  beforeMount,
  unmounted,
};
