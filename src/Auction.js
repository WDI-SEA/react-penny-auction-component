import React, { Component } from 'react';
import Countdown from './Countdown'



class Auction extends Component {
    constructor(props) {
        super(props)
    this.items = [
        {
            title: "Rare Dragon Eggs",
            src: "/img/dragon_eggs.png"
        },
        {
            title: "Fine Dornish Wine",
            src: "/img/wine.png"
        },
        {
            title: "Kingsguard Helm",
            src: "/img/helm.png"
        },
        {
            title: "Pure Steel Crown Holder",
            src: "/img/crown-holder.png"
        },
        {
            title: "Dothraki Warhorse",
            src: "/img/horse.png"
        },
        {
            title: "Valyrian Steel Corkscrew",
            src: "/img/corkscrew.png"
        },
        {
            title: "Direwolf Cub",
            src: "/img/direwolf.png"
        },
        {
            title: "Faceless Men Contract",
            src: '/img/jaquen.png'
        },
        {
            title: "Live Show with DJ Hodor",
            src: "/img/hodor.png"
        },
        {
            title: "Real Valyrian Steel Sword",
            src: '/img/sword.png'
        }
        ]
        this.state = {
        itemArray: this.items
        }
    }
    
    render() {
        var mappedItems = this.state.itemArray.map(function(data, id){
            return ([
                <div className="saleItem"key={id}>
                    <p key={id}>{data.title}</p>
                    <img className="itemImage" src={data.src} alt="Great Item"/>
                    <Countdown />
                </div>
            ])
        })
        return (
            <div>
                {mappedItems}
            </div>
        )
    }
}

export default Auction;