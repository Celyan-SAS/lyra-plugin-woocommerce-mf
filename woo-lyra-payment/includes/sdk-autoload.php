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

spl_autoload_register('lyraSdkAutoload', true, false);

function lyraSdkAutoload($className)
{
    if (empty($className) || strpos($className, 'Lyranetwork\\Lyra\\Sdk\\') !== 0) {
        // Not Lyra SDK classes.
        return;
    }

    $className = str_replace('\\', DIRECTORY_SEPARATOR, $className);

    $classPath = WP_PLUGIN_DIR . DIRECTORY_SEPARATOR . 'woo-lyra-payment' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR . $className . '.php';
    if (file_exists($classPath) && is_file($classPath)) {
        include_once $classPath;
    }
}