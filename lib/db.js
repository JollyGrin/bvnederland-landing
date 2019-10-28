import fetch from 'isomorphic-unfetch';

const getTwitterFollowers = async () => {
  const res = await fetch(
    'https://cors-anywhere.herokuapp.com/cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=wijzijnbv'
  );
  const data = await res.json();
  const count = data[0].followers_count;
  return count;
};

export { getTwitterFollowers };
