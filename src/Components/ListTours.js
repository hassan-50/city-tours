import React,{Component} from 'react'
import Tour from './Tour'
import './ListTours.scss'
import data from './tourdata'
class ListTours extends Component {
    state ={
        tours:data
    }
    removetour = (id) =>{
    const {tours} = this.state
    const newtours = tours.filter(tour => tour.id!=id)
    this.setState({tours:newtours}) 
    }
render(){
    return(
        <section className="tourlist">
        {this.state.tours.map((data1)=>{
            return (
            <Tour data={data1} removetour={this.removetour} />
            )
        })}
        </section>
    )
}


}
export default ListTours