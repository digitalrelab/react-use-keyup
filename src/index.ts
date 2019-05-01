import { useEffect } from "react"

/**
 * CommonJS modules are not compatible with Rollup. In other words,
 * specifying the exact path is required as per
 * https://github.com/Microsoft/TypeScript/issues/30472#issuecomment-474453292.
 */
const keycode = require("../node_modules/keycode/index")

/**
 * useHotkeys is a React hook for the awesome hotkeys-js library.
 * To learn more, please refer to https://github.com/jaywcjlove/hotkeys
 *
 * @param hotKeys The list of hotkeys that will be listen to.
 * @param onExecuteHotKey  A callback that occurs upon any hotKey execution.
 */
export function useKeyUp(key: string, onKeyUp: TOnKeyUp): void {
  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()

    if (event.which === keycode(key)) {
      console.log("bubbling?", onKeyUp)
      onKeyUp(event)
    }
  }

  useEffect(() => {
    console.log("add event listener", key)

    document.addEventListener("keyup", handleKeyUp, true)

    return () => {
      document.removeEventListener("keyup", handleKeyUp, true)
    }
  }, [key])
}

type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void
