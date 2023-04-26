const app = Vue.createApp({
  data() {
    return { tasks: [], task: "", show: true };
  },

  methods: {
    addTasks() {
      this.tasks.push(this.task);
      this.task = "";
    },
    toggleList() {
      this.show = !this.show;
    },
  },

  computed: {
    listValue() {
      if (this.show) {
        return "Hide";
      }
      return "Show";
    },
  },
});

app.mount("#assignment");
