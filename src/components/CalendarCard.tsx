import React from "react";
import { Calendar } from "lucide-react";

const CalendarCard = () => {
    const handleAddToCalendar = () => {
        const event = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://maps.app.goo.gl/8ayZ57xJf9Uvod6o7
DTSTART:20251206T180000Z
DTEND:20251206T230000Z
SUMMARY:Posadev 2025 🎉
DESCRIPTION:Únete al evento Posadev 2025 en Guadalajara.
LOCATION:https://maps.app.goo.gl/8ayZ57xJf9Uvod6o7
END:VEVENT
END:VCALENDAR
    `.trim();

        const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "posadev-2025.ics";
        link.click();
    };
    const handleGoogleCalendar = () => {
        // Hora UTC equivalente a 9:00 a.m. - 9:00 p.m. hora México (UTC−6)
        const start = "20251206T150000Z";
        const end = "20251207T030000Z";

        const text = encodeURIComponent("Posadev 2025 🎉");
        const details = encodeURIComponent("Únete al evento Posadev 2025 en Guadalajara.");
        const location = encodeURIComponent("https://maps.app.goo.gl/8ayZ57xJf9Uvod6o7");

        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
        window.open(url, "_blank");
    };

    return (
        <div
            onClick={handleGoogleCalendar}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale text-center cursor-pointer"
        >
            <Calendar className="w-8 h-8 text-posadev-brightPink mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-white font-semibold mb-2">Fecha</h3>
            <time
                className="text-posadev-lightPink"
                dateTime="2025-12-06"
                itemProp="startDate"
            >
                6 de diciembre 2025
            </time>
            <p className="text-xs text-posadev-lightPink/70 mt-2">(Haz clic para agregar al calendario)</p>
        </div>
    );
};

export default CalendarCard;
