import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
   Row,
   Button,
   ButtonGroup
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

   render() {
      return (
         <Fragment>
            <Row className="d-flex justify-content-center dark-bg">
               <ButtonGroup>
                  <Button><FontAwesomeIcon icon="backward" /> Previous</Button>
                  <Button>Next <FontAwesomeIcon icon="forward" /></Button>
               </ButtonGroup>
            </Row>
            <Row>
               <ListMovieItems />
            </Row>
            <Row className="d-flex justify-content-center dark-bg">
               <ButtonGroup>
                  <Button><FontAwesomeIcon icon="backward" /> Previous</Button>
                  <Button>Next <FontAwesomeIcon icon="forward" /></Button>
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