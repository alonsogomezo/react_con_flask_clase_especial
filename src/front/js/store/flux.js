const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      personaje: {},
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      teamColombia: [
        { id: 1, name: "Ivan", color: "black" },
        { id: 2, name: "Angela", color: "red" },
        { id: 3, name: "Karen", color: "yellow" },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getPeople: (id) => {
        try {
          // fetching data from the backend
          fetch("https://www.swapi.tech/api/people/" + id)
            .then((res) => res.json())
            .then((data) => {
              console.log(data.result.properties.name);
              setStore({ personaje: data });
            });
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      changeName: (idSolicitado, newName) => {
        console.log(idSolicitado, "ID");
        console.log(newName, "Name");
        const store = getStore();
        const nuevoTeam = store.teamColombia.map((item, index) => {
          if (item.id == idSolicitado) {
            item.name = newName;
          }
          return item;
        });
        console.log("NUEVO TEAM");
        console.log(nuevoTeam);
        setStore({ teamColombia: nuevoTeam });
      },
    },
  };
};

export default getState;
