import UserCard from '../UserCard/UserCard';
import { useUsers } from '../../context/UserContext';
import './UserList.css';
import { Row, Col } from 'antd';

function UserList({ onEdit }) {
  const { users, setUsers } = useUsers();

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleLike = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, liked: !user.liked } : user
    ));
  };

  return (
    <Row gutter={[16, 16]} className="user-list-container">
      {users.map(user => (
        <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
          <UserCard
            user={user}
            onEdit={onEdit}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        </Col>
      ))}
    </Row>
  );
}

export default UserList;
