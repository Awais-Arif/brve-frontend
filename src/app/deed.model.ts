
export class Deed {
  public firstName: string;
  public lastName: string;
  public email: string;
  public location: string;
  public title: string;
  public deedDescription: string;
  public image: any;

  constructor(
    firstName: string,
    lastName: string, 
    email: string,
    location: string,
    title: string,
    deedDescription: string, 
    image: any) {

    this.firstName = firstName;
    this.email = email;
    this.lastName = lastName;
    this.location = location;
    this.title = title;
    this.deedDescription = deedDescription;
    this.image = image;
  }
}
