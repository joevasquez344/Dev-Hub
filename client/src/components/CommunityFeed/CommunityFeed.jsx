import React, {useState} from 'react';
import profileIcon from 'assets/icons/profile.png';
import pcImage from 'assets/icons/pc.jpg';
import createImage from 'assets/icons/create.png';
import galleryImage from 'assets/icons/gallery.png';

import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react';

const CommunityFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Brad',
      text: 'How cool!',
      image: pcImage,
    },
    {
      id: 2,
      username: 'Brian',
      text: 'How cool!',
      image: null,
    },
    {
      id: 3,
      username: 'Chad',
      text: 'How cool!',
      image: null,
    },
  ]);
  return (
    <div className="community-feed">
      <div style={styles.createPost}>
        <img style={styles.headerImage} src={profileIcon} alt="" />
        <input style={styles.input} type="text" placeholder='Select Community' />
        <img style={styles.galleryImage} src={galleryImage} alt="" />
      </div>

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
  createPost: {
    background: 'white',
    borderRadius: '8px',
    marginBottom: '30px',
    padding: '0 15px 0 15px',
    display: 'flex',
    alignItems: 'center',
    height: '7vh',
  },
  headerImage: {
    height: '60%',
    borderRadius: '50%',
    marginRight: '15px',
  },
  galleryImage: {
    width: '30px',
    cursor: 'pointer'
  },
  input: {
    border: 'none',
    borderRadius: '500px',
    background: '#f0f2f5',
    height: '60%',
    width: '100%',
    marginRight: '15px',
    paddingLeft: '15px',
    fontWeight: 'bold',
    color: '#666'
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
    height: '35vh',
    marginBottom: '15px',
  },
};

export default CommunityFeed;
