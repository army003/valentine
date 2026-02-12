export const Carousel = ({photos, className}:{photos: string[], className: string}) =>{


    return (
        <>
            <div className={`flex w-[200%] animate-infinite-scroll absolute  ${className}`}>
                <div className="flex w-1/2 justify-around"> 
                    {
                        photos.map(i => 
                        <img src={i}  className="border border-black [clip-path:path('M125,235_C155,215_235,160_235,90_A50,50_0_0,0_125,90_A50,50_0_0,0_15,90_C15,160_95,215_125,235_Z')] w-[250px] aspect-square object-cover" alt="a random girl"/>
                        )
                    }
                </div>
                <div className="flex w-1/2 justify-around"> 
                    {
                        photos.map(i => 
                        <img src={i}  className="border border-black [clip-path:path('M125,235_C155,215_235,160_235,90_A50,50_0_0,0_125,90_A50,50_0_0,0_15,90_C15,160_95,215_125,235_Z')] w-[250px] aspect-square object-cover" alt="a random girl"/>
                        )
                    }
                </div>
            </div>
    </>
    )
}