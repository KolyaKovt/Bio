import { useCallback, useEffect } from "react"
import Navigation from "../Navigation/Navigation"
import { StyledBackdrop } from "./MobileMenu.styled"
import throttle from "lodash.throttle"

export const MobileMenu = ({ setIsMobileMenuOpen }) => {
  const enableScroll = () => {
    document.body.style.overflow = ""
  }

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    enableScroll()
  }, [setIsMobileMenuOpen])

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu()
      }
    }

    const throttleHandler = throttle(handleWindowResize)
    window.addEventListener("resize", throttleHandler)
    return () => window.removeEventListener("resize", throttleHandler)
  }, [closeMobileMenu])

  return (
    <StyledBackdrop>
      <Navigation closeMobileMenu={closeMobileMenu} />
    </StyledBackdrop>
  )
}
