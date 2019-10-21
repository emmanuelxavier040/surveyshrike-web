import * as React from 'react';
import { ISurveyListProps } from '../../containers/MySurveysList.container';
import MySurveyListPresentation from './MySurveysPresentation';
import { Spinner } from 'reactstrap'

class MySurveysList extends React.Component<ISurveyListProps, any> {

    componentDidMount() {
        this.props.getMySurveys()
    }

    componentWillUnmount() {
        this.props.clearSurveyList()
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.props.surveyList.length === 0 && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                    }
                    <MySurveyListPresentation surveyList={this.props.surveyList} />
                </div>
            </React.Fragment>
        )
    }
}

export default MySurveysList
