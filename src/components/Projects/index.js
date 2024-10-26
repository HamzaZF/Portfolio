import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Here are some projects I’ve worked on.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Cloud' ?
            <ToggleButton active value="Cloud" onClick={() => setToggle('Cloud')}>Cloud</ToggleButton>
            :
            <ToggleButton value="Cloud" onClick={() => setToggle('Cloud')}>Cloud</ToggleButton>
          }
          <Divider />
          {toggle === 'Cryptography' ?
            <ToggleButton active value="Cryptography" onClick={() => setToggle('Cryptography')}>Cryptography</ToggleButton>
            :
            <ToggleButton value="Cryptography" onClick={() => setToggle('Cryptography')}>Cryptography</ToggleButton>
          }
          <Divider />
          {toggle === 'AI' ?
            <ToggleButton active value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
            :
            <ToggleButton value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects