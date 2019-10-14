import * as React from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

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
        <Input type={element.answerType === 'SINGLE_LINE_INPUT'?'text':'textarea'} name={element.name} id={element.id} placeholder={element.placeholder} />
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

export const DisplayForm = (props: any) => {
  return (
    <React.Fragment>
      <Form>
        {
          props.formElementList.map((element: any, index: any) => {
            return (
              <FormGroup key={index}>
                <Button close onClick={() => props.removeField(element.id)} />
                {FormElementClassifier(element)}
              </FormGroup>
            )
          })
        }
      </Form>
    </React.Fragment>
  )
}