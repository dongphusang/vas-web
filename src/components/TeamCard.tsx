import './style.css';
import githubIcon from '../assets/github_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';
import instagramIcon from '../assets/insta_icon.svg';

export default function TeamCard({ name = "David Ewing Bui", thumbnail = "empty", role = "President"} : { name?: string, thumbnail?: string, role?: string}) {
    return (
        <>
            {/*Background*/}
            <div className="flex flex-col text-center items-center bg-[#FAF5EF] h-[30rem] w-[20rem] gap-4.5 rounded-lg border border-[#F4D793]/90 shadow-lg shadow-black/20
                            lg:w-[23rem]">
                <img className='w-full rounded-t-lg border border-[#672F2F]/10 h-2/3 object-cover' src={thumbnail}></img>
                <div>
                    {/* Name */}
                    <p className='text-2xl pb-1 tracking-wide text-[#672F2F]/90'> {name} </p>
                    {/* Role */}
                    <p className='text-lg tracking-wide text-[#672F2F]/70'> {role} </p>
                </div>
                <hr className='border-[#672F2F]/90 bg-[#672F2F]/70 h-[1.5px] w-[150px]'/>
                <div className='flex flex-row items-center justify-center'>
                    <div className='h-10'>
                        <div className='relative'>
                            <a className='absolute'>
                                <img src={githubIcon} className='absolute block top-0 right-2 m-auto contrast-0'/>
                            </a>
                        </div>
                    </div>
                    <div className='h-10'>
                        <div className='relative'>
                            <a className='absolute'>
                                <img src={linkedinIcon} className='absolute block top-0 right-2 m-auto contrast-0'/>
                            </a>
                        </div>
                    </div>
                    <div className='h-10'>
                        <div className='relative'>
                            <a className='absolute'>
                                <img src={instagramIcon} className='absolute block top-0 right-2 m-auto contrast-10'/>
                            </a>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    );
}