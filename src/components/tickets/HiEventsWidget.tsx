import React, { useEffect } from 'react';

const HiEventsWidget = ({
                            eventId,
                            primaryColor = "#ACABAB",
                            primaryTextColor = "#000000",
                            secondaryColor = "#FB0454",
                            secondaryTextColor = "#ffffff",
                            backgroundColor = "#ffffff",
                            widgetType = "widget",
                            widgetVersion = "1.0",
                            locale = "es"
                        }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://boletos.posadev.org/widget.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div
            data-hievents-id={eventId}
            data-hievents-primary-color={primaryColor}
            data-hievents-primary-text-color={primaryTextColor}
            data-hievents-secondary-color={secondaryColor}
            data-hievents-secondary-text-color={secondaryTextColor}
            data-hievents-background-color={backgroundColor}
            data-hievents-widget-type={widgetType}
            data-hievents-widget-version={widgetVersion}
            data-hievents-locale={locale}
            className="hievents-widget w-full px-20"
        />
    )
}
export default HiEventsWidget;