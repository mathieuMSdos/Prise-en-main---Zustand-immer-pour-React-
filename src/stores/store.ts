import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// on créé un store

export const useAppStore = create(
  devtools(
    (set) => ({

      // email
      email: "JohnDoe@gmail.fr",
      setEmail: (newEmail: string) => set({ email: newEmail }),

      // login
      user: null,
      // on peux passer de la logique directement dans le store
      login: () => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => response.json())
          .then((user) => set({ user: user }));
      },

      // IMMER - modification de state imbriqué
      // on veux modifier username qui est une propriété de l'objet déjà stocké dans le state USER
      updateUserName: (newUserName:string) => set(produce((state)=>{
        if(state.user){
          state.user.username = newUserName
        }
      }))

    }),
    { name: "Appstore" } //le nom qui apparaîtra dans le devtools
  )
);
