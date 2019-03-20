/* 防止引用全局 HOST 时，eslint 报错，所以在这里引用 */
/* eslint-disable */
export const host = HOST
/* eslint-enable */
export const BANNER = "BANNER"
export const API_TRENDING = `${host}/repositories?`
