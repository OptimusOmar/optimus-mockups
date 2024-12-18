import React, { useEffect, useRef } from "react";
import CalHeatmap from "cal-heatmap";
import Legend from "cal-heatmap/plugins/Legend";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import "cal-heatmap/cal-heatmap.css";

const data = [
  { date: "2023-01-01", value: 0 },
  { date: "2023-01-02", value: 1 },
  { date: "2023-01-03", value: 2 },
  { date: "2023-01-04", value: 3 },
  { date: "2023-01-05", value: 0 },
  { date: "2023-01-06", value: 1 },
  { date: "2023-01-07", value: 2 },
  { date: "2023-01-08", value: 3 },
  { date: "2023-01-09", value: 0 },
  { date: "2023-01-10", value: 1 },
  { date: "2023-01-11", value: 2 },
  { date: "2023-01-12", value: 3 },
  { date: "2023-01-13", value: 3 },
  { date: "2023-01-14", value: 1 },
  { date: "2023-01-15", value: 0 },
  { date: "2023-01-16", value: 2 },
  { date: "2023-01-17", value: 1 },
  { date: "2023-01-18", value: 3 },
  { date: "2023-01-19", value: 0 },
  { date: "2023-01-20", value: 0 },
  { date: "2023-01-21", value: 0 },
  { date: "2023-01-22", value: 0 },
  { date: "2023-01-23", value: 0 },
  { date: "2023-01-24", value: 0 },
  { date: "2023-01-25", value: 0 },
  { date: "2023-01-26", value: 0 },
  { date: "2023-01-27", value: 0 },
  { date: "2023-01-28", value: 0 },
  { date: "2023-01-29", value: 0 },
  { date: "2023-01-30", value: 0 },
  { date: "2023-01-31", value: 0 },
  { date: "2023-02-01", value: 1 },
  { date: "2023-02-02", value: 2 },
  { date: "2023-02-03", value: 3 },
  { date: "2023-02-04", value: 3 },
  { date: "2023-02-05", value: 2 },
  { date: "2023-02-06", value: 0 },
  { date: "2023-02-07", value: 2 },
  { date: "2023-02-08", value: 1 },
  { date: "2023-02-09", value: 3 },
  { date: "2023-02-10", value: 0 },
  { date: "2023-02-11", value: 2 },
  { date: "2023-02-12", value: 1 },
  { date: "2023-02-13", value: 0 },
  { date: "2023-02-14", value: 3 },
  { date: "2023-02-15", value: 1 },
  { date: "2023-02-16", value: 2 },
  { date: "2023-02-17", value: 3 },
  { date: "2023-02-18", value: 0 },
  { date: "2023-02-19", value: 2 },
  { date: "2023-02-20", value: 1 },
  { date: "2023-02-21", value: 3 },
  { date: "2023-02-22", value: 0 },
  { date: "2023-02-23", value: 1 },
  { date: "2023-02-24", value: 3 },
  { date: "2023-02-25", value: 2 },
  { date: "2023-02-26", value: 1 },
  { date: "2023-02-27", value: 0 },
  { date: "2023-02-28", value: 2 },
  { date: "2023-03-01", value: 1 },
  { date: "2023-03-02", value: 3 },
  { date: "2023-03-03", value: 0 },
  { date: "2023-03-04", value: 2 },
  { date: "2023-03-05", value: 1 },
  { date: "2023-03-06", value: 3 },
  { date: "2023-03-07", value: 0 },
  { date: "2023-03-08", value: 2 },
  { date: "2023-03-09", value: 1 },
  { date: "2023-03-10", value: 3 },
  { date: "2023-03-11", value: 0 },
  { date: "2023-03-12", value: 0 },
  { date: "2023-03-13", value: 0 },
  { date: "2023-03-14", value: 0 },
  { date: "2023-03-15", value: 0 },
  { date: "2023-03-16", value: 0 },
  { date: "2023-03-17", value: 0 },
  { date: "2023-03-18", value: 0 },
  { date: "2023-03-19", value: 0 },
  { date: "2023-03-20", value: 0 },
  { date: "2023-03-21", value: 0 },
  { date: "2023-03-22", value: 0 },
  { date: "2023-03-23", value: 1 },
  { date: "2023-03-24", value: 3 },
  { date: "2023-03-25", value: 2 },
  { date: "2023-03-26", value: 1 },
  { date: "2023-03-27", value: 0 },
  { date: "2023-03-28", value: 3 },
  { date: "2023-03-29", value: 2 },
  { date: "2023-03-30", value: 1 },
  { date: "2023-03-31", value: 0 },
];

const CalendarHeatmap = ({ range }) => {
  const heatmapRef = useRef(null);
  const isPainted = useRef(false); // Track if heatmap has already painted

  useEffect(() => {
    if (heatmapRef.current && !isPainted.current) {
      // Ensure it hasn't painted before
      const cal = new CalHeatmap();

      cal.paint(
        {
          data: { source: data, x: "date", y: "value" },
          itemSelector: heatmapRef.current, // Correct initialization
          date: { start: new Date("2023-01-01") },
          range: range, // Change range if needed
          domain: {
            type: "month",
          },
          subDomain: { type: "day", radius: 2, width: 20, height: 20 },
          scale: {
            color: {
              type: "quantize",
              scheme: "Blues",
              domain: [0, 1, 2, 3],
            },
          },
        },
        [
          [
            Legend,
            {
              label: "Number of Documents Missing",
            },
          ],
        ]
      );

      isPainted.current = true; // Mark that the heatmap has painted

      // Clean-up to avoid memory leaks
      return () => cal.destroy();
    }
  }, []); // Empty dependency array for single initialization

  return (
    <div>
      <div ref={heatmapRef} /> {/* Reference for Cal-Heatmap */}
    </div>
  );
};

export default CalendarHeatmap;
