import Container from 'react-bootstrap/Container'

import Jumbotron from './Jumbotron'


const Page = ({children, heading, lead, note}) => {
    return (
        <Container className="font-primary page-bg mt-4" id="id-page-bg" style={{paddingBottom: 50 + 'px'}}>
            <div className="page-inner m-auto p-3 p-md-4">
                <Jumbotron heading={heading} lead={lead} note={note} />
                <Container className="p-0 my-5">
                    {children}
                </Container>
            </div>
        </Container>
    );
  }


export default Page