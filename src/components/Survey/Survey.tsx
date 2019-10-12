import * as React from 'react'

import SurveyList from './SurveyList'
class Survey extends React.Component<any, any> {

    render() {       
        return (
            <React.Fragment>
                <div className="container">
                <SurveyList />
                </div>
            </React.Fragment>
        )
    }
}

export default Survey
