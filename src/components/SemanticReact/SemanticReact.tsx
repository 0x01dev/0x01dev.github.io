import React, {useState, useEffect} from "react";

import 'semantic-ui-css/semantic.min.css';
import {Button, Form, Segment, Checkbox, Container} from 'semantic-ui-react';

const SemanticReact: React.FC = () => {
    return (
        <Container>
            <br/>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        </Container>
    );
}

export default SemanticReact;