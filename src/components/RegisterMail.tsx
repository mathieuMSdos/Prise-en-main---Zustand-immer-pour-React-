import { useAppStore } from "../stores/store";

const RegisterMail = () => {

  // on récupère notre donnée dans le store zustand
const email = useAppStore((state)=> state.email)
const setEmail = useAppStore((state) => state.setEmail)

const HandleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder="Entrer votre email" value={email} onChange={(e)=> setEmail(e.target.value)}   />
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default RegisterMail;