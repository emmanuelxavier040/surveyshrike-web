import { connect, Dispatch } from 'react-redux'
import CreateSurveyTemplateParent from '../components/Survey/SurveyTemplate'
import { IAppReducer } from '../reducers/reducers'
import {CreateSurveyActions} from '../actions/newSurvey.actions'

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
    createSurvey: (value: any) => any
}

const mapDispatchToProps = (dispatch: Dispatch<IAppReducer>): ISurveyDispatchProps => ({
    addSurveyFormElement: value => dispatch(CreateSurveyActions.addSurveyFormElement(value)),
    addSurveyName: value => dispatch(CreateSurveyActions.addSurveyName(value)),
    addSurveyDescription: value => dispatch(CreateSurveyActions.addSurveyDescription(value)),
    removeSurveyFormElement: value => dispatch(CreateSurveyActions.removeSurveyFormElement(value)),
    clearSurveyForm: () => dispatch(CreateSurveyActions.clearSurveyForm()),
    createSurvey: (value) => CreateSurveyActions.createSurvey(value)(dispatch)
})


export type ISurveyProps = ISurveyStateProps & ISurveyDispatchProps

export const CreateSurveyTemplate = connect(mapStateToProps, mapDispatchToProps)(CreateSurveyTemplateParent)
