import { apiService } from './api.service'


export const surveyService = {
    getAllSurveys,
    createNewSurvey
}

function getAllSurveys() {
    const file = require("./APIoutput.json");
    return file
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
        body: JSON.stringify({ surveyObj })
    }
    const createSurveyResponse = apiService.apiCall('/create-survey', requestOptions)
    createSurveyResponse
        .then(
            (response: any) => {
                return response.data
            },
            (error: any) => {
                return Promise.reject(error)
            }
        )
    return createSurveyResponse
}