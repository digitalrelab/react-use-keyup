import { useEffect } from "react"

// @ts-ignore
import warning from "warning"

// @ts-ignore
// Ignoring this for now thanks to Rollup incompatibility with CommonJS.
import keycode from "keycode"

/**
 * useKeyUp is a React hook that binds keyup events.
 *
 * @param targetKey The key that you want to listen to.
 * @param onKeyUp What happens when the user hits that key.
 */
export function useKeyUp(
  targetKey: TAvailableKeys | string,
  onKeyUp: TOnKeyUp,
): void {
  const handleKeyUp = (event: KeyboardEvent): void => {
    const keycodeBasedOnKey = keycode(targetKey)

    if (!keycodeBasedOnKey) {
      warning(
        keycodeBasedOnKey,
        `The target key "${targetKey}" is not mapped. Skipping useKeyUp hook.`,
      )
    }

    if (event.which === keycodeBasedOnKey) {
      onKeyUp(event)
    }
  }

  useEffect((): (() => void) => {
    document.addEventListener("keyup", handleKeyUp, true)

    return (): void => {
      document.removeEventListener("keyup", handleKeyUp, true)
    }
  }, [targetKey, onKeyUp])
}

type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void

type TAvailableKeys = "esc" | "enter" | "up" | "down"
