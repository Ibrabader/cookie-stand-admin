import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Pagehead from '../components/head'
import {useState} from 'react';
import axios from 'axios';

const baseUrl ='https://csapi-34.herokuapp.com/';
const tokenUrl = baseUrl+'api/token/';


export default function Home() {
  const [token, setToken] = useState('');

const submitHandler = async (e, credintials)=>{
  e.preventDefault();
  axios.post(tokenUrl,credintials).then(data=>{
    setToken(data.data.access)
  });
  console.log(token)
}
if (!token) return <LoginForm submitHandler={submitHandler}/>
  return (
    <>  

  
  <Header/>

 
  (<Main token={token}/>)

   

  </>

  )
}
