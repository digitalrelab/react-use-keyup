import { useEffect } from "react"

// @ts-ignore
// Ignoring this for now thanks to Rollup incompatibility with CommonJS.
import keycode from "keycode"

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
