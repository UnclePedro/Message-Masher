const encryptShift = 10;

export const encrypt = (encryptInput: string) => {
  // Encrypted string will push to the encryptedString variable
  let encryptedString = '';
  // Convert string to uppercase in new variable
  const uppercaseString = encryptInput.toUpperCase();
  // for loop to iterate over each character in the string
  for (let i = 0; i < uppercaseString.length; i++) {
    // Variable for unicode of each character
    let charCode = uppercaseString.charCodeAt(i);
    // if unicode is uppercase letter
    if (charCode <= 90 && charCode >= 65) {
      // shift by determined shift number
      charCode += encryptShift;
      // then if char code is over 90, loop around by 1 full alphabet
      if (charCode > 90) {
        charCode -= 26;
      }
    }
    // add encrypted letter to encrypted string, return encrypted string
    encryptedString += String.fromCharCode(charCode);
  }
  return encryptedString;
};

export const decrypt = (decryptInput: string) => {
  // Decrypted string will push to this variable
  let decryptedString = '';
  // Convert string to lowercase in new variable
  const lowercaseString = decryptInput.toLowerCase();
  // for loop to iterate over each character in the string
  for (let i = 0; i < lowercaseString.length; i++) {
    // Variable for unicode of each character
    let charCode = lowercaseString.charCodeAt(i);
    // if unicode is uppercase letter
    if (charCode <= 122 && charCode >= 97) {
      // shift by determined shift number
      charCode -= encryptShift;
      // then if char code is under 97, loop around by 1 full alphabet
      if (charCode < 97) {
        charCode += 26;
      }
    }
    // add decrypted letter to decrypted string, return decrypted string
    decryptedString += String.fromCharCode(charCode);
  }
  return decryptedString;
};
