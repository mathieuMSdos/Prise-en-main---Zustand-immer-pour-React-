import { useAppStore } from "../stores/store";

const Header = () => {
  // appelle du store
  const user = useAppStore((state) => state.user);
  const login = useAppStore((state) => state.login);

  if (user) {
    return (
      <div>
        <p>Hello {user.username}</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Header;
