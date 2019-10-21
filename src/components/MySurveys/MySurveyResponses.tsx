import * as React from 'react';
import { Col, FormGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, Row, Alert } from 'reactstrap';
import { IMySurveyResponseProps } from '../../containers/MySurveysList.container';

const ResponseQuestionAnswerView = (props: any) => {
    console.log(props)
    return (
        <Row>{props.question}{'=====>'}{props.answer} <br /></Row>
    )
}


class MySurveyResponseTemplate extends React.Component<IMySurveyResponseProps, any> {


    componentWillReceiveProps(nextProps: any) {
        if (nextProps.showForm === true && nextProps.survey !== {} && Object.keys(this.props.survey).length === 0)
            this.props.getAllResponsesToSurvey(nextProps.survey.surveyId)
    }

    close() {
        this.props.clearSurveyResponseList()
        this.props.toggle()
    }

    render() {
        console.log(this.props)
        const survey = {
            surveyName: this.props.survey.surveyName,
            surveyId: this.props.survey.surveyId,
            surveyDescription: this.props.survey.surveyDescription,
            surveyResponseList: this.props.surveyResponseList
        }
        return (
            <React.Fragment>
                <Modal isOpen={this.props.showForm} size='lg'>
                    <ModalHeader toggle={this.close.bind(this)}>
                        {survey.surveyName}
                    </ModalHeader>
                    <ModalBody>
                        <div style={{ width: '100%', border: 'none' }}>
                            <FormGroup row>
                                <Col sm={{ size: '9', offset: 1 }}>
                                    {survey.surveyDescription}
                                </Col>
                            </FormGroup>
                            <ListGroup>
                                {survey.surveyResponseList.map((response: any, index: any) => {
                                    const responseText = response.responseText
                                    const responses = JSON.parse(responseText)
                                    console.log(responses)
                                    return (
                                        <ListGroupItem className="justify-content-between" key={index}>
                                            <Row >
                                            <Col xs="6" sm="10"> 
                                                {Object.keys(responses).map((question: any, index: any) => {
                                                    return (<ResponseQuestionAnswerView question={question} answer={responses[question]} key={index}/>)
                                                })}</Col>
                                               
                                                <Col xs="6" sm="2">{response.userFirstName}
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    )
                                })
                                }
                            </ListGroup>
                            {survey.surveyResponseList.length === 0 && 
                             <Alert color="secondary">
                             No reponses 
                           </Alert>}

                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default MySurveyResponseTemplate