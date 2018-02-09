/* gebruik van modules */
/* wat een module exporteert, kan een andere module importeren om het te gebruiken */
import { ZipCodeValidator } from "./ZipCodeValidator";
let myStringValidator; // import nodig
myStringValidator = new ZipCodeValidator(); // import nodig
let zipCode = "2660";
console.log("%s is%s a valid Belgian zipcode", zipCode, myStringValidator.isAcceptable(zipCode) ? "" : " not");
zipCode = "abcd";
console.log("%s is%s a valid Belgian zipcode", zipCode, myStringValidator.isAcceptable(zipCode) ? "" : " not");
