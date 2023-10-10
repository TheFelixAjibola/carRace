class Car {
  constructor(name, color, hp) {
    this.name = name;
    this.color = color;
    this.hp = hp;
    this.body = `
      <div class="car-handle ${this.color}">
          <div class="car-top"></div>
          <div class="car-bottom"></div>
      </div>
      `;
  }

  build() {
    let handle = document.createElement("div");
    handle.innerHTML = this.body;
    handle.id = this.name;

    return handle;
  }

  move(steps) {
    let element = document.querySelector(`#${this.name}`);
    element.style.position = "absolute";
    let counter = 0;
    let hp = this.hp;
    setInterval(function () {
      counter += hp;
      element.style.left = `${counter}px`;
    }, 100);
  }
}

class Road {
  constructor() {}

  laneOne(car) {
    const lane = document.createElement("div");
    lane.className = "laneOne";
    lane.appendChild(car.build());

    return lane;
  }

  laneTwo(car) {
    const lane = document.createElement("div");
    lane.className = "laneTwo";
    lane.appendChild(car.build());

    return lane;
  }
}

const gameApp = document.querySelector("#gameApp");

let Lexus = new Car("Lexus", "purple", 40);
let Prado = new Car("Prado", "red", 10);
const road = new Road();
const lane1 = road.laneOne(Lexus);
const lane2 = road.laneTwo(Prado);

gameApp.appendChild(lane1);
gameApp.appendChild(lane2);

Lexus.move();
Prado.move();
