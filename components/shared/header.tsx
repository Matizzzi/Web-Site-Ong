import Logo from "@/components/shared/logo";
import Menu from "@/components/shared/menu";

const Header = () => {
    return ( 
        <header className=" fixed left-0 top-0 w-full py-5 px-5 md:px-0">
            <div className=" max-w-7xl mx-auto flex  items-center justify-between">
                <section>
                    <Logo/>
                </section>
                <section>
                    <Menu/>
                </section>
                <section>perfil</section>
            </div>
        </header>
    );
}

export default Header;
