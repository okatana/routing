import React, {Component} from 'react';
//import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'

class CountryList extends Component {
    constructor (props){
        super(props)
        this.state = {
            countryNames: [],
            loading: false
        }
    }
//jбработчик события, когда все будет размещено на сцене
    componentDidMount(){
        this.setState({loading: true})
        //загрузить данные:
        fetch('https://restcountries.eu/rest/v1/all')  //тут вернет промис
            .then(response=>response.json())                                    //тут если успешно
            .then(json=>json.map(country=>country.name))
            .then(countryNames=>this.setState({countryNames,loading:false}))
            .catch(error=>console.log(error))                                   //тут если ошибка
    }

    render() {
        const { countryNames, loading} = this.state;
        return (loading)?
            <div>Loading Country Names ... </div> :
            (!countryNames.length) ?
                <div>No country Names</div> :
                <div className="flex-container">
                    {countryNames.map(
                        (x,i) => <p  key={i} className={(i<6)? "flex-item item-top" : 'flex-item' }>{x}</p>
                    )}
                </div>
    }

}

export default CountryList