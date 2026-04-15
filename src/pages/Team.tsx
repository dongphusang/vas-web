import './style.css'
import TeamCard from '../components/TeamCard';

import sangThumb from '../assets/sang-logo2.webp';
import defaultThumb from '../assets/vas-logo.webp';

export default function Team() {
    return (
        <>
            <div className="bg-[#672F2F] flex flex-col justify-center min-h-[100vh] w-full p-5 pt-15 gap-y-5
                            md:p-25
                            lg:p-30
                            2xl:p-40">
                <p className='text-title text-left text-[#F4D793]/90 pb-7'> Meet Our Team (2026) </p> 
                <p className='text-title-t2 text-left'> Board of Executives </p>  
                <div className='w-full h-full grid auto-rows-auto justify-start items-center pb-7 gap-15
                                md:grid-cols-2
                                lg:grid-cols-3 lg:justify-center
                                2xl:grid-cols-6'>
                    <TeamCard name='David Ewing Bui' thumbnail={defaultThumb} role='President'/>
                    <TeamCard name='John Nam Le' thumbnail={defaultThumb} role='Internal VP'/>
                    <TeamCard name='Nhu Phuong Tran' thumbnail={defaultThumb} role='Administration VP'/>
                    <TeamCard name='Que Anh Trinh' thumbnail={defaultThumb} role='Operation VP'/>
                    <TeamCard name='Thuc Dao' thumbnail={defaultThumb} role='Secretary General'/>
                    <TeamCard name='Ada Le' thumbnail={defaultThumb} role='Treasurer'/>
                </div>
                <p className='text-title-t2 text-left'> Committees </p>  
                <div className='w-full h-full grid auto-rows-auto justify-start items-center pb-7 gap-15
                                md:grid-cols-2
                                lg:grid-cols-3 lg:justify-center
                                2xl:grid-cols-6'>
                    <TeamCard name='Sang Dong' thumbnail={sangThumb} role='Web Lead'/>
                    <TeamCard name='Nhat Binh' thumbnail={defaultThumb} role='Web Advisor'/>
                </div>
            </div>
        </>
    );
}
