import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import {useEffect,useState} from 'react';   
import Cab from './cab.js';




const Cabs = ()=>{

    const [cabs,setCabs] = useState([]);

    useEffect(()=>{

        const fetchCabs = async ()=>{
            const {data} = await axios.get('/cabs');
            setCabs(data);
        };
        fetchCabs();

    },[]);

    return(
        <>
        <Row>
            {
            cabs.map((cab)=>(
                <Col key={cab._id} sm={12} md={6} lg={4} xl={3}>
                        <Cab cab={cab}></Cab>
                </Col>
                    
            ))}
        </Row>
        </>
        
    )
}

export default Cabs;