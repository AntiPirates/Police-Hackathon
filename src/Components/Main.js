import React, { useState, useRef } from 'react';
// import { Container, Grid, Typography } from '@material-ui/core';
import { CContainer, CFormCheck } from '@coreui/react';
import { Box, Center, RadioGroup, Radio, Stack, Image, Badge, SimpleGrid, HStack, GridItem, Grid, VStack, StackDivider, 
    Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex, Icon, Accordion, AccordionItem, 
    AccordionButton, AccordionIcon, AccordionPanel, Button,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, 
    ModalBody, ModalCloseButton, useDisclosure, Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import { MdSettings, MdStar, MdTrain } from 'react-icons/md'
import { Config } from "../Config.js";
import map from '../images/Map1.jpg';
import stats from '../images/stats.png';
import VirusTotal from './VirusTotal.js';
import SuspiciousDownloads from './SuspiciousDownloads.js';
import DeceptiveCalls from './DeceptiveCalls.js';
import { Route, NavLink, Link} from "react-router-dom";
import www from '../images/www.jpg';
import gps from '../images/playstore.jpg';
import apstr from '../images/applestore.png';
import MapChart from "./MapChart";
import jsPDF from 'jspdf';
import ReactToPrint from "react-to-print";

const Main = () => {
    let [ contacts, setContacts ] = useState(Config.phoneNumbers);
    let [ showStats, setShowStats ] = useState(false);
    const [content, setContent] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let [ isAutomatedSchedule, setIsAutomatedSchedule ] = useState(false);
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
        <Grid
        templateAreas={`"header header header"
        "traps stats schedule"
        "traps geolocation generateReport"`}
        gridTemplateRows={'50px 190px 650px'}
        gridTemplateColumns={'300px 520px 1fr'}
        h='200px'
        gap='6'
        color='blackAlpha.700'
        fontWeight='bold'
        padding={2}
        >
            <GridItem pl={2}  area='header'>
            <Text textAlign={['left']} fontSize={50}> Vanchan-e </Text>
            </GridItem>
            <GridItem pl={2} bg='white' area='stats'>
                <Text textAlign={['left']} fontSize={20}> Stats </Text>
                <VStack
                    // divider={<StackDivider borderColor='gray.200' />}
                    spacing={1}
                    align='stretch'
                    >
                    <Box h='10px' w='500px' bg='white'>
                    </Box>
                    <Box h='40px' w='500px' bg='gray.100'>
                        <HStack>
                            <Box h='40px' w='100px' bg='#8a1a1a'>
                                <NavLink to="/deceptivecalls" target={'_blank'}><Text textAlign={['left', 'center']} color='white'> {Config.deceptivePhoneCalls} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' >
                                <Text textAlign={['left']}> Deceptive phone calls </Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='40px' w='500px' bg='gray.100'>
                        <HStack>
                            <Box h='40px' w='100px' bg='#918316'>
                            <NavLink to="/suspiciousdownloads" target={'_blank'}><Text textAlign={['left', 'center']} color='white' > {Config.suspiciousDownloads} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' bg='gray.100'>
                                <Text textAlign={['left']}> Contains suspicious download links </Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='40px' w='500px' bg='gray.100'>
                        <HStack>
                            <Box h='40px' w='100px' bg='#0998e6'>
                            <NavLink to="/virustotal" target={'_blank'}><Text textAlign={['left', 'center']} color='white'> {Config.failedVirustotal} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' bg='gray.100'>
                                <Text textAlign={['left']}> Failed virustotal test </Text>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem pl={2} bg='white' area='traps'>
                <Text textAlign={['left']} fontSize={20}> Decoys </Text>
                <Box h='10px'  bg='white'>
                </Box>
                <VStack
                    // divider={<StackDivider borderColor='gray.200' />}
                    spacing={1}
                    align='stretch'
                    alignItems={'center'}
                    >
                        <TableContainer>
                            <Table variant='simple'>
                            <TableCaption>List of the fraudulents</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Platforms</Th>
                                    <Th>Number of hits</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {/* {Config.trapDetails.map(currentTrap => {
                                    return( 
                                        <Tr>
                                            <Td><Image src={www}/></Td>
                                            <Td>{currentTrap.freq}</Td>
                                        </Tr>
                                        )
                                    })} */}
                                    <Tr>
                                        <Td><Image src={gps}/></Td>
                                        <Td>{Config.trapDetails[1].freq}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Image src={apstr}/></Td>
                                        <Td>{Config.trapDetails[2].freq}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Image src={www}/></Td>
                                        <Td>{Config.trapDetails[0].freq}</Td>
                                    </Tr>
                            </Tbody>
                            </Table>
                        </TableContainer>
                </VStack>
            </GridItem>
            <GridItem bg='white' pl={2} area='schedule'>
            <Text textAlign={['left']} fontSize={20}> Scanning process </Text>
            <Box h="10px"></Box>
            <Center>
            <RadioGroup defaultValue='2'>
                <Stack spacing={4} direction='row'>
                    <Box h={"35px"} w={"400px"}borderWidth={"2px"}>
                        <Center>
                            <Radio value='2' onClick={()=>{setIsAutomatedSchedule(false)}}>
                            Schduled Scan
                            </Radio>
                        </Center>
                    </Box>
                    <Box h={"35px"} w={"400px"}borderWidth={"2px"}>
                        <Center>
                            <Radio value='1' onClick={()=>{setIsAutomatedSchedule(true)}}>
                            Automated Scan
                            </Radio>
                        </Center>
                    </Box>
                </Stack>
            </RadioGroup>
            </Center>
            <Box h="8px"></Box>
            <Center>
                <Box h="100px" w="820px" bg="gray.100">
                    {isAutomatedSchedule === true && <Center>
                        <Text textAlign={['left']} fontSize={15} fontWeight="medium"> In automatic scheduling, the scan begins based on threat frequency when alerted by security ecosystem. </Text>
                    </Center>}
                    {isAutomatedSchedule !== true && <Center>
                        <Text textAlign={['left']} fontSize={15} fontWeight="medium"> {`Run every: `}  </Text>
                        <Editable defaultValue={` 24 `}onClick={(value) => {
                            Config.scheduleTime = value;
                            console.log(Config.scheduleTime);
                        }}>
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                        <Text textAlign={['left']} fontSize={15} fontWeight="medium"> hrs  </Text>
                    </Center>}
                </Box>
            </Center>
            </GridItem>
            <GridItem bg='white' pl={2} area='generateReport'>
                <Text textAlign={['left']} fontSize={20}> Generate report </Text>
                <Box h={"100px"}></Box>
                <VStack spacing={"40px"}>
                <Center>
                    <Button size="lg" colorScheme={"teal"} w="800px" h={"60px"} onClick={handlePrint}>Download Report</Button>
                </Center>
                <Center>
                    <Button size="lg" colorScheme={"teal"} w="800px" h={"60px"}>Generate and mail report</Button>
                </Center>
                </VStack>
            </GridItem>
            <GridItem bg='white' pl={2} area='geolocation'>
                <Text textAlign={['left']} fontSize={20}> Geolocation </Text>
                <Image src={map} alt={'India map'} h='500px'/>
                {/* <div>
                    <MapChart setTooltipContent={setContent} />
                </div> */}
            </GridItem>
        </Grid>

        <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Statistics of all the detected apps</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignContent={"center"}>
          <Image src={stats} alt={'Statistics of all the detected apps'} h='500px'/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
        );
  };

export default Main;
