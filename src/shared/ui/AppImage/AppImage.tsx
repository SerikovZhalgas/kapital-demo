import { ImgHTMLAttributes, memo, ReactElement } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        fallback,
        errorFallback,
        alt = 'image',
        ...otherProps
    } = props;
    return (
        <img
            className={className}
            src={`${__IMAGE_API__}/img?file=${src}`}
            alt={alt}
            {...otherProps}
        />
    );
});
