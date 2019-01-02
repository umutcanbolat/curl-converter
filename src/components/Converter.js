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
            convertedCurl: "",
            method: "get",
            headers: [],
            data: [],
            url: ""
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
    
    parseCurl(){
        var args = stringArgv(this.state.curl);
    }

    validateCurl(){
        try {
            var args = stringArgv(this.state.curl);
            if(args[0] != 'curl'){
                return false;
            }
    
            let i=1, hasUrl=false;
            let headers = [];
            let method = "GET";
            let data = [];
    
            while(i < args.length){
                // if args[i] is an option
                if(args[i].startsWith('-')){
                    // if args[i] has a parameter
                    if(i+1 < args.length){
                        switch(args[i]){
                            case '-H':
                                headers.push(args[i+1]);
                                i+=2;
                                continue;
                            case '--data':
                            case '-d':
                                method = 'POST';
                                data.push(args[i+1]);
                                i+=2;
                                continue;
                            case '-X':
                                method = args[i+1];
                                i+=2;
                                continue;
                            default:
                                break;
                        }
                    }
                }else if(/^[a-z0-9]+$/i.test(args[i].charAt(0))){
                    if(hasUrl==false){
                        this.setState({
                            url: args[i]
                        });
                        hasUrl = true;
                        i++;
                        continue;
                    }
                    
                }
    
                i++;
            }
    
            if(!hasUrl){
                return false;
            }
    
            this.setState({
                headers: headers,
                method: method,
                data: data
            }, () => {
                console.log(this.state.headers);
                console.log(this.state.url);
                console.log(this.state.method);
                console.log(this.state.data);
            });
    
            
            return true;
        }catch(e){
            return false;
        }
        
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