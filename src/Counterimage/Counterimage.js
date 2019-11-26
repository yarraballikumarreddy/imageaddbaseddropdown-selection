import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/logo192.png'

class Counterimage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValue: "",
            Images: [img1, img2, img3, img4, img5]
        }
    }

    handleChange = (event) => {
        this.setState({ selectValue: event.target.value });
        console.log(" handle change" + this.state.selectValue)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // alert("----------" + this.state.selectValue)   
       
        const x = this.state.Images.slice( 0,this.state.selectValue)
        console.log(x)
        // for (i = event; i < Image.length; i++){

        // }
        this.setState({ Images: x })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleChange} >
                   
                    <option value="1" name="1" >1</option>
                    <option value="2" name="2"   >2</option>
                    <option value="3" name="3" >3</option>
                    <option value="4" name="4"  >4</option>
                    <option value="5" name="5"  >5</option>
                </select>
                <button type="submit"> submit</button>
                <h1> ffffff ==={this.state.selectValue}</h1>

                {
                    
                    this.state.Images.map(
                    post => <img src="{this.post.Images}"></img>
                )
                }
                {/* <img src="{this.state.Images}"></img> */}
            </form>
        );
    }
}
export default Counterimage;