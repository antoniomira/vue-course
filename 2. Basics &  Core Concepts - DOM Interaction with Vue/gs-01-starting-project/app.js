Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValu = "";
    },
  },
}).mount("#app");

// Programacion imperativa

// const btnRef = document.querySelector("button");

// const inputRef = document.querySelector("input");

// const listRef = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputRef.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listRef.appendChild(listItemEl);
//   inputRef.value = "";
// }

// btnRef.addEventListener("click", addGoal);
