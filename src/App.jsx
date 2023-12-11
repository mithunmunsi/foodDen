import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState('');
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header searchHandler={searchHandler} />
      <Menu searchKey={search.toLowerCase()} />
      <Footer />
    </>
  );
}

export default App;
