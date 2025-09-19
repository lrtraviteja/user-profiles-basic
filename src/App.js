import UserList from "./components/UserList/UserList";
import { UserProvider, useUsers } from "./context/UserContext";
import "./App.css";
import "spinkit/spinkit.min.css";

function AppContent() {
  const { loading } = useUsers();
  return (
    <div className="app-container" style={{ backgroundColor: "#00000" }}>
      <h1>User Profiles</h1>
      {loading ? (
        <div style={{border: "none", display: "flex", alignItems: 'center', height: '50vh'}}>
          <div className="sk-plane"></div>
        </div>
      ) : (
        <UserList />
      )}
    </div>
  );
}

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App;
