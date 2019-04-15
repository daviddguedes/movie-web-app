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
import { listMoviesAction, listMoviesByTermAction } from './../../actions/MovieActions';
import ListMovieItems from './ListMovieItems';

library.add(faBackward, faForward);

class ListMovies extends Component {
   state = {
      numberCols: 4,
      term: ''
   };

   componentDidMount() {
      this.props.listMoviesAction();
   }

   loadPage(page) {
      if (this.state.term != '') {
         this.props.listMoviesByTermAction(this.state.term, page);
      };
      this.props.listMoviesAction(page);
   }

   searchMovieByTerm() {
      this.props.listMoviesByTermAction(this.state.term);
   }

   handleSearch(e) {
      this.setState({
         term: e.target.value
      });
      // Handle input change and call api
      // this.setState({
      //    term: e.target.value
      // }, () => {
      //    this.searchMovieByTerm();
      // });
   }

   render() {
      return (
         <Fragment>
            <Row className="d-flex justify-content-center dark-bg py-4">
               <Col>
                  <InputGroup>
                     <Input onChange={(e) => this.handleSearch(e)} placeholder="Search Movie" />
                     <InputGroupAddon addonType="append"><Button onClick={() => this.searchMovieByTerm()}>Search</Button></InputGroupAddon>
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

export default connect(mapStateToProps, { listMoviesAction, listMoviesByTermAction })(ListMovies);