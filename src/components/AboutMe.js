import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Piyush_Jagtap_Resume.pdf";
import image from "../pages/about/Piyush.jpeg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import BornIcon from '@mui/icons-material/ChildFriendly';

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Piyush_Jagtap_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>

      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-4"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <a >
              <img src={image} alt="Piyush Jagtap" />
            </a>
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-8"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="contentContainer">
              <h4>Nice to meet you</h4>
              <h5>Software Engineer</h5>
              <div className="contentDescription">
                <p>{brand}</p>
              </div>
              <div className="infoContainer">
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Name:</span>
                    <p>Piyush Jagtap</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Email:</span>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Location:</span>
                    <p>{location}</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Availability:</span>
                    <p>{availability}</p>
                  </div>
                </div>
              </div>
              <div className="buttonContainer">
                <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                  {downloading ? "Downloading..." : "Download Resume"}
                </button>{" "}
                <SocialIcons />
              </div>
            </div>
          </motion.div>

        </div>


        <VerticalTimeline>
          <VerticalTimelineElement
            // 009e66
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="July 2021 - present"
            iconStyle={{ background: '#009e66', color: '#fff' }}
            icon={<WorkIcon />}

          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Systems Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Tata Consultance Services, Pune</h4>

              <p><strong>Vertical: </strong>Banking, financial services and insurance (BFSI)</p>
              <p><strong>Duration:</strong> 2+ years</p>

              <p>Collaborated with a prominent USA-based client, contributing to software development and growth initiatives.</p>
              <br></br>
              <h5>Key Technologies and Technical Details</h5>
              <p>Proficient in MERN stack, SQL-SSMS, .Net, VbScript.</p>
              <br></br>
              <h5>Tools and Microservices</h5>
              <p>Utilized Jira, Azure VDI, and worked closely with diverse client Microservices.</p>
              <br></br>
              <h5>Agile Methodologies</h5>
              <p>Embraced AGILE framework, operating in sprints and delivering timely results.</p>
              <br></br>
              <h5>Software Development Contribution</h5>
              <p>Integral part of the Software Development team, enhancing existing tools and aiding expansion across different states in the USA. Received commendations from both the client and TCS.</p>
              <br></br>
              <h5>Business Continuity Management Lead</h5>
              <p>Played a crucial role in establishing backup systems, procedures, and communication channels to ensure seamless business operations during crises.</p>

            </div>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="June 2021"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Bachelor of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>
              <h4 className="vertical-timeline-element-subtitle">Oriental Group of Institutes, Bhopal</h4>

              <p >Bachelor Degree Completed : <span style={{ color: "#009e66" }}>8.56 CGPA</span></p>
              <br></br>
              <h5>Smart India Hackathon (SIH) 2020 Finalist:</h5>
              <p>Created Smart Attendance Solution for MGNREGA Workers using Flask, Firebase, AI facial recognition, and Geo-verification. Three-factor authentication (Geo, Face, OTP) integrated with Twilio.</p>
              <br></br>
              <h5>Smart India Hackathon (SIH) 2019 Finalist:</h5>
              <p>Developed Attendance Tracking System for MGNREGA Workers, ensuring wage accuracy, age-group categorization, and informed policy-making.</p>
              <br></br>
              <h5>Chattra Vishwakarma Awards 2019:</h5>
              <p>Designed IoT-based Farm Monitoring: Smoke, fire, humidity, and water sensors. Real-time monitoring, mobile alerts, and remote sprinkler control.</p>
              <br></br>
              <h5>Co-Curricular Activities:</h5>
              <p>Engaged in Singing Competitions, showcasing vocal talents and playing guitar.</p>
              <br></br>
              <h5>Leadership Roles:</h5>
              <p>Headed Planning Committees: Led teams for organizing successful college fests. Demonstrated effective coordination and event management skills.</p>


            </div>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            // 009e66
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="Jan 2020 - Jun 2020"
            iconStyle={{ background: '#009e66', color: '#fff' }}
            icon={<WorkIcon />}

          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Software Developement Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Vizzbee Robotics, Bhopal</h4>

              <h4>Internship at Vizzbee Robotics: Elevating Drone Innovation</h4>
              <br></br>
              <h5>Overview:</h5>
              <p> Engaged in a pivotal internship with Vizzbee Robotics, a Bhopal-based startup pioneering drone technology for urban aviation infrastructure management.</p>
              <br></br>
              <h5>Technology Landscape:</h5>
              <p>   Embraced a diverse tech stack including JavaScript, NodeJS, Firebase, AWS, Python, and OpenCV.</p>

              <br></br><h5>UTM Development:</h5>
              <p>Engineered an Unmanned Traffic Management (UTM) system to visualize and control drones in real time. Firebase acted as the conduit for seamless data exchange.</p>
              <br></br> <h5>Dynamic Drone Control:</h5>
              <p>Empowered real-time drone visualization on a server, enabling features like remote Return To Home (RTH) commands from the UTM system.</p>
              <br></br><h5>Secure Location Access:</h5>
              <p>  Implemented pioneering state-of-the-mind algorithms to limit drone access to specific zones, ensuring secure operations.</p>
              <br></br> <h5>OpenCV-based POC:</h5>
              <p>Devised a solution using OpenCV to identify gas cylinder seals, showcasing versatility in problem-solving.</p>
              <br></br> <h5>Construction Site Mapping:</h5>
              <p> Leveraged drones for accurate construction site terrain analysis, facilitating informed decisions.</p>


            </div>

          </VerticalTimelineElement >
          <VerticalTimelineElement
            // 009e66
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="Feb 2019 - Apr 2019"
            iconStyle={{ background: '#009e66', color: '#fff' }}
            icon={<WorkIcon />}

          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Software Developement Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Smartup Technosoft, Bhopal</h4>
              <br></br>
              <h5> Foundations of Web Development:</h5>
              <p> Gained proficiency in HTML, CSS, and JavaScript. Familiarized with diverse development tools and software.
              </p>
            </div>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="Aug 2017"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Bachelor of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>
              <h4 className="vertical-timeline-element-subtitle">Oriental Group of Institutes, Bhopal</h4>
              <br></br>
              <p >Bachelor Degree Started</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="May 2016 - July 2017"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Preparation Drop</h3>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2015 - 2016"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Higher Secondary School Education</h3>
              <h4 className="vertical-timeline-element-subtitle">PCM with Computer Science</h4>
              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No. 3, <span style={{ color: "#009e66" }}>Bhopal</span></h4>

              <p >CBSE : 87.6 %</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2013 - 2014"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Secondary School Education</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya <span style={{ color: "#009e66" }}>Kamptee, </span>Maharashtra</h4>

              <p >CBSE : 9.6 CGPA</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2013 - 2014"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">9 Standard</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya <span style={{ color: "#009e66" }}>Kamptee, </span>Maharashtra</h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2010 - 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">7-8 Standard</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No. 1 <span style={{ color: "#009e66" }}>Delhi</span></h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2007 - 2010"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">4-6 Standard</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No. 2 <span style={{ color: "#009e66" }}>Bhopal</span></h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2005 - 2007"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">2 - 3 Standard</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya JLA <span style={{ color: "#009e66" }}>Bareilly, </span>Uttar Pradesh</h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2004 - 2005"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">1 Standard</h3>

              <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya <span style={{ color: "#009e66" }}>Nepanagar, </span>Madhya Pradesh</h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="2003 - 2004"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">LKG - UKG</h3>

              <h4 className="vertical-timeline-element-subtitle"> <span style={{ color: "#009e66" }}>Siliguri, </span>West Bengal</h4>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#009e66' }}
            date="22 December - 1997"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<BornIcon />}
          >
            <div style={{ color: "#000" }}>
              <h3 style={{ color: "#009e66" }} className="vertical-timeline-element-title">Born</h3>

              <h4 className="vertical-timeline-element-subtitle"><span style={{ color: "#009e66" }}>Patiala, </span>Punjab</h4>
            </div>
          </VerticalTimelineElement>







          {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          /> */}
        </VerticalTimeline >
      </div >
    </>
  );
};

export default AboutMe;
