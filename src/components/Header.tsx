import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Menu>
        <Menu.Item as={NavLink} to="/home">
          <Logo />
        </Menu.Item>
        <Menu.Item as={NavLink} to={"/add/new"}>
          Add
        </Menu.Item>
        <Menu.Item as={NavLink} to={"/relationship"}>
          Relationship
        </Menu.Item>
      </Menu>
    </header>
  );
}
