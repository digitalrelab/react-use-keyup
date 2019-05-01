# react-use-hotkeys

A simple [hotkeys](https://github.com/jaywcjlove/hotkeys) hook for [React](https://reactjs.org).

## Installation

```bash
yarn add @digitalrelab/react-use-hotkeys
```

## Usage

```jsx
import { useHotkeys } from "@digitalrelab/react-use-hotkeys"

function App() {
  useHotkeys("esc", onEsc)

  function onEsc(keyboardEvent, hotkeysEvent) {
    console.log("You just pressed esc.")
  }

  return <div>Hello world!</div>
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
