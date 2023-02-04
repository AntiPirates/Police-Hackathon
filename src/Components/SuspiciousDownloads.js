import React from 'react';
import { Box, Image, Badge, SimpleGrid, HStack, GridItem, Grid, VStack, StackDivider, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex, Icon, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { MdSettings, MdStar, MdTrain } from 'react-icons/md'
import { Config } from "../Config.js";

function SuspiciousDownloads() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
         <Grid
            templateAreas={`"ratingsAndReviews"`}
            gridTemplateRows={'1fr'}
            gridTemplateColumns={'1fr'}
            h='200px'
            gap='6'
            color='blackAlpha.700'
            fontWeight='bold'
            padding={2}
            alignItems="center"
            w={"800px"}
        >
            <GridItem bg='white' pl={2} area='ratingsAndReviews' overflowY={'scroll'} overflowX={'hidden'}>
                <HStack>
                    <Box w='850px'>
                        <Text textAlign={['left']} fontSize={20}> Ratings and reviews </Text>
                    </Box>
                    <Button colorScheme={'blue'} size='xs' onClick={onOpen}>Show complete stats</Button>
                </HStack>
                <Box h='10px' w='500px' bg='white'>
                </Box>
                {Config.suspiciousDownloadApps.map(currentApp => {
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
            </Grid>
        </>
    )
}

export default SuspiciousDownloads;