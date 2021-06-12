import React from 'react';

import FriendsFeed from 'components/FriendsFeed/FriendsFeed';
import CommunityFeed from 'components/CommunityFeed/CommunityFeed';
import {Grid} from 'semantic-ui-react';

const Home = () => {
  return (
    <Grid>
      <Grid.Column width={8}>
        <FriendsFeed />
      </Grid.Column>
      <Grid.Column width={8}>
        <CommunityFeed />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
