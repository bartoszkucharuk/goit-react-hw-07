import './App.css';
import { RiContactsBook3Line } from "react-icons/ri";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';


function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <h1>Phonebook <RiContactsBook3Line size="40" /></h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && (
          <p>Please wait...</p>
      )}
      {error ? (
          <p>{error}</p>
      ) : contacts.length > 0 ? (
        <ContactList />
      ) : (
        !loading && (
            <p>You have no contacts yet</p>
        )
      )}
    </>
  )
}

export default App