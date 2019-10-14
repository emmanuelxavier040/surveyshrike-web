import * as React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardText, Col, CardTitle } from 'reactstrap';
import './css/SurveyBoxView.css';

export const SurveyBox = (props: any) => {
    console.log(props)
    return (
        <Col md={{ size: '3' }}>
            <Card className='mb-4 box-shadow'>
                <CardBody>
                    <CardTitle>{ props.survey.surveyName}</CardTitle>
                    <CardText>{ props.survey.surveyDescription }</CardText>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                            <Button outline color="secondary">Take</Button>
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SurveyBox