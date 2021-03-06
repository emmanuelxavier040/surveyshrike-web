import  React, { useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardText, Col, CardTitle } from 'reactstrap';
import {TakeSurveyForm} from '../../containers/SurveyList.container'

import './css/SurveyBoxView.css';

export const SurveyBox = (props: any) => {
    const [showForm, toggleShowForm] = useState(false);

    return (
        <React.Fragment>
        <Col md={{ size: '3' }}>
            <Card className='mb-4 box-shadow'>
                <CardBody>
                    <CardTitle>{ props.survey.surveyName}</CardTitle>
                    <CardText>{ props.survey.surveyDescription }</CardText>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                            <Button outline color="secondary" onClick={() => toggleShowForm(!showForm)}>Take</Button>
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
        { showForm && 
        <TakeSurveyForm survey={props.survey} showForm={showForm} cancelControl={toggleShowForm}/>
        }
        </React.Fragment>
    )
}

export default SurveyBox