import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { getLabelName } from "../utils/utils";
import { hotlines } from '../utils/fields';

function LogOut() {
    const btn = (
        <Button variant="text" disableElevation>
            <span className="font-body-bold">Log out</span>
        </Button>
    );
    
    const isSignedIn = true; // TODO: Replace with login info

    return isSignedIn ? btn : null;
}

const logos = hotlines.map(hotline => {
    return (
        <img key={hotline} className={`logos-secondary ${hotline}`} src={`${process.env.PUBLIC_URL}/images/logo_${hotline}.svg`} alt={getLabelName(hotline)}/>
    )
});
  
export default function NavBar() {
    return (
        <nav>
            <div className="logos page-padding">
                <img className="logos-main" alt="Crisis Connections" src={`${process.env.PUBLIC_URL}/images/logo_crisisConnections.svg`}/>
                {logos}
            </div>
            <section className="main page-padding">
                <div className="nav-heading">
                    <Link to="/">
                        <span className="nav-heading_text font-heading">Frequent Callers</span>
                    </Link>
                </div>
                <LogOut />
            </section>
        </nav>
    );
}