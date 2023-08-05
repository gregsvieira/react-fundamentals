import React, { useMemo } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

export default function Post(){

  const { id } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  function handleNavigate(){
    history.push('/posts')
  }

  return(
    <>
      <h1>Post Page: {id} </h1>
      <h2>Search: {queryParams.get('myQueryParam')}</h2>
      <button 
        onClick={handleNavigate} 
        style={{ 
          backgroundColor: '#000',
          color: '#fff',
          width: '120px',
          height: '30px',
          borderRadius: '4px'
        }} 
      > 
        Back to Posts list
      </button>
    </>
  )
}