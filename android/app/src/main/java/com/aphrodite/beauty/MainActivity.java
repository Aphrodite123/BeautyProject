package com.aphrodite.beauty;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.aphrodite.beauty.view.base.BaseRnActivity;
import com.facebook.react.ReactRootView;

import butterknife.BindView;

public class MainActivity extends BaseRnActivity {
    @BindView(R.id.main_root)
    LinearLayout mRoot;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected int getViewId() {
        return R.layout.activity_main;
    }

    @Override
    protected void initView() {

    }

    @Override
    protected void initData() {

    }

    @Override
    protected void initListener() {

    }

    @Override
    protected String getModuleName() {
        return "BeautyProject";
    }

    @Override
    protected void initView(ReactRootView reactRootView) {
        if (null == mRoot) {
            return;
        }

        mRoot.removeAllViews();
        mRoot.addView(reactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
