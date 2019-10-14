import * as React from 'react'

import { Collapse, Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'
import './css/SurveyTemplate.css'
require('crypto');

export default class FieldSelectForm extends React.Component<any, any> {

    private defaultNewFieldData = {
        label: null,
        type: 'SINGLE_LINE_INPUT',
        placeholder: '',
        tags: [],
        tag: '',
        choices: []
    }

    constructor(props: any) {
        super(props)
        this.state = this.defaultNewFieldData

        this.cancel = this.cancel.bind(this)
        this.isInvalidLabel = this.isInvalidLabel.bind(this)
    }
    
    handleChangeInput(tag: any) {
        this.setState({tag})
      }

    handleChange(property: any, value: any) {
        if(property === 'tags') {
            let choices = this.state.choices
            choices.push({choiceValue: this.state.tag})
            this.setState({ choices, [property]: value })
        }
        else
        this.setState({ [property]: value })

    }

    isTagsEmpty() {
        return this.state.tags.length === 0
    }

    isInvalidLabel(strict: string = '') {
        const basicCheck = typeof this.state.label == typeof "" && this.state.label.length > 0
        return strict === 'strict' ? basicCheck : this.state.label === null || basicCheck
    }

    isOptionRequired() {
        return this.state.type === 'SELECT' || this.state.type === 'RADIO'
    }

    isPlaceHolderRequired() {
        return this.state.type === 'SINGLE_LINE_INPUT' || this.state.type === 'MULTIPLE_LINE_INPUT'
    }

    addNewField() {
        let fieldData: any = {
            questionText: this.state.label,
            answerType: this.state.type
        }

        if (this.isPlaceHolderRequired())
            fieldData.placeholder = this.state.placeholder
        if (this.isOptionRequired())
            fieldData.choices = this.state.choices
        this.setState({ ...this.defaultNewFieldData }, () => { this.props.addNewFieldControl(fieldData) })
    }

    cancel() {
        this.setState({ ...this.defaultNewFieldData }, () => { this.props.cancelControl() })
    }

    render() {
        const RequiredMessage = <FormFeedback>Required</FormFeedback>
        const labelInValid = !this.isInvalidLabel()
        const strictLabelInValid = !this.isInvalidLabel('strict')

        const optionInValid = this.isOptionRequired() && this.isTagsEmpty()
        const fieldInValid = strictLabelInValid || optionInValid
        return (
            <React.Fragment>
                <Modal isOpen={this.props.showForm} toggle={this.cancel}>
                    <ModalBody>
                        <div style={{ width: '100%', border: 'none' }}>
                            <Form>
                                <FormGroup>
                                    <Label for="fieldLabel" className='fieldLabel'>Question</Label>
                                    <Input autoFocus={true} type="textarea" name="label" id="fieldLabel"
                                        invalid={labelInValid}
                                        placeholder='Type a question'
                                        value={this.state.label != null ? this.state.label : ''}
                                        onChange={(event: any) => this.handleChange('label', event.target.value)} />
                                    {labelInValid && RequiredMessage}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fieldType" className='fieldLabel'>Answer Type</Label>
                                    <Input type="select" name="select" id="fieldType" onChange={(event: any) => this.handleChange('type', event.target.value)}>
                                        <option value='SINGLE_LINE_INPUT'>Single Line Input</option>
                                        <option value='MULTIPLE_LINE_INPUT'>Multiple Line Input</option>
                                        <option value='SELECT'>Select</option>
                                        <option value='RADIO'>Radio</option>
                                        <option value='FILEUPLOAD'>File Upload</option>
                                    </Input>
                                </FormGroup>
                                <Collapse isOpen={this.isPlaceHolderRequired()}>
                                    <FormGroup>
                                        <Label for="fieldPlaceholder" className='fieldLabel'>Placeholder</Label>
                                        <Input type="text" name="placeholder" id="fieldPlaceholder"
                                            placeholder='Type a placeholder'
                                            value={this.state.placeholder}
                                            onChange={(event: any) => this.handleChange('placeholder', event.target.value)} />
                                    </FormGroup>
                                </Collapse>
                                <FormGroup>
                                    <Collapse isOpen={this.isOptionRequired()}>
                                        <Label for="fieldOptions" className='fieldLabel'>Options</Label>
                                        <TagsInput 
                                            
                                            inputValue={this.state.tag}
                                            onChangeInput={this.handleChangeInput.bind(this)}
                                            maxTags={10}
                                            inputProps= {{placeholder: 'Add options...'}}
                                            onlyUnique={true}
                                            className={'react-tagsinput tagInput '.concat(optionInValid ? 'inValidInput ' : '')}
                                            value={this.state.tags}
                                            onChange={(value: any) => this.handleChange('tags', value)} />
                                    </Collapse>
                                </FormGroup>
                                {optionInValid && RequiredMessage}
                            </Form>
                            <ModalFooter>
                                <Button disabled={fieldInValid} color="primary" size="sm" onClick={this.addNewField.bind(this)}>Add Field</Button>
                                <Button color="secondary" size="sm" onClick={this.cancel.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}