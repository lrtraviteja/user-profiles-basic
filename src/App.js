import UserList from './components/UserList/UserList';
import { UserProvider, useUsers } from './context/UserContext';
import './App.css';
import { BallTriangle } from 'react-loader-spinner';

function AppContent() {
  const { loading } = useUsers();
  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <BallTriangle
            height={80}
            width={80}
            radius={5}
            color="#2a1c60ff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <UserList />
      )}
    </div>
  );
}

const App = () =>  (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );

export default App;
