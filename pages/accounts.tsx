import {Button, Container, Input, Text} from '@nextui-org/react';
import React from 'react';
import {AddUser} from '../components/accounts/add-user';
import {TableWrapper} from '../components/accounts/table';
import {DotsIcon} from '../components/icons/dots-icon';
import {InfoIcon} from '../components/icons/info-icon';
import {SettingsIcon} from '../components/icons/sidebar/settings-icon';
import {TrashIcon} from '../components/icons/trash-icon';
import {Flex} from '../components/styles/flex';

const accounts = () => {
   return (
      <Flex
         css={{
            'mt': '$10',
            'px': '$6',
            '@sm': {
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Text h3>All Accounts</Text>
         <Flex css={{gap: '$8'}} align={'center'} justify={'between'}>
            <Flex css={{gap: '$6'}} align={'center'}>
               <Input css={{width: '410px', maxW: '100%'}} />
               <SettingsIcon />
               <TrashIcon />
               <InfoIcon />
               <DotsIcon />
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}}>
               <AddUser />
               <Button auto shadow>
                  Import
               </Button>
            </Flex>
         </Flex>

         <TableWrapper />
      </Flex>
   );
};

export default accounts;