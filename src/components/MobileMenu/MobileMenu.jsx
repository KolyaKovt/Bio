import { useCallback, useEffect } from "react"
import Navigation from "../Navigation/Navigation"
import { StyledBackdrop } from "./MobileMenu.styled"

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

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [closeMobileMenu])

  return (
    <StyledBackdrop>
      <Navigation closeMobileMenu={closeMobileMenu} />
    </StyledBackdrop>
  )
}
