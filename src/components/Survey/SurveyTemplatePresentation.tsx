import * as React from 'react';
import { Button, Col, FormFeedback, FormGroup, Input } from 'reactstrap';
// import { Popover, PopoverBody } from 'reactstrap'
import { DisplayForm } from './Form';

export const SurveyTemplatePresentation = (props: any) => {

    const RequiredMessage = <FormFeedback>Required</FormFeedback>

    return (
        <React.Fragment>            
                    <FormGroup row>
                        <Col sm={{ size: '7', offset: 1 }}>
                            <Input type="text" name="surveyName" id="surveyName" placeholder='Survey Name'
                                invalid={props.isInValidSurveyName}
                                onBlur={props.onAddSurveyName} />
                            {props.isInValidSurveyName && RequiredMessage}
                        </Col>

                        <Col sm={{ size: '3', offset: 1 }}>
                            <Button style={{ width: '100%' }} color="primary" size="sm"
                                onClick={props.toggleShowFieldSelection}>Add New Question</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ size: '9', offset: 1 }}>
                            <Input type="textarea" name="surveyDescription" id="surveyDescription"
                                placeholder='Survey description...'
                                invalid={props.isInValidSurveyDescription}
                                onChange={props.onAddSurveyDescription} />
                            {props.isInValidSurveyDescription && RequiredMessage}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: '9', offset: 1 }}>
                            <DisplayForm removeField={props.removeFieldElement} formElementList={props.formElementList} />
                            {props.showSubmitButton && <Button disabled>Submit</Button>}
                        </Col>
                    </FormGroup>                                
        </React.Fragment>
    )
}
