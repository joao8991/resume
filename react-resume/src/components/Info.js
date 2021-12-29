import './Info.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faEnvelope, faMobileAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faMapMarkerAlt, faEnvelope, faMobileAlt, faCalendarAlt)

const Info = () => {

    return <div className="mb-3">
        <p className="description mb-3 text-center text-size-h4 fw-normal">
            Full stack developer with 2+ years of working experience in agile development team.
            In the spare time developed web games for millions of users.
        </p>
        <div className="d-flex justify-content-evenly">
            <div className="d-flex info">
                <h5 className="icon"><FontAwesomeIcon icon="calendar-alt" /></h5>
                <h5 className="text">06-11-1998</h5>
            </div>
            <div className="d-flex info">
                <h5 className="icon"><FontAwesomeIcon icon="mobile-alt" /></h5>
                <h5 className="text"><a href="tel:+351924222911">+351 924 222 911</a></h5>
            </div>
            <div className="d-flex info">
                <h5 className="icon"><FontAwesomeIcon icon="envelope" /></h5>
                <h5 className="text"><a href="mailto:joaonuno8991@gmail.com">joaonuno8991@gmail.com</a></h5>
            </div>
            <div className="d-flex info">
                <h5 className="icon"><FontAwesomeIcon icon="map-marker-alt" /></h5>
                <h5 className="text"><a
                    target="_blank" 
                    href="https://www.google.pt/maps/place/Lisbon/@38.7436214,-9.1952226,13z"
                    rel="noreferrer">
                        Lisbon, Portugal</a></h5>
            </div>
        </div>
    </div>
}

export default Info;