import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'; 
import emailjs from 'emailjs-com';
import './ContactPage.css';
 

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title,
            name: '',
            email: '',
            subject: '',
            message: ''
        } 

        this.sendEmail = this.sendEmail.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    
    
        sendEmail(e) {
            e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
            const { name, email, subject, message } = this.state;

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Tria Bagus',
                from_subject: subject,
                message_html: message,
              };

            emailjs.send(
                process.env.REACT_APP_SERVICE_ID_EMAILJS, process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS)
                .then((result) => {
                this.resetForm();
                alert('Your message has been sent successfully. We will contact you soon.');
                  //window.location.reload()
                  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
              }, (error) => {
                alert('Your message is error, wait a minute');
                  console.log(error.text);
              });
        };

        resetForm() {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
              });
        }
        
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
        }

        render() {  
    
        const { name, email, subject, message  } = this.state;

        return ( 
            <div>
                {this.state.title} 
                <Form   onSubmit={this.sendEmail}>
                    <Form.Row>
                        <Form.Group controlId="formGridName" className="col-sm-12 col-md-6">  
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6"> 
                            <Form.Control
                                type="email"
                                placeholder="email@gmail.com"
                                name="email" 
                                value={email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row> 

                    <Form.Group controlId="formGridSubject"> 
                        <Form.Control
                            type="text"
                            placeholder="What is the subject?"
                            name="subject"
                            value={subject}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.message"> 
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={this.handleChange}
                        />
                    </Form.Group> 

                    <Button variant="primary" type="submit" value="send">
                        Send
                    </Button>
                </Form>
            </div>
        );
    }
}
 
export default ContactPage;
