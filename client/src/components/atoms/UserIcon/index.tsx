import { StyledIcon } from './style';
import { IUser, TIcon } from 'types/user';

interface IProps {
  user: IUser;
}

const iconToEmoji: { [key in TIcon]: string } = {
  frog: '🐸',
  panda: '🐼',
  dog: '🐶',
  cat: '🐱',
  rabbit: '🐰',
};

const UserIcon: React.FC<IProps> = ({ user }) => {
  return <StyledIcon color={user.color}>{iconToEmoji[user.icon]}</StyledIcon>;
};

export default UserIcon;
