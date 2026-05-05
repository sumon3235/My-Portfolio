import Banner from '../../Components/Banner';
import HowIWork from '../../Components/HowIWork';
import Projects from '../../Components/RecentProjects';
import TechStack from '../../Components/TechStack';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TechStack></TechStack>
      <Projects></Projects>
      <HowIWork></HowIWork>
    </div>
  );
};

export default Home;