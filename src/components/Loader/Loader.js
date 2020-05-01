import React, {Component} from 'react';
import './Loader.scss';
import loader from '../../images/loader-img.gif';

class Loader extends Component{


    render() {

        return(
            <div className="loader">
                <img src={loader} alt="loader" />
            </div>
        )
            
    }

}

export {Loader}