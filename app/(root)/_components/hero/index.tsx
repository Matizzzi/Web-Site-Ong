import SectionImg from "./sections/section-img";
import SectionNewsletter from "./sections/section-informativa";
import SectionNumbers from "./sections/section-numero";

const Hero = () => {
    return <section id="hero" className="container mx-auto flex items-center justify-between   w-full gap-10">
        <section className="flex-1">
        <SectionNewsletter/> 
        </section>
        <section className="flex-1">
        <SectionImg/>
        </section>
        <section className="flex-1">
        <SectionNumbers/>
        </section>
    </section>;
}
 
export default Hero;