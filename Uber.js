class UberFare {
  constructor(Distance, duration) {
    this.Distance = Distance; // in KM
    this.duration = duration; // in Minutes
  }

  calculatePrice() {
    let baseFare = 30;
    let costPerMin = 3;
    let costPerKM = 10;
    let bookingFee = 15;

    let fare =
      baseFare +
      costPerMin * this.duration +
      costPerKM * this.Distance +
      bookingFee;
    console.log("Your Uber fare is:", fare);
  }
}

let uber1 = new UberFare(5, 10);
uber1.calculatePrice();
