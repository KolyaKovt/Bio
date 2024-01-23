import { useEffect, useState } from "react"
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx"
import { StyledHeader } from "./Header.styled"
import Navigation from "../Navigation/Navigation.jsx"
import Media from "react-media"
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn.jsx"
import { HeaderSocials } from "../HeaderSocials/HeaderSocials.jsx"

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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
