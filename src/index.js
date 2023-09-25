console.log("by christ-offert");

class RunClock {
  constructor() {
    this.grandeStart = 0;
    this.petite = document.getElementById("petite-aiguille");
    this.moyenne = document.getElementById("moyenne-aiguille");
    this.grande = document.getElementById("grande-aiguille");
  }

  createIndication(param) {
    const li = document.createElement("li");
    li.className = `w-[8px] h-[50%] bg-transparent absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded rotate-[0deg] before:w-full before:h-3 before:rounded before:bg-zinc-300 before:absolute before:top-[3%] before:left-0`;
    li.style = `--tw-rotate: ${param - 0.25}deg`;
    document.getElementById("numbers").appendChild(li);
    return li;
  }

  petites(param, param2) {
    param > 12 ? (param = param - 12) : param;
    param2 = param2 / 2;
    this.petite.style = `--tw-rotate: ${param * 30 + param2}deg`;
  }

  moyennes(param) {
    this.moyenne.style = `--tw-rotate: ${param * 6}deg`;
  }

  grandes(param) {
    this.grande.style = `--tw-rotate: ${param * 6}deg`;
  }

  getTime() {
    this.date = new Date();

    this.hour = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();

    this.petites(this.hour, this.min);
    this.moyennes(this.min);
    this.grandes(this.sec);
  }

  displayIndicationMajor() {
    for (let index = 0; index < 60; index++) {
      const element = index * 6;
      if (element % 30 == 0 && element % 90 != 0) {
        const li = this.createIndication(element);
        li.classList.replace("before:h-1", "before:h-2");
        li.classList.replace("before:bg-zinc-300", "before:bg-white");
      }
    }
  }
  displayIndication() {
    for (let index = 0; index < 60; index++) {
      const element = index * 6;
      if (element % 5 != 0) {
        const li = this.createIndication(element);
        li.classList.add("opacity-70");
      }
    }
  }

  render() {
    this.displayIndicationMajor();

    setInterval(() => {
      this.getTime();
    }, 1000);
  }
}

const runClock = new RunClock();
runClock.render();
