import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import isExternal from 'is-url-external';

const propTypes = {
    to: PropTypes.string.isRequired
};

export default class LinkExt extends Component {
    render() {
        return isExternal(this.props.to) ? <a
            href={this.props.to}
            {...this.props}
            /> : <Link {...this.props} />
    }
}

LinkExt.propTypes = propTypes;