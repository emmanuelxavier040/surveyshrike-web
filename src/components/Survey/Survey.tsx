import * as React from 'react';
import { ISurveyListProps } from '../../containers/SurveyList.container';
import SurveyListPresentation from './SurveyListPresentation';


class SurveyList extends React.Component<ISurveyListProps, any> {

    // constructor(props: any) {
    //     super(props)       
    // }

    componentDidMount() {
        this.props.getSurveys()
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <SurveyListPresentation surveyList = {this.props.surveyList}/>
                </div>
            </React.Fragment>
        )
    }
}

export default SurveyList
