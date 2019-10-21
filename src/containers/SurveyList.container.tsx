import { connect, Dispatch } from 'react-redux'
import SurveyList from '../components/Survey/Survey'
import TakeSurvey  from '../components/Survey/TakeSurveyForm'
import { IAppReducer } from '../reducers/reducers'
import {GetSurveyActions, TakeSurveyActions} from '../actions/takeSurvey.actions'

interface ISurveyListStateProps {
    surveyList: Array<any>,
}

const mapStateToProps = (state: IAppReducer, props: any): ISurveyListStateProps => {
    return {
        surveyList: state.survey.surveyList,
    }
}

interface ISurveyListDispatchProps {
    getSurveys: () => any
    getSurvey: (value: any) => any
    clearSurveyList: () => any
    
}

const mapDispatchToProps = (dispatch : Dispatch<IAppReducer>): ISurveyListDispatchProps => ({
    getSurveys: () => GetSurveyActions.getSurveys()(dispatch),
    getSurvey: value => GetSurveyActions.getSurvey(value)(dispatch),
    clearSurveyList: () => dispatch(GetSurveyActions.clearSurveyList())
})

//------------------********CONTAINER FOR TAKESURVEY COMPONENT********-------------------
export type ISurveyListProps = ISurveyListStateProps & ISurveyListDispatchProps

export const Survey = connect(mapStateToProps, mapDispatchToProps)(SurveyList)


interface ITakeSurveyStateProps {
    takeSurveyStatus: any,
    survey: any,
    showForm: any,
    cancelControl: () => any
}

const mapTakeSurveyStateToProps = (state: IAppReducer, props: any): ITakeSurveyStateProps => {
    return {
        takeSurveyStatus: state.survey.takeSurveyStatus,
        ...props
    }
}

interface ITakeSurveyDispatchProps {
    clearTakeSurveyForm: () => any
    takeSurvey: (value: any) => any

    
}

const mapTakeSurveyDispatchToProps = (dispatch : Dispatch<IAppReducer>): ITakeSurveyDispatchProps => ({
    clearTakeSurveyForm: () => dispatch(TakeSurveyActions.clearTakeSurveyForm()),
    takeSurvey: value => TakeSurveyActions.takeSurvey(value)(dispatch)
})


export type ITakeSurveyProps = ITakeSurveyStateProps & ITakeSurveyDispatchProps

export const TakeSurveyForm = connect(mapTakeSurveyStateToProps, mapTakeSurveyDispatchToProps)(TakeSurvey)
