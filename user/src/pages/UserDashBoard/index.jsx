import React from 'react';
import RequestStatus from '../../pages/RequestStatus';

const UserDashBoard = () => {
  try {
    // let data =
    fetch('/user/dashboard', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => {
      response.json().then(response => {
        console.log(response);
        // fetch('/user/dashboard', {
        //   method: 'GET',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   credentials: 'include',
        // })


      });
    });

    // data = await data.json();
    // console.log("response recieved ad "+data);
    // console.log(data);
  } catch (err) {
    console.log('Error occured ');
    console.log(err);
  }
  return (
    <div>
      <RequestStatus />
    </div>
  );
};

export default UserDashBoard;
