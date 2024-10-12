
export default function Home() {
  return (
<div>
    <div className="flex items-center justify-center h-screen">
        <div className="h-[500px] w-[1000px] border-2 border-zinc-600 border-opacity-60 rounded-[50px] glow-animation">
        <img src="https://cdn.discordapp.com/attachments/1284170761317126236/1284170876568473692/banner.png?ex=670b3b93&is=6709ea13&hm=114125cbc849b4efbdc7d2fdaf9ef8f7a225b39229745fe4f0cc0ea620439388&" alt="GDGLogo" className="w-full h-[70%] rounded-tl-[50px] rounded-tr-[50px]  "/>
            <div className="flex items-center justify-center  relative">
            
                <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                    Coming Soon
                </span>
                <h1 className="mx-auto top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                    Coming Soon
                </h1>
            </div>
            <h1 className="text-center mt-2 opacity-7 text-zinc-600 text-[30px]">GDG REC</h1>
        </div>
    </div>
</div>

   
  );
}
