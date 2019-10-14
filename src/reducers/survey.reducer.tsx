export interface ISurvey {
    surveyName: any,
    surveyDescription: any,
    formElements: Array<any>,
    surveyCreationStatus: boolean,
    surveyList: Array<any>
}

const defaultSurveyState: ISurvey = {
    surveyName: null,
    surveyDescription: null,
    formElements: [],
    surveyCreationStatus: false,
    surveyList: []
}

export const surveyReducer = (state: ISurvey = defaultSurveyState, action: any): ISurvey => {
    let newFormElements: any = []
    console.log(action)
    switch (action.type) {
        case 'ADD_NEW_QUESTION':
            newFormElements = [...state.formElements, action.data]
            return { ...state, formElements: newFormElements }
        case 'REMOVE_QUESTION':
            newFormElements = state.formElements.filter((element: any) => element.id !== action.data)
            return { ...state, formElements: newFormElements }
        case 'ADD_SURVEY_NAME':
            return { ...state, surveyName: action.data }
        case 'ADD_SURVEY_DESCRIPTION':
            return { ...state, surveyDescription: action.data }
        case 'CLEAR_SURVEY_FORM':
            return defaultSurveyState
        case 'SUCCESS_CREATE_SURVEY_REQUEST':
            return { ...state, surveyCreationStatus: true }

        case 'ADD_SURVEYS_LIST':
            return { ...state, surveyList: action.data }

        default:
            return state
    }
}