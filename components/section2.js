import Link from "next/link"
import Image from "next/image"
import Author from './_child/author'
export default function section2() {
  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}

        </div>
    </section>
  )
};


function Post(){
   return (
     <div className="item">
        <div className="images">
             <Link href={"/"}><Image src={"/images/img1.jpg"} width={500} height={350}/></Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
                 <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Buisness, Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-july 3, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl text-gray-800 hover:text-gray-600">Yor must unhappy customer are your gratest source of learning</Link>
                </div>
                 <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
               <Author/>
        </div>
        
    </div>
   );
};