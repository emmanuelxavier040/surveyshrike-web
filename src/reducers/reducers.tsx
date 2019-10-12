import { combineReducers } from 'redux'
import { ISurvey, surveyReducer } from './survey.reducer'

export interface IAppReducer {
  survey: ISurvey
}

export const reducers = combineReducers<IAppReducer>({
  survey: surveyReducer
})