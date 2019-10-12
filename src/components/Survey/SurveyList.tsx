import * as React from 'react'
import { Container, Fade } from 'reactstrap'
import SurveyBox from './SurveyBoxView'

export const SurveyList = () => {
    return (
        <React.Fragment>
            <Container className='album py-5'>
                <Fade in={true} className="mt-3">
                    <SurveyBox />
                </Fade>
            </Container>
        </React.Fragment>
    )
}

export default SurveyList