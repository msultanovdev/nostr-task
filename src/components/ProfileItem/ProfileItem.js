import './ProfileItem.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { CheckCircle, Key, ViewList, Twitter, ZoomIn, BoxArrowUpRight, PersonFillAdd, PersonAdd, PersonPlus, BookmarkPlus } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const ProfileItem = () => {
    return(
        <div className="profile">
            <div className="profile-info">
                <div className="profile-info__image">
                    <img src="https://images.unsplash.com/photo-1613834926943-9e4ac2945744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Profile icon" />
                </div>

                <div className="profile-info__hero">
                    <div className="profile-info__hero-header">
                        <a href="#" className="profile-info__hero-name">Subul</a>
                        <Dropdown id="profile-dropdown" className="profile-dropdown">
                            <Dropdown.Toggle size="sm" id="dropdown-basic"></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Go to app...</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Copy npub</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Copy nprofile</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Copy pubkey</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="profile-info__hero-keys">
                        <a className="profile-info__hero-keys-mail">jascha<CheckCircle />relayable.org</a>
                        <a className="profile-info__hero-keys-twitter"><Twitter />relayable</a>
                        <a className="profile-info__hero-keys-key"><Key /> npub1h88z7...hqta</a>
                    </div>
                    <div className="profile-info__hero-sats">
                        <p><span>7.3K</span> sats received</p>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <div className="profile-content__bio">
                    <p>let’s try this shit again.</p>
                </div>
                <div className="profile-content__stats">
                    <p><span>9</span> Following &nbsp;&nbsp;<span>29</span> Followers<span className="new-followers">&nbsp;+17</span></p>
                </div>
            </div>

            <div className="profile-content__control" id="profile-buttons">
                <Button variant="secondary"><ZoomIn /> View</Button>
                <Button variant="secondary"><BoxArrowUpRight /> Open</Button>
                <Button variant="secondary"><PersonPlus /> Follow</Button>
                <Button variant="secondary"><BookmarkPlus /> List</Button>
            </div>
        </div>
    );
}

export default ProfileItem;