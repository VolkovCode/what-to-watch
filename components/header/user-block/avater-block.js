import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AvatarBlock = ({userAvatarUrl}) => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to={`/my-list`}><img src={userAvatarUrl} alt="User avatar" width="63" height="63" /></Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userAvatarUrl: state.userInfo.avatar_url
});


export {AvatarBlock};
export default connect(mapStateToProps)(AvatarBlock);
