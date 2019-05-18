import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContent, HeaderWrapper, UserAvatar, UserInfo,
} from './styles';

const Header = ({ count }) => <HeaderWrapper>
  <HeaderContent>
    <UserInfo>
      <p>Hello Brenda!</p>
      <span>
        Today you have&nbsp;
        {count === 1 ? `${count} task` : `${count} tasks`}
      </span>
    </UserInfo>
    <UserAvatar>
      <picture>
        <img src="../../static/photo.png" alt="" />
      </picture>
    </UserAvatar>
  </HeaderContent>
</HeaderWrapper>;

Header.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Header;
