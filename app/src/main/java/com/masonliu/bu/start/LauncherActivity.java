package com.masonliu.bu.start;

import android.app.Activity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;

import com.masonliu.base.SharedPre;
import com.masonliu.lib_weex.ui.WeexPageActivity;
import com.masonliu.lib_weex.util.WeexUtil;
import com.masonliu.weex_container_demo.BuildConfig;
import com.masonliu.weex_container_demo.R;
import com.taobao.weex.WXSDKEngine;


public class LauncherActivity extends Activity {
    private static final String DEFAULT_VALUE = "https://gitee.com/masonliu/MockData/raw/master/WeexHomeView.js";
    View view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onCreate(savedInstanceState);
        view = View.inflate(this, R.layout.activity_main, null);
        setContentView(view);
        EditText editText = findViewById(R.id.hostEditText);
        editText.setText(SharedPre.getString("URL", DEFAULT_VALUE));
        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void afterTextChanged(Editable editable) {
                SharedPre.set("URL", editable.toString());
            }
        });


//        WeexUtil.initDebugEnvironment(true,BuildConfig.BUILD_IP);
//        WXSDKEngine.reload();
    }


    public void open(View view) {

        //WeexUtil.initDebugEnvironment(true, BuildConfig.BUILD_IP);

        WeexPageActivity.startFrom(this,
                //"file://local/weex/WeexHomeView.js",
                SharedPre.getString("URL", DEFAULT_VALUE),
                "WeexAboutView", null);
    }
}
