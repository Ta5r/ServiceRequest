import React from 'react';
import RequestStatus from '../../pages/RequestStatus';
import { useState, useEffect } from 'react';

const UserDashBoard = () => {
  const [S_EID, setEID] = useState('');
  const [S_name, setName] = useState('');
  const [S_designation, setdesignation] = useState('');
  const [S_phone, setphone] = useState('');
  const [S_sector, setsector] = useState('');
  const [S_block, setblock] = useState('');
  const [S_qrtr, setqrtr] = useState('');

  useEffect(() => {
    //Runs only on the first render
    try {
      fetch('/user/dashboard/requestform', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }).then(response => {
        response.json().then(response => {
          console.log(response);

          setEID(response.EID);
          setName(response.name);
          setdesignation(response.designation);
          setphone(response.phone);
          setsector(response.sector);
          setblock(response.block);
          setqrtr(response.qrtr);
        });
      });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  }, []);

  return (
    <div>
      <RequestStatus eid={S_EID}/>
    </div>
  );
};
// eid={S_EID} name={S_name} desig={S_designation} phone={S_phone} sector={S_sector} block={S_block} qrtr={S_qrtr}
export default UserDashBoard;
