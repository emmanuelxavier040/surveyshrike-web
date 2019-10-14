import { connect, Dispatch } from 'react-redux'
import CreateSurveyTemplateParent from '../components/Survey/SurveyTemplate'
import { IAppReducer } from '../reducers/reducers'
import {SurveyActions} from '../actions/survey.actions'

interface ISurveyStateProps {
    survey: any,
    toggleTemplate: any,
    showTemplate: boolean
}

const mapStateToProps = (state: IAppReducer, props: any): ISurveyStateProps => {
    return {
        survey: {surveyName: state.survey.surveyName, 
                surveyDescription: state.survey.surveyDescription, 
                surveyCreationStatus: state.survey.surveyCreationStatus,
                formElements: state.survey.formElements
            },
        ...props
    }
}

interface ISurveyDispatchProps {
    addSurveyFormElement: (value: any) => any
    addSurveyName: (value: any) => any
    addSurveyDescription: (value: any) => any
    removeSurveyFormElement: (value: any) => any,
    clearSurveyForm: () => any,
    createSurvey: (value: any, callback: any) => any
}

const mapDispatchToProps = (dispatch: Dispatch<IAppReducer>): ISurveyDispatchProps => ({
    addSurveyFormElement: value => dispatch(SurveyActions.addSurveyFormElement(value)),
    addSurveyName: value => dispatch(SurveyActions.addSurveyName(value)),
    addSurveyDescription: value => dispatch(SurveyActions.addSurveyDescription(value)),
    removeSurveyFormElement: value => dispatch(SurveyActions.removeSurveyFormElement(value)),
    clearSurveyForm: () => dispatch(SurveyActions.clearSurveyForm()),
    createSurvey: (value, callback: any = () => {}) => SurveyActions.createSurvey(value, callback)(dispatch)
})


export type ISurveyProps = ISurveyStateProps & ISurveyDispatchProps

export const CreateSurveyTemplate = connect(mapStateToProps, mapDispatchToProps)(CreateSurveyTemplateParent)
