import React from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  UncontrolledButtonDropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import { userProgressTableData } from 'demos/dashboardPage';
import Page from 'components/Page';

import UserProgressTable from 'components/UserProgressTable';

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}>
        <Row>
          <Col>
            <Card>
              <CardHeader>New Users</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <UncontrolledButtonDropdown
                      className="text-capitalize m-1">
                      <Button color={'white'} ><b>User Name</b></Button>
                      <DropdownToggle caret color={'white'} />
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>,
                    'Level',
                    'Status',
                    <UncontrolledButtonDropdown
                      className="text-capitalize m-1">
                      <Button color={'white'} ><b>Request Type</b></Button>
                      <DropdownToggle caret color={'white'} />
                      <DropdownMenu>
                        <DropdownItem>Budgeted</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Not Budgeted</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>,
                    'Action',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
