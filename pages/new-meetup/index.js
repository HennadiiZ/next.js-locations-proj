import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const onAddMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
}

export default NewMeetUpPage;