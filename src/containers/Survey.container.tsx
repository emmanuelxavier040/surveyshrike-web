import { connect } from 'react-redux'
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
        survey: state.survey,
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

const mapDispatchToProps: ISurveyDispatchProps = ({
    addSurveyFormElement: value => SurveyActions.addSurveyFormElement(value),
    addSurveyName: value => SurveyActions.addSurveyName(value),
    addSurveyDescription: value => SurveyActions.addSurveyDescription(value),
    removeSurveyFormElement: value => SurveyActions.removeSurveyFormElement(value),
    clearSurveyForm: () => SurveyActions.clearSurveyForm(),
    createSurvey: (value, callback: any = () => {}) => SurveyActions.createSurvey(value, callback)
})


export type ISurveyProps = ISurveyStateProps & ISurveyDispatchProps

export const CreateSurveyTemplate = connect(mapStateToProps, mapDispatchToProps)(CreateSurveyTemplateParent)
