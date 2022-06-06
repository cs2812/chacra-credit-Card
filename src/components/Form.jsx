import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import React from "react";
import {
	FaUserPlus,
	FaRegCreditCard,
	FaRegCalendarAlt,
	FaLock,
} from "react-icons/fa";

const Form = ({info,handleChange}) => {
    const {cardHolder, cardNumber,expMonth,expYear,cvc} = info;
	return (
		<Box w="40%" m="auto" mt="3%" color="rgb(246, 150, 182)">
			<Heading textAlign="left" my="5%">
				Payment Details
			</Heading>
			<FormControl>
				<FormLabel mt="3%">CARDHOLDER NAME</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<FaUserPlus color="rgb(246, 150, 182)" />}
					/>
					<Input
						type="text"
						placeholder="Enter here..."
						border="none"
						borderBottom="1px solid rgb(246, 150, 182)"
						borderRadius="none"
                        name="cardHolder"
                        value={cardHolder}
                        onChange={handleChange}
					/>
				</InputGroup>

				<FormLabel mt="3%">CARD NUMBER</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<FaRegCreditCard color="rgb(246, 150, 182)" />}
					/>
					<Input
						type="text"
						placeholder="Enter here..."
						border="none"
						borderBottom="1px solid rgb(246, 150, 182)"
						borderRadius="none"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={handleChange} 
					/>
				</InputGroup>

				<Flex gap="5%">
					{/* Expiry month */}
					<Flex direction="column" mt="3%">
						<FormLabel mt="3%">EXPIRY MONTH</FormLabel>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<FaRegCalendarAlt color="rgb(246, 150, 182)" />}
							/>
							<Input
								type="text"
								placeholder="Enter here..."
								border="none"
								borderBottom="1px solid rgb(246, 150, 182)"
								borderRadius="none"
                                name="expMonth"
                                value={expMonth}
                                onChange={handleChange}
							/>
						</InputGroup>
					</Flex>

					{/* Expiry year */}
					<Flex direction="column" mt="3%">
						<FormLabel mt="3%">EXPIRY YEAR</FormLabel>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<FaRegCalendarAlt color="rgb(246, 150, 182)" />}
							/>
							<Input
								type="text"
								placeholder="Enter here..."
								border="none"
								borderBottom="1px solid rgb(246, 150, 182)"
								borderRadius="none"
                                name="expYear"
                                value={expYear}
                                onChange={handleChange}
							/>
						</InputGroup>
					</Flex>

					{/* CVC */}
					<Flex direction="column" mt="3%">
						<FormLabel mt="3%">CVC</FormLabel>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<FaLock color="rgb(246, 150, 182)" />}
							/>
							<Input
								type="text"
								placeholder="Enter here..."
								border="none"
								borderBottom="1px solid rgb(246, 150, 182)"
								borderRadius="none"
                                name="cvc"
                                value={cvc}
                                onChange={handleChange}
							/>
						</InputGroup>
					</Flex>
				</Flex>
			</FormControl>

			<Flex direction="row" mt="5%" justifyContent="center">
				<Text fontSize="lg">Payment Amount:</Text>
				<Text fontSize='2xl' mt="-6px" ml="8px" color="rgb(246, 150, 182)">12,300 ₹</Text>
			</Flex>

            <Button bgColor="hotpink" color="white" mt="5%" ml="40%" width="150px" >Pay</Button>
		</Box>
	);
};

export default Form;
