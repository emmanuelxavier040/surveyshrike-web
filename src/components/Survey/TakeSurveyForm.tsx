import React from 'react';
import { Button, Col, Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner, Collapse, Alert } from 'reactstrap';
import { ITakeSurveyProps } from '../../containers/SurveyList.container';
import { createId, FormElementClassifier } from './Utils';

class TakeSurvey extends React.Component<ITakeSurveyProps, any>{

  private defaultFormState = {}

  constructor(props: any) {
    super(props)
    this.state = this.defaultFormState
    this.cancel = this.cancel.bind(this)
    this.isReadyToSubmit = this.isReadyToSubmit.bind(this)
    this.updateTakeSurveyStatus = this.updateTakeSurveyStatus.bind(this)
    this.dismissAlert = this.dismissAlert.bind(this)
  }

  handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  cancel() {
    this.setState({ ...this.defaultFormState }, () => { this.props.cancelControl() })
  }

  isReadyToSubmit() {
    return Object.keys(this.state).length > 0
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.takeSurveyStatus === true) { this.updateTakeSurveyStatus(true) }
    else if (nextProps.takeSurveyStatus === false) this.updateTakeSurveyStatus(false)
  }

  updateTakeSurveyStatus(status: any) {
    if (status === true) {
      this.setState({ takeSurveyStatus: status })

      setTimeout(() => {
        this.setState({ ...this.defaultFormState })
        this.props.clearTakeSurveyForm()
        this.cancel()
      }, 3000);
    }
    else
      this.setState({
        takeSurveyStatus: status,
        showSpinner: false
      })
  }

  SubmitForm() {
    let surveyResponseObj = {
      surveyId: this.props.survey.surveyId,
      userId: '',
      responseText: JSON.stringify(this.state)
    }
    this.setState({ showSpinner: true })
    this.props.takeSurvey(surveyResponseObj)
  }

  dismissAlert() {
    this.updateTakeSurveyStatus(null)
  }

  render() {
    const isInValidTakeSurveyForm = !this.isReadyToSubmit() || this.state.takeSurveyStatus === true
    return (
      <React.Fragment>
        <Modal isOpen={this.props.showForm} size='lg'>
          <ModalHeader toggle={this.cancel}>
            {this.props.survey.surveyName}
          </ModalHeader>
          <ModalBody>
            <div style={{ width: '100%', border: 'none' }}>
              <FormGroup row>
                <Col sm={{ size: '9', offset: 1 }}>
                  {this.props.survey.surveyDescription}
                </Col>
              </FormGroup>
              <Form>
                {this.props.survey.questions.map((element: any, index: any) => {
                  element.id = createId(element.questionText)
                  return (
                    <FormGroup key={index}>
                      {FormElementClassifier(element, this.handleInputChange.bind(this))}
                    </FormGroup>
                  )
                })
                }
              </Form>
              <ModalFooter>
                <Spinner style={{ display: ''.concat(this.state.showSpinner || this.state.takeSurveyStatus ? 'block ' : 'none'), marginRight: '20px' }} color="primary" type="grow"/>
                <Button disabled={isInValidTakeSurveyForm} color="primary" size="sm" onClick={this.SubmitForm.bind(this)}>Submit</Button>
                <Button color="secondary" size="sm" onClick={this.cancel.bind(this)}>Cancel</Button>
              </ModalFooter>
            </div>
            <Collapse isOpen={this.state.takeSurveyStatus === false || this.state.takeSurveyStatus === true}>
              <Alert color='danger' isOpen={this.state.takeSurveyStatus === false} toggle={this.dismissAlert}> Unable to save the response!! </Alert>
              <Alert color='success' isOpen={this.state.takeSurveyStatus === true} toggle={this.dismissAlert}> Successfully saved the response!!</Alert>
            </Collapse>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default TakeSurvey;