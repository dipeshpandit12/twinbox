import './NotFoundPage.css';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotFoundPage(){
    return(
        <div className='container not-found'>
            <FontAwesomeIcon icon={faExclamationTriangle} size='3x'/>
            <h2>Page Not found</h2>
        </div>
    );
};