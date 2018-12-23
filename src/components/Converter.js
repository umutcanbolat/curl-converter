import React, { Component } from 'react';
import { Grid, Segment, Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components'

export class Converter extends Component {

    render() {
        const StyledConverter = styled.div`
        margin-top: 100px;
        `


        return (
            <StyledConverter>
                <Grid columns={2} container divided stackable>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Form>
                                <TextArea placeholder='Paste your curl command here' style={{ height: 500 }} />
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Converted curl</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </StyledConverter>

        );
    }
}