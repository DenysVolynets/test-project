import React from 'react';
import Slide from './Slide';
import './SlideContainer.css'

class SlideContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            feed : {
                "slider":[
                    {
                        "hero":"https://placeimg.com/640/480/animals",
                        "text":"Animals are here.",
                        "image":"https://placeimg.com/150/150/animals/sepia"
                    },
                    {
                        "hero":"https://placeimg.com/640/480/people",
                        "text":"People are here.",
                        "image":"https://placeimg.com/150/150/people/sepia"
                    },
                    {
                        "hero":"https://placeimg.com/640/480/tech",
                        "text":"Tech is here.",
                        "image":"https://placeimg.com/150/150/tech/sepia"
                    },
                    {
                        "hero":"https://placeimg.com/640/480/nature",
                        "text":"Nature is here.",
                        "image":"https://placeimg.com/150/150/nature/sepia"
                    },
                    {
                        "hero":"https://placeimg.com/640/480/arch",
                        "text":"Architecture is here.",
                        "image":"https://placeimg.com/150/150/arch/sepia"
                    }  
                ]
            },
            slides : [],
            timerId : 0,
            activeSlides : [0, 1, 2]
        }
    }
        
    previousSlide = (e) =>{
        this.setState({
            activeSlides : this.state.activeSlides.map(item => (
                item - 1 < 0 ? this.state.feed.slider.length - 1 : item - 1
            ))
        })
    }

    nextSlide = (e) =>{
        this.setState({
            activeSlides : this.state.activeSlides.map(item => (
                item + 1 < this.state.feed.slider.length ? item + 1 : 0
            ))
        })
    }
    startTimer(){
        this.setState({
            timerId : setInterval(
                () => this.nextSlide(),
                1500)
        })
    }
    onHover = () =>{
        clearInterval(this.state.timerId)
    }
    offHover = () =>{
        this.startTimer()
    }
    componentWillMount(){
        this.startTimer()
    }
    render(){
        const {activeSlides, feed} = this.state
        return(
            <div className="feed">
                <button className="arrow-button left-button" onClick={this.previousSlide}>&#8249;</button>
                <div className="container" onMouseOver={this.onHover} onMouseLeave={this.offHover}>
                    {activeSlides.map(item => (
                        <Slide key={item} 
                            hero={feed.slider[item].hero} 
                            text={feed.slider[item].text}
                            image={feed.slider[item].image} />
                    ))}
                </div>
                <button className="arrow-button right-button" onClick={this.nextSlide}>&#8250;</button>
            </div>
        );
    }
}

export default SlideContainer;