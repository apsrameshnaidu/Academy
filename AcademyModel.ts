//Create a TS file called AcademyModel. This will be the model that will be input for create/update/delete methods.

import * as dao from './AcademyDAO';
 
export class User {
 
  constructor(private firstName: string, private lastName: string, private location: string, private description: string, private image: string) {
    this.setName(firstName, lastName);
    //this.setImage(image);
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  setName(firstName: string, lastName: string) {
    if (this.validName(firstName) && this.validName(lastName)) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  private validName(name: string) {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      return true
    } else {
      new Error('Field Empty');
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get location() {
    return this.location;
  }

  get description() {
    return this.description;
  }

  get image() {
    return this.image;
  }

}

export const user = new User('Rohit', 'Sharma', 'Meerut', 'Meerut is situated in Uttar Pradesh');

let model = new dao.AcModel(user.fullName,user.location,user.description);

model.query();
//model.update();
//model.addRecord();
//model.delete();
