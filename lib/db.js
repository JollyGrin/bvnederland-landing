import fetch from 'isomorphic-unfetch';

const getTwitterFollowers = async () => {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url =
    'cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=wijzijnbv';
  const res = await fetch(proxy + url);
  const data = await res.json();
  const count = data[0].followers_count;
  return count;
};

export { getTwitterFollowers };
