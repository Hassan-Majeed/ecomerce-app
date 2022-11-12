import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

const Trusted = () => {
     return (
          <Wrapper className="brand-section">
               <Container>
                    <h3>Trusted By 1000+ Companies</h3>
                    <Row className="justify-content-center text-center">
                         {/* my 1st img  */}
                         <Col xl={2} md={6} className="slide">
                              <img
                                   src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                                   alt="trusted-brands"
                              />
                         </Col>
                         <Col xl={2} md={6} className="slide">
                              <img
                                   src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                                   alt="trusted-brands"
                              />
                         </Col>
                         <Col xl={2} md={6} className="slide">
                              <img
                                   src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                                   alt="trusted-brands"
                              />
                         </Col>
                         <Col xl={2} md={6} className="slide">
                              <img
                                   src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                                   alt="trusted-brands"
                              />
                         </Col>
                         <Col xl={2} md={6} className="slide">
                              <img
                                   src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                                   alt="trusted-brands"
                              />
                         </Col>
                    </Row>
               </Container>
          </Wrapper>
     );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .slide{
     text-align:center;
  }  
`;

export default Trusted;