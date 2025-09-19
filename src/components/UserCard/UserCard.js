import './UserCard.css';

function UserCard({ user }) {
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&options[mood][]=happy`;
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={`${user.name}'s Avatar`} className="user-avatar" />
      <div className="user-details">
        <h5>{user.name}</h5>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
}

export default UserCard;
