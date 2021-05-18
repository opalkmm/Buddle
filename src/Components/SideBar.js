import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
} from "semantic-ui-react";
import GridExampleContainer from "./CardContainer.js";
import logo from "../logo.svg";
import Navbar from "./Navbar.js";

const SideBarMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const [content, setContent] = React.useState("home");
  //does this select the initial choice, or should it be false

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Image
          className="buddleLogoTrigger"
          circular={true}
          size="mini"
          src={logo}
          position="left"
          floated="left"
          hidden={false}
          onClick={() => {
            setVisible(!visible);
          }}
        />
        <Navbar />

        <Sidebar.Pushable as={Segment} className="sidebarWrapper">
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a" onClick={() => setContent("home")}>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a" onClick={() => setContent("toy")}>
              <Icon name="briefcase" />
              Toys
            </Menu.Item>
            <Menu.Item as="a"  onClick={() => setContent("vpet")}>
              <Icon name="game" />
              Vpets
            </Menu.Item>
            <Menu.Item as="a"  onClick={() => setContent("figure")}>
              <Icon name="universal access" />
              Figures
            </Menu.Item>
            <Menu.Item as="a"  onClick={() => setContent("accessory")}>
              <Icon name="suitcase" />
              Accessories
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">
                <GridExampleContainer content={content} />
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SideBarMenu;
