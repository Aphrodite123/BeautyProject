package com.aphrodite.beauty.view.base;

import android.os.Bundle;
import android.os.Handler;
import android.view.ViewGroup;

import androidx.annotation.Nullable;

import com.aphrodite.beauty.BuildConfig;
import com.aphrodite.beauty.application.MainApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by Aphrodite on 20-4-2
 */
public abstract class BaseRnActivity extends BaseActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        configRn();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (null != mReactInstanceManager) {
            mReactInstanceManager.onHostResume(this);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (null != mReactInstanceManager) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (null != mReactInstanceManager) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    private void configRn() {
        mReactRootView = new ReactRootView(this);

        ReactInstanceManagerBuilder builder = ReactInstanceManager.builder()
                .setApplication(MainApplication.getInstance())
                .setBundleAssetName("index.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.IS_DEBUG)
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE);
        mReactInstanceManager = builder.build();

        mReactRootView.startReactApplication(mReactInstanceManager, getModuleName(), null);
        initView(mReactRootView);
    }

    protected abstract String getModuleName();

    protected abstract void initView(ReactRootView reactRootView);

}
