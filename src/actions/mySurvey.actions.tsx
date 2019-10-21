import { surveyService } from '../services/survey.service'
import { mySurveyConstants } from '../constants/MySurveyConstants'

export const MySurveyActions = {
    getMySurveys,
    clearSurveyList
}

export const MySurveyResponseActions = {
    clearSurveyResponseList,
    getAllResponsesToSurvey
}

function clearSurveyResponseList() {
    return { type: mySurveyConstants.RESET_SURVEY_RESPONSE_LIST, data: '' }
}

function getMySurveys() {
    return (dispatch: any) => {
        dispatch({ type: mySurveyConstants.GET_SURVEYS_REQUEST_STARTED })
        surveyService.getMySurveys().then(
            response => {
                dispatch({ type: mySurveyConstants.SUCCESS_GET_SURVEYS_REQUEST })
                dispatch({ type: mySurveyConstants.ADD_SURVEYS_LIST, data: response })
            },
            error => {
                dispatch({ type: mySurveyConstants.FAILURE_GET_SURVEYS_REQUEST })
            }
        )
        dispatch({ type: mySurveyConstants.GET_SURVEYS_REQUEST_ENDED })
    }
}

function getAllResponsesToSurvey(surveyId: any) {
    return (dispatch: any) => {
        dispatch({ type: mySurveyConstants.GET_SURVEY_RESPONSES_REQUEST_STARTED })
        surveyService.getAllResponsesForSurvey(surveyId).then(
            response => {
                dispatch({ type: mySurveyConstants.SUCCESS_GET_SURVEY_RESPONSES_REQUEST })
                dispatch({ type: mySurveyConstants.SET_SURVEY_RESPONSE_LIST, data: response })
            },
            error => {
                dispatch({ type: mySurveyConstants.FAILURE_GET_SURVEY_RESPONSES_REQUEST })
            }
        )
        dispatch({ type: mySurveyConstants.GET_SURVEY_RESPONSES_REQUEST_ENDED })
    }
}

function clearSurveyList() {
    return {type: mySurveyConstants.CLEAR_SURVEY_LIST}
}

// function takeSurvey(surveyResponseObj: any) {
//     return (dispatch: any) => {
//         dispatch({ type: mySurveyConstants.TAKE_SURVEY_REQUEST_STARTED })
//         surveyService.takeSurvey(surveyResponseObj).then(
//             response => {
//                 dispatch({ type: mySurveyConstants.SUCCESS_TAKE_SURVEY_REQUEST })
//             },
//             error => {
//                 dispatch({ type: mySurveyConstants.FAILURE_TAKE_SURVEY_REQUEST })
//             }
//         )
//         dispatch({ type: mySurveyConstants.TAKE_SURVEY_REQUEST_ENDED })
//     }
// }