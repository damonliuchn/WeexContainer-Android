package com.masonliu.lib_weex.manager;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.widget.ImageView;

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

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class WeexImageLoaderManager {
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
}
