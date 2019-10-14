import { connect, Dispatch } from 'react-redux'
import SurveyList from '../components/Survey/Survey'
import { IAppReducer } from '../reducers/reducers'
import {SurveyActions} from '../actions/survey.actions'

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
    
}

const mapDispatchToProps = (dispatch : Dispatch<IAppReducer>): ISurveyListDispatchProps => ({
    getSurveys: () => SurveyActions.getSurveys()(dispatch),
    getSurvey: value => SurveyActions.getSurvey(value)(dispatch),
})


export type ISurveyListProps = ISurveyListStateProps & ISurveyListDispatchProps

export const Survey = connect(mapStateToProps, mapDispatchToProps)(SurveyList)
