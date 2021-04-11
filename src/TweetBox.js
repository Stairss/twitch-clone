import { Avatar, Button } from '@material-ui/core'
import { useState } from 'react';
import './TweetBox.css'
import db from './firebase'
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Dawid Spisak',
            username: 'stairss',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://cdni.rt.com/files/2021.01/article/6016b93285f54046e775c255.JPG'
        })
        setTweetImage('');
        setTweetMessage('');


    }

    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox__input">
                    <Avatar src="https://cdni.rt.com/files/2021.01/article/6016b93285f54046e775c255.JPG" />
                    <input type="text"
                        placeholder="What's happening?"
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                    />

                </div>
                <input type="text" placeholder="Enter image URL" className="tweetBox__imageInput"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)} />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;