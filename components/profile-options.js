import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
  } from '@chakra-ui/react';

import { ArrowRightIcon } from '@chakra-ui/icons'
import { Menu } from './icons';

import { logout } from "../firebase/firebase";



  export default function ProfileOptions() {
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label="More server options"
              icon={<Menu h={5}/>}
              variant="solid"
              w="fit-content"
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<ArrowRightIcon h={5} />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Profile
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<ArrowRightIcon h={5}/>}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Future Option 1
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<ArrowRightIcon h={5}/>}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Future Option 2
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<ArrowRightIcon h={5}/>}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Future Option 3
                </Button>
                <Button
                  onClick={logout}
                  w="194px"
                  variant="ghost"
                  rightIcon={<ArrowRightIcon h={5}/>}
                  justifyContent="space-between"
                  fontWeight="normal"
                  colorScheme="red"
                  fontSize="sm">
                  Logout
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }