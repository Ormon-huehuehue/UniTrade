import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Card from "@/components/Card";

export default async function Home() {

  return (
  <div className="h-screen object-fill flex flex-col">
    <div className=" top-0 left-0 w-full z-10 bg-sageGreen">
      <Navbar />
    </div>

    <section className = "bg-sageGreen pb-5 min-h-screen">
      <div className = "ml-5 mr-5 relative ">
      <GradualSpacing
      className="font-display text-center font-bold tracking-[-0.1em]  text-black dark:text-white md:text-[20rem] md:leading-[35rem] xl:text-[35rem] font-amatic"
      text="Uni Trade"
    />

        <div className = "absolute z-7 w-[130vh] right-0 bottom-[-44vh]"> 
          <img src="https://images.ctfassets.net/005nulnwwll2/3lZNIBc8GqmRDrAd62AUZg/1de08f8924fbfd1b31708ad51d6aac06/person-with-books-on-phone.png?fm=webp&w=3000"></img>
        </div>
      </div>

        <div className = "flex w-1/2 justify-around ml- z-10 mt-10 ">
          <Button label = "BUY" url = "/buy"/>
          <Button label = "SELL" url = "/sell"/>
        </div>
      <div>
      </div>
    </section>

    {/* basic info */}
    <section className = "bg-yellow">
      <div className ="font-amatic text-2xl mx-5 my-5 font-bold flex flex-col">
        <div className = "sticky left-0 top-[16rem] z-50 ">
        <WordPullUp
        className="text-8xl ml-5 font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] justify-start"
        words="BUY  SELL  CONNECT"
      />  
          
        </div>

    <div className  = "flex flex-col">
      <div className = "w-[600px] absolute right-0 z-10">
        <img src="https://images.ctfassets.net/005nulnwwll2/3smdwTwU6DHhTo9tyOAElT/b5ac8699890d874a7fd32efe82af0cff/person-sitting-looking-at-phone.png?fm=webp&w=1600" className = "items-center justify-center"/>
      </div>
      
      <div className = "absolute right-0 z-5 w-[30rem] mt-[23rem]">        
        <Card content={"For the students, By the students"}/>
      </div>
     
    </div>
    <div>
     <TextRevealByWord text="Simplify college life, one trade at a time" />
    </div>
      
      </div>
      
    </section>

    {/* footer */}
    <footer>

    </footer>



  </div>
  );
}
