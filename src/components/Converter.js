import React, { Component } from 'react';
import { Grid, Segment, Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components'

var stringArgv = require('string-argv');

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
        this.validateCurl = this.validateCurl.bind(this);

    }

    inputChanged(e){
        e.preventDefault();
        this.setState({
            curl: e.target.value
        }, this.convertCurl);
    }

    convertCurl(){
        if(this.validateCurl()){
            this.setState({
                convertedCurl: this.state.curl
            });

        }else{
            this.setState({
                convertedCurl: "invalid curl"
            });
        }
        
    }

    validateCurl(){
        var args = stringArgv(this.state.curl);
        if(args[0] != 'curl'){
            return false;
        }

        var i=1, hasUrl=false;
        while(i < args.length){
            if(args[i] == '-H'){
                if(i+1 <= args.length-1){
                    
                    i+=2;
                    continue;
                }else{
                    // no header parameter found after option '-H'
                    return false;
                }
            }else if(/^[a-z0-9]+$/i.test(args[i].charAt(0))){
                hasUrl = true;
                i++;
                continue;
            }
            i++;
        }

        if(!hasUrl){
            return false;
        }

        console.log(args);
        console.log(args.length);
        return true;
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