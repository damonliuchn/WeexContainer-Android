package com.masonliu.bu.start;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.Animation.AnimationListener;

import com.masonliu.lib_weex.ui.WeexPageActivity;
import com.masonliu.weex_container_demo.R;


public class LauncherActivity extends Activity {
    View view;
    private AlphaAnimation start_anima;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onCreate(savedInstanceState);
        view = View.inflate(this, R.layout.activity_main, null);
        setContentView(view);
        initView();
        initData();
    }

    private void initData() {
        int duration = 1000;
        start_anima = new AlphaAnimation(1.0f, 1.0f);
        start_anima.setDuration(duration);
        view.startAnimation(start_anima);
        start_anima.setAnimationListener(new AnimationListener() {

            @Override
            public void onAnimationStart(Animation animation) {
                // TODO Auto-generated method stub

            }

            @Override
            public void onAnimationRepeat(Animation animation) {
                // TODO Auto-generated method stub

            }

            @Override
            public void onAnimationEnd(Animation animation) {
                // TODO Auto-generated method stub
                redirectTo();
            }
        });
    }

    private void initView() {

    }

    private void redirectTo() {
        WeexPageActivity.startFrom(
                LauncherActivity.this,
                //"file://local/weex/main.js",
                "http://172.20.12.26:10004/dist/pages/main.js",
                null);
        finish();
    }
}
