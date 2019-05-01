# react-use-keyup

A simple keyUp hook for [React](https://reactjs.org).

## Installation

```bash
yarn add @digitalrelab/react-use-keyup
```

## Usage

```jsx
import { useKeyUp } from "@digitalrelab/react-use-keyup"

function App() {
  useKeyUp("esc", onEsc)

  function onEsc(event) {
    event.preventDefault()

    console.log("You just pressed esc.")
  }

  return <div>Hello world!</div>
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
