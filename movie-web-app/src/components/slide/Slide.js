import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Slide.css';

import {
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption,
   Row,
   Col
} from 'reactstrap';

class Slide extends Component {
   constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
   }

   onExiting() {
      this.animating = true;
   }

   onExited() {
      this.animating = false;
   }

   next() {
      const { items } = this.props;
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
   }

   previous() {
      const { items } = this.props;
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
   }

   goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
   }

   render() {
      const { activeIndex } = this.state;
      const { items } = this.props;

      const slides = items.map((item) => {
         return (
            <CarouselItem
               onExiting={this.onExiting}
               onExited={this.onExited}
               key={item.src}
            >
               <img src={item.src} alt={item.altText} />
               <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
         );
      });

      return (
         <Row className="slideBackground">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
               <Carousel

                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
               >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
               </Carousel>
            </Col>
         </Row>
      );
   }
} 

const mapStateToProps = state => {
   return ({
      items: state.slideReducer.items
   })
}

export default connect(mapStateToProps, {})(Slide);