/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
 il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
 il testo digitato viene letto e utilizzato per creare un nuovo todo,
  che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue

createApp({

  data() {

    return {
        // Sostituito la vecchia lista con un array di oggetti 
      shoppingList : [

          {text: "Pane",
           done: false,
          },
          {text: "Acqua",
           done: false,
          },
          {text: "Latte",
           done: false,
          },
          {text: "Cereali",
           done: false,
          },
          {text: "Uova",
           done: false,
          },
          {text: "Pasta",
           done: false,
          },
          {text: "Birra",
           done: false,
          },    
      ],

      newTodo: {text: "",
                done: false,
               },

      
    }
  },

  methods: {
// Creo una funzione che cambia lo stato della proprietà "done" da "true" a "false" e viceversa.
    doneToggle(index) {

        if(this.shoppingList[index].done == false) {

            this.shoppingList[index].done = true;

            console.log(this.shoppingList[index].done);

        } else {

            this.shoppingList[index].done = false;

            console.log(this.shoppingList[index].done);

        }

    },

    // Creo una funzione che rimuova l'oggetto che a lo stesso indice dell'oggetto che ho cliccato 
    deleteItem(index) {

        this.shoppingList.splice(index, 1);

    },

    addTodo() {

        console.log(this.newTodo);

        this.shoppingList.push(this.newTodo);

        this.newTodo = {text: "", done: false};
    },


},

}).mount('#app')







