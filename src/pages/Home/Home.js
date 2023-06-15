import './Home.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileItem from '../../components/ProfileItem/ProfileItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {generatePrivateKey, getPublicKey} from 'nostr-tools';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [promises, setPromises] = useState([]);
    const [isFullPromises, setIsFullPromises] = useState(false);
    const [profilesStats, setProfileStats] = useState([]);
    const [fullProfiles, setFullProfiles] = useState([]);

    const fetchPromises = async () => {
        try {
            setIsLoading(true);
            const res = await Promise.allSettled(promises);
            setProfileStats(res);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    } 
    
    useEffect(() => {
        fetchPromises();
    }, [isFullPromises]);

    const fetchProfiles = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.get('https://api.nostr.band/v0/trending/profiles');
            setProfiles(data.profiles);

            for(let i = 0; i < data.profiles.length; i++) {
                const promise = axios.get(`https://api.nostr.band/v0/stats/profile/${data.profiles[i].pubkey}`);
                const newPromises = promises.push(promise);
                setPromises(Array.isArray(newPromises) ? newPromises : promises);
                if(i === data.profiles.length - 1) {
                    setIsFullPromises(true);
                }
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        fetchProfiles();
    }, []);

    useEffect(() => {
        if(profiles.length && profilesStats.length) {
            const fullProfiles = profiles.map((profile, index) => {
                return [profile, profilesStats[index]]
            })
            setFullProfiles(fullProfiles);
        }
    }, [profiles, profilesStats]);

    return(
        <Container>
            <Row className="justify-content-lg-center">
                <Col lg={9}>
                    <div>
                        <Header />
                        <Search isLoading={isLoading} />
                        <div className="home-profiles">
                            {
                                fullProfiles && fullProfiles.length ? fullProfiles.map(profile => {
                                    const profileContent = profile[0].profile ? JSON.parse(profile[0].profile.content) : '';
                                    return <ProfileItem key={profile[0].pubkey}
                                        img={profileContent.picture}
                                        name={profileContent.display_name ? profileContent.display_name : profileContent.name}
                                        bio={profileContent.about}
                                        twitter={profileContent.username}
                                        mail={profileContent.nip05}
                                        newFollowersCount={profile[0].new_followers_count}
                                        stats={profile[1].value.data.stats[profile[0].pubkey]}
                                    />
                                }) : 'Loading...'
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
    );
}

export default Home;