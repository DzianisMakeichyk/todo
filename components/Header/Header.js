import { 
  HeaderWrapper,
  HeaderContent,
  UserInfo,
  UserAvatar,
} from './styles';

const Header = () => <HeaderWrapper>
  <HeaderContent>
    <UserInfo>
      <p>Hello Brenda!</p>
      <span>Today you have 9 tasks</span>
    </UserInfo>
    <UserAvatar>
    <picture>
      <img src="../../static/photo.png" alt="" />
    </picture>
    </UserAvatar>
  </HeaderContent>
  </HeaderWrapper>;

export default Header;