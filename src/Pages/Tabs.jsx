import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../Components/Card";
import Certificate from "../Components/Certificate";
import PIcon from "../Components/CardIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/system";

function TabPanel(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const projects= [
    {
      Img:"./projects/commerce.png",
      Title:"E-COMMERCE",
      Link:"https://github.com/nittish03/NEXT-E-COMMERCE",
      Live:"https://ecommerce-three-alpha-31.vercel.app/"
    },
    {
      Img:"./projects/gemini.png",
      Title:"GEMINI-AI-CLONE",
      Link:"https://github.com/nittish03/GEMINI-AI-CLONE",
      Live:"https://gemini-aic.netlify.app/"
    },
    {
      Img:"./projects/currency.png",
      Title:"CURRENCY-CONVERTER",
      Link:"https://github.com/nittish03/CURRENCY-CONVERTER",
      Live:"https://currency-convertr.netlify.app/"
    },
    {
      Img:"./projects/qr.png",
      Title:"BEST-UTILS",
      Link:"https://github.com/nittish03/UTILS",
      Live:"https://utils03.vercel.app/"
    },
    {
      Img:"./projects/blog.png",
      Title:"BLOG-APP",
      Link:"https://github.com/nittish03/BLOG-APP",
      Live:"https://nittish-blog-app.netlify.app/"
    },
    {
      Img:"./projects/invoice.png",
      Title:"TAX-INVOICE-VALIDATOR",
      Link:"https://github.com/nittish03/TAX-INVOICE-VALIDATOR",
      Live:"https://pdf-tester.netlify.app/"
    },
    {
      Img:"./projects/news.png",
      Title:"NEWS-APP",
      Link:"https://github.com/nittish03/NEWS_APP",
      Live:"https://newspp.netlify.app/"
    },
    {
      Img:"./projects/text.png",
      Title:"TEXT-UTILS",
      Link:"https://github.com/nittish03/TEXT-UTILS",
      Live:"https://text-ut.netlify.app/"
    },
    {
      Img:"./projects/netflix.png",
      Title:"NETFLIX-CLONE",
      Link:"https://github.com/nittish03/NETFLIX-CLONE",
      Live:"https://ntflxcopy.netlify.app//"
    },
    {
      Img:"./projects/tic.png",
      Title:"TIC-TAC-TOE",
      Link:"https://github.com/nittish03/TIC-TAC-TOE",
      Live:"https://tic-tac-toe-gme.netlify.app/"
    },
    {
      Img:"./projects/rock.png",
      Title:"ROCK-PAPER-SCISSOR",
      Link:"https://github.com/nittish03/ROCK-PAPER-SCISSOR-GAME",
      Live:"https://rck-paper-scissor-game.netlify.app/"
    },
    {
      Img:"./projects/traffic.png",
      Title:"TRAFFIC-LIGHTS",
      Link:"https://github.com/nittish03/traffic-lights",
      Live:"https://traficlights.netlify.app/"
    },
    {
      Img:"./projects/sun.png",
      Title:"SOLAR-SYSTEM",
      Link:"https://github.com/nittish03/sun-earth",
      Live:"https://sun-earth.netlify.app/"
    },
    {
      Img:"./projects/log.png",
      Title:"LOG-IN-PAGE",
      Link:"https://github.com/nittish03/log-in",
      Live:"https://lo0g-innn.netlify.app/"
    },
    {
      Img:"./projects/calculator.png",
      Title:"CALCULATOR",
      Link:"https://github.com/nittish03/CALCULATOR",
      Live:"https://clculator.netlify.app/"
    },
    {
      Img:"./projects/stop.png",
      Title:"STOP-WATCH",
      Link:"https://github.com/nittish03/STOP-WATCH",
      Live:"https://sotp-watch.netlify.app/"
    },
    {
      Img:"./projects/oldpf.png",
      Title:"OLD-PORTFOLIO",
      Link:"https://github.com/nittish03/OLD-PORTFOLIO",
      Live:"https://nittish-portfolio.netlify.app/"
    },

    {
      Img:"./projects/battery.png",
      Title:"BATTERY",
      Link:"https://github.com/nittish03/BATTERY",
      Live:"https://battry.netlify.app/"
    },
    {
      Img:"./projects/amazon.png",
      Title:"AMAZON-CLONE",
      Link:"https://github.com/nittish03/AMAZON_CLONE",
      Live:"https://amzncopy.netlify.app/"
    },
    {
      Img:"./projects/chat.png",
      Title:"CHAT-APP",
      Link:"https://github.com/nittish03/CHAT-APP",
      Live:"https://chat-app-bay-xi.vercel.app/"
    },
  ]
  const certificates = [
    {
      Img:"./certificates/INTERNSHIP 1 ( CANTILEVER )/NITTISH OFFER LETTER.png"
  },
    {
      Img:"./certificates/INTERNSHIP 1 ( CANTILEVER )/NITTISH LOR.png"
  },
  {
    Img:"./certificates/INTERNSHIP 2  ( SKILL-ECLIPSE )/OfferLetter.png"
},
    {
      Img:"./certificates/INTERNSHIP 1 ( CANTILEVER )/NITTISH INTERN CERTIFICATE.png"
  },
    {
      Img:"./certificates/INTERNSHIP 2  ( SKILL-ECLIPSE )/NITTISH INTERN CERTIFICATE.png"
  },
  {
    Img:"./certificates/INTERNSHIP 6 ( INTERN CRAFTERS )/CERTIFICATE OF COMPLETION.png"
  },
  {
    Img:"./certificates/INTERNSHIP 6 ( INTERN CRAFTERS )/INTERN CRAFTER RECOMMENDATION LETTER.PNG"
},

    {
      Img:"./certificates/INTERNSHIP 6 ( INTERN CRAFTERS )/INTERN CRAFTER OFFER LETTER.png"
  },

  {
    Img:"./certificates/INTERNSHIP 3 ( VAISHNAV TECHNOLOGIES )/OFFER LETTER.png"
},
  {
    Img:"./certificates/HACKATHON/CODE4CAUSE.png"
},
  {
    Img:"./certificates/HACKATHON/INTERNAL HACKATHON CERTIFICATE.jpg"
},
  {
    Img:"./certificates/HACKATHON/PLANTATION DRIVE.png"
},


]


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowMoreProjects = () => {
    setShowAllProjects(true);
  };

  const handleShowMoreCertificates = () => {
    setShowAllCertificates(true);
  };

  const handleShowLessProjects = () => {
    setShowAllProjects(false);
  };

  const handleShowLessCertificates = () => {
    setShowAllCertificates(false);
  };

  return (
    <div className="md:px-[10%]  md:mt-20 mt-10 " id="Tabs" data-aos="fade-up" data-aos-duration="800">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              margin: "0 auto",
            }}
          >
            <Tab
                        className="transition-all duration-300 hover:scale-110"

              label="Project"
              {...a11yProps(0)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
                        className="transition-all duration-300 hover:scale-110"

              label="Certificate"
              {...a11yProps(1)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
            className="transition-all duration-300 hover:scale-110"
              label="Tech Stack"
              {...a11yProps(2)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                //----------------------------------------------------------
  <div key={index} data-aos="fade-up" data-aos-duration="1000">
    <CardProject
      Img={project.Img}
      Title={project.Title}
      Link={project.Link}
      Live={project.Live}
    />
  </div>
))}
              </div>
             
            </div>
            {projects.length > 6 && (
                <div className="mt-4 text-[#ced4d7] ">
                  {showAllProjects ? (
                    <button onClick={handleShowLessProjects} className="opacity-75 italic text-sm">
                      See Less
                    </button>
                  ) : (
                    <button onClick={handleShowMoreProjects} className="opacity-75 text-sm">
                      See More
                    </button>
                  )}
                </div>
              )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 p-4 md:grid-cols-3 md:gap-5 gap-4">
                {(showAllCertificates ? certificates : certificates.slice(0, 6)).map((Sertifikat, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={Sertifikat.Img} />
                  </div>
                ))}
              </div>
              </div>
              {certificates.length > 6 && (
                <div className="mt-4 text-[#ced4d7]" >
                  {showAllCertificates ? (
                    <button onClick={handleShowLessCertificates} className="opacity-75 italic text-sm">
                      See Less
                    </button>
                  ) : (
                    <button onClick={handleShowMoreCertificates} className="opacity-75 text-sm">
                      See More
                    </button>
                  )}
                </div>
              )}

  
          
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Programming icon / tech stack  */}
                <PIcon PIcon="https://skillicons.dev/icons?i=nextjs" Language="Next js" />
                <PIcon PIcon="https://skillicons.dev/icons?i=express" Language="Express js" />
                <PIcon PIcon="https://skillicons.dev/icons?i=ts" Language="TypeScript" />
                <PIcon PIcon="https://skillicons.dev/icons?i=react" Language="React js" />
                <PIcon PIcon="https://skillicons.dev/icons?i=nodejs" Language="Node js" />
                <PIcon PIcon="https://skillicons.dev/icons?i=tailwind" Language="Tailwind CSS" />
                <PIcon PIcon="https://skillicons.dev/icons?i=vite" Language="Vite" />
                <PIcon PIcon="https://skillicons.dev/icons?i=mongodb" Language="MongoDB" />
                <PIcon PIcon="https://skillicons.dev/icons?i=bootstrap" Language="BootStrap" />
                <PIcon PIcon="https://skillicons.dev/icons?i=js" Language="JavaScript" />
                <PIcon PIcon="https://skillicons.dev/icons?i=html" Language="HTML" />
                <PIcon PIcon="https://skillicons.dev/icons?i=css" Language="CSS" />
                <PIcon PIcon="https://skillicons.dev/icons?i=prisma" Language="Prisma" />
                <PIcon PIcon="https://skillicons.dev/icons?i=mysql" Language="MySql" />
                <PIcon PIcon="https://skillicons.dev/icons?i=postgresql" Language="PostGreSql" />
                <PIcon PIcon="https://skillicons.dev/icons?i=java" Language="JAVA" />
                <PIcon PIcon="https://skillicons.dev/icons?i=cpp" Language="CPP" />
                <PIcon PIcon="https://skillicons.dev/icons?i=git" Language="Git" />
                <PIcon PIcon="https://skillicons.dev/icons?i=github" Language="GitHub" />
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
