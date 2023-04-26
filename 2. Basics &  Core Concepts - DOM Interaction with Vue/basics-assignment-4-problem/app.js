const app = Vue.createApp({
  data() {
    return { classesInputValue: "", colorStyleInputValue: "", visible: true };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
  computed: {
    getInputValue() {
      return {
        user1: this.classesInputValue === "user1",
        user2: this.classesInputValue === "user2",
      };
    },
    getVisibility() {
      return this.visible ? "visible" : "hidden";
    },
  },
});

app.mount("#assignment");
