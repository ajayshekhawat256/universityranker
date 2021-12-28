import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Coin from './Coin';
import './Coin.css'
import './App.css'
;// import SearchBar from './compnents/SearchBar';

function App() {
  const[country,setCountry]=useState([]);
  const[search,setSearch]=useState('');
  useEffect(()=>{
    axios.get('http://universities.hipolabs.com/search?country=India')
    .then(res=>{
      setCountry(res.data);
      console.log(res.data);
    })
    .catch(error=>console.log(error));
  },[]);

  const handlechange=e=>{
    setSearch(e.target.value);
  }

  const filteredCoins=country.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="cointext" style={{color:'red'}}>Search your country</h1>
        <form style={{}} >
          <input type="text" className='coin-input' onChange={handlechange} placeholder='Search' />
        </form>
      </div>
      {filteredCoins.map(coin=>{
        return(
          <Coin
          key={coin.do}
          name={coin.name}
          web_pages={coin.web_pages}
          country={coin.country}
          stateprovince={coin.stateprovince}/>
        )
      })}
    </div>
  );
}

export default App;
