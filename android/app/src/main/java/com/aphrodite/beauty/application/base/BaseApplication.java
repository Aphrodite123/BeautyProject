package com.aphrodite.beauty.application.base;

import android.app.Application;

/**
 * Created by Aphrodite on 20-4-2
 */
public abstract class BaseApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        initSystem();
    }

    protected abstract void initSystem();

}
