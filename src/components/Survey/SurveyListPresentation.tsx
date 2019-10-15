import * as React from 'react'
import { Container, Fade, Row } from 'reactstrap'
import SurveyBox from './SurveyBoxView'

export const SurveyListPresentation = (props: any) => {
    return (
        <React.Fragment>
            <Container className='album py-5'>
                <Fade in={true} className="mt-3">
                    <Row>
                        {props.surveyList.map((survey: any, index: any) => {
                            return (
                                <SurveyBox key={index} survey={survey} />
                            )
                        })}
                    </Row>
                </Fade>                
            </Container>
        </React.Fragment>
    )
}

export default SurveyListPresentation