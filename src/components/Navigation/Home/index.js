import { GoHome } from "react-icons/go";
import Center from "~components/Layout/Center";
import Link from "~components/Navigation/Link";

const Home = () => (
  <Center>
    <Link href="/">
      <GoHome style={{ marginRight: 5, verticalAlign: "baseline" }} />
      Go Home
    </Link>
  </Center>
);

export default Home;
