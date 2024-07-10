export const isEmailCorrect = (email: string) => {
  const emailRe = /^\w{2,}@[a-zA-Z]+\.[a-zA-Z]+$/i
  return emailRe.test(email)
}

export const isUsernameCorrect = (username: string) => {
  return username.length > 0
}

export const isPasswordCorrect = (password: string) => {
  return password.length > 0
}
