import Image from 'next/image';
import Head from 'next/head';
import CustomCountDown from '../components/CustomCountDown/CustomCountDown';
import styles from '../styles/Home.module.css';
import Countdown from 'react-countdown';
import EmailInput from '../components/form/Form';

export default function Home() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return (
      <CustomCountDown
        days={`${days < 10 ? '0' : ''}${days}`}
        hours={`${hours < 10 ? '0' : ''}${hours}`}
        minutes={`${minutes < 10 ? '0' : ''}${minutes}`}
        seconds={`${seconds < 10 ? '0' : ''}${seconds}`}
      />
    );
  };

  return (
    <>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div className={styles.main}>
        <div className="main-container flex items-center justify-between flex-col lg:flex-row gap-8">
          <div className="mb-10 flex-1">
            <div className="pb-[42px] border-b-2 w-fit mb-[42px]">
              <h1 className="text-white text-[40px] md:text-[55px] xl:[70px] leading-tight mb-[42px]">
                <span className="font-bold">Coming soon</span> <br /> We are
                building
                <br /> something amazing.
              </h1>
              <Countdown date={1673122256000} renderer={renderer} />
            </div>
            <div className="flex md:gap-[76px] flex-wrap gap-[20px] ">
              <div className="flex text-white text-xl gap-4 items-center">
                <span>
                  <svg
                    width="25"
                    height="32"
                    viewBox="0 0 25 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0321 31.078C18.9426 31.078 17.4121 30.5882 15.1204 28.9968C12.3335 27.0544 10.178 25.2612 7.40619 21.8252C4.73377 18.5057 3.43328 16.3566 1.61315 12.2401C-0.44307 7.59216 -0.0925525 5.15582 0.299269 4.11455C0.765882 2.87002 1.45464 2.12566 2.34489 1.38685C2.85054 0.975087 3.38565 0.622111 3.94343 0.332402C3.99924 0.302572 4.05115 0.27413 4.09748 0.248462C4.37376 0.0937631 4.79237 -0.14002 5.32262 0.109719C5.67648 0.274824 5.9924 0.612664 6.48692 1.21967C7.50108 2.46281 8.88696 5.23144 9.39823 6.59113C9.74149 7.50753 9.96866 8.11245 9.96921 8.79091C9.96921 9.58522 9.64772 10.1978 9.25757 10.8589C9.18446 10.9831 9.1119 11.1017 9.04157 11.2168C8.61682 11.9106 8.52361 12.111 8.585 12.469C8.70947 13.1884 9.63767 15.3299 11.1631 17.2217C12.6885 19.1134 14.3619 20.1942 14.9429 20.3483C15.2432 20.428 15.4078 20.3073 15.9838 19.7607C16.0664 19.6823 16.1513 19.6011 16.24 19.52C16.835 18.9698 17.305 18.5807 17.929 18.5807H17.9323C18.4754 18.5807 18.9404 18.8734 19.7106 19.3562C20.7153 19.9861 23.0098 21.6864 24.0162 22.9483C24.5057 23.5616 24.7786 23.9528 24.912 24.3919C25.1129 25.053 24.9237 25.5713 24.8004 25.9181C24.7797 25.9757 24.7568 26.0388 24.7328 26.1089C24.4979 26.8009 24.2122 27.4646 23.8794 28.0915C23.2861 29.1945 22.685 30.0485 21.6814 30.6292C21.1661 30.9321 20.6021 31.0856 20.0321 31.078Z"
                      fill="#E1E1E8"
                    />
                  </svg>
                </span>
                +20120145454
              </div>
              <div className="flex text-white text-xl gap-4 items-center">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.875 6.10352e-05H3.12503C2.2965 0.00100827 1.50216 0.353193 0.916301 0.979338C0.330442 1.60548 0.000916804 2.45445 3.05176e-05 3.33995V17.6538C0.000916804 18.5393 0.330442 19.3882 0.916301 20.0144C1.50216 20.6405 2.2965 20.9927 3.12503 20.9937H21.875C22.7036 20.9927 23.4979 20.6405 24.0838 20.0144C24.6696 19.3882 24.9991 18.5393 25 17.6538V3.33995C24.9991 2.45445 24.6696 1.60548 24.0838 0.979338C23.4979 0.353193 22.7036 0.00100827 21.875 6.10352e-05ZM21.0837 5.5246L13.048 12.2044C12.8913 12.3346 12.6985 12.4052 12.5 12.4052C12.3016 12.4052 12.1087 12.3346 11.952 12.2044L3.91633 5.5246C3.82191 5.4484 3.74261 5.3529 3.68303 5.24366C3.62345 5.13442 3.58477 5.01362 3.56925 4.88826C3.55374 4.76291 3.56168 4.63551 3.59263 4.51347C3.62358 4.39143 3.67691 4.27718 3.74953 4.17736C3.82215 4.07754 3.9126 3.99413 4.01564 3.932C4.11868 3.86986 4.23225 3.83023 4.34974 3.81541C4.46724 3.80059 4.58631 3.81087 4.70006 3.84566C4.8138 3.88045 4.91994 3.93906 5.01231 4.01807L12.5 10.2422L19.9878 4.01807C20.175 3.86695 20.4104 3.80067 20.6429 3.83357C20.8755 3.86646 21.0867 3.99588 21.2307 4.19384C21.3747 4.3918 21.44 4.6424 21.4125 4.89143C21.385 5.14045 21.2669 5.36791 21.0837 5.5246Z"
                    fill="#E1E1E8"
                  />
                </svg>
                info@venturehd.com
              </div>
            </div>
          </div>
          <div className="h-[238px] w-[2px] bg-white lg:block hidden">
            &nbsp;
          </div>
          <div className="flex-1">
            <EmailInput />
          </div>
        </div>
        <footer className="md:mt-[20px] mt-[30px]">
          <div className="main-container">
            <div className="flex justify-between flex-wrap">
              <Image
                src="/../public/photo1672122455-removebg 1.png"
                width={100}
                height={100}
                alt="logo"
              />
              <Image
                src="/../public/photo1672122455-removebg 1.png"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
