import React from 'react';
import _ from 'lodash';

import {getPageByFilePath, withPrefix} from '../utils';

export default class SmallBuyButton extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        let component = _.get(this.props, 'component', null);
        return (
            <button className={component + '__item-buy button button--icon-only snipcart-add-item'}

            </button>
        );
    }
}
