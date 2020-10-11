import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import UserInfoBox from "../../components/user-infoBox/userInfoBox.component";

class UserPage extends React.Component {
  componentDidMount = () => {
    const currentUser = this.props;
  };

  render() {
    return (
      <div className="max-w-2xl mx-auto my-20 px-5 py-10">
        <UserInfoBox />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserPage);
