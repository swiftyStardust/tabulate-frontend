import React, { Component } from 'react';
import styled from '@emotion/styled'

const DivStyle = styled.div`
    background-color: #E57F84;
    margin: 2%;
    padding: 5%;
`
class Statement extends Component {

    sortRides = (labels) => {
        const rides = []
        // abstract by iterating through services set by user

        labels.map(label => {
            let idx = this.props.rideList.filter(ride => ride.attributes.service.label === label) 
            rides.push(idx)
            return idx
        })
        
        return rides
    }

    totaler = (sortedList) => {
        const prices = sortedList.map(price => {
            if (price !== 0) {
                return price[0].attributes.service.fee
            } else {
                return 0
            }
        })
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return prices.reduce(reducer)
    }

    render() {
        const labels = this.props.services.map(option => option.attributes.label)
        const servicesHeadings = this.props.services.map(option => <th key={option.id}>{option.attributes.label}</th>)
        const sortedRides = this.sortRides(labels)

        const sortedList = sortedRides.map(list => {
            if (list.length > 0) {
                return list
            } else { 
                return 0 
            }
        })

        const items = sortedList.map(list => {
            if (list !== 0) {
                let price = list[0].attributes.service.fee
                return <td key={list[0].id}>{price * list.length}</td>
            } else {
                return <td></td>
            }
        })

        const total = this.totaler(sortedList)

        return (
            <DivStyle>
                <table className='container'>
                    <thead>
                        <tr>
                            {servicesHeadings}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            {items}
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
            </DivStyle>
        )
    }
}

export default Statement;