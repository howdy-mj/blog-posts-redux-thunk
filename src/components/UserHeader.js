import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps는 해당 컴포넌트의 props를 가져올 수 있음
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
