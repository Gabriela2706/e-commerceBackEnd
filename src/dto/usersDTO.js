//DTO para el back - esto viene del req.body y es info para el back
export class UsersDTOResponseBack {
  constructor(info) {
    this.fullName = `${info.name} ${info.lastName}`;
    this.email = info.email;
    this.age = info.age;
    this.role = info.role;
  }
}
//DTO para el front
export class UsersDTOResponseFront {
  constructor(user) {
    const [name, lastName] = user?.fullName.split(" ");
    this.name = name;
    this.lastName = lastName;
  }
}
