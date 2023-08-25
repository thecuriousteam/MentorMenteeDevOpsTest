import React from 'react';

const Data = ({apiData}) => {
  return (
    <div>
        <ul>
            {apiData?.map(data => (
                <li key = {data.id}>{data.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Data