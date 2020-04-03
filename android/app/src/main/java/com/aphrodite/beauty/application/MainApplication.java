package com.aphrodite.beauty.application;

import android.content.Context;

import androidx.multidex.MultiDex;

import com.aphrodite.beauty.application.base.BaseApplication;
import com.facebook.soloader.SoLoader;

/**
 * Created by Aphrodite on 20-4-2
 */
public class MainApplication extends BaseApplication {
    private static MainApplication sApplication;

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(base);
    }

    @Override
    protected void initSystem() {
        sApplication = this;

        SoLoader.init(this, false);
    }

    public static MainApplication getInstance() {
        return sApplication;
    }

}
