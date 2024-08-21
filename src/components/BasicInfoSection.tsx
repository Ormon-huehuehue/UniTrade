import React from 'react';
import Card from './Card';
import TextRevealByWord from './magicui/text-reveal';
import WordPullUp from './magicui/word-pull-up';

const BasicInfoSection = () => {
  return (
    <section className="bg-yellow px-5">
      <div className="font-amatic mx-5 font-bold flex flex-col">
        
        {/* WordPullUp Component */}
        <div className="flex justify-center top-[16vw] z-50">
          <WordPullUp
            className="ml-5 font-bold tracking-[-0.02em] text-black dark:text-white justify-start"
            words="BUY  SELL  CONNECT"
          />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center">
          
          {/* Image */}
          <div className="w-[60vw] sm:w-[40vw] sm:absolute sm:right-[25%] sm:mt-0">
            <img
              src="https://images.ctfassets.net/005nulnwwll2/3smdwTwU6DHhTo9tyOAElT/b5ac8699890d874a7fd32efe82af0cff/person-sitting-looking-at-phone.png?fm=webp&w=1600"
              className="mx-auto sm:mx-0"
              alt="Person sitting looking at phone"
            />
          </div>

          {/* Cards */}
          <div className="mt-10 sm:right-[25%] sm:mt-[25vw] z-5 w-full sm:w-[30rem] flex flex-col items-center gap-5">
            <Card content={"For the students, By the students"} />
            <Card content={"Buy and Sell Pre-Loved items"} />
          </div>
        </div>

        {/* Text Reveal - Only Visible on Larger Screens */}
        <div className="hidden sm:block ">
          <TextRevealByWord text="Simplify college life, one trade at a time" />
        </div>

      </div>
    </section>
  );
};

export default BasicInfoSection;
