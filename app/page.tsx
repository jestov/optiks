import { FC } from "react";
import Image from "next/image";
import TargetIcon from "@/components/icons/TargetIcon";
import FractionalIcon from "@/components/icons/FractionalIcon";
import MoneyIcon from "@/components/icons/MoneyIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import StatsIcon from "@/components/icons/StatsIcon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactSmall from "@/components/ContactSmall";
import ArrowSmallIcon from "@/components/icons/ArrowSmallIcon";
import Testimonials from "@/components/Testimonials";
import CalendarIcon from "@/components/icons/CalendarIcon";
import Link from "next/link";

type IconProps = {
  className: string;
};

type ServiceCardProps = {
  Icon: FC<IconProps>;
  title: string;
  description: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ Icon, title, description }) => (
  <div className="flex flex-col gap-4 md:gap-6 my-4 md:my-8 items-start border border-white border-opacity-10 p-8 md:p-16 rounded-[32px]">
    <div className="flex gap-6 items-center">
      <Icon className="min-w-[60px] max-w-[60px] md:min-w-[80px] md:max-w-[80px]" />
      <h3 className="text-xl md:text-3xl text-greenLighter">{title}</h3>
    </div>
    <p className="!leading-snug text-base md:text-xl text-white">
      {description}
    </p>
  </div>
);

const Services: FC = () => (
  <div>
    <ServiceCard
      Icon={StatsIcon}
      title="Financial Round readiness"
      description="Let us share and execute the best tools and strategies we have learned from working at Rappi and other top startups where we have participated in processes for over US$1Bn."
    />
    <ServiceCard
      Icon={SettingsIcon}
      title="The CFO Methodology"
      description="Structure your financial department with the best tools and strategies from top start-ups.  We will execute and give you the best in class tools so that you can have full financial optiks to manage your business whether you are a CFO or a CEO."
    />
    <ServiceCard
      Icon={MoneyIcon}
      title="Tech M&A (sell or buy your tech company)"
      description="Selling/buying your company is probably the most important professional decision an entrepreneur can make. Let us give you the best practices to buy or sell your tech company at the best price."
    />
    <ServiceCard
      Icon={FractionalIcon}
      title="CFO as a service products"
      description="Wether your a are a CFO and need horse power to execute critical matters or a CEO with a small team we can help you on your financial needs."
    />
  </div>
);

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[70px] z-10 w-full min-h-screen">
        <Image
          src="/img/grid.svg"
          layout="contain"
          width="100"
          height="100"
          className="mx-auto w-full min-h-screen object-top object-cover"
          alt=""
        />
      </div>

      <main className="flex flex-col items-center min-h-[85vh] pt-20 md:pt-36 gap-32 md:gap-44 pb-12 md:pb-28 px-[20px] md:px-24 bg-[url('/img/hero.jpg')] relative bg-cover text-white before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary/60 before:to-secondary/5 before:z-0 z-4">
        <div className="relative w-full max-w-[1600px] flex flex-col justify-center items-center text-center mx-auto gap-8 mt-24 lg:px-4 px-[10px] z-20">
          <div className="flex flex-col gap-10 max-w-6xl z-11 relative">
            <h1 className="text-2xl lg:text-6xl tracking-wide text-white font-monument uppercase  !leading-none">
              <span className="text-greenLighter">
                Your trusted financial advisor
              </span>{" "}
              to grow the value of your company
            </h1>
            <h2 className="text-lg md:text-2xl max-w-4xl w-full mx-auto">
              Financial round readiness, structure you financial department.,
              sell/buy your start-up or growing business”
            </h2>
          </div>
          <Link
            href="https://calendar.app.google/Cfa8NYHBW5LzbVAf8"
            target="_blank"
            className="relative z-4 min-w-[230px] animate-pulse hover:animate-none flex justify-between items-center gap-8 px-5 md:px-5.5 py-4 md:py-5 rounded-full cursor-pointer bg-greenLighter text-secondary transition duration-500 hover:bg-greenLight"
          >
            <div>Schedule a Call</div>
            <span className="inline-block ml-2">
              <CalendarIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center gap-8 w-full relative z-12 px-3">
          <ContactSmall />
        </div>

        <section
          className="bg-primary text-white pt-28 md:pt-48 pb-12 md:pb-24 px-[30px] md:px-32 w-full flex items-center -mt-56 md:-mt-64 relative z-20 rounded-[64px] max-w-[1800px]"
          id="why-optiks"
        >
          <div className="w-full max-w-[1400px] mx-auto min-h-[60vh] grid md:grid-cols-2 items-center gap-2 md:gap-32">
            <div className="relative w-full min-h-[300px] md:h-full flex items-center justify-center">
              <Image
                src="/img/radar.svg"
                layout="fill"
                className="absolute"
                alt=""
              />
              <h2 className="text-2xl lg:text-5xl tracking-wider font-monument uppercase">
                Why <span className="text-greenLighter">Optiks</span>
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-6 md:gap-32">
              <div className="bg-white w-16 h-[1px]"></div>
              <p className="text-base md:text-xl text-center md:text-left">
                The perfect combination between corporate finance and start-up
                financial strategy. With more than US$1 Bn in capital raisings,
                M&A and financial advisory in both traditional corporate as well
                as start-up and VC backed companies, we have developed a
                methodology to help you grow your company trough financial
                strategies.
              </p>
            </div>
          </div>
        </section>
      </main>

      <section
        className="bg-white px-[20px] py-12 md:py-32 min-h-[60vh] rounded-t-3xl -mt-8 z-4 sticky -top-[150vh] bg-[url('/img/bg-pattern.svg')]"
        id="services"
      >
        <div className="w-full max-w-[1400px] 3xl:max-w-[1800px] mx-auto text-secondary flex flex-col gap-16 z-4 items-start">
          <div className="flex flex-col md:flex-row gap-10 md:gap-32 items-center justify-between relative">
            <h1 className="text-center font-monument uppercase text-3xl lg:text-5xl text-secondaryBlue relative inline-flex before:absolute after:absolute before:bg-[url('/img/title_left_blue.svg')] after:bg-[url('/img/title_right_blue.svg')] before:bg-contain after:bg-contain before:bg-no-repeat after:bg-no-repeat before:w-[120%] before:h-[120%] before:left-[-5%] before:top-[-12.5%] after:w-[120%] after:h-[120%] after:left-[105%] after:top-[-12.5%]">
              Our Services
            </h1>
            <p className="text-lg md:text-xl !leading-snug md:w-2/4 text-center md:text-left">
              We deliver top tier financial services for startups and growing
              businesses. Take your financial sophistication 5 years ahead and
              have total clarity of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 relative w-full bg-secondaryBlue rounded-[64px] overflow-hidden">
            <div className="relative p-12 md:p-16 h-[600px] md:h-full before:opacity-100 md:before:opacity-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/70 before:to-transparent/0 before:z-10 before:rounded-[64px]">
              <Image
                src="/img/climber.jpg"
                alt="Always keep focus"
                layout="fill"
                className="!h-[600px] md:!h-full object-cover absolute rounded-r-[64px] object-top"
              />
              <h3 className="text-xl lg:text-3xl font-monument relative flex flex-col md:flex-row gap-8 items-end z-20">
                Always keep the right coordinates, always keep focus
                <Image
                  src="/img/arrow45deg.svg"
                  alt=""
                  layout="fill"
                  className="!h-6 inline-flex !relative !w-6"
                />
              </h3>
            </div>
            <div className="text-xl flex flex-col gap-6 md:gap-14 px-5 py-3 md:px-12 md:py-6">
              <Services />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-secondary py-12 md:py-32 flex flex-col justify-center items-center gap-12 relative z-20 rounded-[64px]"
        id="our-clients"
      >
        <Testimonials />
      </section>
      <div className="w-full px-[10px] py-[80px] md:px-14 lg:px-48 xl:px-32 bg-white bg-[url('/img/bg-pattern.svg')] relative">
        <Image
          className="w-full max-w-[1400px] mx-auto sticky top-0"
          width={1000}
          height={1000}
          src="/img/map.svg"
          alt=""
        />
      </div>
      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-12 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-[url('/img/water-mobile.jpg')]  md:bg-[url('/img/water.jpg')] bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0 before:bg-gradient-to-t before:from-secondary/30 before:to-secondary/100 before:z-0 z-40 rounded-t-[64px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 max-w-[1400px] mx-auto z-2 relative">
          <div className="flex flex-col gap-12 items-center md:items-start">
            <h1 className="font-monument uppercase text-3xl lg:text-5xl relative before:absolute after:absolute before:bg-[url('/img/title_left.svg')] after:bg-[url('/img/title_right.svg')] before:bg-contain after:bg-contain before:bg-no-repeat after:bg-no-repeat before:w-[120%] before:h-[120%] before:left-[-5%] before:top-[-12.5%] after:w-[120%] after:h-[120%] after:left-[105%] after:top-[-12.5%]">
              <span className="text-greenLighter">Contact</span> Us
            </h1>

            <p className="text-xl text-center md:text-left">
              Let us understand your financial goals and show you how Optiks,
              your trusted financial advisor, can help grow the value of your
              company.
            </p>
          </div>
          <Contact />
        </div>
        <Footer />
      </section>
    </div>
  );
}
