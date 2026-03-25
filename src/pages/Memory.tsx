import axios from "axios";
import { useEffect, useState} from "react";
import middleBarDeco from "../assets/middle-bar-event.svg"
import './style.css'

export default function Memory() {

    const [isModal, setIsModal] = useState(false);
    const [isMemoryChosen, setIsMemoryChosen] = useState(false);
    const [memoryList, setMemoryList] = useState([]);
    const [memory, setMemory] = useState({
        id:0,
        pri_banner: '',
        sec_banner: '',
        title: '',
        sub_title:'',
        description: '',
        action_text: '',
        secondary_desc: '',
        year: '',
        city: '',
        province: '',
        newsletter: '',
    });
    const [memoryGallery, setMemoryGallery] = useState([]);

    const fetchMemories = async () => {
        try {
            const response = await axios.get('https://vietnamesesudbury.org/api/memories');
            setMemoryList(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchMemoryGallery = async (memoryID : any) => {
        try {
            const galleryIndex = await axios.get('https://vietnamesesudbury.org/api/memory/'+memoryID);
            const gallery = await axios.get('https://vietnamesesudbury.org/api/gallery/'+galleryIndex.data[0].gallery_uid);
            setMemoryGallery(gallery.data);
            console.log(gallery.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleMemoryChoice = (memory: any) => {
        if (isMemoryChosen) {
            setIsMemoryChosen(false);
        }
        else {
            setIsMemoryChosen(true);
            setMemory(memory);
            fetchMemoryGallery(memory.id);
        }
    }

    useEffect(() => {
        fetchMemories();
    }, []);

    return (
        <>
            <div className={`${isMemoryChosen ? "hidden" : "flex-col"}`}>
                {/* Sort Dropdown */}
                <div className=" pt-15 px-5 bg-[#672F2F]/90
                                md:px-20">
                    <a className="flex items-center justify-center w-[100px] bg-transparent border-b-2 border-[#FAF5EF]">
                        <div className="flex flex-row items-center justify-center gap-3"> <p className="text-default"> Welcome! </p> </div>
                    </a>
                </div>

                {/* Memory List */}
                <div className="grid grid-cols-1 py-15 px-5 gap-y-15 bg-[#532525]/90
                                lg:p-20 lg:gap-10 lg:grid-cols-4">
                    {memoryList.map((memory: any) => (
                        <div key={memory.id} className="flex flex-col items-start justify-center w-[300px] gap-3" onClick={() => handleMemoryChoice(memory)}>
                            {/* Memory Cards */}
                            <div className="bg-[#FAF5EF] p-1.5">
                                <img src={memory.pri_banner} className="h-[300px] object-cover object-center bg-no-repeat" loading="lazy"/>
                            </div>

                            {/* Memory Infos */}
                            <div>
                                <p className="text-default"> {memory.title} <br/> {memory.year} </p>
                            </div>
                        </div>    
                    ))}
                </div>
            </div>

            {/* Memory Hero */}
            <div className={`${isMemoryChosen ? "flex" : "hidden"} flex-col p-7 h-full gap-y-20 2xl:gap-y-30 md:p-15 lg:min-h-screen justify-center items-center bg-[#532525]/90`}>
                {/* Memory Hero */}
                <div className="flex flex-col h-full w-full gap-y-12 lg:h-[80vh] lg:grid lg:grid-cols-3 lg:grid-rows-2">
                    {/* primary banner */}
                    <img className="order-1 object-cover object-center bg-no-repeat h-[50vh] 
                                    md:h-[75vh]
                                    lg:row-start-1 lg:row-span-2 lg:h-full" 
                                    src={memory.pri_banner}
                                    loading="lazy"/>
                    
                    {/* general desc */}
                    <div className="flex flex-col order-3 gap-y-3 lg:row-1 lg:col-2 lg:pl-[7em]">
                        <p className="text-default"> {memory.description} </p>
                        <button className=" text-left text-default font-bold" onClick={() => setIsModal(true)}> {memory.action_text} </button>
                    </div>

                    {/* title */}
                    <div className="flex flex-col order-2 gap-y-3 lg:row-2 lg:col-2 lg:pl-[2em] lg:pr-[4em] lg:justify-end">
                        <p className="text-title"> {memory.title} </p>
                        <p className="text-default"> {memory.sub_title} </p>
                    </div>

                    {/* activities */}
                    <div className="flex flex-row order-5 lg:row-1 lg:col-3 lg:justify-between lg:pl-[7em]">
                        <section>
                            <p className="pb-2 font-bold text-default"> Activities </p>
                            {memory.secondary_desc.split(',').map((word, index) => (
                                <p key={index} className="text-default">
                                    {word}
                                    <br/>
                                </p>
                            ))}
                        </section>
                        
                        {/*suggestive user action */}
                        <p className="hidden font-bold text-default lg:block">Scroll</p>
                    </div>

                    {/* second banner */}
                    <img className="order-4 w-full h-full object-center object-cover lg:row-2 lg:col-3 lg:pl-[7rem] lg:py-[1rem]" src={memory.sec_banner} loading="lazy"/>
                </div>

                <img src={middleBarDeco}/>

                {/* Gallery Mansonry */}
                <div className="grid grid-cols-1 gap-[2em]
                                md:grid-cols-2
                                lg:grid-cols-3
                                2xl:grid-cols-4">
                    {memoryGallery.map((gallery: any) => (
                        <img key={gallery.id} className="border-4 border-[#FAF5EF]/90" src={gallery.img_link} loading="lazy"/>  
                    ))}
                </div>

                {/* Newsletter Modal */}
                {isModal && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setIsModal(false)}>
                        <div className="bg-white w-[90%] h-[90%] rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <iframe src={memory.newsletter} className="w-full h-full rounded" title="PDF Viewer"/>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}