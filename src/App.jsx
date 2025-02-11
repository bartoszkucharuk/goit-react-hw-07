import './App.css';
import { RiContactsBook3Line } from "react-icons/ri";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { getError, getIsLoading } from './redux/selectors';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <h1>Phonebook <RiContactsBook3Line size="40" /></h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <b>Please wait...</b>
      )}
      
      {error ? (
          <b>{error}</b>
      ) : contacts.length > 0
        ? (
      <ContactList />
      ) : (
        !isLoading && (
          <b>You have no contacts yet</b>
        )
      )}
    </>
  )
}

export default App