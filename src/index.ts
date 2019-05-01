import { useEffect } from "react"

/**
 * CommonJS modules are not compatible with Rollup. In other words,
 * specifying the exact path is required as per
 * https://github.com/Microsoft/TypeScript/issues/30472#issuecomment-474453292.
 */
const keycode = require("../node_modules/keycode/index")

/**
 * useKeyUp is a React hook that binds keyup events.
 *
 * @param key The key that you want to listen to.
 * @param onKeyUp What happens when the user hits that key.
 */
export function useKeyUp(key: string, onKeyUp: TOnKeyUp): void {
  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()

    if (event.which === keycode(key)) {
      onKeyUp(event)
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp, true)

    return () => {
      document.removeEventListener("keyup", handleKeyUp, true)
    }
  }, [key])
}

type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void
