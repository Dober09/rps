import bgImg from "../assets/bg-triangle.svg"

import Image from "./Image"

const Section = ({handleClick,data}) => {
  

    return (
        <section style={{backgroundImage:`url(${bgImg})`}}>
        {data.map(item=>(
            <Image 
            handleClick={handleClick}
            hand={item.hand}
            image={item.image}
            key={item.id} />
        ))}
           
        </section>
    );
}

export default Section;
