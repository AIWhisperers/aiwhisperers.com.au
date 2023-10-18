import Page from '../../components/Page'


const Investors = () => {

    const heading = "Investors Welcome"
    const lead = "Invest in the future of AI technology with AI Whisperers! As a first mover in the industry, we offer a unique opportunity for investors to learn about AI while supporting the development of innovative AI workflows."
    const note = [
        "Interested in joining us on this exciting journey? ",
        <a href="mailto:prospectus@aiwhisperers.com.au" target="_blank" rel="noreferrer">Request a <u>Prospectus</u> now!</a>
    ]

    return (
        <Page heading={heading} lead={lead} note={note}>
            Investors, are you looking for a first mover advantage in the rapidly growing AI industry? Look no further 
            than AI Whisperers. Our url, usernames on social media, and company name all reflect our dedication to AI 
            technology.
            <br/><br/>
            By investing in AI Whisperers, you'll not only have the opportunity to learn about AI technology, but you'll 
            also have the potential for equitable profit sharing with our app creators. Our app marketplace is built by 
            business for business, ensuring that our services will always be relevant and in demand.
            <br/><br/>
            At AI Whisperers, we're committed to innovation and growth in the AI industry. Contact us today to learn 
            more about our vision and how you can be a part of it. Don't miss out on this exciting opportunity to be a 
            part of the future of AI.
        </Page>
    );
};

export default Investors;