import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import HowWorks from "./HowWorks";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
        <h1>this is Home</h1>
        {/* ChooseUs Section */}
        <ChooseUs></ChooseUs>
        {/* HowWroks Section */}
        <HowWorks></HowWorks>
    </div>
  )
}
