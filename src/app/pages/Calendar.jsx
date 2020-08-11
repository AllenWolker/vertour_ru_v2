import React, {Component} from 'react';
import styles from '../../styles'
import Calendar from 'react-calendar';
import LeftMenu from "../components/LeftMenu";

export default class Calendary extends Component {
    //constructor(props) {
       // super(props);
        state = {
            date: new Date()
        };
   // }
    onChange = date => this.setState({ date });
    render() {
        return (
            <div className='flex'>
                <LeftMenu/>
                <div className="calendarBox" style={calendarStyles.calendarPageBox}>
                    <div className="box" style={calendarStyles.Box}>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>

                </div>
            </div>


        );
    }
};


//Style
const calendarPageBox = {
    minWidth: '550px',
    maxHeight: '350px',
    marginTop: '10%',
    marginLeft: '20%',
    background: 'rgba(0, 0, 0, 0.65)',
}
const Box = {
    marginTop: '40px',
    background: 'white',
    maxWidth: '500px',
    maxHeight: '350px',
    marginLeft: '25px'
}

const calendarStyles = {
    calendarPageBox:calendarPageBox,
    Box:Box,
}
