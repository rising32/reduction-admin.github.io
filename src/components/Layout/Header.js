import React from 'react';

import bn from 'utils/bemnames';

import {
  Navbar,
  // NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const bem = bn.create('header');

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    
    return (
      <Navbar light expand className={bem.b('bg-white')}>
               
        <Nav navbar className={bem.e('nav-right')}>
          <NavItem>
            <NavLink id="Popover2">
              <div>
                <div
                  className="can-click">
                  Wecome user.name
                </div>
                <div>Change Password</div>
                <div>Logout</div>
              </div>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
