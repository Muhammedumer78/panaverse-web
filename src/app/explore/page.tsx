"use client";
import React from "react";
import Home from "../Components/Home";
import {
  Box,
  Container,
  Flex,
  Center,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import png2 from "../../../public/deep.jpg";
import png70 from "../../../public/logo2.webp";
import png78 from "../../../public/mte.png";
import png79 from "../../../public/Ai2.png";
import png80 from "../../../public/deep1.png";
import png81 from "../../../public/cloud.jpg";
import png82 from "../../../public/Am2.png";
import png83 from "../../../public/IOT.png";
import png84 from "../../../public/DNA.jpg";
import png85 from "../../../public/Bio.png";
import png86 from "../../../public/Network.jpg";
import png87 from "../../../public/Automation.jpg";
import png88 from "../../../public/next.png";
import png89 from "../../../public/Js.png";
import png99 from "../../../public/ts2.png";
import png92 from "../../../public/block.jpg";
export default function Explore() {
  return (
    <>
      <Home
        title="Explore"
        src="https://t4.ftcdn.net/jpg/04/88/09/91/360_F_488099194_S41l188my3QP0S739qCFUqbq8ywKth21.jpg"
      />
      <Box mt="30px">
        <Container
          maxW={2000}
          bgImage="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700351750.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Box>
                <Center>
                  <Flex flexDirection={"column"}>
                    <Heading
                      textDecoration={"underline"}
                      textAlign="center"
                      textColor={"yellow"}
                    >
                      {" Web  "}
                      <Heading as="span" color="blue">
                        1.0
                      </Heading>

                      {" and Web 2.0"}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Web 1.0 and Web 2.0 refer to eras in the history of the
                        World Wide Web as it evolved through various
                        technologies and formats. Web 1.0 refers roughly to the
                        period from 1989 to 2004, where most sites consisted of
                        static pages, and the vast majority of users were
                        consumers, not producers of content. Web 2.0 is based
                        around the idea of the web as platform , and centers on
                        user-created content uploaded to forums, social media
                        and networking services, blogs, and wikis, among other
                        services. Web 2.0 is generally considered to have begun
                        around 2004 and continues to the current day.
                      </Text>
                    </RevealWrapper>
                  </Flex>
                </Center>
              </Box>
            </RevealWrapper>
            <Flex>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <SimpleGrid columns={[1,2]} spacing="5">
                  <Box>
                    <Heading
                      textColor={"yellow"}
                      textDecoration={"underline"}
                      textAlign="center"
                    >
                      {" Web  "}
                      <Heading as="span" color="blue">
                        3.0
                      </Heading>

                      {""}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Web3 is distinct from Tim Berners-Lee&apos;s 1999
                        concept for a Semantic Web. In 2006, Berners-Lee
                        described the Semantic Web as a component of Web 3.0,
                        which is different from the meaning of Web3 in
                        blockchain contexts. The term &apos;Web3&apos; was
                        coined by Polkadot founder and Ethereum co-founder Gavin
                        Wood in 2014, referring to a &apos;decentralized online
                        ecosystem based on blockchain.&apos; In 2021, the idea
                        of Web3 gained popularity. Particular interest spiked
                        toward the end of 2021, largely due to interest from
                        cryptocurrency enthusiasts and investments from
                        high-profile technologists and companies.Executives from
                        venture capital firm Andreessen Horowitz traveled to
                        Washington, D.C., in October 2021 to lobby for the idea
                        as a potential solution to questions about regulation of
                        the web, with which policymakers have been grappling.
                      </Text>
                    </RevealWrapper>
                  </Box>
                  <Box
                    mt={{ lg: "-80px", base: "0" }}
                    flexBasis="50%"
                
                  >
                    <Image src={png70} alt="Panaverse"></Image>
                  </Box>
                </SimpleGrid>
              </RevealWrapper>
            </Flex>
          </Box>

          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Center>
              <Flex flexDirection={"column"}>
                <Box>
                  <SimpleGrid columns={[1,2]}  spacing="5">
                    <Box>
                      <Heading
                        textColor={"yellow"}
                        textDecoration={"underline"}
                        textAlign="center"
                      >
                        {" Meta"}
                        <Heading as="span" color="blue">
                          verse
                        </Heading>

                        {""}
                      </Heading>
                      <RevealWrapper
                        origin="left"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                      >
                        <Text
                          mt="25px"
                          mb={"20px"}
                           px="10px"
                          color={"white"}
                          textAlign="justify"
                        >
                          In science fiction, the &apos;metaverse&apos; is a
                          hypothetical iteration of the Internet as a single,
                          universal, and immersive virtual world that is
                          facilitated by the use of virtual reality (VR) and
                          augmented reality (AR) headsets. In colloquial usage,
                          a &apos;metaverse&apos; is a network of 3D virtual
                          worlds focused on social connection. The term
                          &apos;metaverse&apos; originated in the 1992 science
                          fiction novel Snow Crash as a portmanteau of
                          &apos;meta&apos; and &apos;universe. Metaverse
                          development is often linked to advancing virtual
                          reality technology due to the increasing demands for
                          immersion. Recent interest in metaverse development is
                          influenced by Web3, a concept for a decentralized
                          iteration of the internet. Web3 and metaverse have
                          been used as buzzwords to exaggerate the development
                          progress of various related technologies and projects
                          for public relations purposes. Information privacy,
                          user addiction, and user safety are concerns within
                          the metaverse, stemming from challenges facing the
                          social media and video game industries as a whole.
                        </Text>
                      </RevealWrapper>
                    </Box>

                    <Box
                      mt="60px"
                      flexBasis="50%"
                      marginBottom="5rem"
                    >
                      <Image src={png78} alt="Metaverse"></Image>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            </Center>
          </RevealWrapper>
        </Container>
        <Box>
          <Container
            maxW={2000}
            bgImage="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700351750.jpg"
            bgAttachment={"fixed"}
            bgSize="cover"
          >
            <Box>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Flex>
                  <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Box>
                      <SimpleGrid columns={[1,2]}  spacing="5">
                        <Box>
                          <Heading
                            mt="20px"
                            textColor={"yellow"}
                            textDecoration={"underline"}
                            textAlign="center"
                          >
                            {"  "}
                            <Heading as="span" color="blue">
                              BlockChain
                            </Heading>

                            {""}
                          </Heading>
                          <RevealWrapper
                            origin="left"
                            delay={200}
                            duration={1000}
                            distance="500px"
                            reset={true}
                          >
                            <Text
                              mt="25px"
                              mb={"20px"}
                               px="10px"
                              color={"white"}
                              textAlign="justify"
                            >
                              Blockchains are typically managed by a
                              peer-to-peer (P2P) computer network for use as a
                              public distributed ledger, where nodes
                              collectively adhere to a consensus algorithm
                              protocol to add and validate new transaction
                              blocks. Although blockchain records are not
                              unalterable, since blockchain forks are possible,
                              blockchains may be considered secure by design and
                              exemplify a distributed computing system with high
                              Byzantine fault tolerance. A blockchain was
                              created by a person (or group of people) using the
                              name (or pseudonym) Satoshi Nakamoto in 2008 to
                              serve as the public distributed ledger for bitcoin
                              cryptocurrency transactions, based on previous
                              work by Stuart Haber, W. Scott Stornetta, and Dave
                              Bayer. The implementation of the blockchain within
                              bitcoin made it the first digital currency to
                              solve the double-spending problem without the need
                              of a trusted authority or central server. The
                              bitcoin design has inspired other applications and
                              blockchains that are readable by the public and
                              are widely used by cryptocurrencies. The
                              blockchain may be considered a type of payment
                              rail
                            </Text>
                          </RevealWrapper>
                        </Box>

                        <Box
                          mt="60px"
                          flexBasis="50%"
                          marginBottom="5rem"
                        >
                          <Image src={png92} alt="BlockChain"></Image>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </RevealWrapper>
                </Flex>
              </RevealWrapper>
            </Box>
          </Container>

          <Container
            maxW={2000}
            bgImage="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700351750.jpg"
            bgAttachment={"fixed"}
            bgSize="cover"
          >
            <Flex>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Box>
                  <SimpleGrid columns={[1,2]}  spacing="5">
                    <Box>
                      <Heading
                        mt="20px"
                        textColor={"yellow"}
                        textDecoration={"underline"}
                        textAlign="center"
                      >
                        {"   "}
                        <Heading as="span" color="blue">
                          TypeScript
                        </Heading>

                        {""}
                      </Heading>
                      <RevealWrapper
                        origin="left"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                      >
                        <Text
                          mt="25px"
                          mb={"20px"}
                           px="10px"
                          color={"white"}
                          textAlign="justify"
                        >
                          TypeScript may be used to develop JavaScript
                          applications for both client-side and server-side
                          execution (as with Node.js or Deno). Multiple options
                          are available for transpilation. The default
                          TypeScript Compiler can be used, or the Babel compiler
                          can be invoked to convert TypeScript to JavaScript.
                          TypeScript supports definition files that can contain
                          type information of existing JavaScript libraries,
                          much like C++ header files can describe the structure
                          of existing object files. This enables other programs
                          to use the values defined in the files as if they were
                          statically typed TypeScript entities. There are
                          third-party header files for popular libraries such as
                          jQuery, MongoDB, and D3.js. TypeScript headers for the
                          Node.js library modules are also available, allowing
                          development of Node.js programs within TypeScript.
                        </Text>
                      </RevealWrapper>
                    </Box>

                    <Box
                      mt="60px"
                      flexBasis="50%"
                      marginBottom="5rem"
                    >
                      <Image src={png99} alt="TypeScript"></Image>
                    </Box>
                  </SimpleGrid>
                </Box>
              </RevealWrapper>
            </Flex>
          </Container>
        </Box>
        <Container
          maxW={2000}
          bgImage="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700351750.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
        >
          <Flex>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Box>
                <SimpleGrid columns={[1,2]}  spacing="5">
                  <Box>
                    <Heading
                      mt="20px"
                      textColor={"yellow"}
                      textDecoration={"underline"}
                      textAlign="center"
                    >
                      {"   "}
                      <Heading as="span" color="blue">
                        JavaScript
                      </Heading>

                      {""}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        JavaScript is a high-level, often just-in-time compiled
                        language that conforms to the ECMAScript standard. It
                        has dynamic typing, prototype-based object-orientation,
                        and first-class functions. It is multi-paradigm,
                        supporting event-driven, functional, and imperative
                        programming styles. It has application programming
                        interfaces (APIs) for working with text, dates, regular
                        expressions, standard data structures, and the Document
                        Object Model (DOM). The ECMAScript standard does not
                        include any input/output (I/O), such as networking,
                        storage, or graphics facilities. In practice, the web
                        browser or other runtime system provides JavaScript APIs
                        for I/O. JavaScript engines were originally used only in
                        web browsers, but are now core components of some
                        servers and a variety of applications. The most popular
                        runtime system for this usage is Node.js. Although Java
                        and JavaScript are similar in name, syntax, and
                        respective standard libraries, the two languages are
                        distinct and differ greatly in design.
                      </Text>
                    </RevealWrapper>
                  </Box>
                  <Box
                    mt="60px"
                    flexBasis="50%"
                    marginBottom="5rem"
                  >
                    <Image src={png89} alt="JavaScript"></Image>
                  </Box>
                </SimpleGrid>
              </Box>
            </RevealWrapper>
          </Flex>
        </Container>
        <Container
          maxW={2000}
          bgImage="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700351750.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
        >
          <Flex>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Box>
                <SimpleGrid columns={[1,2]}  spacing="5">
                  <Box>
                    <Heading
                      mt={"20px"}
                      textColor={"yellow"}
                      textDecoration={"underline"}
                      textAlign="center"
                    >
                      {" Next"}
                      <Heading as="span" color="blue">
                        .Js
                      </Heading>

                      {""}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Next.js is an open-source web development framework
                        created by Vercel enabling React-based web applications
                        with server-side rendering and generating static
                        websites.
                      </Text>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="right"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        React documentation mentions Next.js among
                        &apos;Recommended Toolchains&apos;advising it to
                        developers as a solution when &apos;Building a
                        server-rendered website with Node.js&apos;. Where
                        traditional React apps can only render their content in
                        the client-side browser, Next.js extends this
                        functionality to include applications rendered on the
                        server-side. The copyright and trademarks for Next.js
                        are owned by Vercel, which also maintains and leads its
                        open-source development.
                      </Text>
                    </RevealWrapper>
                  </Box>
                  <Box
                    mt={"60px"}
                    flexBasis="50%"
                    marginBottom="5rem"
                  >
                    <Image src={png88} alt="NextJs"></Image>
                  </Box>
                </SimpleGrid>
              </Box>
            </RevealWrapper>
          </Flex>
        </Container>

        <Container
          mt={"20px"}
          maxW={2000}
          bgImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBoxGxUVITEhJSkrLjouFx8zODMtNyg5OisBCgoKDQ0NDg0NDzcZFRk3Ky0rKzctNy0tKysrNystKysrLS0rLSsrKy0tKysrKy0tKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBQQH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQESAv/aAAwDAQACEQMRAD8A+LgxHtjsDKKSABtRAAzCAYMAAMwkDBiIGFEQMKIgZCIsBgRJCiwREDIREDAgIGSiLBhgRJGGEk4DARAwogAI0jMjhBgG0QZGSDBlEeA2oSMxiiLBh4MMRYWKwYok4MVhYIkhWFgiIlEICLFEIiJRYEQPCEQIwEQMgCGGFEkYoBJBhpAyMozJTRBwlQkCGcawgGcKhYeHh40YnDxWDEonCxphYoIjBi8LFEjCxphYzFGeFjTCwRIwl4WCBIPBgiSDwCJOBRAJCsLBERKIIgYQSAEgqEcJM4RtEzhRULUCoUVGsMCpBDaMEhyHIchMLDxWDConBi8GJRGFjTBiEZYWNcLAIysLGuJwCM8LGmFgUZ4MXhYyojCxeFgEThLwsUSRisLBFE4DAESFBKMgAyDhwjhJxUSqFo4ZKjTUOKhQ4cazFHCio1jWYqRUhRchphSHIqRUha5Tg8rkPFVyz8jy0wYaOWV5TeW3krymd8sbCsa3kryGeWOFjW8lYBGWFjXE4BGeFjTCwKM8LGmFgURhYvCwCIwYrBgURgxWDFFHnADkwZkZaOKiThaVFRMVGq1ioqIi4a1mKiomLjVbzFRcTFw10zFSKkKLirWYJDw5FSGnlODF4MVXLPC8tcLyazvlleU3lv5Lymd8sLyV5bXkrymd8sLyXlteSvKZ5YeSsbXkryGeWOFjW8l5C5Y4VjWwrAIywsaYVgURgxWDAo8QAcK4mZGacM4lUNaxUOJioa3ioqJhxqt40ioiLhreNIuM4uKuuY1ioiLhreYuKiYqKtRWHhRUNMLBihho5Rgxpgw0cssLy1wryqzyxvJXlteS8pnljeU3lteSvKrPLC8pvLe8pvIo5YXkrG15TYByxsTY2sTYByywYvBiq5cwAnmryGZGqTMjjVaxUNMM1rFRcZxUpreNIqVnKqU1vGsrSVjK0lVdcaytJWMq+aq6Y2i5WUq5TXTGkVESqlNMXDiYpUwxghmiFhYsYauUYWLwsVZ5Z2FY0sKxUcsrE2NbE2CrllYixrYmqs8srE2NbEWCjlnYWLsLBRy44BPNXzTMjNJmkzSo4kzWsVFRCoa3i5VSs5VSmt40lXKylXKXTNayrlZSrlTrmtpVysZVyqumNpVysZWkqrpjWVUrKVcprS4qIlVDTFGkzVDIBVckmqKqjlFTV1NFHKKirqaqOUVFXUVVmJAoFZjiAE81fIMyNUmCM0maTNOKNJw1rFw4k9NbzVyqlZxUprea1lXKxlVKXXNbyrlYSrlTrmt5VysJVyquua3lXKxlXKq3jaVUrGVcpreNNVrOVWqmKBaNVMMqNLTVCqadTVRE1NOoqrO4VRVVFFZ3CpHSTDiAB5nxQYBQMBEwYJBgFozgBaxUOAFvFSqlINN4uVcphOvnVSrlMB2xUrSUgnXGkqpQE6YuU5TCbw9GgFoaVoCSbU2gJlNRQEzqaimE56i0tALD/9k="
          bgAttachment={"fixed"}
          bgSize="cover"
        >
          <Center>
            <Flex flexDirection={"column"}>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <SimpleGrid columns={[1,2]}  spacing="5">
                  <Box>
                    <Heading
                      textColor={"yellow"}
                      textDecoration={"underline"}
                      textAlign="center"
                    >
                      {" Artificial "}
                      <Heading as="span" color="blue">
                        Intelligence
                      </Heading>

                      {""}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                        px="50px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Artificial intelligence (AI) is intelligence—perceiving,
                        synthesizing, and inferring information—demonstrated by
                        machines, as opposed to intelligence displayed by
                        non-human animals and humans. Example tasks in which
                        this is done include speech recognition, computer
                        vision, translation between (natural) languages, as well
                        as other mappings of inputs.
                      </Text>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="right"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                        px="50px"
                        color={"white"}
                        textAlign="justify"
                      >
                        AI applications include advanced web search engines
                        (e.g., Google Search), recommendation systems (used by
                        YouTube, Amazon and Netflix), understanding human speech
                        (such as Siri and Alexa), self-driving cars (e.g.,
                        Waymo), generative or creative tools (ChatGPT and AI
                        art), automated decision-making and competing at the
                        highest level in strategic game systems (such as chess
                        and Go).
                      </Text>
                    </RevealWrapper>
                  </Box>

                  <Box
                    mt="60px"
                    flexBasis="50%"
                    marginBottom="5rem"
                  >
                    <Image
                      src={png79}
                      alt="Metaverse"
                   
                    
                    ></Image>
                  </Box>
                </SimpleGrid>
              </RevealWrapper>
            </Flex>
          </Center>
        </Container>
        <Container
          maxW={2000}
          bgImage="https://www.maxpixel.net/static/photo/1x/Background-Red-Wallpaper-Plain-Soft-Generated-2483933.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
          mt="15px"
        >
          <Center>
            <Flex>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <SimpleGrid columns={[1,2]}  spacing="5">
                  <Box>
                    <Heading
                      textColor={"yellow"}
                      textDecoration={"underline"}
                      textAlign="center"
                    >
                      {"  "}
                      <Heading as="span" color="blue">
                        Deep Learning
                      </Heading>

                      {" Specialization"}
                    </Heading>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                        px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Deep learning is part of a broader family of machine
                        learning methods based on artificial neural networks
                        with representation learning. Learning can be
                        supervised, semi-supervised or unsupervised.
                      </Text>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                        px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Deep-learning architectures such as deep neural
                        networks, deep belief networks, deep reinforcement
                        learning, recurrent neural networks, convolutional
                        neural networks and transformers have been applied to
                        fields including computer vision, speech recognition,
                        natural language processing, machine translation,
                        bioinformatics, drug design, medical image analysis,
                        climate science, material inspection and board game
                        programs, where they have produced results comparable to
                        and in some cases surpassing human expert performance.
                      </Text>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="right"
                      delay={200}
                      duration={1000}
                      distance="500px"
                      reset={true}
                    >
                      <Text
                        mt="25px"
                        mb={"20px"}
                         px="10px"
                        color={"white"}
                        textAlign="justify"
                      >
                        Artificial neural networks (ANNs) were inspired by
                        information processing and distributed communication
                        nodes in biological systems. ANNs have various
                        differences from biological brains. Specifically,
                        artificial neural networks tend to be static and
                        symbolic, while the biological brain of most living
                        organisms is dynamic (plastic) and analog.
                      </Text>
                    </RevealWrapper>
                  </Box>

                  <Box
                    mt="60px"
                    flexBasis="50%"
                    marginBottom="5rem"
                  >
                    <Image
                      src={png80}
                      alt="Deep Leaning Specilization"
                   
                    
                    ></Image>
                  </Box>
                </SimpleGrid>
              </RevealWrapper>
            </Flex>
          </Center>
        </Container>
        <Container
          mt="15px"
          maxW={2000}
          bgImage="https://w0.peakpx.com/wallpaper/359/453/HD-wallpaper-magical-blue-aura-aurel-abstract-amoled-android-art-background-calm-color-colorful-colors-colours-cool-dark-fresh-ios-minimal-minimalistic-modern-new-nice-oled-quality-red-simple.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
        >
          <Box>
            <Center>
              <Flex>
                <RevealWrapper
                  origin="top"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={true}
                >
                  <SimpleGrid columns={[1,2]}  spacing="5">
                    <Box>
                      <Heading
                        textColor={"black"}
                        textDecoration={"underline"}
                        textAlign="center"
                      >
                        {" Cloud Native "}
                        <Heading as="span" color="blue">
                          Computing
                        </Heading>

                        {" Specialization"}
                      </Heading>
                      <RevealWrapper
                        origin="left"
                        delay={200}
                        duration={1000}
                        distance="500px"
                        reset={true}
                      >
                        <Text
                          mt="25px"
                          mb={"20px"}
                          px="10px"
                          color={"white"}
                          textAlign="justify"
                        >
                          Cloud native computing is an approach in software
                          development that utilizes cloud computing to
                          &apos;build and run scalable applications in modern,
                          dynamic environments such as public, private, and
                          hybrid clouds&apos;. These technologies such as
                          containers, microservices, serverless functions, cloud
                          native processors and immutable infrastructure,
                          deployed via declarative code are common elements of
                          this architectural style.Cloud native technologies
                          focus on minimizing users&apos; operational burden.
                        </Text>
                      </RevealWrapper>
                    </Box>

                    <Box
                      mt="60px"
                      flexBasis="50%"
                  
                      marginBottom="5rem"
                    >
                      <Image
                        src={png81}
                        alt="Cloud Native Computing"
                     
                      
                      ></Image>
                    </Box>
                  </SimpleGrid>
                </RevealWrapper>
              </Flex>
            </Center>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="https://wi.wallpapertip.com/wsimgs/205-2056325_photo-wallpaper-purple-line-strip-background-pink.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"black"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {" Ambient "}
                    <Heading as="span" color="blue">
                      Computing
                    </Heading>{" "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      Ambient computing is basically an evolution of
                      interconnected concepts such as artificial intelligence,
                      cognitive processing, and internet of things (IoT). It is
                      considered as one of the incredible developments that has
                      occurred in the computing space, where machines and human
                      can work together seamlessly to create a better working
                      environment. The interoperability and communication
                      standards used in IoT environment not only impacts the
                      current functionalities but also the future possibilities.
                      Therefore, technology providers need to establish improved
                      communication network that enables seamless communication
                      among devices in IoT environment such as smart homes,
                      digital offices, among others.
                    </Text>
                  </RevealWrapper>
                </Box>

                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                >
                  <Image
                    src={png82}
                    alt="Ambient Computing"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="https://i.pinimg.com/originals/f0/7a/cc/f07acc6e16730620ec49ddb5b1131e7f.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"yellow"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {"  "}
                    <Heading as="span" color="blue">
                      IoT
                    </Heading>

                    {" Specialization "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      The Internet of things (IoT) describes physical objects
                      (or groups of such objects) with sensors, processing
                      ability, software and other technologies that connect and
                      exchange data with other devices and systems over the
                      Internet or other communications networks. Internet of
                      things has been considered a misnomer because devices do
                      not need to be connected to the public internet, they only
                      need to be connected to a network, and be individually
                      addressable.
                    </Text>
                  </RevealWrapper>
                </Box>
                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                >
                  <Image
                    src={png83}
                    alt="IOT"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="https://i.pinimg.com/originals/f0/7a/cc/f07acc6e16730620ec49ddb5b1131e7f.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"yellow"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {"  "}
                    <Heading as="span" color="yellow">
                      Genomics
                    </Heading>

                    {"  "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      Genomics is an interdisciplinary field of biology focusing
                      on the structure, function, evolution, mapping, and
                      editing of genomes. A genome is an organism&apos;s
                      complete set of DNA, including all of its genes as well as
                      its hierarchical, three-dimensional structural
                      configuration. In contrast to genetics, which refers to
                      the study of individual genes and their roles in
                      inheritance, genomics aims at the collective
                      characterization and quantification of all of an
                      organism&apos;s genes, their interrelations and influence
                      on the organism. Genes may direct the production of
                      proteins with the assistance of enzymes and messenger
                      molecules. In turn, proteins make up body structures such
                      as organs and tissues as well as control chemical
                      reactions and carry signals between cells. Genomics also
                      involves the sequencing and analysis of genomes through
                      uses of high throughput DNA sequencing and bioinformatics
                      to assemble and analyze the function and structure of
                      entire genomes. Advances in genomics have triggered a
                      revolution in discovery-based research and systems biology
                      to facilitate understanding of even the most complex
                      biological systems such as the brain.
                    </Text>
                  </RevealWrapper>
                </Box>
                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                >
                  <Image
                    src={png84}
                    alt="Genomics"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20Z38NRLjlduoGWOkqWDHO-KpF9V3HuwGyA&usqp=CAU"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"yellow"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {" Bio "}
                    <Heading as="span" color="blue">
                      Informatics
                    </Heading>

                    {"  "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      Bioinformatics is an interdisciplinary field that develops
                      methods and software tools for understanding biological
                      data, in particular when the data sets are large and
                      complex. As an interdisciplinary field of science,
                      bioinformatics combines biology, chemistry, physics,
                      computer science, information engineering, mathematics and
                      statistics to analyze and interpret the biological data.
                      Bioinformatics has been used for in silico analyses of
                      biological queries using computational and statistical
                      techniques.
                    </Text>
                  </RevealWrapper>
                </Box>
                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                >
                  <Image
                    src={png85}
                    alt="BioInformatics"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="data:image/jpeg;base64,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"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"yellow"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {" Network "}
                    <Heading as="span" color="blue">
                      Programmibility
                    </Heading>

                    {"  "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      Network programmability is the use of software to deploy,
                      manage, and troubleshoot network elements. A programmable
                      network is driven by an intelligent software stack that
                      can take action based on business requests or network
                      events. Let&apos;s discuss how network programmability can
                      help communication service providers adapt to new trends
                      including internet of things (IoT), 5G and edge computing.
                    </Text>
                  </RevealWrapper>
                </Box>
                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                 
                              >
                  <Image
                    src={png86}
                    alt="Network Programmibility"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
        <Container
          mt="15px"
          bgImage="https://t3.ftcdn.net/jpg/04/90/58/18/360_F_490581855_hJlOGEIskZjxOqOJ1vEFJNRJ4d0oHAm0.jpg"
          bgAttachment={"fixed"}
          bgSize="cover"
          maxW={2000}
        >
          <Box>
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <SimpleGrid columns={[1,2]}  spacing="5">
                <Box>
                  <Heading
                    textColor={"yellow"}
                    textDecoration={"underline"}
                    textAlign="center"
                  >
                    {" Automation "}
                    <Heading as="span" color="blue">
                      Specialization
                    </Heading>

                    {"  "}
                  </Heading>
                  <RevealWrapper
                    origin="left"
                    delay={200}
                    duration={1000}
                    distance="500px"
                    reset={true}
                  >
                    <Text
                      mt="25px"
                      mb={"20px"}
                       px="10px"
                      color={"white"}
                      textAlign="justify"
                    >
                      Automation describes a wide range of technologies that
                      reduce human intervention in processes, namely by
                      predetermining decision criteria, subprocess
                      relationships, and related actions, as well as embodying
                      those predeterminations in machines. Automation has been
                      achieved by various means including mechanical, hydraulic,
                      pneumatic, electrical, electronic devices, and computers,
                      usually in combination. Complicated systems, such as
                      modern factories, airplanes, and ships typically use
                      combinations of all of these techniques. The benefit of
                      automation includes labor savings, reducing waste, savings
                      in electricity costs, savings in material costs, and
                      improvements to quality, accuracy, and precision.
                    </Text>
                  </RevealWrapper>
                </Box>
                <Box
                  mt="60px"
                  flexBasis="50%"
                  marginBottom="5rem"
                 
                >
                  <Image
                    src={png87}
                    alt="Automation Specilization"
                 
                  
                  ></Image>
                </Box>
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
