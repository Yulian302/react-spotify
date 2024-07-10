export const isEmailCorrect = (email: string) => {
  const emailRe = /^\w{5,}@[a-zA-Z]+\.[a-zA-Z]+$/i
  return emailRe.test(email)
}

export const isUsernameCorrect = (username: string) => {
  const usernameRe = /^\w{5,}$/
  return usernameRe.test(username)
}
