import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Footer = ({...props}) => {
  return (
    <footer className="footer my-0 py-2" id="id-footer">
      <Container className="my-0 px-3 px-md-5 py-3">
        <Row className="helvetica-heading h6 mb-1 mt-0">
          <Col>
            © AI Whisperers 2023
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
