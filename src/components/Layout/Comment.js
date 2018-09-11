import React from 'react';

import {
  Navbar,
  // NavbarToggler,
  Nav,
  UncontrolledButtonDropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

class Comment extends React.Component {
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
        <Navbar className="comment" >
            <Nav navbar className="comment-item">
                <b>Count</b>
                <input type="text"  className="item-type" />
            </Nav>
            <Nav navbar className="comment-item">
                <b>Level</b>
                <UncontrolledButtonDropdown className="item-type">
                  <DropdownToggle
                    caret
                    color={'white'}>
                    Click
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Level 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Level 2</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Nav>
            <Nav navbar className="comment-item">
                <b>Budgeted/Not Budgeted</b>
                <UncontrolledButtonDropdown className="item-type">
                  <DropdownToggle
                    caret
                    color={'white'}>
                    Click
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Budgeted</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Not Budgeted</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Nav>
            <Nav navbar className="comment-item">
                <b>Comment Box</b>
                <textarea className="item-type"></textarea>
            </Nav>
            <Nav navbar className="comment-item">
                <b>Action</b>
                <Button color="primary" size="lg">
                  Submit
                </Button>
            </Nav>
        </Navbar>
    );
  }
}

export default Comment;
