import MeetupDetail from '../../components/meetups/MeetupDetail';



function MeetupDetails() {
  const IMG = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/ff/28/caption.jpg?w=1400&h=900&s=1';
  return (
    <MeetupDetail image={IMG} />
  )
};
export default MeetupDetails;

export async function getStaticPaths(context) {
  return {
    fallback: false,
    paths: [
      {
        params: {
           meetupId: 'm1', 
        },
      },
      {
        params: {
           meetupId: 'm2', 
        },
      },
    ]
  }
};

export async function getStaticProps(context) { 

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetups: {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/ff/28/caption.jpg?w=1400&h=900&s=1',
        // id: 'm1',
        id: meetupId,
        title: 'Title',
        address: '123',
        description: 'yfgjghknjk'
      }
    },
    revalidate: 1
  }
} ;