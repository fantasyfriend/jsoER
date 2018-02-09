export const numberRegexp = /^[0-9]{4}$/;
export class ZipCodeValidator {
    isAcceptable(s) {
        if (numberRegexp.test(s)) {
            let tmp = parseInt(s).toString(); // remove leading zeroes
            return tmp.length == 4;
        }
        return false;
    }
}
