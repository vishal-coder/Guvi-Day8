class Person {
  firstName;
  lastName;
  address;
  email;
  phone;

  get firstName() {
    return this.firstName;
  }
  set firstName(value) {
    this.firstName = value;
  }

  get lastName() {
    return this.lastName;
  }
  set lastName(value) {
    this.lastName = value;
  }

  get address() {
    return this.address;
  }
  set address(value) {
    this.address = value;
  }

  get email() {
    return this.email;
  }
  set email(value) {
    this.email = value;
  }

  get phone() {
    return this.phone;
  }
  set phone(value) {
    this.phone = value;
  }

  constructor(firstName, lastName, address, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.firstName} ${this.lastName}`);
  }
}
