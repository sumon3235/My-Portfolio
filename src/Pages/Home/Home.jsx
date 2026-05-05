import Banner from '../../Components/Banner';
import HowIWork from '../../Components/HowIWork';
import Projects from '../../Components/RecentProjects';
import Services from '../../Components/Services';
import TechStack from '../../Components/TechStack';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TechStack></TechStack>
      <Projects></Projects>
      <Services></Services>
      <HowIWork></HowIWork>
    </div>
  );
};

export default Home;