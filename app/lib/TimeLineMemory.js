import React from 'react';
import s from './TimeLineStyles';

const TimelineEvent = () => {
  function mergeNotificationStyle(iconColor) {
    return iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } }
      : s.eventType;
  }

  function mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message;
    return contentStyle ? { ...messageStyle, ...contentStyle } : messageStyle;
  }

  function timeStyle() {
    return this.showAsCard() ? s.time : { ...s.time, color: '#303e49' };
  }

  function showAsCard() {
    const { container } = this.props;
    return container === 'card';
  }

  function containerStyleFunc() {
    const { style } = this.props;
    const containerStyle = { ...s.eventContainer, ...style };
    return showAsCard() ? { ...containerStyle, ...s.card } : containerStyle;
  }

  function iconStyleFunc(iconStyle) {
    return { ...s.materialIcons, iconStyle };
  }

  const { createdAt, title, contentStyle, iconStyle, buttons, icon, iconColor,
    container, cardHeaderStyle, ...otherProps } = this.props;

  return (
    <div style={s.event}>
      <div style={mergeNotificationStyle(iconColor)}>
        <span style={iconStyleFunc(iconStyle)}>{icon}</span>
      </div>
      <div {...otherProps} style={containerStyleFunc()}>
        <div style={s.eventContainerBefore} />
        <div style={container === 'card' ? { ...s.cardTitle, ...cardHeaderStyle } : {}}>
          <div style={timeStyle()}>{createdAt}</div>
          <div>{title}</div>
          <div style={s.actionButtons}>{buttons}</div>
        </div>
        {this.props.children &&
          <div style={mergeContentStyle(contentStyle)}>
            {this.props.children}
            <div style={s.messageAfter} />
          </div>}
      </div>
      <div style={s.eventAfter} />
    </div>
  );
};

export default TimelineEvent;
