import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import  './style.css';


export default function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        className='btn-sidebar-acordion'
        onClick={decoratedOnClick}
      >
        <KeyboardArrowDownIcon/>
      </button>
    );
}