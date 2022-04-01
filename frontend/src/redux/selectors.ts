import { RootState } from 'redux/reducers'

/**
 * Export all needed selector here
 * @param rootState
 * @returns something that u want
 */

export const selectUserIsLoggedIn = (rootState: RootState) => rootState.rootReducer.userLogin.isLogin;