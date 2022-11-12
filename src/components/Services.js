import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
     return (
          <Wrapper>
               <Container>
                    <Row>
                         <Col className="services-1" xl={3} md={6} >
                              <div>
                                   <TbTruckDelivery className="icon" />
                                   <h3>Super Fast and Free Delivery</h3>
                              </div>
                         </Col>

                         <Col xl={3} md={6} className="services-2">
                              <div className="services-colum-2">
                                   <div>
                                        <MdSecurity className="icon" />
                                        <h3>Non-contact Shipping</h3>
                                   </div>
                              </div>
                         </Col>
                         <Col xl={3} md={6} className="services-2">
                              <div className="services-colum-2">
                                   <div>
                                        <GiReceiveMoney className="icon" />
                                        <h3>Money-back Guaranteed</h3>
                                   </div>
                              </div>
                         </Col>

                         <Col xl={3} md={6} className="services-3">
                              <div>
                                   <RiSecurePaymentLine className="icon" />
                                   <h3>Super Secure Payment System</h3>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </Wrapper>
     );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 { 
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 { 
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg}; 
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; 
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default Services;