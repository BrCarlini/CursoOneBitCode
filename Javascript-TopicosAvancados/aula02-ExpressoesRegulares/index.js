function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1, 3}/)
}

console.log(new PhoneNumber('+55 (22) 9 9876-5432'))