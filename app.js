// class Cat {
//   constructor(name, color, legs) {
//     this.name = name;
//     this.color = color;
//     this.legs = legs;
//   }
//   hello() {
//     console.log("My name is", this.name);
//     console.log("My fur has a beautiful", this.color);
//     console.log("I have", this.legs, "legs.");
//   }
// }

// class Tabby extends Cat {
//   constructor(name, color, legs) {
//     super(name, color, legs);
//   }
//   hello() {
//     console.log("My name is", this.name);
//     console.log("My fur has a beautiful", this.color);
//     console.log("I have", this.legs, "legs.");
//   }
// }

// class Siamese extends Cat {
//   constructor(name, color, legs) {
//     super(name, color, legs);
//   }
//   hello() {
//     console.log("My name is", this.name);
//     console.log("I am", this.color);
//     console.log("I have", this.legs, "legs.");
//   }
// }

// let tabby = new Tabby("Mittens", "Orange", 4);
// let siamese = new Siamese("Buttons", "Hairless", 4);

// console.log(tabby.name);
// console.log(tabby.color);
// console.log(tabby.legs);

// console.log(siamese.name);
// console.log(siamese.color);
// console.log(siamese.legs);

// tabby.hello();
// siamese.hello();
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

class Pirate {
  constructor(pegLeg, hookHand, eyePatch) {
    this.pegLeg = pegLeg;
    this.hookHand = hookHand;
    this.eyePatch = eyePatch;
  }
  Arrgh() {
    console.log("I have", this.pegLeg, "peg leg.");
  }
  Matey() {
    console.log("I've got", this.hookHand, "hook hands");
  }
  Ahoy() {
    console.log("No eye-patch for me though. I have", this.eyePatch);
  }
}

let jollyRoger = [
  new Pirate(1, 1, 0),
  new Pirate(0, 1, 1),
  new Pirate(0, 0, 0),
];

for (let i = 0; i < jollyRoger.length; i++) {
  console.log(
    jollyRoger[i].pegLeg,
    " ",
    jollyRoger[i].hookHand,
    " ",
    jollyRoger[i].eyePatch
  );
}

let blackPearl = [
  new Pirate(0, 1, 0),
  new Pirate(0, 0, 1),
  new Pirate(1, 1, 1),
];

for (let i = 0; i < blackPearl.length; i++) {
  console.log(
    blackPearl[i].pegLeg,
    " ",
    blackPearl[i].hookHand,
    " ",
    blackPearl[i].eyePatch
  );
}
