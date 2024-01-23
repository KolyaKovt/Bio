import { useEffect, useState } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#23272f"
      )
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#149eca"
      )
      document.documentElement.style.setProperty("--text-color", "#f6f7f9")
      document.documentElement.style.setProperty("--btn-focus-color", "#2d323b")
      document.documentElement.style.setProperty("--border-color", "#343a46")
    } else {
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#FFFFFF"
      )
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#149eca"
      )
      document.documentElement.style.setProperty("--text-color", "#23272f")
      document.documentElement.style.setProperty("--paragraph-color", "23272F")
      document.documentElement.style.setProperty("--btn-focus-color", "#E6F7FF")
      document.documentElement.style.setProperty("--border-color", "#EBECF0")
    }
  }, [theme])

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  return { theme, toggleTheme }
}
