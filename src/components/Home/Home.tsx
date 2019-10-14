import * as React from 'react';
import { Link } from 'react-router-dom';  
import { Button, Container } from 'reactstrap';
import { CreateSurveyTemplate } from '../../containers/SurveyTemplate.container';

import './css/Home.css';

class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = {
      createSurvey: false,
    }
  }

  toggleCreateSurvey() {
    const createSurvey = !this.state.createSurvey
    this.setState({ createSurvey })
  }

  render() {
    return (
      <div>
        <section className='jumbotron text-center' >
          <Container>
            <h1 className="display-3">SurveyShrike</h1>
            <hr className="my-2" />
            <p className="lead">Create surveys for others, take surveys of others !!!</p>
            
            <p>
              <Button onClick={this.toggleCreateSurvey.bind(this)} color="primary" size="lg">Create Survey</Button>{' '}
              <CreateSurveyTemplate showTemplate={this.state.createSurvey} toggleTemplate={this.toggleCreateSurvey.bind(this)} />
              <Link to="/surveys"> <Button color="secondary" size="lg">Take Survey</Button></Link>
            </p>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home