import * as React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { FormElementClassifier } from './Utils';

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