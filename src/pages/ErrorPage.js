import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    // console.log(error);
    
  return (
    <div>
        <h1>Oops...!</h1>
        <p>Something went wrong!</p>
        <p>{error.statusText}</p>
    </div>
  )
}
