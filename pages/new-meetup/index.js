import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Layout from '../../components/layout/Layout';

function NewMeetUpPage() {
  const onAddMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </Layout>
  )
}

export default NewMeetUpPage;