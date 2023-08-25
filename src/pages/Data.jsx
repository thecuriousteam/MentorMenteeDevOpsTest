import React from 'react';

const Data = ({apiData}) => {
  return (
    <div>
      <h1>Love You Kajal</h1>
        <ul>
            {apiData?.map(data => (
                <li key = {data.id}>{data.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Data