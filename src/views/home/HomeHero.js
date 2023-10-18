import React from "react";
import {Carousel} from "react-bootstrap";

import Container from 'react-bootstrap/Container'


const HomeHero = () => {
    return (
        <div className="home-hero m-0 p-0">
            <Container className="px-0 px-lg-5 py-5">
                <div className="home-hero-1 text-white row mx-0">
                    <div className="col-0 col-lg-1 col-xxl-2 p-0"></div>
                    <div className="col-12 col-lg-10 col-xxl-8 p-0">
                        <Carousel fade>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        Let Our Consultants Unleash Your AI Power  
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        Are you looking to implement AI technologies in your business but don't know where to start? 
                                        Look no further than AI Whisperers. Our team of experts can help you identify the best 
                                        AI solutions for your needs and guide you through the integration process. With our AI 
                                        consulting services, you can improve your business's efficiency, accuracy, and overall performance.
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        Don't Delay, Develop AI Software Now  
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        At AI Whisperers, we develop cutting-edge AI-powered software solutions to help businesses 
                                        across all industries. Whether you need a chatbot, virtual assistant, or other AI-powered tool, 
                                        our team of developers can create a solution tailored to your specific needs. With our software, 
                                        you can streamline your operations, improve customer engagement, and stay ahead of the competition.
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        Invest In AI Education and Training
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        Are you interested in learning more about AI technologies and how they can benefit your business? 
                                        AI Whisperers can help you on your journey. Our online platform offers a wide range of courses on AI, 
                                        from the basics to advanced techniques. With our expert-led training, you can learn how to use AI 
                                        tools, develop AI solutions, and integrate AI into your business operations.
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        AI Research  
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        At AI Whisperers, we're at the forefront of AI research. Our team of researchers is 
                                        dedicated to advancing the state-of-the-art in AI, from developing new machine learning algorithms 
                                        to improving natural language processing capabilities. By collaborating with other researchers, 
                                        publishing research papers, and applying for grants, we're pushing the boundaries of what's 
                                        possible with AI.
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        AI Data Services
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        Are you struggling with data collection, cleaning, and analysis? Let AI Whisperers help. 
                                        Our AI data services can automate data analysis, provide insights, and help you make better 
                                        decisions. By leveraging AI technologies, we can help you save time, reduce costs, and gain 
                                        a competitive edge.
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-block">
                                    <div className="home-hero-heading home-hero-padding">
                                        GPT-based Systemized Prompts and SaaS Wrapper
                                    </div>
                                    <div className="home-hero-detail home-hero-padding">
                                        Looking to automate your niche industry service-based business? 
                                        AI Whisperers has you covered. Our SaaS platform provides systemized prompts and workflow 
                                        automation, powered by GPT technology. With our platform, you can automate the creation of 
                                        legal contracts, medical records, or financial reports, and use GPT technology to generate 
                                        suggestions and prompts for human users to refine the output. By streamlining your workflow 
                                        and improving accuracy, our platform can help you save time and money.
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-0 col-lg-1 col-xxl-2 p-0"></div>
                </div>
            </Container>
        </div>
    );
};

export default HomeHero;
