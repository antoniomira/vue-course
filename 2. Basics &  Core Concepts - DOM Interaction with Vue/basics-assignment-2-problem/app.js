const app = Vue.createApp({
  data() {
    return {
      mirroredInput: "",
      enterInput: "",
    };
  },
  methods: {
    alertBtnClick(content) {
      alert(content);
    },
    mirrorInput(event) {
      this.mirroredInput = event.target.value;
    },
    enterInputSetter(event) {
      this.enterInput = event.target.value;
    },
  },
});

app.mount("#assignment");
