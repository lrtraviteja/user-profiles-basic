import './UserCard.css';
import { Card, Button, Avatar } from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

function UserCard({ user, onEdit, onDelete, onLike }) {
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&options[mood][]=happy`;

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt={`${user.name}'s Avatar`}
          src={avatarUrl}
          style={{ height: 200, objectFit: 'cover' }}
        />
      }
      actions={[
        <Button
          type="text"
          icon={user.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
          onClick={() => onLike(user.id)}
        />,
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => onEdit(user)}
        />,
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(user.id)}
          danger
        />
      ]}
    >
      <Meta
        avatar={<Avatar src={avatarUrl} />}
        title={user.name}
        description={
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        }
      />
    </Card>
  );
}

export default UserCard;
