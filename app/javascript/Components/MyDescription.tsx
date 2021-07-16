import * as React from 'react';

interface MyDescriptionProps {

}

const MyDescription = (props: MyDescriptionProps): React.ReactElement => {

  return (
    <div className="centered" >
      <div>
        

        <h1> Where Am I ?</h1>
          <p className="paragraph">Currently based in Marseille, I am originated from the parisian region
          but the studies and call of the sun brought me to discover and love <br/>
          the beaufitulness of this city and the countryside around as long as I grew a passion
          for beach volleyball.</p>
      </div>
      <div className="img">
        <img width={1024} height={682}  className="me" src="/assets/funny_me.jpeg"/>
        <sup><i>Ocean Beach tournament in San Francisco </i></sup>
      </div>
      <div>
        <h1 > What do I do ?</h1>
          <p className="paragraph">In possession of a Computer sciences engineering diploma from 
          Polytech Marseille, I specialized in web development. <br/>
          I am as of now well versed since I got to work on lots of different type of stacks in my professional career 
          (backend, frontend, devops)  as well as  developed several other personal projects.<br/>
          Even though, I'm not yet an expert in  anything, I have good insights on each parts of a website  
          development including maintenance as long as product enhancement</p>
      </div>  
    </div>
  );
}

export default MyDescription;