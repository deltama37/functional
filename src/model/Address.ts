export class Address {
  _country: string;
  _state: string | null;
  _city: string | null;
  _zip: string | null;
  _street: string | null;

  constructor(
    country: string,
    state: string | null = null,
    city: string | null = null,
    zip: string | null = null,
    street: string | null = null
  ) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }

  get street(): string | null {
    return this._street;
  }

  get city(): string | null {
    return this._city;
  }

  get state(): string | null {
    return this._state;
  }

  get zip(): string | null {
    return this._zip;
  }

  get country() {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }
}
