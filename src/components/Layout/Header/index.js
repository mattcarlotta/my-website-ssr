import { IconContext } from "react-icons";
import { GoHome, GoMail } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import FlexCenter from "~components/Layout/FlexCenter";
import ListItem from "~components/Layout/ListItem";
import Orbits from "~components/Layout/Orbits";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import Center from "~components/Layout/Center";
import Headline from "~components/Layout/Headline";
import SubHeadline from "~components/Layout/SubHeadline";

const FOOTERLINKS = [
  {
    dataTest: "mail",
    Icon: GoMail,
    link: "mailto:matt@mattcarlotta.sh",
    description: "My email address",
  },
  {
    dataTest: "github",
    Icon: RiGithubLine,
    link: "https://github.com/mattcarlotta",
    description: "My github repository",
  },
  {
    dataTest: "linkedin",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/mattcarlotta/",
    description: "My LinkedIn profile",
  },
];

const Header = () => (
  <header css="padding-top: 60px;">
    <IconContext.Provider
      value={{
        style: { fontSize: 18, verticalAlign: "text-top", marginRight: 5 },
      }}
    >
      <nav css="margin: 0 auto;">
        <FlexCenter direction="row">
          <ListItem>
            <Link
              dataTest="go-home"
              ariaLabel="Navigate back to home page"
              href="/"
            >
              <GoHome />
            </Link>
          </ListItem>
          {FOOTERLINKS.map(({ dataTest, description, Icon, link }) => (
            <ListItem key={description}>
              <OutsideLink
                data-testid={dataTest}
                aria-label={description}
                href={link}
              >
                <Icon className="icon" />
              </OutsideLink>
            </ListItem>
          ))}
        </FlexCenter>
      </nav>
      <Orbits />
      <Center data-testid="header">
        <Headline>MATT CARLOTTA</Headline>
        <SubHeadline>fullstack web developer and commercial artist</SubHeadline>
      </Center>
    </IconContext.Provider>
  </header>
);

export default Header;
