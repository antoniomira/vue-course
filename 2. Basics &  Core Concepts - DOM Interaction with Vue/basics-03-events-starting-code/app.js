const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
        // this.counter = 0;
      }
    },
    // name(newValue, oldValue) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = newValue + " " + this.lastName;
    // },

    // lastName(newValue, oldValue) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = this.name + " " + newValue;
    // },
  },
  computed: {
    // fullname() {
    //   console.log("Running again...");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Camacho Mira";
    // },
  },
  methods: {
    outputFullName() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Camacho Mira";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    substract(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      // this.name = event.target.value + " " + lastName;
      this.name = event.target.value;
    },
    submitForm() {
      console.log("Submited");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
