import React,{Component} from 'react'
import './Tour.scss'
class Tour extends Component {

    state={
        boo:false
    }
    remove = () =>{
        this.setState({boo:!this.state.boo})
    }
    render(){
    return(
        <article className="tour">
      <div className="img-container">
      <img  src={this.props.data.img} />
        <section onClick={()=>this.props.removetour(this.props.data.id)} className="closebtn"><i className="fas fa-window-close"></i></section>
        </div>
        <div className="info"> 
        <h3 >{this.props.data.name}</h3>
        <h4 >{this.props.data.city}</h4>
        <h5> 
          info 
          <span onClick={this.remove}><i className="fad fa-caret-square-down"></i></span>
          {this.state.boo&&<p>{this.props.data.info}</p>}
            
           
              </h5>
        </div>

        </article>
    )
}


}
export default Tour