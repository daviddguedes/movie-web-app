import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
   Row,
   Button,
   ButtonGroup,
   Input,
   Col,
   InputGroup,
   InputGroupAddon
} from 'reactstrap';
import './../../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { listMoviesAction } from './../../actions/MovieActions';
import ListMovieItems from './ListMovieItems';

library.add(faBackward, faForward);

class ListMovies extends Component {
   state = {
      numberCols: 4
   }

   componentDidMount() {
      this.props.listMoviesAction();
   }

   loadPage(page) {
      this.props.listMoviesAction(page);
   }

   render() {
      return (
         <Fragment>
            <Row className="d-flex justify-content-center dark-bg py-4">
               <Col>
                  <InputGroup>
                     <Input placeholder="Search Movie" />
                     <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                  </InputGroup>
               </Col>
               <Col>
               <ButtonGroup className="float-right">
                  <Button onClick={() => this.loadPage(this.props.movies.page - 1)} disabled={this.props.movies.page < 2}><FontAwesomeIcon icon="backward" /> Previous</Button>
                  <Button onClick={() => this.loadPage(this.props.movies.page + 1)} disabled={this.props.movies.page >= this.props.movies.total_pages}>Next <FontAwesomeIcon icon="forward" /></Button>
               </ButtonGroup>
               </Col>
            </Row>
            <Row>
               <ListMovieItems />
            </Row>
            <Row className="d-flex justify-content-center dark-bg py-4">
                  <ButtonGroup>
                     <Button onClick={() => this.loadPage(this.props.movies.page - 1)} disabled={this.props.movies.page < 2}><FontAwesomeIcon icon="backward" /> Previous</Button>
                     <Button onClick={() => this.loadPage(this.props.movies.page + 1)} disabled={this.props.movies.page >= this.props.movies.total_pages}>Next <FontAwesomeIcon icon="forward" /></Button>
                  </ButtonGroup>
            </Row>
         </Fragment>
      )
   };
}

const mapStateToProps = state => ({
   movies: state.movieReducer.movies,
   genres: state.genreReducer.genres
});

export default connect(mapStateToProps, { listMoviesAction })(ListMovies);