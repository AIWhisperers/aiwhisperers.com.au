import Page from '../../components/Page'


const Contact = () => {

    const heading = "Contact"
    const lead = "Artificial intelligence (AI) will provide us with more time to focus on building genuine relationships with the people around us."
    const note = "Together with local businesses we are building"

    return (
        <Page heading={heading} lead={lead} note={note}>
            Contact
        </Page>
    );
};

export default Contact;