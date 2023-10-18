import Page from '../../components/Page'


const Devs = () => {
    
    const heading = "Develop with us"
    const lead = "Attention all developers! Join the AI Whisperers team and gain access to cutting-edge technology, a flexible work schedule, and the opportunity to earn revenue on every app you help create."
    const note = [
        "The industry is taking off, so take some time to discover what's on offer! ",
        <a href="mailto:vocation@aiwhisperers.com.au" target="_blank" rel="noreferrer"><u>Contact us today!</u></a>
    ]

    return (
        <Page heading={heading} lead={lead} note={note}>
            Looking to make your mark in the exciting world of AI development? AI Whisperers is the consultancy for you. 
            We're a dynamic team of experts working on cutting-edge technologies that are revolutionizing the industry. 
            <br/><br/>
            With us, you'll enjoy the benefits of working from home and flexible working hours, from 
            <span className="font-system"> 8</span> to <span className="font-system">40 </span> hours per week.
            Be part of a community of passionate developers who are always pushing the limits. Plus, we've developed a 
            framework that allows you to earn a percentage of the revenue for every app you create with us. 
            <br/><br/>
            At AI Whisperers, we're dedicated to fostering a culture of innovation and collaboration, and we want you 
            to be part of it. Join our team today and unleash your full potential.
        </Page>
    );
};

export default Devs;