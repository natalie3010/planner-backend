import { lengthCredentials, upper, lower, number, special } from './regex'

export const strongPassword = (password) => {
  if (
    lengthCredentials.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    number.test(password) &&
    special.test(password)
  ) {
    return true
  } else {
    return false
  }
}
