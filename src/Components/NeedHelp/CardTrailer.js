const urlYoutube = 'https://www.youtube.com/watch?v=';

const CardTrailer = ({ key }) => (
  <div className="containerRenderMoovieSyno">
    <p>{urlYoutube + key}</p>
  </div>
);

export default CardTrailer;
