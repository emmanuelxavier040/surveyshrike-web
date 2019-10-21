import { apiService } from './api.service'


export const surveyService = {
    getAllSurveys,
    createNewSurvey,
    takeSurvey,
    getMySurveys,
    getAllResponsesForSurvey
}


function callAPI(requestOptions: any, path: any) {
    const response = apiService.apiCall(path, requestOptions)
    response
        .then(
            (response: any) => {
                return response
            },
            (error: any) => {
                return Promise.reject(error)
            }
        )
    return response
}

function getAllSurveys() {
    const requestOptions = {
        method: 'GET',
    }
    return callAPI(requestOptions, '/surveys')
}

function createNewSurvey(surveyObj: any) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(surveyObj)
    }
    return callAPI(requestOptions, '/create-survey')
}

function takeSurvey(surveyResponseObj: any) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(surveyResponseObj)
    }
    return callAPI(requestOptions, '/take-survey')
}

function getMySurveys() {
    const requestOptions = {
        method: 'GET',
    }
    return callAPI(requestOptions, '/my-surveys')
}

function getAllResponsesForSurvey(surveyId: any) {
    const requestOptions = {
        method: 'GET',
    }
    return callAPI(requestOptions, '/survey-responses/'.concat(surveyId))
}

