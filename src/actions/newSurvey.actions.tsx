import { surveyService } from '../services/survey.service'
import { surveyConstants } from '../constants/SurveyConstants'

export const CreateSurveyActions = {
    addSurveyFormElement,
    removeSurveyFormElement,
    addSurveyName,
    addSurveyDescription,
    clearSurveyForm,
    createSurvey
}

function addSurveyFormElement(surveyObj: any) {
    return { type: surveyConstants.ADD_NEW_QUESTION, data: surveyObj }
}

function removeSurveyFormElement(surveyId: any) {
    return { type: surveyConstants.REMOVE_QUESTION, data: surveyId }
}

function addSurveyName(name: any) {
    return { type: surveyConstants.ADD_SURVEY_NAME, data: name }
}

function addSurveyDescription(description: any) {
    return { type: surveyConstants.ADD_SURVEY_DESCRIPTION, data: description }
}

function clearSurveyForm() {
    return { type: surveyConstants.CLEAR_SURVEY_FORM, data: '' }
}

function createSurvey(surveyObj: any) {
    return (dispatch: any) => {
        dispatch({ type: surveyConstants.CREATE_SURVEY_REQUEST_STARTED })
        surveyService.createNewSurvey({ ...surveyObj }).then(
            response => {
                dispatch({ type: surveyConstants.SUCCESS_CREATE_SURVEY_REQUEST })
            },
            error => {
                dispatch({ type: surveyConstants.FAILURE_CREATE_SURVEY_REQUEST })
            }
        )
        dispatch({ type: surveyConstants.CREATE_SURVEY_REQUEST_ENDED })
    }
}
