import { surveyService } from '../services/survey.service'
import { surveyConstants } from '../constants/SurveyConstants'

export const GetSurveyActions = {
    getSurveys,
    getSurvey,
    clearSurveyList

}

export const TakeSurveyActions = {
    takeSurvey,
    clearTakeSurveyForm
}

function clearTakeSurveyForm() {
    return { type: surveyConstants.RESET_TAKE_SURVEY_FORM, data: '' }
}

function getSurveys() {
    return (dispatch: any) => {
        dispatch({ type: surveyConstants.GET_SURVEYS_REQUEST_STARTED })
        surveyService.getAllSurveys().then(
            response => {
                dispatch({ type: surveyConstants.SUCCESS_GET_SURVEYS_REQUEST })
                dispatch({ type: surveyConstants.ADD_SURVEYS_LIST, data: response })
            },
            error => {
                dispatch({ type: surveyConstants.FAILURE_GET_SURVEYS_REQUEST })
            }
        )
        dispatch({ type: surveyConstants.GET_SURVEYS_REQUEST_ENDED })
    }
}

function getSurvey(surveyId: any) {
    return (dispatch: any) => {
        dispatch({ type: surveyConstants.GET_SURVEY_REQUEST_STARTED })
        surveyService.getAllSurveys().then(
            response => {
                dispatch({ type: surveyConstants.SUCCESS_GET_SURVEY_REQUEST })
                dispatch({ type: surveyConstants.ADD_OPEN_SURVEY, data: response })
            },
            error => {
                dispatch({ type: surveyConstants.FAILURE_GET_SURVEY_REQUEST })
            }
        )
        dispatch({ type: surveyConstants.GET_SURVEY_REQUEST_ENDED })
    }
}

function clearSurveyList() {
    return {type: surveyConstants.CLEAR_SURVEY_LIST}
}

function takeSurvey(surveyResponseObj: any) {
    return (dispatch: any) => {
        dispatch({ type: surveyConstants.TAKE_SURVEY_REQUEST_STARTED })
        surveyService.takeSurvey(surveyResponseObj).then(
            response => {
                dispatch({ type: surveyConstants.SUCCESS_TAKE_SURVEY_REQUEST })
            },
            error => {
                dispatch({ type: surveyConstants.FAILURE_TAKE_SURVEY_REQUEST })
            }
        )
        dispatch({ type: surveyConstants.TAKE_SURVEY_REQUEST_ENDED })
    }
}