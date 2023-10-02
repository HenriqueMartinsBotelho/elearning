import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-16 text-sm bg-slate-700 text-slate-200">
      <Container>
        <div className="flex flex-col justify-between pt-16 pb-8 md:flex-row">
          <FooterList>
            <h3 className="text-base font-bold">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">About Us</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              tenetur cupiditate, vero repudiandae quasi laborum quas? Nihil, ex
              esse laudantium, libero sit praesentium illum dolore porro iusto
              asperiores et accusamus?
            </div>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
