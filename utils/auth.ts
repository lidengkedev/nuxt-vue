let TOKENKEY: string

export const getToken = () => TOKENKEY
export const setToken = (token: string) => (TOKENKEY = token)
export const removeToken = () => (TOKENKEY = '')