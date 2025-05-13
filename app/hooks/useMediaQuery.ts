"use client";
import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Function to handle media query changes
    // @ts-expect-error/ban-ts-comment
    const handleMediaQueryChange = (event) => {
      setMatches(event.matches);
    };

    // Initial setup
    handleMediaQueryChange(mediaQuery);

    // Attach the handler to respond to changes in the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}
