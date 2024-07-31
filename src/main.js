import { setSliderCardsOfFilms } from "./js/main/setSliderCardsOfFilms";
import { setInfoOfMostPopularFilm } from "./js/main/setInfoOfMostPopularFilm";
import {} from "./js/main/swiper";
import { setActiveMainLink } from "./js/main/setActiveMainLink";

setSliderCardsOfFilms();
setInfoOfMostPopularFilm();
setActiveMainLink();

// тут посинати перевіряти

// class User {
//   site = "ALLBonD";

//   #password;
//   #isLogin;

//   constructor(user, password, contacts = []) {
//     this._name = user.name;
//     this._email = user.email;
//     this._gender = user.gender;
//     this._old = user.old;
//     this._birthday = user.birthday;

//     const date = new Date();
//     this._dateOfLogin = `${date.getDate()} ${
//       date.getMonth() + 1
//     } ${date.getFullYear()}`;

//     this.#isLogin = false;
//     this.#password = password;
//     this._contacts = contacts;
//   }

//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }

//   get birthday() {
//     return this._birthday;
//   }
//   set birthday(birthday) {
//     this._birthday = birthday;
//   }

//   get gender() {
//     return this._gender;
//   }
//   set gender(gender) {
//     this._gender = gender;
//   }

//   authentication(password) {
//     if (this.#password === password) {
//       this.#isLogin = true;
//       return;
//     }
//     console.log("Opps.. password incorrect");
//   }
//   logout() {
//     this.#isLogin = false;
//   }
//   get isLogin() {
//     return this.#isLogin;
//   }

//   get allUser() {
//     return { ...this };
//   }

//   addContact(contact) {
//     if (!this.#isContact(contact)) {
//       console.log(`contact ${contact} already was`);
//       return;
//     }
//     this._contacts.push(contact);
//   }
//   removeContact(contact) {
//     const indexOfContact = this.#isContact(contact);
//     if (indexOfContact === -1) {
//       console.log(`Opps... contact ${contact} not found`);
//       return;
//     }
//     const [result] = this._contacts.splice(indexOfContact, 1);
//     console.log(result);
//   }
//   get contacts() {
//     return this._contacts;
//   }
//   removeAllContacts() {
//     this._contacts = [];
//   }
//   #isContact(contact) {
//     return this._contacts.findIndex(
//       (item) => item.toLowerCase() === contact.toLowerCase()
//     );
//   }
// }

// const velgilmina = {
//   name: "Velgilmina",
//   email: "velgilmina@ukr.net",
//   gender: "female",
//   old: "250",
//   birthday: "31.02.1824",
// };

// const userVelgilmina = new User(velgilmina, "password", ["AlaSter"]);
// console.log(userVelgilmina);


