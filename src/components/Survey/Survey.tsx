import * as React from 'react';
import { ISurveyListProps } from '../../containers/SurveyList.container';
import SurveyListPresentation from './SurveyListPresentation';
import { Spinner } from 'reactstrap'

class SurveyList extends React.Component<ISurveyListProps, any> {

    componentDidMount() {
        this.props.getSurveys()
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

                    <SurveyListPresentation surveyList={this.props.surveyList} />
                </div>
            </React.Fragment>
        )
    }
}

export default SurveyList
