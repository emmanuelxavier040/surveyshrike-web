import { connect, Dispatch } from 'react-redux'
import MySurveysList from '../components/MySurveys/MySurveys'
import MySurveyResponseTemplate  from '../components/MySurveys/MySurveyResponses'
import { IAppReducer } from '../reducers/reducers'
import { MySurveyActions, MySurveyResponseActions } from '../actions/mySurvey.actions'

interface IMySurveysListStateProps {
    surveyList: Array<any>,
}

const mapStateToProps = (state: IAppReducer, props: any): IMySurveysListStateProps => {
    return {
        surveyList: state.survey.surveyList,
    }
}

interface IMySurveysListDispatchProps {
    getMySurveys: () => any
    clearSurveyList: () => any

}

const mapDispatchToProps = (dispatch: Dispatch<IAppReducer>): IMySurveysListDispatchProps => ({
    getMySurveys: () => MySurveyActions.getMySurveys()(dispatch),
    clearSurveyList: () => dispatch(MySurveyActions.clearSurveyList())
})

export type ISurveyListProps = IMySurveysListStateProps & IMySurveysListDispatchProps

export const MySurveyList = connect(mapStateToProps, mapDispatchToProps)(MySurveysList)

//------------------********CONTAINER FOR MySurveyResponseTemplate COMPONENT********-------------------

interface IMySurveyResponseListStateProps {
    survey: any,
    showForm: any
    toggle: () => any,
    surveyResponseList: Array<any>
}

const mapTakeSurveyStateToProps = (state: IAppReducer, props: any): IMySurveyResponseListStateProps => {
    return {
        surveyResponseList: state.survey.surveyResponseList,
        ...props
    }
}

interface IMySurveyResponseDispatchProps {
    clearSurveyResponseList: () => any
    getAllResponsesToSurvey: (value: any) => any
}

const mapTakeSurveyDispatchToProps = (dispatch: Dispatch<IAppReducer>): IMySurveyResponseDispatchProps => ({
    clearSurveyResponseList: () => dispatch(MySurveyResponseActions.clearSurveyResponseList()),
    getAllResponsesToSurvey: value => MySurveyResponseActions.getAllResponsesToSurvey(value)(dispatch)
})


export type IMySurveyResponseProps = IMySurveyResponseListStateProps & IMySurveyResponseDispatchProps

export const MySurveyResponse = connect(mapTakeSurveyStateToProps, mapTakeSurveyDispatchToProps)(MySurveyResponseTemplate)
