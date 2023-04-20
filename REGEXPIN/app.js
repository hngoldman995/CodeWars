// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

// ^: start of the string
// \d{4}: exactly 4 digits
// (\d{2})?: optionally, exactly 2 more digits
// $: end of the string

// The test method is called on the pattern with pin as an argument, which will return true if the pin string matches the pattern and false otherwise

