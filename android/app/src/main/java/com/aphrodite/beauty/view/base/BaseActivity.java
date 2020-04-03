package com.aphrodite.beauty.view.base;

import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

/**
 * Created by Aphrodite on 20-4-2
 */
public abstract class BaseActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(getViewId());
        initView();
        initData();
        initListener();
    }

    protected abstract int getViewId();

    protected abstract void initView();

    protected abstract void initData();

    protected abstract void initListener();

}
