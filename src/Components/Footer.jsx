import share from '../assets/share.png';
export default function Footer() {
  return (
    <div>
      <footer className="footer bg-[#EBECEF] dark:bg-gray-900 text-base-content p-10 dark:text-white">
        <nav>
          <h6 className="footer-title">Conatct</h6>
          <a className="link link-hover">01945188888</a>
          <a className="link link-hover">info@shareserve.com</a>
          <a className="text-sm font-semibold">Corporate Address</a>
          <a className="link link-hover">
            House No: 1349, <br /> West Shewrapara, mirpur, dhaka
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Other Pages</h6>
          <a className="link link-hover"> Blog</a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Sitemap</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">sManager</a>
          <a className="link link-hover">sBusiness</a>
          <a className="link link-hover">sDelivery</a>
          <a className="link link-hover">sBondhu</a>
        </nav>
        <nav>
          <h6 className="footer-title flex items-center gap-2">
            <img src={share} alt="" />
            Share Serve
            </h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div className="bg-[#DFE0E3] py-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-center text-gray-900 font-medium dark:text-white">
          Copyright &copy; 2024{" "}
          <span className="text-blue-600">ShareServe</span> Platform Limited |{" "}
          <br className="md:hidden lg:hidden" /> All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
