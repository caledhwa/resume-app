import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
`

const SkillBar = styled.div`
  display: flex;
  > div {
    font-size: 0.65rem;
    min-width: 6em;
    margin-right: 10px;
    color: #555;
  }
`

const SkillMeter = styled.div`
  border-radius: 2px;
  height: 10px;
  background-image: linear-gradient(#aaa, #ddd, #aaa, #aaa);
  div {
    width: ${props => props.percentage}%;
    height: 100%;
    background-image: linear-gradient(
      rgb(2, 130, 174),
      #ddd,
      rgb(2, 130, 174),
      rgb(2, 130, 174)
    );
    border-radius: 5px 0 0 5px;
  }
`

const Skills = props => {
  const { data } = props
  return (
    <Container>
      {data.map(skill => (
        <SkillBar key={skill.name}>
          <div>{skill.name}</div>
          <SkillMeter percentage={skill.percentage}>
            <div />
          </SkillMeter>
        </SkillBar>
      ))}
    </Container>
  )
}

export default Skills