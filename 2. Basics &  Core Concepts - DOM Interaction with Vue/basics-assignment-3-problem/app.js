const app = Vue.createApp({
  data() {
    return {
      resultNumber: 0,
      timeOutIsEnabled: false,
    };
  },
  methods: {
    add(number) {
      this.resultNumber += number;
      console.log(this.resultNumber);
    },
  },
  computed: {
    getResult() {
      if (this.resultNumber === 37) {
        return this.resultNumber;
      } else if (this.resultNumber < 37) {
        return "Not there yet";
      }
      return "Too much!";
    },
  },
  watch: {
    getResult() {
      if (!this.timeOutIsEnabled) {
        this.timeOutIsEnabled = true;
        const that = this;
        setTimeout(() => {
          that.resultNumber = 0;
          that.timeOutIsEnabled = false;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
