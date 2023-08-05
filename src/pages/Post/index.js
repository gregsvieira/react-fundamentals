import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

// export default function Post(){

//   const { id } = useParams();
//   const { search } = useLocation();
  
//   const queryParams = useMemo(() => new URLSearchParams(search), [search])
  
//   return(
//     <>
//       <h1>Post Page: {id} </h1>
//       <h2>Search: {queryParams.get('myQueryParam')}</h2>
//     </>
//   )
// }


export default class Post extends React.Component{
  constructor(props){
    super(props);
    this.paramId = this.props.match.params.id;

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  render() {
    console.log(this.queryParams.get('myQueryParam'));

    return (
      <>
        <h1>Post Page: {this.paramId}</h1>
        <h2>
          Search: {this.queryParams.get('myQueryParam')}
        </h2>
      </>
    )
  }
}