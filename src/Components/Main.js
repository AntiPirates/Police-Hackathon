import React, { useState } from 'react';
// import { Container, Grid, Typography } from '@material-ui/core';
import { CContainer, CFormCheck } from '@coreui/react';
import { Box, Image, Badge, SimpleGrid, HStack, GridItem, Grid, VStack, StackDivider, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex, Icon, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { MdSettings, MdStar, MdTrain } from 'react-icons/md'
import { Config } from "../Config.js";
import map from '../images/Map1.jpg';
import stats from '../images/stats.png';
import VirusTotal from './VirusTotal.js';
import SuspiciousDownloads from './SuspiciousDownloads.js';
import DeceptiveCalls from './DeceptiveCalls.js';
import { Route, NavLink} from "react-router-dom";

const Main = () => {
    let [ contacts, setContacts ] = useState(Config.phoneNumbers);
    let [ showStats, setShowStats ] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
      
    return (
        <>
        <Grid
        templateAreas={`"header header header"
        "traps stats ratingsAndReviews"
        "traps geolocation ratingsAndReviews"`}
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
                                <NavLink to="/deceptivecalls"><Text textAlign={['left', 'center']} color='white'> {Config.deceptivePhoneCalls} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' >
                                <Text textAlign={['left']}> Deceptive phone calls </Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='40px' w='500px' bg='gray.100'>
                        <HStack>
                            <Box h='40px' w='100px' bg='#918316'>
                            <NavLink to="/suspiciousdownloads"><Text textAlign={['left', 'center']} color='white'> {Config.suspiciousDownloads} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' bg='gray.100'>
                                <Text textAlign={['left']}> Contains suspicious download links </Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='40px' w='500px' bg='gray.100'>
                        <HStack>
                            <Box h='40px' w='100px' bg='#0998e6'>
                            <NavLink to="/virustotal"><Text textAlign={['left', 'center']} color='white'> {Config.failedVirustotal} </Text></NavLink>
                            </Box>
                            <Box h='40px' w='400px' bg='gray.100'>
                                <Text textAlign={['left']}> Failed virustotal test </Text>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </GridItem>
            <GridItem pl={2} bg='white' area='traps'>
                <Text textAlign={['left']} fontSize={20}> Traps </Text>
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
                            <TableCaption>Contact list of the fraudulents</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Phone numbers</Th>
                                    <Th>Frequency</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {contacts.map(currentContact => {
                                    return( 
                                        <Tr>
                                            <Td>{currentContact.contact}</Td>
                                            <Td>{currentContact.freq}</Td>
                                        </Tr>
                                        )
                                    })}
                            </Tbody>
                            </Table>
                        </TableContainer>
                </VStack>
            </GridItem>
            <GridItem bg='white' pl={2} area='ratingsAndReviews' overflowY={'scroll'} overflowX={'hidden'}>
                <HStack>
                    <Box w='850px'>
                        <Text textAlign={['left']} fontSize={20}> Ratings and reviews </Text>
                    </Box>
                    <Button colorScheme={'blue'} size='xs' onClick={onOpen}>Show complete stats</Button>
                </HStack>
                <Box h='10px' w='500px' bg='white'>
                </Box>
                {Config.failedVirusTotalApps.map(currentApp => {
                    let fraudColor = '';
                    let fraudMessage = "";
                    if(currentApp.isFraud === 'yes') {
                        fraudColor = 'red';
                        fraudMessage = "Suspicious";
                    } else if(currentApp.isFraud === 'not sure') {
                        fraudColor = 'yellow';
                        fraudMessage = "Cannot say";
                    } else {
                        fraudMessage = "Not Suspicious";
                        fraudColor = 'teal';
                    }

                    // if(currentApp.isFraud === 'Not Suspicious') {
                    //     // Do not display anything
                    // } else {
                        return (
                            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' w={'1000px'}>
                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme={fraudColor}>
                                        Detected: {fraudMessage}
                                    </Badge>
                                </Box>
                                <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                                >
                                Application name: {currentApp.name}
                                </Box>
                                <Box display='flex' mt='2' alignItems='center'>
                                    <Box>Ratings: </Box>
                                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                        {currentApp.rating}
                                        <Icon as={MdStar}/>
                                        <Icon as={MdStar}/>
                                        <Icon as={MdStar}/>
                                    </Box>
                                </Box>
                                <Accordion  allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                                            Reviews
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} fontWeight='medium'>
                                            {currentApp.reviews.map(review => {
                                                return (
                                                    <Box>
                                                        {review}
                                                    </Box>
                                                )
                                            })}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                                
                            </Box>
                            </Box>
                            
                        )
                    // }
                    
                })}
            </GridItem>
            <GridItem bg='white' pl={2} area='geolocation'>
                <Text textAlign={['left']} fontSize={20}> Geolocation </Text>
                <Image src={map} alt={'India map'} h='500px'/>
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
