import { useAppStore } from "../stores/store";

const UpdateUsernameComponent = () => {
  const updateUserName = useAppStore((state) => state.updateUserName);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserName(e.target.userName.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Modifier votre nom d'utilisateur</h2>
        <label htmlFor="userName">Nom d'utilisateur</label>
        <input type="text" id="userName" />
        <button>Enregistrer la modification</button>
      </form>
    </div>
  );
};

export default UpdateUsernameComponent;
