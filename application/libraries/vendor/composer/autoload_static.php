<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1b185984f89454f9f5170e0de329547a
{
    public static $files = array (
        'a0edc8309cc5e1d60e3047b5df6b7052' => __DIR__ . '/..' . '/guzzlehttp/psr7/src/functions_include.php',
        'c964ee0ededf28c96ebd9db5099ef910' => __DIR__ . '/..' . '/guzzlehttp/promises/src/functions_include.php',
        '37a3dc5111fe8f707ab4c132ef1dbc62' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
        'decc78cc4436b1292c6c0d151b19445c' => __DIR__ . '/..' . '/phpseclib/phpseclib/phpseclib/bootstrap.php',
        '74ed299072414d276bb7568fe71d5b0c' => __DIR__ . '/..' . '/tinify/tinify/lib/Tinify.php',
        '9635627915aaea7a98d6d14d04ca5b56' => __DIR__ . '/..' . '/tinify/tinify/lib/Tinify/Exception.php',
    );

    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'phpseclib\\' => 10,
        ),
        'T' => 
        array (
            'Tinify\\' => 7,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Cache\\' => 10,
        ),
        'M' => 
        array (
            'Monolog\\' => 8,
        ),
        'G' => 
        array (
            'GuzzleHttp\\Psr7\\' => 16,
            'GuzzleHttp\\Promise\\' => 19,
            'GuzzleHttp\\' => 11,
            'Google\\Auth\\' => 12,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'phpseclib\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpseclib/phpseclib/phpseclib',
        ),
        'Tinify\\' => 
        array (
            0 => __DIR__ . '/..' . '/tinify/tinify/lib/Tinify',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Cache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/cache/src',
        ),
        'Monolog\\' => 
        array (
            0 => __DIR__ . '/..' . '/monolog/monolog/src/Monolog',
        ),
        'GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
        'Google\\Auth\\' => 
        array (
            0 => __DIR__ . '/..' . '/google/auth/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'G' => 
        array (
            'Google_Service_' => 
            array (
                0 => __DIR__ . '/..' . '/google/apiclient-services/src',
            ),
            'Google_' => 
            array (
                0 => __DIR__ . '/..' . '/google/apiclient/src',
            ),
        ),
    );

    public static $classMap = array (
        'Google_Service_Exception' => __DIR__ . '/..' . '/google/apiclient/src/Google/Service/Exception.php',
        'Google_Service_Resource' => __DIR__ . '/..' . '/google/apiclient/src/Google/Service/Resource.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1b185984f89454f9f5170e0de329547a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1b185984f89454f9f5170e0de329547a::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit1b185984f89454f9f5170e0de329547a::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit1b185984f89454f9f5170e0de329547a::$classMap;

        }, null, ClassLoader::class);
    }
}
