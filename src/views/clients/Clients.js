import Page from '../../components/Page'


const Clients = () => {
    
    const heading = "We need you"
    const lead = "Collaborate with AI Whisperers and unlock the full potential of your business. Our team of experts will work closely with you to develop bespoke AI workflows that streamline your operations and increase efficiency."
    const note = [
        "Don't miss out on the opportunity to revolutionize your business! ",
        <a href="mailto:collaborate@aiwhisperers.com.au" target="_blank" rel="noreferrer">Introduce yourself to <u>AI Whisperers</u> today!</a>
    ]

    return (
        <Page heading={heading} lead={lead} note={note}>
            Looking to streamline your business processes with the latest in AI technology? Look no further than 
            AI Whisperers. Our team of experts will work closely with you to develop customized AI workflows that 
            will make your business more efficient and effective.
            <br/><br/>
            With our cutting-edge technology and quick MVP turnarounds, you can trust us to deliver results that 
            will exceed your expectations. Plus, our innovative framework provides you with a low friction avenue for 
            commercailisation.
            <br/><br/>
            And when you use our Research & Development AI module we've affectionately named RAD, you'll fast-track the 
            process to achieve up to <span className="font-system"> 48.5%</span> fully refundable tax incentive (Australian residents only), making it even 
            more worthwhile to invest in AI for your business.
            <br/><br/>
            At AI Whisperers, we're committed to helping businesses like yours succeed in the digital age. Join our 
            suite of apps designed to optimize your workflow and gain a competitive edge in your industry. Contact us 
            today to learn more.
        </Page>
    );
};

export default Clients;