import React, { Component } from 'react';
import styled from 'styled-components'

export class Footer extends Component {

    render() {
        const StyledFooter = styled.div`
        position: fixed;
   left: 0;
   bottom: 20px;
   width: 100%;
   text-align: center;
    `

        return (
            <StyledFooter>
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">{(new Date()).getFullYear()} - Designed and developed by <a href="https://github.com/umutcanbolat/">umutcanbolat</a>
                    </div>
                </footer>
            </StyledFooter>

        );
    }
}