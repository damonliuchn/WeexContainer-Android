package com.masonliu.lib_weex.manager;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.text.TextUtils;
import android.widget.ImageView;

import com.masonliu.lib_weex.generated.R;
import com.nostra13.universalimageloader.cache.disc.DiskCache;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.nostra13.universalimageloader.core.assist.ImageSize;
import com.nostra13.universalimageloader.core.download.BaseImageDownloader;
import com.nostra13.universalimageloader.core.imageaware.ImageViewAware;
import com.nostra13.universalimageloader.core.listener.ImageLoadingListener;
import com.nostra13.universalimageloader.utils.DiskCacheUtils;
import com.nostra13.universalimageloader.utils.MemoryCacheUtils;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class WXImgLoaderManager {
    private static final boolean CACHE_IN_MEMORY = true;
    private static final boolean CACHE_ON_DISK = true;
    private static ImageLoader imageLoader;

    public static ImageLoader init(Context context) {
        if (imageLoader == null) {
            DisplayImageOptions defaultOptions = new DisplayImageOptions.Builder()
                    .cacheInMemory(CACHE_IN_MEMORY)
                    .cacheOnDisk(CACHE_ON_DISK)
                    .showImageOnLoading(android.R.color.white) // resource or drawable
                    .showImageForEmptyUri(android.R.color.white) // resource or drawable
                    .showImageOnFail(android.R.color.white) // resource or drawable
                    .build();
            ImageLoaderConfiguration config = new ImageLoaderConfiguration.Builder(context)
                    .defaultDisplayImageOptions(defaultOptions)
                    .imageDownloader(new BaseImageDownloader(context) {
                        protected InputStream getStreamFromOtherSource(String imageUri, Object extra) throws IOException {
                            if (imageUri.startsWith("android.resource://")) {
                                return context.getContentResolver().openInputStream(Uri.parse(imageUri));
                            }
                            return super.getStreamFromOtherSource(imageUri, extra);
                        }
                    })
                    .build();
            imageLoader = ImageLoader.getInstance();
            imageLoader.init(config);
        }
        return imageLoader;
    }

    static void loadImage(String uri, ImageLoadingListener listener) {
        checkIsInit();
        imageLoader.loadImage(uri, listener);
    }

    public static void displayImage(ImageView imageView, String uri, int defaultDrawable, int widthPx, int height) {
        checkIsInit();
        DisplayImageOptions options = new DisplayImageOptions.Builder()
                .cacheInMemory(CACHE_IN_MEMORY)
                .cacheOnDisk(CACHE_ON_DISK)
                .showImageOnLoading(defaultDrawable) // resource or drawable
                .showImageForEmptyUri(defaultDrawable) // resource or drawable
                .showImageOnFail(defaultDrawable) // resource or drawable
                .build();
        ImageSize imageSize = null;
        if (widthPx >= 0 || height >= 0) {
            imageSize = new ImageSize(widthPx, height);
        }
        imageLoader.displayImage(uri, new ImageViewAware(imageView), options, imageSize, null, null);
    }

    static void updateImageInUrl(String url, Bitmap bitmap) {
        checkIsInit();
        try {
            removeCache(url);
            DiskCache discCacheAware = imageLoader.getDiskCache();
            discCacheAware.save(url, bitmap);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void removeCache(String uri) {
        checkIsInit();
        DiskCacheUtils.removeFromCache(uri, imageLoader.getDiskCache());
        MemoryCacheUtils.removeFromCache(uri, imageLoader.getMemoryCache());
    }

    static File getDiscCacheDir() {
        File cacheDir = imageLoader.getDiskCache().getDirectory();
        return cacheDir;
    }

    static void checkIsInit() {
        if (imageLoader == null) {
            throw new IllegalStateException("Please init ImageLoaderUtil.init(Context context) in Application");
        }
    }

    public static class WXImgLoaderAdapter implements IWXImgLoaderAdapter {

        @Override
        public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
            WXSDKManager.getInstance().postOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (view == null || view.getLayoutParams() == null
                            || view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
                        return;
                    }
                    if (TextUtils.isEmpty(url)) {
                        view.setImageBitmap(null);
                        return;
                    }
                    /**
                     * image src接收格式为
                     1、file://xxx
                     2、http://xxx
                     3、//xxx     weex-ui中的图片地址是//开头的
                     当第三种时，控件会根据bundle是否是远程bundle来拼上http:或者file:
                     */
                    String temp = url.replace("file://", "http://");
                    WXImgLoaderManager.displayImage(view, temp, R.color.white, -1, -1);
                }
            }, 0);
        }
    }
}
