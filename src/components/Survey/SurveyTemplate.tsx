import * as React from 'react';
import 'react-tagsinput/react-tagsinput.css';
import { Alert, Button, Collapse, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from 'reactstrap';
import { ISurveyProps } from '../../containers/SurveyTemplate.container';
import './css/SurveyTemplate.css';
import FieldSelectForm from "./FieldSelectionForm";
import { SurveyTemplatePresentation } from './SurveyTemplatePresentation';
import history from '../../history'

require('crypto');

export const FormElements = [
  // {
  //   type: 'email',
  //   name: 'email',
  //   id: 'exampleEmail',
  //   placeholder: 'with a placeholder',
  //   label: 'Email'
  // },
  // {
  //   type: 'password',
  //   name: 'password',
  //   id: 'examplePassword',
  //   placeholder: 'with a placeholder',
  //   label: 'Password'
  // },
  // {
  //   type: 'textarea',
  //   name: 'textarea',
  //   id: 'exampleTextarea',
  //   placeholder: 'with a placeholder',
  //   label: 'Textarea'
  // },
  // {
  //   type: 'file',
  //   name: 'file',
  //   id: 'exampleFile',
  //   placeholder: 'with a placeholder',
  //   label: 'File'
  // },
  // {
  //   type: 'radio',
  //   placeholder: '',
  //   label: 'Radio Test',
  //   id: 'radioBox',
  //   tags: ['radio 1', 'radio 2', 'radio 3']
  // },
  // {
  //   type: 'checkbox',
  //   placeholder: '',
  //   label: 'Checkbox Test',
  //   id: 'checkBox',
  //   tags: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3']
  // }
]

class CreateSurveyTemplateParent extends React.Component<ISurveyProps, any> {

  private defaultState = {
    showFieldSelection: false,
    previewPopOver: false,
    surveyCreateSuccess: null,
    showSpinner: false
  }

  constructor(props: any) {
    super(props)
    this.state = this.defaultState

    this.toggleFieldSelection = this.toggleFieldSelection.bind(this)
    this.removeFieldElement = this.removeFieldElement.bind(this)
    this.addSurveyName = this.addSurveyName.bind(this)
    this.addSurveyDescription = this.addSurveyDescription.bind(this)
    this.isValidSurveyDetail = this.isValidSurveyDetail.bind(this)
    this.togglePopOver = this.togglePopOver.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  createId(value: string) {
    var crypto = require('crypto');
    var hash = crypto.createHash('md5').update(value).digest('hex');
    return hash
  }

  toggleFieldSelection() {
    const showFieldSelection = this.state.showFieldSelection
    this.setState({
      showFieldSelection: !showFieldSelection
    })
  }

  togglePopOver() {
    const previewPopOver = this.state.previewPopOver
    this.setState({
      previewPopOver: !previewPopOver
    })
  }

  isValidSurveyDetail(fieldName: any, strict: string = '') {
    let basicCheck = false
    if (fieldName === 'surveyName') {
      basicCheck = typeof this.props.survey.surveyName == typeof "" && this.props.survey.surveyName.length > 0
      return strict === 'strict' ? basicCheck : this.props.survey.surveyName === null || basicCheck
    } else if (fieldName === 'surveyDescription') {
      basicCheck = typeof this.props.survey.surveyDescription == typeof "" && this.props.survey.surveyDescription.length > 0
      return strict === 'strict' ? basicCheck : this.props.survey.surveyDescription === null || basicCheck
    }
  }

  addSurveyName(surveyElement: any) { this.props.addSurveyName(surveyElement.target.value) }

  addSurveyDescription(surveyElement: any) { this.props.addSurveyDescription(surveyElement.target.value) }

  addNewField(newFieldData: any) {
    let newFieldElement = { ...newFieldData }
    newFieldElement.id = this.createId(newFieldElement.questionText)
    this.toggleFieldSelection()
    this.props.addSurveyFormElement(newFieldElement)
  }

  isEmptyFormElements() { return this.props.survey.formElements.length === 0 }

  removeFieldElement(id: any) { this.props.removeSurveyFormElement(id); }

  createSurvey() {
    const newFormElements = this.props.survey.formElements.map(
      (element: any, index: any) => { return { ...element, orderNumber: index } })
    const surveyObject = {
      surveyName: this.props.survey.surveyName,
      surveyDescription: this.props.survey.surveyDescription,
      questions: newFormElements
    }
    console.log(surveyObject)
    this.setState({
      showSpinner: true
    }, () => this.props.createSurvey(surveyObject, this.updateSurveyCreateStatus.bind(this)))

  }

  updateSurveyCreateStatus(status: boolean) {
    console.log(status)
    this.setState({
      surveyCreateSuccess: status,
      showSpinner: false
    })
    if(status === true) {      
      setTimeout(()=>  history.push('/surveys'), 3000);  
    }
  }

  onDismiss() {
    this.setState({
      surveyCreateSuccess: null
    })
  }

  closeCreateSurvey() {
    this.props.clearSurveyForm()
    this.props.toggleTemplate()
    this.setState({
      ...this.defaultState
    })
  }

  render() {
    const isStrictInValidSurveyName = !this.isValidSurveyDetail('surveyName', 'strict')
    const isStrictInValidSurveyDescription = !this.isValidSurveyDetail('surveyDescription', 'strict')
    const isInValidSurvey = this.state.surveyCreateSuccess === true || isStrictInValidSurveyName || isStrictInValidSurveyDescription
    
    const props = {
      showTemplate: this.props.showTemplate,
      toggleTemplate: this.closeCreateSurvey.bind(this),
      isInValidSurveyName: !this.isValidSurveyDetail('surveyName'),
      onAddSurveyName: this.addSurveyName,
      onAddSurveyDescription: this.addSurveyDescription,
      toggleShowFieldSelection: this.toggleFieldSelection,
      isInValidSurveyDescription: !this.isValidSurveyDetail('surveyDescription'),
      removeFieldElement: this.removeFieldElement,
      formElementList: this.props.survey.formElements,
      togglePopOver: this.togglePopOver,
      showPreviewPopOver: this.state.previewPopOver,
      showSubmitButton: !this.isEmptyFormElements(),
      disableSubmitButton: isInValidSurvey,
      OnSubmitClick: this.createSurvey.bind(this)
    }
    return (
      <React.Fragment>
        <Modal isOpen={this.props.showTemplate} toggle={props.toggleTemplate} size={'lg'}>
          <ModalHeader toggle={props.toggleTemplate}>
            Create Survey
          </ModalHeader>
          {/* <Progress value={75}>You're almost there!</Progress> */}
          <ModalBody>
            <SurveyTemplatePresentation {...props} />
            <ModalFooter>
              <Spinner style={{ display: ''.concat(this.state.showSpinner || this.state.surveyCreateSuccess ? 'block ' : 'none'), marginRight: '20px' }} color="primary" />
              <Button id="previewPopOverId" color="info" size="lg" onClick={props.togglePopOver}>Preview</Button>
              {/* Need to fix */}
              {/* <Popover placement="bottom" isOpen={props.showPreviewPopOver} target="previewPopOverId" toggle={props.togglePopOver}>
                        <PopoverBody>In progress...</PopoverBody>
                    </Popover> */}
              <Button disabled={props.disableSubmitButton} size={'lg'} color="primary" onClick={props.OnSubmitClick}>Create Survey</Button>{' '}
              <Button size={'lg'} color="secondary" onClick={this.closeCreateSurvey.bind(this)}>Cancel</Button>
            </ModalFooter>
            <Collapse isOpen={this.state.surveyCreateSuccess === false || this.state.surveyCreateSuccess === true}>
              <Alert color='danger' isOpen={this.state.surveyCreateSuccess === false} toggle={this.onDismiss}> Unable to create the survey!! </Alert>
              <Alert color='success' isOpen={this.state.surveyCreateSuccess === true} toggle={this.onDismiss}> Successfully created the survey!! Redirecting to surveys... </Alert>
            </Collapse>
          </ModalBody>
        </Modal>
        <FieldSelectForm showForm={this.state.showFieldSelection} addNewFieldControl={this.addNewField.bind(this)} cancelControl={this.toggleFieldSelection} />
      </React.Fragment>
    )
  }
}

export default CreateSurveyTemplateParent
