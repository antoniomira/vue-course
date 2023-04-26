function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = generateRandomNumber(12, 5);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = generateRandomNumber(15, 8);
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    specialAttack() {
      this.currentRound++;
      const damage = generateRandomNumber(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "special attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const heal = generateRandomNumber(8, 20);

      if (heal + this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addLogMessage("player", "heal", heal);
      this.attackPlayer();
    },
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },

    surrender() {
      this.winner = "monster";
    },

    addLogMessage(who, what, value) {
      this.log.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: 0 + "%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: 0 + "%" };
      }
      return { width: this.playerHealth + "%" };
    },
    disabledSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // empate
        this.winner = "draw";
      } else if (value <= 0) {
        // El jugador pierde
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // empate
        this.winner = "draw";
      } else if (value <= 0) {
        // El monstruo pierde
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
