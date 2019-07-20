export class UnitsResponse {
  units: Unit[];

  constructor(args) {
    if (!args) {
      return null;
    }

    this.units = [];
    args.forEach(unit => {
      this.units.push(new Unit(unit));
    })
  }
}

export class Unit {
  name: string;
  id: string;
  capacity: number;
  census: number;
  highAlarm: number;
  lowAlarm: number;

  constructor(args) {
    if (!args) {
      return null;
    }

    for (const field in args) {
      if (args.hasOwnProperty(field)) {
        this[field] = args[field];
      }
    }
  }
}
