import React, { Component } from 'react';
import {
   Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { listGenreAction } from './../../actions/GenreActions'

import Slide from './../slide/Slide';
import ListMovies from './../listMovies/ListMovies';

class Base extends Component {

   componentDidMount() {
      this.props.listGenreAction();
   }

    render() {
       return (
          <Container>
             {/* <Slide /> */}
             <ListMovies />
          </Container>
       )
    };
} 

const mapStateToProps = state => ({
   genres: state.genreReducer.genres
});

export default connect(mapStateToProps, { listGenreAction })(Base);