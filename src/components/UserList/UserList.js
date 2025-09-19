import UserCard from '../UserCard/UserCard';
import { useUsers } from '../../context/UserContext';
import './UserList.css';

function UserList() {
  const { users } = useUsers();
  return (
    <div className="user-list-container">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;