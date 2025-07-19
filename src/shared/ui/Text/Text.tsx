import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { Icon } from '../Icon';

export type TextVariant =
    | 'primary'
    | 'grey'
    | 'light-grey'
    | 'green'
    | 'inverted'
    | 'black';

export type TextAlign = 'right' | 'left' | 'center';
export type TextWeight = 'regular' | 'medium' | 'semi-bold' | 'bold';
export type TextLetterSpacing = 'small-space';

export type TextSize =
    | '8xs'
    | '7xs'
    | '6xs'
    | '5xs'
    | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl';

interface TextProps {
    className?: string;
    title?: string;
    text?: string | number;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    weight?: TextWeight;
    letterSpacing?: TextLetterSpacing;
    leftIcon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToClass: Record<TextSize, string> = {
    '8xs': 'size_8xs',
    '7xs': 'size_7xs',
    '6xs': 'size_6xs',
    '5xs': 'size_5xs',
    '4xs': 'size_4xs',
    '3xs': 'size_3xs',
    '2xs': 'size_2xs',
    xs: 'size_xs',
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
    xl: 'size_xl',
    '2xl': 'size_2xl',
    '3xl': 'size_3xl',
    '4xl': 'size_4xl',
    '5xl': 'size_5xl',
    '6xl': 'size_6xl',
    '7xl': 'size_7xl',
    '8xl': 'size_8xl',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    '8xs': 'h6',
    '7xs': 'h6',
    '6xs': 'h6',
    '5xs': 'h6',
    '4xs': 'h6',
    '3xs': 'h6',
    '2xs': 'h6',
    xs: 'h6',
    s: 'h5',
    m: 'h5',
    l: 'h4',
    xl: 'h4',
    '2xl': 'h4',
    '3xl': 'h4',
    '4xl': 'h4',
    '5xl': 'h3',
    '6xl': 'h3',
    '7xl': 'h2',
    '8xl': 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        weight = 'regular',
        letterSpacing = '',
        leftIcon,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const classes = [
        cls[variant],
        cls[align],
        cls[sizeClass],
        cls[weight],
        cls[letterSpacing],
        className,
    ];

    return (
        <div className={classNames(cls.Text, {}, classes)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && (
                <p className={cls.text}>
                    {leftIcon && (
                        <Icon Svg={leftIcon} className={cls.leftIcon} />
                    )}
                    {text}
                </p>
            )}
        </div>
    );
});
