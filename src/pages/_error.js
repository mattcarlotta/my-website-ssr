import React from "react";
import Head from "next/head";
import { GoHome } from "react-icons/go";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Link from "~components/Navigation/Link";

const NotFound = () => (
  <Flex justify="center" style={{ height: "50vh" }} id="notfound">
    <Head>
      <title>Server Error</title>
    </Head>
    <Center>
      <div css="font-size: 40px;margin-bottom: 0;padding: 0px;">500</div>
      <div css="font-size: 20px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;">
        Uh Oh! The server encountered an error!
      </div>
      <Link href="/">
        <GoHome
          style={{ fontSize: 18, verticalAlign: "baseline", marginRight: 5 }}
        />
        <span>Go Back</span>
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
