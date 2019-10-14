import { combineReducers } from 'redux'
import { ISurvey, surveyReducer } from './survey.reducer'
import { IAuthenticationState, authenticationReducer} from './authentication.reducer'

export interface IAppReducer {
  survey: ISurvey
  authentication: IAuthenticationState
}

export const reducers = combineReducers<IAppReducer>({
  survey: surveyReducer,
  authentication: authenticationReducer
})