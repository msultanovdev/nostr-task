import './Search.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';

const Search = () => {
    return(
        <>
            <InputGroup className="mb-3" id="search-input">
                <Form.Control
                    placeholder="Keyword, hashtag, pubkey or post ID"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Dropdown className="search-dropdown">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Posts</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Profiles</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Zaps</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <Button className="btn" id="search-btn" variant="secondary"><SearchIcon /></Button>
            </InputGroup>
        </>
    );
}

export default Search;