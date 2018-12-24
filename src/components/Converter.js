import React, { Component } from 'react';
import { Grid, Segment, Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components'

const StyledConverter = styled.div`
    margin-top: 100px;
`;

export class Converter extends Component {

    constructor(props){
        super(props);
        this.state = {
            curl: "",
            convertedCurl: ""
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.convertCurl = this.convertCurl.bind(this);

    }

    inputChanged(e){
        e.preventDefault();
        this.setState({
            curl: e.target.value
        }, this.convertCurl);
    }

    convertCurl(){
        this.setState({
            convertedCurl: this.state.curl + "converted"
        });
    }



    render() {
        return (
            <StyledConverter>
                <Grid columns={2} container divided stackable>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Form>
                                <TextArea placeholder='Paste your curl command here' style={{ height: 500 }} onChange={this.inputChanged} value={this.state.curl} />
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>{this.state.convertedCurl}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </StyledConverter>

        );
    }
}