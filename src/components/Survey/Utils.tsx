import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

export function createId(value: string) {
    var crypto = require('crypto');
    var hash = crypto.createHash('md5').update(value).digest('hex');
    return hash
}

export function FormElementClassifier(element: any, handleInputChange: any = () => { }) {

    if (element.answerType === 'RADIO' || element.answerType === 'CHECK_BOX') {
        let options = []
        if (element.hasOwnProperty('choices')) {
            options = element.choices.split(',')
        }
        return (
            <React.Fragment>
                <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
                <Col sm={10}>
                    {options.map((tag: any, index: any) => {
                        return (
                            <FormGroup check key={index}>
                                <Input type={'radio'} name={element.questionText} value={tag} onChange={handleInputChange} />{' '}<span>{tag}</span>
                            </FormGroup>
                        )
                    })}
                </Col>
            </React.Fragment>
        )
    }
    else if (element.answerType === 'SINGLE_LINE_INPUT' || element.answerType === 'MULTIPLE_LINE_INPUT') {
        return (
            <React.Fragment>
                <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
                <Input type={element.answerType === 'SINGLE_LINE_INPUT' ? 'text' : 'textarea'}
                    name={element.questionText} id={element.id} placeholder={element.placeholder}
                    onChange={handleInputChange} />
            </React.Fragment>
        )
    }
    else if (element.answerType === 'FILEUPLOAD') {
        return (
            <React.Fragment>
                <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
                <Input type={'file'} name={element.questionText} id={element.id} placeholder={element.placeholder} />
            </React.Fragment>
        )
    }
    else if (element.answerType === 'SELECT') {
        let options = []
        if (element.hasOwnProperty('choices')) {
            options = element.choices.split(',')
        }
        return (
            <React.Fragment>
                <Label className='fieldLabel' for={element.id}>{element.questionText}</Label>
                <Input type={'select'} name={element.questionText} id={element.id} onChange={handleInputChange}>
                    <option label=" "></option>
                    {options.map((tag: any, index: any) => {
                        return (
                            <option value={tag} key={index}>{tag}</option>
                        )
                    })}
                </Input>
            </React.Fragment>
        )
    }
}