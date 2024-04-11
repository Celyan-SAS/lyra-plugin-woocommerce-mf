/**
 * Copyright © Lyra Network and contributors.
 * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.
 *
 * @author    Lyra Network (https://www.lyra.com/)
 * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)
 * @copyright Lyra Network and contributors
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)
 */

/**
 * External dependencies.
 */
import { registerPaymentMethod } from '@woocommerce/blocks-registry';

/**
 * Internal dependencies.
 */
import { getLyraServerData } from './lyra-utils';

const PAYMENT_METHOD_NAME = 'lyramulti';
var lyra_data = getLyraServerData(PAYMENT_METHOD_NAME);

const Content = () => {
    var fields = <ul dangerouslySetInnerHTML={{__html: lyra_data?.payment_fields}} />;
    jQuery('.wc-block-components-checkout-place-order-button').on('click', lyra_get_selected_option(['lyramulti_option', 'lyramulti_card_type']));

    return (
        <div>
            { lyra_data?.description }
            { fields }
        </div>
    );
};

const Label = () => {
    const styles = {
        divWidth: {
            width: '95%'
        },
        imgFloat: {
            float: 'right'
        }
    }

    return (
        <div style={ styles.divWidth }>
            <span>{ lyra_data?.title}</span>
            <img
                style={ styles.imgFloat }
                src={ lyra_data?.logo_url }
                alt={ lyra_data?.title }
            />
        </div>
    );
};

registerPaymentMethod({
    name: PAYMENT_METHOD_NAME,
    label: <Label />,
    ariaLabel: 'Lyra payment method',
    canMakePayment: () => true,
    content: <Content />,
    edit: <Content />,
    supports: {
        features: lyra_data?.supports ?? [],
    },
});
