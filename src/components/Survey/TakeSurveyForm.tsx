import * as React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export function FormElementClassifier(element: any) {

  if (element.answerType === 'RADIO' || element.answerType === 'CHECK_BOX') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
        <Col sm={10}>
          {element.choices.map((tag: any, index: any) => {
            return (
              <FormGroup check key={index}>
                <Input type={'radio'} name={element.id} />{' '}<span>{tag.choiceValue}</span>
              </FormGroup>
            )
          })}
        </Col>
      </React.Fragment>
    )
  }
  else if (element.answerType === 'SINGLE_LINE_INPUT' || element.answerType === 'MULTIPLE_LINE_INPUT') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
        <Input type={element.answerType === 'SINGLE_LINE_INPUT' ? 'text' : 'textarea'} name={element.name} id={element.id} placeholder={element.placeholder} />
      </React.Fragment>
    )
  }
  else if (element.answerType === 'FILEUPLOAD') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
        <Input type={'file'} name={element.questionText} id={element.id} placeholder={element.placeholder} />
      </React.Fragment>
    )
  }
  else if (element.answerType === 'SELECT') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
        <Input type={'select'} name={element.questionText} id={element.id} >
          {element.choices.map((tag: any, index: any) => {
            return (
              <option value={tag.choiceValue} key={index}>{tag.choiceValue}</option>
            )
          })}
        </Input>
      </React.Fragment>

    )
  }

}

class TakeSurvey extends React.Component<any, any>{

  private defaultFormState = {
    surveyName: '',
    surveyDescription: '',
    questions: []
  }

  constructor(props: any) {
    super(props)
    this.state = this.defaultFormState

    this.cancel = this.cancel.bind(this)
  }


  cancel() {
    this.setState({ ...this.defaultFormState }, () => { this.props.cancelControl() })
  }

  SubmitForm() {

  }


  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.showForm}>
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
                {
                  this.props.survey.questions.map((element: any, index: any) => {
                    return (
                      <FormGroup key={index}>
                        {FormElementClassifier(element)}
                      </FormGroup>
                    )
                  })
                }
              </Form>

              <ModalFooter>
                <Button disabled={false} color="primary" size="sm" onClick={this.SubmitForm.bind(this)}>Submit</Button>
                <Button color="secondary" size="sm" onClick={this.cancel.bind(this)}>Cancel</Button>
              </ModalFooter>
            </div>
          </ModalBody>
        </Modal>

      </React.Fragment>
    )
  }
}
export default TakeSurvey;