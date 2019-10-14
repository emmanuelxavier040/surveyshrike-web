import { apiService } from './api.service'


export const surveyService = {
    getAllSurveys,
    createNewSurvey
}

function getAllSurveys() {
    const requestOptions = {
        method: 'GET',        
    }
    const getSurveysResponse = apiService.apiCall('/surveys', requestOptions)
    getSurveysResponse
        .then(
            (response: any) => {
                return response
            },
            (error: any) => {
                return Promise.reject(error)
            }
        )
    return getSurveysResponse
}



// {
//     surveyName: 'SurveyName 1',
//     surveyDescription: 'This is a description for this survey.',
//     formElements: {
//         label: 'FieldName 1',
//         type: 'text',
//         placeholder: 'Placeholder for the input box',
//         tags: ['Option 1','Option 2','Option 3']
//     }
// }

function createNewSurvey(surveyObj: any) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(surveyObj)
    }
    const createSurveyResponse = apiService.apiCall('/create-survey', requestOptions)
    createSurveyResponse
        .then(
            (response: any) => {
                return response
            },
            (error: any) => {
                return Promise.reject(error)
            }
        )
    return createSurveyResponse
}