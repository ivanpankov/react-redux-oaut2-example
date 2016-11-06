import React, {Component} from 'react';

export default class Text extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {addOnClass, name, placeholder, value, onChange} = this.props;

        return (
            <div className="input-group">
                <span className="input-group-addon"><i className={addOnClass}></i></span>
                <input type="text" className="form-control" name={name} placeholder={placeholder}
                       onChange={onChange} value={value} autoComplete="off"/>
            </div>
        );
    }
};
