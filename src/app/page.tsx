import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Card from "@/components/Card";
import BasicInfoSection from "@/components/BasicInfoSection";

export default async function Home() {

  return (
  <div className="h-screen object-fill flex flex-col">
    <div className="absolute top-0 left-0 w-full z-10 bg-sageGreen">
      <Navbar />
    </div>

    <section className = "bg-sageGreen pb-10 ">
      <div className = "mx-[2vw] relative ">
     

      <GradualSpacing
      className=" text-center font-bold tracking-[-0.1em]  text-black dark:text-white text-[30vw] font-amatic"
      text="Uni Trade"
      />
   

        <div className = "absolute z-7 w-[50vw] right-0 top-[20vw]"> 
          <img src="https://images.ctfassets.net/005nulnwwll2/3lZNIBc8GqmRDrAd62AUZg/1de08f8924fbfd1b31708ad51d6aac06/person-with-books-on-phone.png?fm=webp&w=3000"></img>
        </div>
      </div>

        <div className = "flex flex-shrink w-1/2 justify-around z-15 xl:mt-2 md:mt-0 ">
          <Button label = "BUY" url = "/buy"/>
          <Button label = "SELL" url = "/sell"/>
        </div>
      <div>
      </div>
    </section>




    {/* basic info */}
    
      <BasicInfoSection/>
      
    

    {/* Burning questions */}
    <section className = "flex flex-col bg-sageGreen ">
      <div className="flex justify-center top-[16vw] z-50 font-amatic mx-5 font-bold ">
          <WordPullUp
            className="ml-5 font-bold tracking-[-0.02em] text-black dark:text-white justify-start"
            words="BURNING  QUESTIONS"
          />
      </div>

    </section>

    {/* footer */}
    <footer>

    </footer>



  </div>
  );
}
