import React, { Component } from 'react';
import classes from 'classnames';
import './style/index.less';
import { Icon } from '../index';
import { BasicProps } from '../@types/common';

interface ButtonProps extends BasicProps {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: 'large' | 'small';
    disabled?: boolean;
    circle?: boolean;
    plain?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: string;
}

class Button extends Component<ButtonProps> {
    protected static defaultProps = {
        prefixCls: 'coconut-button',
        size: '',
        disabled: false,
        type: 'primary',
        circle: false,
        plain: false,
        loading: false,
        className: []
    };

    public render() {
        const {
            prefixCls,
            loading,
            className,
            size,
            type,
            disabled,
            circle,
            plain,
            children,
            style,
            onClick
        } = this.props;
        const buttonClassName = classes({
            [prefixCls || '']: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-disable`]: disabled,
            [`${prefixCls}-circle`]: circle,
            [`${prefixCls}-plain`]: plain,
            [`${prefixCls}-loading`]: loading,
            [`${className?.join(' ')}`]: className
        });

        return (
            <button className={buttonClassName} style={style} onClick={(e) => {
                onClick?.(e)
            }}>
                {loading ? (
                    <Icon style={{ marginRight: '.5rem' }} className={['icon-load']} spin />
                ) : null}
                {children}
            </button>
        );
    }
}

export default Button;
