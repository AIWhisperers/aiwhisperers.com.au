import Page from '../../components/Page'


const Apps = () => {

    const heading = "WorkLife Revolution"
    const lead = "Coming Soon! AI Whisperers will be launching your one-stop-shop to find the AI-powered workflows to make many aspects of your Life easier... we are capitalising the 'L' in your WorkLife."
    const note = [
        "Stay ahead of the curve and join us today! ",
        <a href="mailto:registration@aiwhisperers.com.au" target="_blank" rel="noreferrer">Sign up for our <u>Pre-Registration</u> now!</a>
    ]

    return (
        <Page heading={heading} lead={lead} note={note}>
            <div>
                Exciting news! AI Whisperers is launching an AI app marketplace of AI workflows designed to streamline lives and 
                businesses like yours. Our app marketplace is built by business for business, so you can trust that we 
                have your needs in mind.
            </div>
            <div className="helvetica-body container-fluid h-100 bg-light p-4 my-5 text-black">
                <div className="row m-0">
                    <div className="col-lg-6 p-0 my-0">
                        <div className="fw-bold mb-3">How do AI Apps arrive in the marketplace?</div>
                        <ol className="pl-3" type="1">
                        <li className="pb-2">Highest voted AI Workflows by our users, in our "We'll Build It" list.</li>
                        <li className="pb-2">Commercialisation of our client's AI Workflow applications.</li>
                        <li>Carefully selected independent produced AI Workflow applications.</li>
                        </ol>
                    </div>
                    <div className="col-lg-6 apps-top-three-bg p-0">&nbsp;</div>
                </div>
            </div>
            <div className="my-0">
                With our low overheads, we can keep subscriptions low, giving you access to cutting-edge AI technology 
                at an affordable price. Plus, we believe in equitable profit sharing with our app creators, so you can 
                be confident that your investment in our app marketplace will help support innovation and growth in the 
                AI industry.
                <br/><br/>
                At AI Whisperers, we're dedicated to helping businesses like yours succeed in the digital age. Stay tuned 
                for our upcoming AI app marketplace launch and gain a competitive edge in your industry. Contact us today 
                to learn more about our services and how we can help optimize your workflow.
            </div>
        </Page>
    );
};

export default Apps;