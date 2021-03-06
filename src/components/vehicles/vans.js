import React, { Component } from 'react';
import Bread3 from '../../components/bread3';
import { connect } from 'react-redux';

class Vans extends Component {
    state= {
        vans: [
            {carClass: 'van', model: 'Chevrolet Astro'},
            {carClass: 'van', model: 'Honda Odyssey'},
            {carClass: 'van', model: 'Chrysler Pacifica'},
            {carClass: 'van', model: 'GMC Savana'},
            {carClass: 'van', model: 'Dodge Caravan'},
            {carClass: 'van', model: 'Toyota Sienna'},
            {carClass: 'van', model: 'Ford Transit'},
            {carClass: 'van', model: 'Dodge Ram Van'}
        ]
    }

    handleClick = (model) => {
        const obj = this.props.cars.filter(car => {
             return car.model === model.model
        })
        if(!obj.length) {
            this.props.addCar(model);
        }
        else {
            this.props.deleteCar(obj[0].model)
        }
    }


    render() {
        const { vans } = this.state
        const { cars }   = this.props
        let vanList = vans.map((van, i) => {
            let cName = cars.find(car => car.model === van.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={van.model}>
                    <p>{van.model} <button  className={cName} onClick={() => this.handleClick(van)}>{cName ? 'Remove' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Vans' />
                <div className ='modelBody'>
                <h2>Vans</h2>
                <h3>Select desired vehicles</h3>
                {vanList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (cars) => { dispatch({type: 'ADD_CAR', cars}) },
        deleteCar: (model) => { dispatch({type: 'DELETE_CAR', model}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vans);
