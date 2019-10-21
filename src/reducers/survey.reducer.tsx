import { surveyConstants } from '../constants/SurveyConstants'
import { mySurveyConstants } from '../constants/MySurveyConstants';

export interface ISurvey {
    surveyName: any,
    surveyDescription: any,
    formElements: Array<any>,
    surveyCreationStatus: any,
    surveyList: Array<any>
    surveyResponseList: Array<any>,
    takeSurveyStatus: any
}

const defaultSurveyState: ISurvey = {
    surveyName: null,
    surveyDescription: null,
    formElements: [],
    surveyCreationStatus: null,
    surveyList: [],
    surveyResponseList: [],
    takeSurveyStatus: null
}

export const surveyReducer = (state: ISurvey = defaultSurveyState, action: any): ISurvey => {
    let newFormElements: any = []
    console.log(action)
    switch (action.type) {

        case surveyConstants.ADD_NEW_QUESTION:
            newFormElements = [...state.formElements, action.data]
            return { ...state, formElements: newFormElements }

        case surveyConstants.REMOVE_QUESTION:
            newFormElements = state.formElements.filter((element: any) => element.id !== action.data)
            return { ...state, formElements: newFormElements }

        case surveyConstants.ADD_SURVEY_NAME:
            return { ...state, surveyName: action.data }

        case surveyConstants.ADD_SURVEY_DESCRIPTION:
            return { ...state, surveyDescription: action.data }

        case surveyConstants.CLEAR_SURVEY_FORM:
            return defaultSurveyState

        case surveyConstants.SUCCESS_CREATE_SURVEY_REQUEST:
            return { ...state, surveyCreationStatus: true }

        case surveyConstants.ADD_SURVEYS_LIST:
            return { ...state, surveyList: action.data }

        case surveyConstants.CLEAR_SURVEY_LIST:
            return { ...state, surveyList: [] }

        case surveyConstants.SUCCESS_TAKE_SURVEY_REQUEST:
            return { ...state, takeSurveyStatus: true }

        case surveyConstants.FAILURE_TAKE_SURVEY_REQUEST:
            return { ...state, takeSurveyStatus: false }

        case surveyConstants.RESET_TAKE_SURVEY_FORM:
            return { ...state, takeSurveyStatus: null }

        case mySurveyConstants.SET_SURVEY_RESPONSE_LIST:
            return { ...state, surveyResponseList: action.data }
        
        case mySurveyConstants.RESET_SURVEY_RESPONSE_LIST:
            return { ...state, surveyResponseList: [] }
          
        default:
            return state
    }
}