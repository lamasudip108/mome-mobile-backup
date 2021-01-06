package com.momemobileapp;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import com.facebook.react.modules.i18nmanager.I18nUtil;

import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "momeMobileApp";
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

       I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
       sharedI18nUtilInstance.allowRTL(getApplicationContext(), true);

       RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
    }
}
