package com.aphrodite.beauty.config.base;

/**
 * Created by Aphrodite on 20-4-2
 */
public class BaseConfig {
    public static final String PACKAGE_NAME = Package.class.getName();

    /**
     * RN包本地根目录
     */
    public static final String RN_BUNDLE_ROOT = "react-native-bundle/";

    /**
     * RN包本地 assets 目录
     */
    public static final String RN_BUNDLE_ASSETS = "assets/";

    /**
     * RN包本地路径
     */
    public static final String RN_BUNDLE_PATH = RN_BUNDLE_ROOT + RN_BUNDLE_ASSETS + "index.bundle";

}
