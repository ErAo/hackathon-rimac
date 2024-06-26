// validate string text if is empty
const isEmpty = (text) => {
    return text.trim() === ''
}

// validate email format
const isEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(email)
}

// validate password format
const isPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return passwordRegex.test(password)
}

// validate document number format
const isDocumentNumber = (documentNumber) => {
    const documentNumberRegex = /^\d{8,11}$/
    return documentNumberRegex.test(documentNumber)
}

// validate phone number format
const isPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{9}$/
    return phoneNumberRegex.test(phoneNumber)
}

export default {
    isEmpty,
    isEmail,
    isPassword,
    isDocumentNumber,
    isPhoneNumber
}