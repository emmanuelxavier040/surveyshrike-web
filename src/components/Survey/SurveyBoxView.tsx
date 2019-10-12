import * as React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardText, Col } from 'reactstrap';
import './css/SurveyBoxView.css';

export const SurveyBox = () => {
    return (
        <Col md={{ size: '3' }}>
            <Card className='mb-4 box-shadow'>
                <CardBody>
                    <CardText>This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                        This content is a little bit longer.
                </CardText>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                            <Button outline color="secondary">View</Button>
                            <Button outline color="secondary">Edit</Button>
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SurveyBox