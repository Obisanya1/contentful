import React from 'react'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
    const {loading,projects} = useFetchProjects()
    console.log(loading,projects)

if (loading){
  return <section>
    <h2>Loading...</h2>
  </section>
}

  return (
    <div className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project)=> {
const {id, url, img, title} = project
return <a key={id} href={url} className='project' rel='noreferrer' target='_blank'>
  <img src={img} alt={title} className='img'/>
</a>
        })}
      </div>
    </div>
  )
}

export default Projects
