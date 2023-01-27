import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    // <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/ff/28/caption.jpg?w=1400&h=900&s=1'/> 
    <section className={classes.detail}>
      <img  src={props.image}/> 
    </section>
  )
};
export default MeetupDetail;

