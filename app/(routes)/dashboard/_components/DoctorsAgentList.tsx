import { AIDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

function DoctorsAgentList() {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-xl'>AI Specialist Doctors Agent</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {AIDoctorAgents.map((doctor:any,index)=>(
          <div key={index}>
            <DoctorAgentCard doctorAgent={doctor}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList