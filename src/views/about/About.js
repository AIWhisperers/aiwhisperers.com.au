import Page from '../../components/Page'


const About = () => {

    const heading = "We Believe"
    const lead = "Artificial intelligence (AI) will provide us with more time to focus on building genuine relationships with the people around us."
    const note = [
        "Interested in being the first to hear more? ",
        <a href="mailto:updates@aiwhisperers.com.au" target="_blank" rel="noreferrer">Join our <u>Mailing List</u> now!</a>
    ]

    return (
        <Page heading={heading} lead={lead} note={note}>
            As AI continues to advance and automate various 
            aspects of our lives, we will be able to delegate many of our routine and mundane tasks to machines, 
            freeing up our time and mental energy to invest in more meaningful interactions with others.
            <br/><br/>
            By taking care of tasks such as scheduling appointments, managing emails, and performing repetitive work, 
            AI will enable us to spend more time engaging with our loved ones, connecting with new people, and building 
            deeper relationships. Additionally, AI can help us to better understand the needs and preferences of 
            the people we interact with, allowing us to tailor our interactions to their individual personalities and 
            communication styles.
            <br/><br/>
            While there may be concerns about the potential negative effects of AI on social interactions and 
            relationships, we believe that by using AI as a tool to enhance our lives rather than replace human 
            interaction, we can create more space for meaningful connections and authentic relationships.
            <br/><br/>
            As we move forward in this rapidly changing technological landscape, we remain dedicated to the belief that 
            AI can be a valuable ally in our quest for deeper and more meaningful relationships. While there may be 
            along the way, we are committed to working towards this utopian vision one mundane task at a time.
        </Page>
    );
};

export default About;