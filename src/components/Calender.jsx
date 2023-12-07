import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';// Import the locale you need

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);

const Calender = (props) => {
  return (
      <BigCalendar {...props} localizer={localizer} />
  );
};

export default Calender;
