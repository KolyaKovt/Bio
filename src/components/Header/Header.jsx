import { useEffect, useState } from "react"
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx"
import { StyledHeader } from "./Header.styled"
import Navigation from "../Navigation/Navigation.jsx"
import Media from "react-media"
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn.jsx"
import { HeaderSocials } from "../HeaderSocials/HeaderSocials.jsx"
import throttle from "lodash.throttle"

const Header = () => {
  const [isBorder, setIsBorder] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBorder(true)
      } else {
        setIsBorder(false)
      }
    }

    const throttleHandler = throttle(handleScroll)
    window.addEventListener("scroll", throttleHandler)
    return () => window.removeEventListener("scroll", throttleHandler)
  }, [setIsBorder])

  return (
    <StyledHeader $isBorder={isBorder || isMobileMenuOpen}>
      <MobileMenuBtn
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Media query={"(min-width: 768px)"} render={() => <Navigation />} />

      <HeaderSocials />

      {isMobileMenuOpen && (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </StyledHeader>
  )
}

export default Header
