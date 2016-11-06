import React, {Component} from 'react';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, text, onChange, defaultChecked} = this.props;

        return (
            <label className="checkbox pull-right">
                <input type="checkbox" value={value} onChange={onChange} defaultChecked={defaultChecked}/>{text}
            </label>
        );
    }
};
