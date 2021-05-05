import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Card, CardImg, CardTitle} from 'reactstrap';
import {APP_NAME, KEVIN_BIO, KELLYN_BIO, APP_EXPLANATION} from "../Constants";
import '../tcowebstyle.css';
import kevinImage from './images/kevin.jpg';
import kellynImage from './images/kellyn.jpg';



const NAME_FORMAT = 'mt-3 font-weight-bold';

export default class About extends Component {

    constructor(props) {
      super(props);

      this.state = {
        bio: APP_EXPLANATION
      }
    }

    render() {
      return (
        <Container id="about">
          <Row>
            <Col>
              <h2 className="font-weight-bold" >
                {APP_NAME}
              </h2>
            </Col>
            <Col id="closeAbout" xs='auto' >
              <Button className='btn-csu w-100' onClick={this.props.closePage} xs={1}>
                Close
              </Button>
            </Col>
          </Row>
          {this.renderBio()}
          <hr color="black" />
          {this.renderTeam()}
        </Container>
      )
    }

    renderBio() {
      return (
        <Row>
          <Col>
            <h5>{this.state.bio}</h5>
          </Col>
        </Row>
      )
    }

    renderTeam() {
      return (
        <Row>
          {this.renderPerson(KEVIN_BIO, kevinImage, 'Kevin Schroeder')}
          {this.renderPerson(KELLYN_BIO, kellynImage, 'Kellyn Dassler')}
        </Row>
      )
    }

    renderPerson(bio, img, name) {
      return (
        <Col>
          <Card onClick={() => {this.setBio(bio)}}>
            <CardImg src={img} />
            <CardTitle className={NAME_FORMAT}>{name}</CardTitle>
          </Card>
        </Col>
      )
    }

    setBio(newBio) {
      if (this.strCompare(newBio, this.state.bio)) {
        this.setState({
          bio: APP_EXPLANATION
        })
      } else {
        this.setState({
          bio: newBio
        })
      }
    }

    strCompare(str1, str2) {
      return (str1.localeCompare(str2) === 0);
    }
}
