import { IconContext } from "react-icons";
import { GoHome, GoMail } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import FlexCenter from "~components/Layout/FlexCenter";
import ListItem from "~components/Layout/ListItem";
import Spinner from "~components/Layout/Spinner";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";
import Head from "~components/Navigation/Header";

const FOOTERLINKS = [
  {
    Icon: GoMail,
    link: "mailto:carlotta.matt@gmail.com",
    description: "My email address",
  },
  {
    Icon: RiGithubLine,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
  },
  {
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
  },
];

const Header = () => (
  <header css="padding-top: 40px;">
    <IconContext.Provider
      value={{
        style: { fontSize: 18, verticalAlign: "text-top", marginRight: 5 },
      }}
    >
      <nav css="margin: 0 auto;">
        <FlexCenter direction="row">
          <ListItem>
            <Link href="/">
              <GoHome />
            </Link>
          </ListItem>
          {FOOTERLINKS.map(({ description, Icon, link }) => (
            <ListItem key={description}>
              <OutsideLink aria-label={description} href={link}>
                <Icon className="icon" />
              </OutsideLink>
            </ListItem>
          ))}
        </FlexCenter>
      </nav>
      <Spinner />
      <Head title="Home" url="" />
      <Center>
        <Headline>MATT CARLOTTA</Headline>
        <SubHeadline>fullstack web developer and commercial artist</SubHeadline>
      </Center>
    </IconContext.Provider>
  </header>
);

export default Header;
