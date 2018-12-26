import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import logo from '../logo.svg';

export class TopMenu extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' href='./' header>
                        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                        Curl Converter
                    </Menu.Item>
                    <Menu.Item as='a' href='./'>Home</Menu.Item>

                    <Dropdown item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item as='a' href='https://github.com/umutcanbolat/curl-converter' position='right'>GitHub Repo</Menu.Item>
                </Container>
            </Menu>
        );
    }
}
