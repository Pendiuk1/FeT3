const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Play!!!'
      }
    },
    methods: {
      playQ(){
        document.getElementById('Q').play();
        this.displayShow('Q');
      },
      playW(){
        document.getElementById('W').play();
        this.displayShow('W');
      },
      playE(){
        document.getElementById('E').play();
        this.displayShow('E');
      },
      playA(){
        document.getElementById('A').play();
        this.displayShow('A');
      },
      playS(){
        document.getElementById('S').play();
        this.displayShow('S');
      },
      playD(){
        document.getElementById('D').play();
        this.displayShow('D');
      },
      playZ(){
        document.getElementById('Z').play();
        this.displayShow('Z');
      },
      playX(){
        document.getElementById('X').play();
        this.displayShow('X');
      },
      playC(){
        document.getElementById('C').play();
        this.displayShow('C');
      },
      doCommand(event) {
        switch(event.keyCode){
          case 113:
          case 81:
              this.playQ();
              this.displayShow('Q')
              break;
          case 119:
          case 87:
              this.playW();
              break;
          case 101:
          case 69:
              this.playE();
              break;
          case 97:
          case 65:
              this.playA();
              break;
          case 115:
          case 83:
              this.playS();
              break;
          case 100:
          case 68:
              this.playD();
              break;
          case 122:
          case 90:
              this.playZ();
              break;
          case 120:
          case 88:
              this.playX();
              break;
          case 99:
          case 67:
              this.playC();
              break;
          default:
          break;
        }
      },
      displayShow(str){
        this.message = str + ' played!';
      },
    },
    created() {
      window.addEventListener('keypress', this.doCommand);
    },
    destroyed() {
      window.removeEventListener('keypress', this.doCommand);
    },
  }).mount('#drum-machine')