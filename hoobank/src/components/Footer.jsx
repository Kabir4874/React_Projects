import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hooBank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className=" space-y-2 list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3f3e45]">
        <p className=" font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
          2024 HooBank || Made By Kabir Ahmed Ridoy
        </p>
        <div className="flex flex-row md:mt-0 mt-6 space-x-6">
          {socialMedia.map((social) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
