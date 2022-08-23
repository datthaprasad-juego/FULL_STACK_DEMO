import { useContext, useState } from "react";
import ThemeContext from "../../Context/themeContext";
import { ToggleButton } from "../Button";
import { naviagtion } from "./contants";
import {
  Button,
  Conatiner,
  Logo,
  LogoContainer,
  MobileMenuLogo,
  MobileMenuNavigations,
  MobileNavContainer,
  Navigation,
  NavigationContainer,
  Text,
} from "./styles";

const Navbar = ({ active }) => {
  const [expand, setExpand] = useState(0);
  const { HandleThemeChange, userData } = useContext(ThemeContext);
  let navigations;
  if (userData.accessToken) navigations = naviagtion.CRICKET;
  else navigations = naviagtion.PRE_ACCOUNT;
  return (
    <Conatiner>
      <LogoContainer>
        <Logo>DP</Logo>
      </LogoContainer>

      <NavigationContainer>
        {navigations.map((navigation, key) => {
          if (navigation.type === "button")
            return (
              <Navigation key={key}>
                <Button href={naviagtion.link}>{navigation.content}</Button>
              </Navigation>
            );
          else
            return (
              <Navigation key={key}>
                <Text
                  to={navigation.link}
                  active={navigation.content.toLowerCase() === active}
                >
                  {navigation.content}
                </Text>
              </Navigation>
            );
        })}
        <Navigation
          onClick={() => {
            HandleThemeChange();
          }}
        >
          <ToggleButton />
        </Navigation>
      </NavigationContainer>

      <MobileNavContainer>
        <MobileMenuLogo onClick={() => setExpand((oldValue) => !oldValue)}>
          {!expand ? ":::" : "x"}
        </MobileMenuLogo>
        <MobileMenuNavigations show={expand}>
          {navigations.map((navigation, key) => {
            if (navigation.type === "button")
              return (
                <Navigation key={key}>
                  <Button>{navigation.content}</Button>
                </Navigation>
              );
            else
              return (
                <Navigation key={key}>
                  <Text to={navigation.link}>{navigation.content}</Text>
                </Navigation>
              );
          })}
          <Navigation
            onClick={() => {
              HandleThemeChange();
            }}
          >
            <ToggleButton />
          </Navigation>
        </MobileMenuNavigations>
      </MobileNavContainer>
    </Conatiner>
  );
};
export default Navbar;
