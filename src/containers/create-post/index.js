import './style.css';
export default function CreatePost() {
    return(
        <div className="createPost">
            <p style={{'paddingRight': '15px'}}>What would you like to share?</p>
            <input placeholder="Create Post..." type="text" />
        </div>
    )
}