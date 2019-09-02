import React, { useContext } from 'react'
import styled from 'styled-components'
import { timelineData, skillsData } from '../data/data'
import AppContext from '../AppContext'
import Header from './Header'
import Footer from './Footer'
import Experience from './experience/Experience'
import Sidebar from './sidebar/Sidebar'
import Heading from './Heading'
import Timeline from './Timeline'
import Skills from './Skills'
import Education from './Education'

const Container = styled.div`
  min-width: ${props => props.width};
  max-width: ${props => props.width};
  min-height: ${props => props.height};
  ${props =>
    props.constrainHeight && `max-height: ${props.width}; overflow: hidden;`}
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #555;
  background: ${props => props.backgroundColor};
`

const TwoColumn = styled.div`
  flex: 1;
  display: flex;
`

const SingleColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top: 3px solid ${props => props.backgroundColor};
  padding: 15px;
`

const Article = styled.article`
  flex: 1;
  background: #fff;
  border-right: 1px solid ${props => props.backgroundColor};
  border-radius: 0 15px 15px 0;
  padding: 15px 15px 0 10px;
`

const Aside = styled.aside`
  border-left: 1px solid #fff;
  border-radius: 15px 0 0 15px;
  padding: 15px 15px 0 10px;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const TimelineContainer = styled.div`
  margin: 0 10px 15px 15px;
`

const SkillsContainer = styled.div`
  margin: 10px 10px 10px 15px;
`

const EducationContainer = styled.div`
  margin-left: 15px;
`

const DesktopResume = props => {
  const {
    page,
    width,
    height,
    constrainHeight,
    showPrintLink,
    sidebarWidth
  } = props
  const { headerSize, main, hasTimeline, hasSkills } = page
  const { article, sidebar } = main
  const { experience } = article
  const {
    colors: { backgroundColor }
  } = useContext(AppContext)

  return (
    <Container width={width} height={height} constrainHeight={constrainHeight}>
      <Header size={headerSize} showPrintLink={showPrintLink} />
      <Main backgroundColor={backgroundColor}>
        <TwoColumn>
          <Article backgroundColor={backgroundColor}>
            <Experience data={experience} />
          </Article>
          <Aside>
            <Sidebar data={sidebar} width={sidebarWidth} />
          </Aside>
        </TwoColumn>
        {hasTimeline && hasSkills && (
          <SingleColumn backgroundColor={backgroundColor}>
            <Heading icon="timeline">Timeline</Heading>
            <TimelineContainer>
              <Timeline data={timelineData} />
            </TimelineContainer>
            <Heading icon="skills">Professional Skills</Heading>
            <SkillsContainer>
              <Skills data={skillsData} columns={4} />
            </SkillsContainer>
            <Heading icon="education">Education</Heading>
            <EducationContainer>
              <Education />
            </EducationContainer>
          </SingleColumn>
        )}
      </Main>
      <Footer />
    </Container>
  )
}

export default DesktopResume