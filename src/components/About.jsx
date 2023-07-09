import React from "react";
import  {Tilt}  from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index,title,icon}) => (
  <Tilt className = 'xs:w-[250px] w-full'>
    <motion.div 
    variants={fadeIn("right","spring",index*0.5,
    0.75)}
    className='w-full green-pink-gradient p-[1px] 
    rounded-[20px] shadow-card '
    >
      <div
      options={{
        max:45,
        scale:1,
        speed:50,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

      </div>
      </motion.div> 

  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}s
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-7xl
      leading-[30px]'
      >
        I am a Frontend developer with experience in building web applications using HTML ,CSS and JAVASCRIPT,and good hand in framework like React,Node.js and Three.js.
        I am also a software developer with good skills in Data Structure and Algorithm.
        A quick learner and collabrate closely with clients to create efficient,scalable,and user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key = {service.title} index={index}
          {...service} />
        ))}
      </div>
      </>
     
  );
}

export default SectionWrapper(About,"about")