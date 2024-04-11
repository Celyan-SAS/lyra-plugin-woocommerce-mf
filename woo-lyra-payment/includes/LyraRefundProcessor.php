<?php

/**
 * Copyright © Lyra Network and contributors.
 * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.
 *
 * @author    Lyra Network (https://www.lyra.com/)
 * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)
 * @copyright Lyra Network and contributors
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)
 */

use Lyranetwork\Lyra\Sdk\Refund\Processor as RefundProcessor;

class LyraRefundProcessor implements RefundProcessor
{
    protected $logger;

    public function __construct()
    {
        $this->logger = new WC_Logger();
    }

    /**
     * Action to do in case of error during refund process.
     *
     */
    public function doOnError($errorCode, $message)
    {
        $msg = '<div class="inline error" style="text-align: left;"><p><strong>' . $message . '</strong></p></div>';
        set_transient('lyra_online_refund_result', $msg);
    }

    /**
     * Action to do after sucessful refund process.
     *
     */
    public function doOnSuccess($operationResponse, $operationType)
    {
        if ($operationType == 'frac_update') {
            $this->doOnError(-1, sprintf($this->translate('Refund of split payment is not supported. Please, consider making necessary changes in %1$s Back Office.'), 'Lyra Expert'));
        } else {
            $msg = '<div class="inline updated" style="text-align: left;"><p><strong>' . $this->translate('Online refund successfully completed') . '</strong></p></div>';
            set_transient('lyra_online_refund_result', $msg);
        }
    }

    /**
     * Action to do after failed refund process.
     *
     */
    public function doOnFailure($errorCode, $message)
    {
        $this->doOnError($errorCode, $message);
    }

    /**
     * Log informations.
     *
     */
    public function log($message, $level)
    {
        $general_settings = get_option('woocommerce_lyra_settings', null);
        $debug = is_array($general_settings) && isset($general_settings['debug']) && ($general_settings['debug'] == 'yes');

        if (! $debug) {
            return;
        }

        $this->logger->add('lyra', $message);
    }

    /**
     * Translate given message.
     *
     */
    public function translate($message)
    {
        return __($message, 'woo-lyra-payment');
    }
}
