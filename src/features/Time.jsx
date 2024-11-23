import { parseISO, formatDistanceToNow } from 'date-fns' // import the parseISO and formatDistanceToNow functions;

const Time = ({ timestamp }) => { // destructure the timestamp prop
    let time = '' // initialize the time variable
    if (timestamp) { // check if the timestamp is not empty
        const date = parseISO(timestamp) // parse the timestamp to a date object
        const timePeriod = formatDistanceToNow(date) // format the date to a time period
        time = `${timePeriod} ago` // set the time variable to the time period
    }

    return (
        <span title={timestamp}> 
            &nbsp; <i>{time}</i>
        </span>
    )
}
export default Time