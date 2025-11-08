import * as React from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Handler for when the media query changes
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Listen for changes
    mediaQuery.addEventListener("change", handler)

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return matches
}
