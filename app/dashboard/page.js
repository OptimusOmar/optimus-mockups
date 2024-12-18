"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  PiArrowCircleRightLight,
  PiArrowCircleLeftLight,
} from "react-icons/pi";
import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";

const CalendarDashboard = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  // New state for filters
  const [selectedCompany, setSelectedCompany] = useState(new Set([]));
  const [selectedUnitTypes, setSelectedUnitTypes] = useState(new Set([]));
  const [selectedDateFilters, setSelectedDateFilters] = useState(new Set([]));
  const [selectedDocumentTypes, setSelectedDocumentTypes] = useState(
    new Set([])
  );

  // Sample data for filters
  const companies = [
    { label: "Acme Corp", value: "acme" },
    { label: "Global Logistics", value: "global" },
    { label: "Fast Freight", value: "fast" },
    { label: "Speedy Shipping", value: "speedy" },
  ];

  const unitTypes = [
    { label: "Company", value: "company" },
    { label: "Driver", value: "driver" },
    { label: "Truck", value: "truck" },
    { label: "Trailer", value: "trailer" },
  ];

  const dateFilters = [
    { label: "Expired", value: "expired" },
    { label: "15 days", value: "15days" },
    { label: "30 days", value: "30days" },
  ];

  const documentTypes = [
    { label: "Driver's License", value: "license" },
    { label: "Vehicle Registration", value: "registration" },
    { label: "Insurance", value: "insurance" },
    { label: "Medical Certificate", value: "medical" },
  ];

  const documents = [
    {
      icon: "/pdfblue.png",
      unit: "Driver",
      unitName: "Omar Casey",
      documentName: "Drivers License",
      expiryDate: "2022-11-30",
    },
    {
      icon: "/pdfblue.png",
      unit: "Vehicle",
      unitName: "Truck 123",
      documentName: "Insurance Policy",
      expiryDate: "2022-11-15",
    },
    {
      icon: "/pdfblue.png",
      unit: "Driver",
      unitName: "Emma Thompson",
      documentName: "Medical Certificate",
      expiryDate: "2022-11-05",
    },
  ];

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const generateNotifications = (documents) => {
    const notifications = [];
    documents.forEach((doc) => {
      const expiryDate = new Date(doc.expiryDate);
      const thirtyDaysBefore = new Date(expiryDate);
      thirtyDaysBefore.setDate(expiryDate.getDate() - 30);
      const fifteenDaysBefore = new Date(expiryDate);
      fifteenDaysBefore.setDate(expiryDate.getDate() - 15);

      notifications.push({
        ...doc,
        date: formatDate(thirtyDaysBefore),
        color: "bg-yellow-200",
        docColor: "bg-yellow-200",
        message: "Expires in 30 days",
      });
      notifications.push({
        ...doc,
        date: formatDate(fifteenDaysBefore),
        color: "bg-orange-200",
        docColor: "bg-orange-200",
        message: "Expires in 15 days",
      });
      notifications.push({
        ...doc,
        date: formatDate(expiryDate),
        color: "bg-red-500",
        docColor: "bg-red-200",
        message: "Expires today",
      });
    });
    return notifications;
  };

  const allNotifications = generateNotifications(documents);

  const formatDay = (day) => day.toString().padStart(2, "0");

  const handleDateClick = (day) => {
    setSelectedDate(day === selectedDate ? null : day);
  };

  const notificationsForCalendar = allNotifications.reduce(
    (acc, notification) => {
      const day = notification.date.split("-")[2];
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push({ color: notification.color });
      return acc;
    },
    {}
  );

  const selectedDateNotifications = selectedDate
    ? allNotifications.filter(
        (notification) =>
          notification.date === `2022-11-${formatDay(selectedDate)}`
      )
    : allNotifications;

  const groupNotificationsByDate = (notifications) => {
    const grouped = notifications.reduce((acc, notification) => {
      const date = notification.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(notification);
      return acc;
    }, {});

    // Sort the dates
    return Object.keys(grouped)
      .sort((a, b) => new Date(a) - new Date(b))
      .reduce((acc, date) => {
        acc[date] = grouped[date];
        return acc;
      }, {});
  };

  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white flex text-foreground light">
      <div className="sidebar w-80 bg-blue-500 hidden md:block"></div>
      <div className="flex flex-col p-10 bg-gray-100 h-screen text-foreground w-full">
        <h1 className="text-xl font-bold text-blue-950">
          Notification Calendar
        </h1>
        <div className="bg-yellow-400 rounded-xl w-16 h-[6px] mt-3 mb-6"></div>
        <nav className="flex space-x-4 mb-4 light text-foreground">
          <Autocomplete
            label="All Companies"
            className="max-w-xs"
            variant="bordered"
            color="primary"
            size="sm"
            onSelectionChange={setSelectedCompany}
          >
            {companies.map((company) => (
              <AutocompleteItem
                key={company.value}
                value={company.value}
                className="text-black"
              >
                {company.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          <Select
            label="Unit Type"
            selectionMode="multiple"
            className="max-w-xs"
            variant="bordered"
            color="primary"
            size="sm"
            onSelectionChange={setSelectedUnitTypes}
          >
            {unitTypes.map((type) => (
              <SelectItem
                key={type.value}
                value={type.value}
                className="text-black"
              >
                {type.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Date Filter"
            selectionMode="multiple"
            className="max-w-xs"
            variant="bordered"
            color="primary"
            size="sm"
            onSelectionChange={setSelectedDateFilters}
          >
            {dateFilters.map((filter) => (
              <SelectItem
                key={filter.value}
                value={filter.value}
                className="text-black"
              >
                {filter.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Document Type"
            selectionMode="multiple"
            className="max-w-xs"
            variant="bordered"
            color="primary"
            size="sm"
            onSelectionChange={setSelectedDocumentTypes}
          >
            {documentTypes.map((type) => (
              <SelectItem
                key={type.value}
                value={type.value}
                className="text-black"
              >
                {type.label}
              </SelectItem>
            ))}
          </Select>
          {/* <Button color="primary" className="bg-sky-500">Export</Button> */}
        </nav>

        <div className="flex">
          <div className="w-4/6 bg-white rounded-lg shadow p-4 mr-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">November 2022</h2>
              <div className="flex space-x-2">
                <PiArrowCircleLeftLight size={30} />
                <PiArrowCircleRightLight size={30} />
              </div>
            </div>
            <div className="grid grid-cols-7 bg-sky-100 mb-4 rounded-xl py-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {monthDays.map((day) => (
                <div
                  key={day}
                  className={`h-28 border p-2 px-4 rounded-lg transition-all cursor-pointer
                    ${
                      day === selectedDate
                        ? "bg-blue-100 border-blue-500 border-2"
                        : "border-gray-200 hover:bg-slate-50"
                    }`}
                  onClick={() => handleDateClick(day)}
                >
                  <span className="text-sm font-semibold">
                    {formatDay(day)}
                  </span>
                  <div className="flex flex-wrap">
                    {notificationsForCalendar[formatDay(day)]?.map(
                      (notification, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full ${notification.color} m-0.5`}
                        ></div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/6 bg-white rounded-lg shadow p-4 h-[730px]">
            <h3 className="font-bold mb-4">
              {selectedDate
                ? `Notifications on November ${formatDay(selectedDate)}`
                : "All Notifications"}
            </h3>
            <div className="space-y-4 overflow-auto pr-2 py-2 h-[95%]">
              {selectedDate ? (
                selectedDateNotifications.length > 0 ? (
                  selectedDateNotifications.map((notification, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded ${notification.docColor}`}
                    >
                      <div className="flex items-center mb-1">
                        <Image
                          src={notification.icon}
                          width={24}
                          height={24}
                          alt=""
                          className="w-6 h-6 mr-2 rounded"
                        />
                        <span className="font-semibold">
                          {notification.documentName}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {notification.unit}: {notification.unitName}
                      </div>
                      <div className="text-xs text-gray-500">
                        {notification.message}
                      </div>
                      <div className="text-xs text-gray-500">
                        Expires: {notification.expiryDate}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No notifications on this date.</p>
                )
              ) : (
                Object.entries(groupNotificationsByDate(allNotifications)).map(
                  ([date, notifications]) => (
                    <div key={date} className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">
                        {formatDisplayDate(date)}
                      </h4>
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded ${notification.docColor} mb-2`}
                        >
                          <div className="flex items-center mb-1">
                            <Image
                              src={notification.icon}
                              width={24}
                              height={24}
                              alt=""
                              className="w-6 h-6 mr-2 rounded"
                            />
                            <span className="font-semibold">
                              {notification.documentName}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {notification.unit}: {notification.unitName}
                          </div>
                          <div className="text-xs text-gray-500">
                            {notification.message}
                          </div>
                          {/* <div className="text-xs text-gray-500">
                            Expires: {notification.expiryDate}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDashboard;
