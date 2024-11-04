import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";
import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";
import { NavLink, Link} from "react-router-dom";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: whiteLogo,
      navVariant: "dark",
      navBarBack: "navBackground",
      navBarItem: "navItem",
      pageTitle: props.title,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: blackLogo,
        navVariant: "light",
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: whiteLogo,
        navVariant: "dark",
        navBarBack: "navBackground",
        navBarItem: "navItem",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg="dark"
          variant={this.state.navVariant}
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle}>
              <Link exact to="/"><img src={this.state.navBarLogo} alt="Logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/about"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/service"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    SERVICES
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/courses"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    COURSES
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/portfolio"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    PORTFOLIO
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    to="/contact"
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                  >
                    CONTACT US
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
