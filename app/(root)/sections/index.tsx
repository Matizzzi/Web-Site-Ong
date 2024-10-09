import SectionNewsletter from "../_components/hero/sections/section-1";
import SectionImg from "../_components/hero/sections/section-img.tsx";
import SectionNumbers from "../_components/hero/sections/section-numero";

const Hero = () => {
    return <section id='hero'>
        <SectionNewsletter />
        <SectionImg/>
        <SectionNumbers/>
    </section>;
}
 
export default Hero;