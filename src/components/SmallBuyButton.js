import React from 'react';
import _ from 'lodash';

import {getPageByFilePath, withPrefix} from '../utils';

export default class SmallBuyButton extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        let component = _.get(this.props, 'component', null);
        return (
<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="ZSDTRD33NGT2U">
<input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne">
<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
</form>

        );
    }
}
