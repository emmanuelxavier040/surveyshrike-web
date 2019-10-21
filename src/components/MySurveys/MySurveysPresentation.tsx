import React, { useState } from 'react';
import { Container, Fade, ListGroup, ListGroupItem, Badge, Button, Row, Col } from 'reactstrap';
import { MySurveyResponse } from '../../containers//MySurveysList.container'

export const MySurveyListPresentation = (props: any) => {

    let obj: any = {}
    const [showResponseForm, toggleShowResponseForm] = useState(false);
    const [openSurveyResponseObj, changeSurveyResponseObj] = useState(obj);

    function openForm(surveyObj: any) {
        changeSurveyResponseObj(surveyObj)
        toggleShowResponseForm(!showResponseForm)
    }

    function closeForm() {
        changeSurveyResponseObj({})
        toggleShowResponseForm(!showResponseForm)
    }

    return (
        <React.Fragment>
            <Container className='album py-5'>
                <Fade in={true} className="mt-3">
                    <ListGroup>
                        {props.surveyList.map((survey: any, index: any) => {
                            return (
                                <ListGroupItem className="justify-content-between" key={index}>
                                    <Row>
                                        <Col xs="6" sm="8"> {survey.surveyName}</Col>
                                        <Col xs="6" sm="2"> <Badge pill color="info">14</Badge></Col>
                                        <Col xs="6" sm="2">
                                            <Button color="secondary" size="sm" onClick={() => openForm(survey)}>Responses</Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                    <MySurveyResponse survey={openSurveyResponseObj} showForm={showResponseForm} toggle={closeForm} />
                </Fade>
            </Container>
        </React.Fragment>
    )
}

export default MySurveyListPresentation