import React from 'react';
// import SRCard from '../ServiceRequests/SRCard';
import ACard from '../Admin/ACard';
import Requests from '../../Static/StaticReq';
import { Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ServiceRequests = props => {
  const [complaints, setComplaints] = useState([]);
  const aid = props.aid;

  useEffect(() => {
    try {
      axios
        .post('http://localhost:8000/admin/requests', {
          AID: aid,
        })
        .then(response => {
          setComplaints(response.data);
        });
    } catch (err) {
      console.log('Error occured ');
      console.log(err);
    }
  }, [aid]);

  console.log('!!');
  console.log(complaints);
  console.log('!!');
  const sector = aid;

  return (
    <>
      <Text fontWeight={'bold'} fontSize="38px" my="4rem" mx="5rem">
        Pending Requests of SECTOR {sector}
      </Text>
      {complaints.map(res => (
        <ACard
        id={res._id}
        EID={res.EID}
        name={res.name}
        designation={res.designation}
        sector={res.sector}
        block={res.block}
        qrtr={res.qrtr}
        phone={res.phone}
        completedTime={res.completedTime}
        timestamp={res.timestamp}
        status={res.status}
        category={res.category}
        subcategory={res.subcategory}
        description={res.description}
        // feedback="Feedback"
        />
      ))}
      {/* <Text fontWeight={'bold'} fontSize="38px" mt="4rem" mx="5rem">
        Completed Requests of Sector {sector}
      </Text>
      <Text fontSize="16px" my="1rem" mx="5rem">
        Will automatically removed after 24hours.
      </Text> */}
      {/* {Requests.map(req =>
        req[11] === 'Completed' && req[4] === sector ? (
          <ACard req={req} />
        ) : null
      )} */}
    </>
  );
};

export default ServiceRequests;
