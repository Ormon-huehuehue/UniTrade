import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Card from "@/components/Card";
import BasicInfoSection from "@/components/BasicInfoSection";
import QuestionComponent from "@/components/QuestionComponent";
import GetStarted from "@/components/GetStarted";

export default async function Home() {

  return (
  <div className="h-100vh object-fill">
    <div className="absolute top-0 left-0 w-full z-10 bg-sageGreen">
      <Navbar />
    </div>

    <section className = "bg-sageGreen py-10 h-[100vh]">
      <div className = "ml-[2vw] mr-[5vw] lg:relative flex flex-col items-center lg:items-start lg:top-0 mt-[20vw] lg:mt-0 ">
      <GradualSpacing
      className="lg:mt-[-5vw] text-center font-bold tracking-[-0.1em]  text-black dark:text-white lg:text-[30vw] font-amatic text-[35vw] md:text-[vw]"
      text="Uni Trade"
      />
   
        <div className = "flex flex-col lg:flex-row flex-shrink lg:w-1/2 w-[60%] justify-around items-center z-15 xl:mt-2 md:mt-0 gap-5 mt-5 ">
          <Button label = "BUY" url = "/buy"/>
          <Button label = "SELL" url = "/sell"/>
        </div>

        <div className = "lg:absolute z-7 w-[50vw] right-0 top-[15vw] hidden lg:block"> 
          <img src="https://images.ctfassets.net/005nulnwwll2/3lZNIBc8GqmRDrAd62AUZg/1de08f8924fbfd1b31708ad51d6aac06/person-with-books-on-phone.png?fm=webp&w=3000" className = "drop-shadow-lg"></img>
        </div>
      </div>

      <div>
      </div>
    </section>




    {/* basic info */}
    
      <BasicInfoSection/>
      
    

    {/* Burning questions */}
    <section className = "flex flex-col bg-sageGreen px-5 pb-10">
      <div className="flex justify-center mt-[2vw] z-50 font-amatic mx-5 font-bold ">
          <WordPullUp
            className="ml-5 font-bold tracking-[-0.02em] text-black dark:text-white justify-start"
            words="BURNING  QUESTIONS"
          />
      </div>

      <div className="py-[3vw] z-5 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-20 font-montserrat ">
            <QuestionComponent question={"How can I trust the sellers?"} answer="All users are verified students from our network of partner universities. We do the legwork, so you don't have to!" />
            <QuestionComponent question={"What can I trade?"} answer="Anything from textbooks to tech gadgets to toasters. If it’s not illegal and fits in a dorm room, it’s probably fair game." />
            <QuestionComponent question={"Do I need to pay?"} answer="Nope! Uni Trade is completely free to use. Just sign in, list your item and start trading. Keeping pennies in students’ pockets, that’s our motto." />
          </div>

    </section>


    {/* GET STARTED */}
    <GetStarted/>

    {/* footer */}
    <footer>

    </footer>



  </div>
  );
}
