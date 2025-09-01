"use client"
import axios from 'axios';
import Vapi from '@vapi-ai/web';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctorAgent } from '../../_components/DoctorAgentCard';
import { Circle, PhoneCall, PhoneOff } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
type SessionDetail={
  id:number,
  notes:string,
  sessionId:string,
  report:JSON,
  selectedDoctor:doctorAgent,
  createdOn:string
}
type messages={
  role:string,
  text:string
}
function MedicalVoiceAgent() {
  const {sessionId} =useParams();
  const [sessionDetail,setSessionDetail]=useState<SessionDetail>();
  const[callStarted,setCallStarted]=useState(false);
  const [vapiInstance,setVapiInstance]=useState<any>();
  const [currentRoll,setCurrentRole]=useState<string | null>();
  const [liveTranscript,setLiveTranscript]=useState<string>();
  const [messages,setMessages]=useState<messages[]>([]);
 
  useEffect(()=>{
   sessionId && GetSessionDetails();
  },[sessionId])
  const GetSessionDetails=async()=>{
    const result = await axios.get('/api/session-chat?sessionId='+sessionId)
    console.log(result.data);
    setSessionDetail(result.data);
  }
  const StartCall=()=>{
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    setVapiInstance(vapi);
     vapi.start(process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID);
     // Listen for events
vapi.on('call-start', () => {console.log('Call started')
  setCallStarted(true);
});
vapi.on('call-end', () => {
  setCallStarted(false);
  console.log('Call ended')});
vapi.on('message', (message) => {
  if (message.type === 'transcript') {
    const {role,transcriptType,transcript}=message;
    console.log(`${message.role}: ${message.transcript}`);
    if(transcriptType == 'partial'){
setLiveTranscript(transcript);
    setCurrentRole(role);
    }else if(transcriptType == 'final'){
      // final transcript
      setMessages((prev:any)=>[...prev,{role:role,text:transcript}])
      setLiveTranscript("");
      setCurrentRole(null);
    }
    
  }
});
 vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setCurrentRole('assistant');
    });
    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setCurrentRole('user');
    });
    }
    const endCall = () => {
      if(!vapiInstance) return;
    // stop the call
      vapiInstance.stop();
      // optionally remove listeners (good for memory management)
      vapiInstance.off('call-start');
      vapiInstance.off('call-end');
      vapiInstance.off('message');

      // Reset call state
      setCallStarted(false);
      setVapiInstance(null);
 
  };
  return (
    <div className='p-5 border rounded-3xl bg-amber-200'>
      <div className='flex justify-between items-center mt-10'>
        <h2 className='p-1 px-2 border rounded-md flex gap-2 items-center'><Circle className={`w-4 h-4 rounded-full ${callStarted?'bg-green-400':'bg-red-500'}`}/>{callStarted?'Connected..':'Not Connected'}</h2>
        <h2 className='font-bold text-xl text-gray-400'>00:00</h2>
      </div>
        {sessionDetail && <div className='flex items-center flex-col'>
     <Image src={sessionDetail?.selectedDoctor?.image} alt={sessionDetail?.selectedDoctor?.specialist??''} width={120} height={120} className='h-[100px] w-[100px] object-cover rounded-full' />
     <h2 className='mt-2 text-lg'>{sessionDetail?.selectedDoctor?.specialist}</h2>
     <p className='text-sm text-gray-400'>AI Medical Voice Agent</p>
     <div className='mt-12 overflow-y-auto flex flex-col items-center px-10 md:px-28 lg:px-52 xl:px-72'>
      {messages?.slice(-4).map((msg:messages, index)=>(
          
<h2 className='text-gray-400 p-2' key={index}>{msg.role}:{msg.text}</h2>
          
        ))
      }

{liveTranscript && liveTranscript?.length>0 && <h2 className='text-lg'>{currentRoll} : {liveTranscript}</h2>}
     </div>
     {!callStarted?  <Button className='mt-20' onClick={StartCall}><PhoneCall/>Start Call</Button>
     : <Button variant={'destructive'} onClick={endCall}><PhoneOff/>Disconnect</Button>}
    
      </div>}
    </div>
  )
}

export default MedicalVoiceAgent