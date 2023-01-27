import MeetupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/ff/28/caption.jpg?w=1400&h=900&s=1',
    title: 'Mountains in Canada',
    address: 'Alberta',
    descriprion: 'This is a first meetup!',
  },
  {
    id: 'm2',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0c/ec/48/yukon-northern-lights.jpg?w=1400&h=-1&s=1',
    title: 'Aurora in Canada',
    address: 'Alberta',
    descriprion: 'This is a second meetup!',
  },
  {
    id: 'm3',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b9/c1/75/worth-a-detour-of-the.jpg?w=2000&h=-1&s=1',
    title: 'Lakes in Canada',
    address: 'Alberta',
    descriprion: 'This is a third meetup!',
  },
];

function HomePage(props) {
//   const [loadedMeetups, setLoadedMeetups] = useState([]);
  
//   useEffect(() => {
//     setLoadedMeetups(DUMMY_MEETUPS);
//   }, [setLoadedMeetups]);

  return (
    // <MeetupList meetups={loadedMeetups}/>
    <MeetupList meetups={props.meetups}/>
  )
};

export async function getStaticProps() { // reserved name

  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
} ;

export default HomePage;

// More on Static Site Generation (SSG)