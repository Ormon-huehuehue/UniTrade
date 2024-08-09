import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server"; 


export default async function Home() {


 

  return (
  <div className="h-screen object-fill flex flex-col">
    <div className=" top-0 left-0 w-full z-10">
      <Navbar />
    </div>
    <div className="top-0 left-0 w-full">
      <div className = "ml-5 mr-5 relative ">
        <p className= "text-[350px]  font-bold z-1 font-amatic "> Uni Trade</p>

        <div className = "absolute z-7 w-[900px] right-0 top-8"> 
          <img src="https://images.ctfassets.net/005nulnwwll2/3lZNIBc8GqmRDrAd62AUZg/1de08f8924fbfd1b31708ad51d6aac06/person-with-books-on-phone.png?fm=webp&w=3000"></img>
        </div>
      </div>

        <div className = "flex gap-2 w-2/5 justify-around">
          <Button label = "BUY" url = "/buy"/>
          <Button label = "SELL" url = "/sell"/>
        </div>


     {/* other components */}
    </div>
  </div>
  );
}
