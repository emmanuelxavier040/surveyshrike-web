import * as React from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

export function FormElementClassifier(element: any) {

  if (element.type === 'radio' || element.type === 'checkbox') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.label}</Label>
        <Col sm={10}>
          {element.tags.map((tag: any, index: any) => {
            return (
              <FormGroup check key={index}>
                <Input type={element.type} name={element.id} />{' '}<span>{tag}</span>
              </FormGroup>
            )
          })}
        </Col>
      </React.Fragment>
    )
  }
  else if (element.type === 'text' || element.type === 'textarea') {
    return (
      <React.Fragment>        
        <Label className='fieldLabel' for={element.id}>{element.label}</Label>
        <Input type={element.type} name={element.name} id={element.id} placeholder={element.placeholder} />
      </React.Fragment>
    )
  }
  else if (element.type === 'file') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.label}</Label>
        <Input type={element.type} name={element.name} id={element.id} placeholder={element.placeholder} />
      </React.Fragment>
    )
  }
  else if (element.type === 'select') {
    return (
      <React.Fragment>
        <Label className='fieldLabel' for={element.id}>{element.label}</Label>
        <Input type={element.type} name={element.label} id={element.id} >
          {element.tags.map((tag: any, index: any) => {
            return (
              <option value={tag} key={index}>{tag}</option>
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