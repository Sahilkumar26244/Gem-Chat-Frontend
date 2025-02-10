import React from 'react';
import { useUser } from "../context/user.context";

function Home() {

    const {setUser,user} = useUser()

    console.log("sahil",user)
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default Home