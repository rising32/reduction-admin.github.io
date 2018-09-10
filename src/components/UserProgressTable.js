import React from 'react';
import PropTypes from 'utils/propTypes';

import { 
  Table,
  Button,
} from 'reactstrap';

const UserProgressTable = ({ headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps} >
      <thead className="user_table" >
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ avatar, name, level,status, request_type }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">{name}</td>
            <td className="align-middle text-center">{level}</td>
            <td className="align-middle text-center">{status}</td>
            <td className="align-middle text-center">{request_type}</td>
            <td className="align-middle text-center">
              <Button color="primary" size="sm">
                Action 1
              </Button>
              <Button color="primary" size="sm">
                Action 2
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserProgressTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;
