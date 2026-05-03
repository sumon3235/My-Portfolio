import Banner from '../../Components/Banner';
import Projects from '../../Components/RecentProjects';
import TechStack from '../../Components/TechStack';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TechStack></TechStack>
      <Projects></Projects>
    </div>
  );
};

export default Home;