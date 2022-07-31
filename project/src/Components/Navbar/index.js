import { useState } from "react";
import { naviagtion } from "./contants";
import {
  Button,
  Conatiner,
  Logo,
  LogoContainer,
  Menu,
  MobileMenu,
  Navigation,
  NavigationContainer,
  NavMenu,
  Text,
} from "./styles";

const Navbar = () => {
  const navigations = naviagtion[0];
  const [expand, setExpand] = useState(0);
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
                <Button>{navigation.content}</Button>
              </Navigation>
            );
          else
            return (
              <Navigation key={key}>
                <Text>{navigation.content}</Text>
              </Navigation>
            );
        })}
      </NavigationContainer>
      <NavMenu>
        <Menu onClick={() => setExpand((oldValue) => !oldValue)}>
          {!expand ? ":::" : "x"}
        </Menu>
        <MobileMenu show={expand}>
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
                <Text>{navigation.content}</Text>
              </Navigation>
            );
        })}
        </MobileMenu>
      </NavMenu>
    </Conatiner>
  );
};
export default Navbar;
