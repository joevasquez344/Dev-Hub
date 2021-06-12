import React, {useState} from 'react';
import profileIcon from 'assets/icons/profile.png';
import pc2Image from 'assets/icons/pc2.jpg';
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react';

const FriendsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Brad',
      text: 'How cool!',
      image: '',
    },
    {
      id: 2,
      username: 'Brian',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a repellat ad assumenda pariatur nobis. Nam earum minima maxime a! Facilis cum soluta dolorum possimus ducimus eos, voluptates quibusdam. Reiciendis.',
      image: pc2Image,
    },
    {
      id: 3,
      username: 'Chad',
      text: 'How cool!',
      image: '',
    },
  ]);

  return (
    <div className="friends-feed">
      <header style={styles.header}>Header</header>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={styles.item}>
            <Segment style={styles.container} attached>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src={profileIcon} />
                  <Comment.Content>
                    <Comment.Author as="a">{post.username}</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text style={styles.text}>{post.text}</Comment.Text>
                    {post.image ? (
                      <img style={styles.image} src={post.image} alt="" />
                    ) : null}
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Segment>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  header: {
    background: 'white',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  container: {
    border: 'none',
    borderRadius: '8px',
  },
  item: {
    background: 'white',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  text: {
    marginBottom: '15px',
  },
  image: {
    borderRadius: '8px',
    width: '100%',
    marginBottom: '15px',
    height: '35vh',
  },
};

export default FriendsFeed;
