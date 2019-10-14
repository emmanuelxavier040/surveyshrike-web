import { surveyService } from '../services/survey.service'

export const SurveyActions = {
    addSurveyFormElement,
    removeSurveyFormElement,
    addSurveyName,
    addSurveyDescription,
    clearSurveyForm,
    createSurvey,
    getSurveys,
    getSurvey
}

function addSurveyFormElement(surveyObj: any) {
    return { type: 'ADD_NEW_QUESTION', data: surveyObj }
}

function removeSurveyFormElement(surveyId: any) {
    return { type: 'REMOVE_QUESTION', data: surveyId }
}

function addSurveyName(name: any) {
    return { type: 'ADD_SURVEY_NAME', data: name }
}

function addSurveyDescription(description: any) {
    return { type: 'ADD_SURVEY_DESCRIPTION', data: description }
}

function clearSurveyForm() {
    return { type: 'CLEAR_SURVEY_FORM', data: '' }
}

function createSurvey(surveyObj: any, callback: any = (props: any) => { }) {
    return (dispatch: any) => {
        dispatch({ type: 'CREATE_SURVEY_REQUEST_STARTED' })
        surveyService.createNewSurvey({ ...surveyObj }).then(
            response => {
                dispatch({ type: 'SUCCESS_CREATE_SURVEY_REQUEST' })
                callback(true)
            },
            error => {
                dispatch({ type: 'FAILURE_CREATE_SURVEY_REQUEST' })
                callback(false)
            }
        )
        dispatch({ type: 'CREATE_SURVEY_REQUEST_ENDED' })
    }
}

function getSurveys() {
    return (dispatch: any) => {
        dispatch({ type: 'GET_SURVEYS_REQUEST_STARTED' })
        surveyService.getAllSurveys().then(
            response => {
                dispatch({ type: 'SUCCESS_GET_SURVEYS_REQUEST' })
                dispatch({ type: 'ADD_SURVEYS_LIST', data: response })
            },
            error => {
                dispatch({ type: 'FAILURE_GET_SURVEYS_REQUEST' })
            }
        )
        dispatch({ type: 'GET_SURVEYS_REQUEST_ENDED' })
    }
}

function getSurvey(surveyId: any) {
    return (dispatch: any) => {
        dispatch({ type: 'GET_SURVEY_REQUEST_STARTED' })
        surveyService.getAllSurveys().then(
            response => {
                dispatch({ type: 'SUCCESS_GET_SURVEY_REQUEST' })
                dispatch({ type: 'ADD_OPEN_SURVEY', data: response })
            },
            error => {
                dispatch({ type: 'FAILURE_GET_SURVEY_REQUEST' })
            }
        )
        dispatch({ type: 'GET_SURVEY_REQUEST_ENDED' })
    }
}