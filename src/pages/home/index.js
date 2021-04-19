import { CreatePost, Post, AboutUs, FriendsCard, PsychCard, AnxietyCard, DepressionCard, Navbar, SiteTitle } from '../../containers';
import './style.css';
export default function Home() {
    return (
        <div className="home">
            <div className="titleNav">
                <SiteTitle />
                <Navbar />
            </div>
            <div className="cardsDiv">
                <FriendsCard />
                <PsychCard />
            </div>
            <AnxietyCard />
            <DepressionCard />
            <AboutUs />
            <CreatePost />
            <Post />
        </div>
    )
}