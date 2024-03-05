import React from 'react'
import Image from 'next/image'

const TeamCard = () => {
    const teamDetails = [
        {
            profilePic: "/team1.png",
            profileName: "John Smith",
            designation: "Designation Here",
            profileInfo: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        },
        {
            profilePic: "/team2.png",
            profileName: "Elina Williams",
            designation: "Designation Here",
            profileInfo: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        
        },
        {
            profilePic: "/team3.png",
            profileName: "John Smith",
            designation: "Designation Here",
            profileInfo: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        
        },
    ]
  return (
    <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
        <h1 className='text-2xl font-semibold'>Team</h1>
        <p className="my-6 text-[15px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

        {teamDetails.map((team, index) => (
            <div key={index} className='bg-blue-50 w-full py-4 px-6 md:flex md:gap-10 md:items-center my-6 rounded-lg'>
                <div className='text-center'>
                    <Image 
                    src={team.profilePic}
                    height={350}
                    width={350}
                    alt='notAvail'
                    />
                    <h2 className='mt-2 text-[15px] font-semibold'>{team.profileName}</h2>
                    <p className='text-[12px] font-medium text-[#788F9B]'>{team.designation}</p>
                </div>
                <p className='text-[#0F1629] text-[14px] font-normal'>{team.profileInfo}</p>
            </div>
        ))}
    </div>
  )
}

export default TeamCard