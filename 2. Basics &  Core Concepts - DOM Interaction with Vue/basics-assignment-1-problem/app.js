const app = Vue.createApp({
  data() {
    return {
      name: "Toni",
      age: 28,
      img: "https://cdn.pixabay.com/photo/2023/04/17/15/45/comma-7932755_960_720.jpg",
    };
  },
  methods: {
    getAgeAfterFiveYears() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
